/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { DataGrid } from '@mui/x-data-grid';
import { read, utils } from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import { StyledStickyBox, StyledTitle } from '../../components/styles';
import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import {
  ColumnHeader,
  FileType,
  useColumnHeaderListLazyQuery,
  useImportHistoryLazyQuery,
  useUploadDocumentMutation,
} from '../../generated-types';
import { FileHandlingError } from '../../types';

import { arrayify, DataSet, Row } from './utils';
import { StyledFormControl, StyledTextField } from './styles';
import ErrorDialog from './ErrorDialog';

function ImportAccount() {
  const [
    getImportHistory,
    { loading: importHistoryLoading, data: importHistoryData },
  ] = useImportHistoryLazyQuery();

  const { thoiGian, tenGV } = useMemo(() => {
    return {
      thoiGian: importHistoryData?.importHistory?.thoiGian,
      tenGV: importHistoryData?.importHistory?.taiKhoan?.giaoVien.tenGV,
    };
  }, [
    importHistoryData?.importHistory?.taiKhoan?.giaoVien.tenGV,
    importHistoryData?.importHistory?.thoiGian,
  ]);

  useEffect(() => {
    getImportHistory({
      variables: {
        fileType: FileType.TaiKhoan,
      },
    });
  }, [getImportHistory]);

  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
  const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
  const [current, setCurrent] = useState<string>(''); // selected sheet

  const filePondRef = useRef<FilePond | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [start, setStart] = useState('1');

  const [getColumnHeaderList, { data: columnHeaderListData }] =
    useColumnHeaderListLazyQuery();

  useEffect(() => {
    getColumnHeaderList({
      variables: {
        fileType: FileType.TaiKhoan,
      },
    });
  }, [getColumnHeaderList]);

  const defaultHeaders = useMemo(
    () => columnHeaderListData?.columnHeaderList || [],
    [columnHeaderListData?.columnHeaderList]
  );

  const [columnHeaders, setColumnHeaders] = useState<ColumnHeader[]>([]);

  useEffect(() => {
    setColumnHeaders(defaultHeaders);
  }, [defaultHeaders]);

  const mappedHeadersPayload = useMemo(() => {
    if (!workBook[current]) {
      return [];
    }

    const sheetHeaders = utils.sheet_to_json(workBook[current], {
      header: 1,
      range: Number(start) - 1,
    })[0] as string[];

    const mappedHeaders = sheetHeaders;
    const cnt = new Array(sheetHeaders.length).fill(0);
    mappedHeaders.forEach((header) => {
      const findIndex = mappedHeaders.findIndex((item) => item === header);
      cnt[findIndex] += 1;
    });

    cnt.forEach((count, index) => {
      let tmpCount = count;
      while (tmpCount >= 2) {
        mappedHeaders[index + tmpCount - 1] = `${mappedHeaders[index]}_${
          tmpCount - 1
        }`;
        tmpCount -= 1;
      }
    });

    const mappedHeadersPayload = mappedHeaders.map((header, index) => {
      const originalHeader = header.split('_')[0];
      const originalIndex = mappedHeaders.findIndex(
        (item) => item === originalHeader
      );

      return {
        key: defaultHeaders[originalIndex]?.key,
        index,
        value: header,
      };
    });

    return mappedHeadersPayload;
  }, [current, defaultHeaders, start, workBook]);

  const handleChangeHeader = useCallback(
    (index: number) => (event: SelectChangeEvent) => {
      const targetKey = event?.target.value;
      const selectedHeader = mappedHeadersPayload[index];

      // A key can only be chosen for one column
      setColumnHeaders((prevSelectedHeaders) => [
        ...prevSelectedHeaders.filter(
          (prevSelectedHeader) =>
            prevSelectedHeader.index !== index &&
            prevSelectedHeader.key !== targetKey
        ),
        {
          key: targetKey || '',
          value: selectedHeader?.value || '',
          index,
        },
      ]);
    },
    [mappedHeadersPayload]
  );

  const { dataRows, dataColumns } = useMemo(() => {
    const sheet = workBook[current];

    if (!sheet) {
      return {
        dataRows: [],
        dataColumns: [],
      };
    }
    const endCell = Object.keys(sheet)[Object.keys(sheet).length - 2];

    return {
      dataRows: utils
        .sheet_to_json<Row>(sheet, { header: 1 })
        .map((r, id) => ({ ...r, id })),
      dataColumns: Array.from(
        {
          length: utils.decode_range(`A1:${endCell}`).e.c + 1,
        },
        (_, i) => ({
          field: String(i),
          renderHeader: () => {
            return (
              <StyledFormControl>
                <Select
                  variant="standard"
                  disableUnderline
                  value={
                    columnHeaders.find((column) => column.index === i)?.key
                  }
                  onChange={handleChangeHeader(i)}
                >
                  {defaultHeaders.map((columnHeader) => (
                    <MenuItem value={columnHeader.key}>
                      {columnHeader.key}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            );
          },
          sortable: false,
          hideSortIcons: true,
          filterable: false,
          disableColumnMenu: true,
          minWidth: 150,
        })
      ),
    };
  }, [columnHeaders, current, defaultHeaders, handleChangeHeader, workBook]);

  function selectSheet(name: string) {
    /* update workbook cache in case the current worksheet was changed */
    workBook[current] = utils.aoa_to_sheet(arrayify(dataRows));
    setCurrent(name);
  }

  /* this method handles refreshing the state with new workbook data */
  async function handleAB(file: ArrayBuffer): Promise<void> {
    /* read file data */
    const data = read(file);

    /* update workbook state */
    setWorkBook(data.Sheets);
    setSheets(data.SheetNames);

    const name = data.SheetNames[0];
    setCurrent(name);
  }

  /* called when file input element is used to select a new file */
  async function handleFile(file: ArrayBuffer): Promise<void> {
    if (file) await handleAB(file);
  }

  const [openHelpDialog, setOpenHelpDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [fileError, setFileError] = useState<FileHandlingError>();

  const [uploadDocument, { loading: uploadDocumentLoading }] =
    useUploadDocumentMutation({
      onCompleted: () => {
        toast.success('Cập nhật thông tin thành công');
        setStart('1');
        if (filePondRef.current) {
          filePondRef.current.removeFile();
        }
        getImportHistory({
          variables: {
            fileType: FileType.TaiKhoan,
          },
          fetchPolicy: 'no-cache',
        });
      },
      onError: (error) => {
        const fileError = error
          .graphQLErrors[0] as unknown as FileHandlingError;
        toast.error(fileError.message);
        setFileError(fileError);
        setOpenErrorDialog(true);
      },
    });

  const handleUploadDocument = useCallback(
    async (event) => {
      event.preventDefault();

      const input = {
        type: FileType.TaiKhoan,
      };

      const payloadHeaders = columnHeaders.map((item) => {
        const value =
          mappedHeadersPayload.find((header) => header?.index === item.index)
            ?.value || '';

        return {
          ...item,
          value,
        };
      });

      if (file) {
        await uploadDocument({
          variables: {
            file,
            input,
            config: {
              start: Number(start) - 1,
              sheet: {
                value: current,
                index: sheets.findIndex((sheetName) => sheetName === current),
              },
              headers: payloadHeaders,
            },
          },
        });
      }
    },
    [
      columnHeaders,
      current,
      file,
      mappedHeadersPayload,
      sheets,
      start,
      uploadDocument,
    ]
  );

  return (
    <>
      <ToastContainer />
      <StyledStickyBox>
        <StyledTitle variant="h1">Import tài khoản</StyledTitle>
      </StyledStickyBox>
      <Box component="form">
        {tenGV && (
          <AsyncDataRenderer
            loading={importHistoryLoading}
            data={importHistoryData}
          >
            <Typography sx={{ fontStyle: 'italic', marginTop: '1rem' }}>
              Cập nhật lần cuối bởi <b>{tenGV}</b> vào{' '}
              {thoiGian && format(new Date(thoiGian), 'dd/MM/yyyy HH:mm:ss')}
            </Typography>
          </AsyncDataRenderer>
        )}
        <Typography sx={{ marginTop: '0.5rem' }} variant="h6">
          Cập nhật danh sách tài khoản
        </Typography>
        <Box mt={3}>
          <FilePond
            ref={filePondRef}
            onupdatefiles={async (files) => {
              if (files.length > 0) {
                await handleFile(await files[0].file?.arrayBuffer());
                setFile(files[0].file as File);
              }
            }}
            onremovefile={() => {
              setSheets([]);
              setCurrent('');
              setFile(null);
            }}
            name="file"
            labelIdle="Kéo thả hoặc đính kèm file tại đây"
          />
        </Box>
        {sheets.length > 0 && (
          <>
            <Box sx={{ marginBottom: '1rem' }}>
              <StyledFormControl>
                <InputLabel id="sheet-select-label">Chọn sheet</InputLabel>
                <Select
                  labelId="sheet-select-label"
                  label="Chọn sheet"
                  value={current}
                  onChange={async (e) => {
                    selectSheet(sheets[+(e.target.value as string)]);
                  }}
                >
                  {sheets.map((item) => (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
              <StyledTextField
                type="number"
                variant="outlined"
                label="Hàng tiêu đề"
                placeholder="Nhập hàng tiêu đề..."
                value={start}
                onChange={(event) => {
                  setStart(event.target.value);
                }}
                InputProps={{
                  inputProps: {
                    min: 1,
                  },
                }}
              />
            </Box>
            <Box>
              <Box display="flex" alignItems="center">
                <Typography variant="h6" component="span">
                  Xem trước
                </Typography>
                <IconButton
                  sx={{ marginLeft: '0.25rem' }}
                  size="large"
                  color="inherit"
                  aria-label="help"
                  component="label"
                  onClick={() => setOpenHelpDialog(true)}
                >
                  <HelpOutlineOutlinedIcon fontSize="inherit" />
                </IconButton>
              </Box>
              <Box
                sx={{ width: '100%', height: 600, backgroundColor: 'white' }}
              >
                <DataGrid
                  columns={dataColumns}
                  rows={dataRows.slice(Number(start) - 1)}
                />
              </Box>
            </Box>
          </>
        )}
        {current.length > 0 && (
          <Box mt={2} display="flex" justifyContent="flex-end">
            <Button
              type="submit"
              variant="contained"
              onClick={handleUploadDocument}
            >
              Xác nhận
            </Button>
          </Box>
        )}
      </Box>
      <Dialog open={openHelpDialog} onClose={() => setOpenHelpDialog(false)}>
        <DialogTitle display="flex" alignItems="center">
          <HelpOutlineOutlinedIcon fontSize="large" />{' '}
          <Typography
            sx={{ marginLeft: '0.25rem' }}
            variant="h6"
            component="span"
          >
            Hướng dẫn sử dụng
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ marginLeft: '1.5rem' }}>
          <List
            sx={{
              listStyleType: 'number',
              '& .MuiListItem-root': {
                display: 'list-item',
              },
            }}
          >
            <ListItem>
              <ListItemText>
                Bản xem trước sẽ được hiển thị bắt đầu từ giá trị của Hàng tiêu
                đề
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Các cột sẽ được gắn các key mặc định tương ứng với header của
                từng cột dựa trên file mẫu do người dùng cung cấp cho hệ thống.
                <br />
                <b>VD</b>: Đối với cột có tên "Họ và tên" thì sẽ để key tương
                ứng là HO_TEN
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Người dùng cần kiểm tra các key đã ở đúng tiêu đề (header) tương
                ứng. Mọi sự nhầm lẫn sẽ gây ảnh hưởng đến dữ liệu hệ thống và
                không thể khôi phục được
              </ListItemText>
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenHelpDialog(false)}>Đóng</Button>
        </DialogActions>
      </Dialog>
      {openErrorDialog && (
        <ErrorDialog
          openErrorDialog={openErrorDialog}
          onClose={() => setOpenErrorDialog(false)}
          error={fileError as FileHandlingError}
        />
      )}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={uploadDocumentLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ImportAccount;
