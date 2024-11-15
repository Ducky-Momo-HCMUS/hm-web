/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  CircularProgress,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from '@mui/material';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import HistoryIcon from '@mui/icons-material/History';
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
import { read, Sheet2JSONOpts, utils } from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import {
  ColumnHeader,
  FileType,
  ImportStatusHistory,
  useClassroomListLazyQuery,
  useColumnHeaderListLazyQuery,
  useCourseListQuery,
  useImportHistoryLazyQuery,
  useImportStatusHistoryLazyQuery,
  useTermListQuery,
  useUploadDocumentMutation,
} from '../../../generated-types';
import { MenuProps } from '../../../constants';
import { StyledAutocompleteBox } from '../styles';
import { FileHandlingError } from '../../../types';

import { StyledFormControl, StyledTextField } from './styles';
import {
  arrayify,
  DataSet,
  groupTermsByYear,
  TYPES,
  unmergeSheet,
} from './utils';
import HelpDialog from './HelpDialog';
import ErrorDialog from './ErrorDialog';
import HistoryDialog from './HistoryDialog';

interface State {
  year: string;
  type: string;
  term: string;
  subject: string;
  class: string;
  start: string;
}

function ImportFile() {
  const [values, setValues] = useState<State>({
    type: TYPES[0].label,
    year: '',
    term: '',
    subject: '',
    class: '',
    start: '1',
  });

  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
  const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
  const [current, setCurrent] = useState<string>(''); // selected sheet

  const filePondRef = useRef<FilePond | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const fileType = useMemo(
    () =>
      TYPES.find((item) => item.label === values.type)?.value ||
      FileType.DanhSachGvcn,
    [values.type]
  );

  const [getColumnHeaderList, { data: columnHeaderListData }] =
    useColumnHeaderListLazyQuery();

  useEffect(() => {
    getColumnHeaderList({
      variables: {
        fileType,
      },
    });
  }, [fileType, getColumnHeaderList]);

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

    const parserConfig: Sheet2JSONOpts = {
      header: 1,
      blankrows: true,
      raw: true,
      skipHidden: false,
    };
    const aoa: any[][] = utils.sheet_to_json(workBook[current], {
      ...parserConfig,
    });
    unmergeSheet(aoa, workBook[current]['!merges']);
    const sheetHeaders = aoa[Number(values.start) - 1];

    const mappedHeaders = sheetHeaders;

    const mappedHeadersPayload =
      mappedHeaders?.map((header, index) => {
        return {
          key: defaultHeaders.find(
            (defaultHeader) => defaultHeader.index === index
          )?.key,
          index,
          value: header,
        };
      }) || [];

    return mappedHeadersPayload;
  }, [current, defaultHeaders, values.start, workBook]);

  const handleChangeHeader = useCallback(
    (index: number) => (event: SelectChangeEvent) => {
      const targetKey = event?.target.value;
      const selectedHeader = mappedHeadersPayload.find(
        (header) => header.index === index
      );

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

    const parserConfig: Sheet2JSONOpts = {
      header: 1,
      blankrows: true,
      raw: true,
      skipHidden: false,
    };
    const aoa: any[][] = utils.sheet_to_json(sheet, {
      ...parserConfig,
    });
    unmergeSheet(aoa, sheet['!merges']);

    return {
      dataRows: aoa.map((r, id) => ({ ...r, id })),
      dataColumns: Array.from(
        {
          length: utils.decode_range(sheet['!ref'] as string).e.c + 1,
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
                    columnHeaders.find((column) => column.index === i)?.key ||
                    ''
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

  /* called when sheet dropdown is changed */
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

  const [
    getImportHistory,
    { loading: importHistoryLoading, data: importHistoryData },
  ] = useImportHistoryLazyQuery();

  const [openHelpDialog, setOpenHelpDialog] = useState(false);
  const [openErrorDialog, setOpenErrorDialog] = useState(false);
  const [fileError, setFileError] = useState<FileHandlingError>();

  const [uploadDocument, { loading: uploadDocumentLoading }] =
    useUploadDocumentMutation({
      onCompleted: () => {
        toast.info('File đang được xử lý.');
        setValues((v) => ({
          ...v,
          start: '1',
        }));
        if (filePondRef.current) {
          filePondRef.current.removeFile();
        }
        getImportHistory({
          variables: {
            fileType,
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
        fileType,
      },
      fetchPolicy: 'no-cache',
    });
  }, [fileType, getImportHistory]);

  const { loading: allTermsLoading, data: allTermsData } = useTermListQuery({});

  const termsData = useMemo(
    () => allTermsData?.termList || [],
    [allTermsData?.termList]
  );

  const mappedData = useMemo(() => groupTermsByYear(termsData), [termsData]);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      if (prop === 'type' && filePondRef.current) {
        filePondRef.current.removeFile();
      }

      if (prop === 'year') {
        setValues((v) => ({
          ...v,
          [prop]: event.target.value,
          term: mappedData[event.target.value][0].hocKy.toString(),
        }));
      } else {
        setValues((v) => ({ ...v, [prop]: event.target.value }));
      }
    },
    [mappedData]
  );

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { terms } = useMemo(() => {
    const termsByYear = mappedData[values.year || years[years.length - 1]]?.map(
      (data) => ({
        maHK: data.maHK,
        hocKy: data.hocKy,
      })
    );
    return {
      terms: termsByYear || [],
    };
  }, [mappedData, values.year, years]);

  const { initialYear, initialTerm } = useMemo(() => {
    const termsByYear = mappedData[years[years.length - 1]]?.map(
      (data) => data.maHK
    );
    const maHK = termsByYear?.[termsByYear.length - 1] || '';
    return {
      initialYear: years[years.length - 1],
      initialTerm:
        terms.find((term) => term.maHK === maHK)?.hocKy.toString() || '',
    };
  }, [mappedData, terms, years]);

  const { loading: courseListLoading, data: courseListData } =
    useCourseListQuery({
      variables: {
        page: 1,
        size: 1000,
      },
      fetchPolicy: 'no-cache',
    });
  const courseList = useMemo(
    () => courseListData?.courseList.data || [],
    [courseListData?.courseList.data]
  );

  const [
    getClassroomList,
    { loading: classroomListLoading, data: classroomListData },
  ] = useClassroomListLazyQuery();
  const classroomList = useMemo(
    () => classroomListData?.classroomList || [],
    [classroomListData?.classroomList]
  );

  const { selectedTerm, selectedYear, selectedClass, selectedSubject } =
    useMemo(
      () => ({
        selectedTerm: values.term ? Number(values.term) : Number(initialTerm),
        selectedYear: values.year ? Number(values.year) : Number(initialYear),
        selectedClass: values.class || classroomList[0]?.tenLopHP,
        selectedSubject: values.subject || courseList[0]?.maMH,
      }),
      [
        classroomList,
        courseList,
        initialTerm,
        initialYear,
        values.class,
        values.subject,
        values.term,
        values.year,
      ]
    );

  useEffect(() => {
    if (values.type === 'Bảng điểm lớp học phần') {
      const termId = mappedData[selectedYear].find(
        (item) => item.hocKy === selectedTerm
      )?.maHK;

      if (termId) {
        getClassroomList({
          variables: {
            termId,
            subjectId: selectedSubject,
          },
          fetchPolicy: 'no-cache',
        });
      }
    }
  }, [
    courseList,
    getClassroomList,
    initialTerm,
    mappedData,
    selectedSubject,
    selectedTerm,
    selectedYear,
    values.subject,
    values.term,
    values.type,
  ]);

  const handleUploadDocument = useCallback(
    async (event) => {
      event.preventDefault();
      const type = TYPES.find((item) => item.label === values.type)?.value;
      const input = Object.assign(
        {},
        type && { type },
        selectedYear && { namHoc: selectedYear },
        selectedTerm && { hocKy: selectedTerm },
        values.subject && { maMH: values.subject },
        selectedClass && { tenLopHP: selectedClass }
      );

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
              start: Number(values.start) - 1,
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
      selectedClass,
      selectedTerm,
      selectedYear,
      sheets,
      uploadDocument,
      values.start,
      values.subject,
      values.type,
    ]
  );

  const [
    getImportStatusHistory,
    { loading: importStatusHistoryLoading, data: importStatusHistoryData },
  ] = useImportStatusHistoryLazyQuery();

  const [openHistoryDialog, setOpenHistoryDialog] = useState(false);

  return (
    <>
      <ToastContainer />
      <StyledStickyBox>
        <StyledTitle variant="h1">Nhập thông tin</StyledTitle>
        <Box display="flex" alignItems="center">
          <StyledAutocompleteBox>
            <Autocomplete
              sx={{ width: 300 }}
              disablePortal
              disableClearable
              autoHighlight
              options={TYPES}
              onChange={(event, newValue) => {
                setValues((v) => ({
                  ...v,
                  type: newValue?.label || '',
                }));
              }}
              value={TYPES.find((type) => type.label === values.type)}
              getOptionLabel={(option) => option.label}
              renderInput={(params) => (
                <TextField {...params} label="Loại thông tin" />
              )}
            />
          </StyledAutocompleteBox>
          {TYPES.findIndex((item) => item.label === values.type) >= 7 && (
            <>
              <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
                <StyledFormControl>
                  <InputLabel id="year-select-label">Năm học</InputLabel>
                  <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={values.year || initialYear}
                    label="Năm học"
                    onChange={handleChange('year')}
                    MenuProps={MenuProps}
                  >
                    {years.map((item) => (
                      <MenuItem value={item.toString()}>
                        {item} - {Number(item) + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
                <StyledFormControl>
                  <InputLabel id="term-select-label">Học kỳ</InputLabel>
                  <Select
                    labelId="term-select-label"
                    id="term-select"
                    value={values.term || initialTerm}
                    label="Học kỳ"
                    onChange={handleChange('term')}
                    MenuProps={MenuProps}
                  >
                    {terms.map((item) => (
                      <MenuItem key={item.maHK} value={item.hocKy}>
                        {item.hocKy}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </AsyncDataRenderer>
            </>
          )}
          {values.type === 'Bảng điểm lớp học phần' && (
            <>
              <AsyncDataRenderer loading={courseListLoading} data={courseList}>
                <StyledAutocompleteBox>
                  <Autocomplete
                    sx={{ width: 300 }}
                    disablePortal
                    disableClearable
                    autoHighlight
                    options={courseList}
                    onChange={(event, newValue) => {
                      setValues((v) => ({
                        ...v,
                        subject: newValue?.maMH || '',
                      }));
                    }}
                    value={courseList.find(
                      (course) => course.maMH === selectedSubject
                    )}
                    getOptionLabel={(option) => option.tenMH}
                    renderInput={(params) => (
                      <TextField {...params} label="Môn học" />
                    )}
                  />
                </StyledAutocompleteBox>
              </AsyncDataRenderer>
              <AsyncDataRenderer
                loading={classroomListLoading}
                data={classroomListData}
              >
                <StyledAutocompleteBox>
                  <Autocomplete
                    sx={{ width: 200 }}
                    disablePortal
                    disableClearable
                    autoHighlight
                    options={classroomList}
                    onChange={(event, newValue) => {
                      setValues((v) => ({
                        ...v,
                        class: String(newValue?.tenLopHP),
                      }));
                    }}
                    value={classroomList.find(
                      (classroom) => classroom.tenLopHP === selectedClass
                    )}
                    getOptionLabel={(option) => option.tenLopHP}
                    renderInput={(params) => (
                      <TextField {...params} label="Lớp học phần" />
                    )}
                  />
                </StyledAutocompleteBox>
              </AsyncDataRenderer>
            </>
          )}
        </Box>
      </StyledStickyBox>
      <Box component="form">
        {values.type.length > 0 && (
          <>
            {tenGV && (
              <AsyncDataRenderer
                loading={importHistoryLoading}
                data={importHistoryData}
              >
                <Typography sx={{ fontStyle: 'italic', marginTop: '1rem' }}>
                  Cập nhật lần cuối bởi <b>{tenGV}</b> vào{' '}
                  {thoiGian &&
                    format(new Date(thoiGian), 'dd/MM/yyyy HH:mm:ss')}
                </Typography>
              </AsyncDataRenderer>
            )}
            <Box
              sx={{ marginTop: '0.5rem' }}
              display="flex"
              alignItems="center"
            >
              <Typography variant="h6" component="span">
                Cập nhật{' '}
                {TYPES.find(
                  (item) => item.label === values.type
                )?.label.toLowerCase()}
              </Typography>
              <IconButton
                onClick={() => {
                  getImportHistory({
                    variables: {
                      fileType,
                    },
                    fetchPolicy: 'no-cache',
                  });
                  getImportStatusHistory({
                    variables: {
                      fileType,
                    },
                    fetchPolicy: 'no-cache',
                  });
                  setOpenHistoryDialog(true);
                }}
              >
                <HistoryIcon />
              </IconButton>
            </Box>

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
          </>
        )}
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
                    selectSheet(e.target.value);
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
                value={values.start}
                onChange={(event) => {
                  setValues((v) => ({
                    ...v,
                    start: event.target.value,
                  }));
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
                  rows={dataRows.slice(Number(values.start) - 1)}
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
      <HelpDialog
        openHelpDialog={openHelpDialog}
        onClose={() => setOpenHelpDialog(false)}
      />
      {openErrorDialog && (
        <ErrorDialog
          openErrorDialog={openErrorDialog}
          onClose={() => setOpenErrorDialog(false)}
          error={fileError as FileHandlingError}
        />
      )}
      {openHistoryDialog && (
        <HistoryDialog
          loading={importStatusHistoryLoading}
          title={
            TYPES.find(
              (type) => type.value === values.type
            )?.label.toLowerCase() || ''
          }
          openHistoryDialog={openHistoryDialog}
          onClose={() => setOpenHistoryDialog(false)}
          historyList={
            (importStatusHistoryData?.importStatusHistory as ImportStatusHistory[]) ||
            []
          }
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

export default ImportFile;
