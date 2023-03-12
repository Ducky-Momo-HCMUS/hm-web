/* eslint-disable prefer-object-spread */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, {
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
} from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { read, utils } from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import { format } from 'date-fns';
import 'react-toastify/dist/ReactToastify.css';

import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import ErrorMessage from '../../../components/ErrorMessage';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import {
  FileType,
  useClassroomListLazyQuery,
  useCourseListQuery,
  useImportHistoryLazyQuery,
  useTermListQuery,
  useUploadDocumentMutation,
} from '../../../generated-types';

import { StyledFormControl } from './styles';
import {
  arrayify,
  DataSet,
  getRowsCols,
  groupTermsByYear,
  MenuProps,
  Row,
  TYPES,
} from './utils';

interface State {
  year: string;
  type: string;
  term: string;
  subject: string;
  class: number;
}

function ImportFile() {
  const [values, setValues] = useState<State>({
    type: TYPES[0].label,
    year: '',
    term: '',
    subject: '',
    class: 0,
  });

  const [error, setError] = useState<string>('');

  const [rows, setRows] = useState<Row[]>([]); // data rows
  const [columns, setColumns] = useState<GridColDef[]>([]); // columns
  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
  const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
  const [current, setCurrent] = useState<string>(''); // selected sheet

  const filePondRef = useRef<FilePond | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      if (prop === 'type' && filePondRef.current) {
        filePondRef.current.removeFile();
      }
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  /* called when sheet dropdown is changed */
  function selectSheet(name: string) {
    /* update workbook cache in case the current worksheet was changed */
    workBook[current] = utils.aoa_to_sheet(arrayify(rows));

    /* get data for desired sheet and update state */
    const { rows: newRows, columns: newColumns } = getRowsCols(workBook, name);
    setRows(newRows);
    setColumns(newColumns);
    setCurrent(name);
  }

  /* this method handles refreshing the state with new workbook data */
  async function handleAB(file: ArrayBuffer): Promise<void> {
    /* read file data */
    const data = read(file);

    /* update workbook state */
    setWorkBook(data.Sheets);
    setSheets(data.SheetNames);

    /* select the first worksheet */
    const name = data.SheetNames[0];
    const { rows: newRows, columns: newColumns } = getRowsCols(
      data.Sheets,
      name
    );
    setRows(newRows);
    setColumns(newColumns);
    setCurrent(name);
  }

  /* called when file input element is used to select a new file */
  async function handleFile(file: ArrayBuffer): Promise<void> {
    if (file) await handleAB(file);
  }

  const [uploadDocument, { loading: uploadDocumentLoading }] =
    useUploadDocumentMutation({
      onCompleted: () => {
        toast.success('Cập nhật thông tin thành công');
        setValues((v) => ({
          ...v,
          type: TYPES[0].label,
        }));
        if (filePondRef.current) {
          filePondRef.current.removeFile();
        }
      },
      onError: (error) => {
        // TODO: lấy error từ BE
        toast.error('Đã có  lỗi xảy ra');
      },
    });

  const handleUploadDocument = useCallback(
    async (event) => {
      event.preventDefault();
      const type = TYPES.find((item) => item.label === values.type)?.endpoint;
      const input = Object.assign(
        {},
        type && { type },
        values.year && { namHoc: values.year },
        values.term && { hocKy: values.term },
        values.subject && { maMH: values.subject },
        values.class && { tenLopHP: values.class }
      );
      if (file) {
        await uploadDocument({
          variables: {
            file,
            input,
          },
        });
      }
    },
    [
      file,
      uploadDocument,
      values.class,
      values.subject,
      values.term,
      values.type,
      values.year,
    ]
  );

  const [
    getImportHistory,
    { loading: importHistoryLoading, data: importHistoryData },
  ] = useImportHistoryLazyQuery();

  const { thoiGian, tenGV } = useMemo(() => {
    return {
      thoiGian: importHistoryData?.importHistory.thoiGian,
      tenGV: importHistoryData?.importHistory.taiKhoan?.giaoVien.tenGV,
    };
  }, [
    importHistoryData?.importHistory.taiKhoan?.giaoVien.tenGV,
    importHistoryData?.importHistory.thoiGian,
  ]);

  useEffect(() => {
    const fileType =
      TYPES.find((item) => item.label === values.type)?.value ||
      FileType.DanhSachGvcn;
    getImportHistory({
      variables: {
        fileType,
      },
    });
  }, [getImportHistory, values.type]);

  const { loading: allTermsLoading, data: allTermsData } = useTermListQuery({});

  const termsData = useMemo(
    () => allTermsData?.termList || [],
    [allTermsData?.termList]
  );

  const mappedData = useMemo(() => groupTermsByYear(termsData), [termsData]);

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
    const termsByYear = mappedData[years[years.length - 1]]?.map((data) =>
      data.maHK.toString()
    );
    return {
      initialYear: years[years.length - 1],
      initialTerm: termsByYear?.[termsByYear.length - 1] || '',
    };
  }, [mappedData, years]);

  const { loading: courseListLoading, data: courseListData } =
    useCourseListQuery({
      variables: {
        page: 1,
        size: 1000,
      },
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

  useEffect(() => {
    if (values.type === 'Bảng điểm lớp học phần') {
      getClassroomList({
        variables: {
          termId: Number(values.term) || Number(initialTerm),
          courseId: values.subject || courseList[0].maMH,
        },
      });
    }
  }, [
    courseList,
    getClassroomList,
    initialTerm,
    values.subject,
    values.term,
    values.type,
  ]);

  return (
    <>
      <ToastContainer />
      <StyledStickyBox>
        <StyledTitle variant="h1">Nhập thông tin</StyledTitle>
        <StyledFormControl sx={{ minWidth: '18.5rem' }}>
          <InputLabel id="type-select-label">Loại thông tin</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={values.type}
            label="Loại thông tin"
            onChange={handleChange('type')}
            MenuProps={MenuProps}
          >
            {TYPES.map((item) => (
              <MenuItem value={item.label}>{item.label}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        {TYPES.findIndex((item) => item.label === values.type) >= 4 && (
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
                    <MenuItem key={item.maHK} value={item.maHK}>
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
              <StyledFormControl sx={{ minWidth: '13rem' }}>
                <InputLabel id="subject-select-label">Môn học</InputLabel>
                <Select
                  labelId="subject-select-label"
                  id="subject-select"
                  value={values.subject || courseList[0].maMH}
                  label="Môn học"
                  onChange={handleChange('subject')}
                  MenuProps={MenuProps}
                >
                  {courseList.map((item) => (
                    <MenuItem value={item.maMH}>{item.maMH}</MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            </AsyncDataRenderer>
            <AsyncDataRenderer
              loading={classroomListLoading}
              data={classroomListData}
            >
              <StyledFormControl sx={{ minWidth: '9rem' }}>
                <InputLabel id="class-select-label">Lớp học phần</InputLabel>
                <Select
                  labelId="class-select-label"
                  id="class-select"
                  value={String(values.class) || String(classroomList[0].maHP)}
                  label="Lớp học phần"
                  onChange={handleChange('class')}
                  MenuProps={MenuProps}
                >
                  {classroomList.map((item) => (
                    <MenuItem value={item.maHP}>{item.tenLopHP}</MenuItem>
                  ))}
                </Select>
              </StyledFormControl>
            </AsyncDataRenderer>
          </>
        )}
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
            <Typography sx={{ marginTop: '0.5rem' }} variant="h6">
              Cập nhật{' '}
              {TYPES.find(
                (item) => item.label === values.type
              )?.label.toLowerCase()}
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
          </>
        )}
        {sheets.length > 0 && (
          <>
            <StyledFormControl sx={{ marginBottom: '1rem' }}>
              <InputLabel id="year-select-label">Chọn sheet</InputLabel>
              <Select
                labelId="sheet-select-label"
                id="sheet-select"
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
            <Box>
              <Typography variant="h6">Xem trước</Typography>
              <Box
                sx={{ width: '100%', height: 600, backgroundColor: 'white' }}
              >
                <DataGrid columns={columns} rows={rows} />
              </Box>
            </Box>
          </>
        )}
        {current.length > 0 && (
          <Box mt={2} sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Box sx={{ width: '85%!important' }}>
              {error.length > 0 && <ErrorMessage content={error} />}
            </Box>
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
