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
import React, { useState, useCallback, useRef } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { read, utils } from 'xlsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { StyledTitle } from '../../../components/styles';
import ErrorMessage from '../../../components/ErrorMessage';
import { useUploadDocumentMutation } from '../../../generated-types';

import { StyledFormControl } from './styles';
import {
  arrayify,
  CLASSES,
  DataSet,
  getRowsCols,
  MenuProps,
  Row,
  SUBJECTS,
  TERMS,
  TYPES,
  YEARS,
} from './utils';

interface State {
  year: string;
  type: string;
  term: string;
  subject: string;
  class: string;
}

function ImportFile() {
  const [values, setValues] = useState<State>({
    type: '',
    year: '',
    term: '',
    subject: '',
    class: '',
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

  /* method is called when one of the save buttons is clicked */
  // function saveFile(ext: string): void {
  //   console.log(rows);
  //   /* update current worksheet in case changes were made */
  //   workBook[current] = utils.aoa_to_sheet(arrayify(rows));

  //   /* construct workbook and loop through worksheets */
  //   const wb = utils.book_new();
  //   sheets.forEach((n) => {
  //     utils.book_append_sheet(wb, workBook[n], n);
  //   });

  //   /* generate a file and download it */
  //   writeFile(wb, `SheetJSRDG.${ext}`);
  // }

  const [uploadDocument, { loading: uploadDocumentLoading }] =
    useUploadDocumentMutation({
      onError: (error) => {
        // TODO: lấy error từ BE
        toast.error('Đã có  lỗi xảy ra');
      },
    });

  const handleUploadDocument = useCallback(
    async (event) => {
      event.preventDefault();
      if (file) {
        await uploadDocument({
          variables: {
            file,
            input: {
              name: 'example.xlsx',
            },
          },
        });
      }
    },
    [file, uploadDocument]
  );

  return (
    <>
      <ToastContainer />
      <StyledTitle variant="h1">Nhập thông tin</StyledTitle>
      <Box component="form">
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
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        {values.type && (
          <StyledFormControl>
            <InputLabel id="year-select-label">Năm học</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={values.year}
              label="Năm học"
              onChange={handleChange('year')}
              MenuProps={MenuProps}
            >
              {YEARS.map((item) => (
                <MenuItem value={item.toString()}>
                  {item} - {item + 1}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}

        {TYPES.findIndex((item) => item === values.type) > 4 && (
          <StyledFormControl>
            <InputLabel id="term-select-label">Học kỳ</InputLabel>
            <Select
              labelId="term-select-label"
              id="term-select"
              value={values.term}
              label="Học kỳ"
              onChange={handleChange('term')}
              MenuProps={MenuProps}
            >
              {TERMS.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        )}
        {values.type === 'Bảng điểm lớp học phần' && (
          <>
            <StyledFormControl sx={{ minWidth: '13rem' }}>
              <InputLabel id="subject-select-label">Môn học</InputLabel>
              <Select
                labelId="subject-select-label"
                id="subject-select"
                value={values.subject}
                label="Môn học"
                onChange={handleChange('subject')}
                MenuProps={MenuProps}
              >
                {SUBJECTS.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
            <StyledFormControl sx={{ minWidth: '9rem' }}>
              <InputLabel id="class-select-label">Lớp học phần</InputLabel>
              <Select
                labelId="class-select-label"
                id="class-select"
                value={values.class}
                label="Lớp học phần"
                onChange={handleChange('class')}
                MenuProps={MenuProps}
              >
                {CLASSES.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </StyledFormControl>
          </>
        )}
        {values.type.length > 0 && (
          <>
            <Typography sx={{ fontStyle: 'italic', marginTop: '1rem' }}>
              Cập nhật lần cuối bởi <b>Hoàng Thanh Tú</b> vào 12/12/2021
              00:00:00 am
            </Typography>
            <Typography sx={{ marginTop: '0.5rem' }} variant="h6">
              Cập nhật{' '}
              {TYPES.find((item) => item === values.type)?.toLowerCase()}
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
