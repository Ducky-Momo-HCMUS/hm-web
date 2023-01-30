/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-plusplus */
import {
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from '@mui/material';
import React, { useState, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { read, utils, WorkSheet } from 'xlsx';

import { StyledBreadCrumbs, StyledTitle } from '../../../components/styles';
import ErrorMessage from '../../../components/ErrorMessage';

import { StyledFormControl } from './styles';

const YEARS = [2017, 2018, 2019];
const TYPES = [
  'Danh sách giáo viên chủ nhiệm',
  'Danh sách thông tin sinh viên',
  'Danh sách môn học',
  'Danh sách chuyên ngành và kết quả',
  'Thời khoá biểu',
  'Danh sách đăng ký học phần',
  'Điểm số',
  'Danh sách hoãn thi',
  'Danh sách vắng thi',
];

interface State {
  year: string;
  type: string;
}

type DataSet = { [index: string]: WorkSheet };
type Row = any[];
type RowCol = { rows: Row[]; columns: GridColDef[] };

function arrayify(rows: any[]): Row[] {
  return rows.map((row) => {
    if (Array.isArray(row)) return row;
    let { length } = Object.keys(row);
    for (; length > 0; --length) if (row[length - 1] != null) break;
    return Array.from({ length, ...row });
  });
}

/* this method returns `rows` and `columns` data for sheet change */
const getRowsCols = (data: DataSet, sheetName: string): RowCol => {
  const sheet = data[sheetName];
  const endCell = Object.keys(sheet)[Object.keys(sheet).length - 2];

  return {
    rows: utils
      .sheet_to_json<Row>(data[sheetName], { header: 1 })
      .filter((row) => row.length > 0)
      .map((r, id) => ({ ...r, id })),
    columns: Array.from(
      {
        length: utils.decode_range(`A1:${endCell}`).e.c + 1,
      },
      (_, i) => ({
        field: String(i),
        headerName: utils.encode_col(i),
        editable: false,
        minWidth: 200,
        maxWidth: 400,
      })
    ),
  };
};

function ImportFile() {
  const [values, setValues] = useState<State>({
    year: '',
    type: '',
  });

  const [error, setError] = useState<string>('');

  const [rows, setRows] = useState<Row[]>([]); // data rows
  const [columns, setColumns] = useState<GridColDef[]>([]); // columns
  const [workBook, setWorkBook] = useState<DataSet>({} as DataSet); // workbook
  const [sheets, setSheets] = useState<string[]>([]); // list of sheet names
  const [current, setCurrent] = useState<string>(''); // selected sheet

  const filePondRef = useRef<FilePond | null>(null);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      if (filePondRef.current) {
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

  return (
    <>
      <StyledTitle variant="h1">Nhập thông tin</StyledTitle>
      <StyledBreadCrumbs aria-label="breadcrumb">
        <Link to="/">Trang chủ</Link>
        <Typography color="text.primary">Nhập thông tin</Typography>
      </StyledBreadCrumbs>
      <Box component="form">
        <StyledFormControl>
          <InputLabel id="year-select-label">Năm học</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={values.year}
            label="Năm học"
            onChange={handleChange('year')}
          >
            {YEARS.map((item) => (
              <MenuItem value={item.toString()}>
                {item} - {item + 1}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl sx={{ minWidth: '18.5rem' }}>
          <InputLabel id="type-select-label">Loại thông tin</InputLabel>
          <Select
            labelId="type-select-label"
            id="type-select"
            value={values.type}
            label="Loại thông tin"
            onChange={handleChange('type')}
          >
            {TYPES.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        {values.year.length > 0 && values.type.length > 0 && (
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
                  }
                }}
                onremovefile={(err, file) => {
                  setSheets([]);
                  setCurrent('');
                }}
                // server={{
                //   load: (source, load) => {
                //     const myRequest = new Request(source);
                //     fetch(myRequest).then((response) => {
                //       response.blob().then((myBlob) => {
                //         load(myBlob);
                //       });
                //     });
                //   },
                // }}
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
            <Button type="submit" variant="contained">
              Xác nhận
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}

export default ImportFile;
