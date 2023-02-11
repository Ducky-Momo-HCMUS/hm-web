import React from 'react';
import {
  Box,
  Divider,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableContainer,
  TablePagination,
  Typography,
} from '@mui/material';

import { Column } from '../../../types';
import { HomeroomTermListItem } from '../../../generated-types';
import CustomisedTableRow from '../../../components/CustomisedTableRow';
import CustomisedTableHead from '../../../components/CustomisedTableHead';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';

import { StyledFormControl, StyledPaper } from './styles';

interface ClassTableProps {
  title: string;
  columns: Column[];
  data: any;
  loading?: boolean;
  page: number;
  termList?: HomeroomTermListItem[];
  termListLoading?: boolean;
  term?: string;
  year?: string;
  yearList?: string[];
  rowsPerPage: number;
  handleChangePage: any;
  handleChangeTerm?: any;
  handleChangeYear?: any;
  hasFilter: boolean;
}

function ClassTable({
  title,
  columns,
  data,
  loading = false,
  page,
  termList = [],
  termListLoading = false,
  term,
  year,
  yearList = [],
  rowsPerPage,
  handleChangePage,
  handleChangeTerm,
  handleChangeYear,
  hasFilter,
}: ClassTableProps) {
  return (
    <StyledPaper>
      <Box style={{ marginBottom: '2rem' }}>
        <Typography style={{ marginBottom: '1rem' }} variant="h6">
          {title}
        </Typography>
        <Divider />
      </Box>
      {hasFilter && (
        <AsyncDataRenderer loading={termListLoading} data={termList}>
          <StyledFormControl sx={{ marginRight: '1rem' }}>
            <InputLabel id="year-select-label">Năm học</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={year}
              label="Năm học"
              onChange={handleChangeYear}
            >
              {yearList.map((item) => (
                <MenuItem value={item}>
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
              value={term}
              label="Học kỳ"
              onChange={handleChangeTerm}
            >
              {termList.map((item) => (
                <MenuItem key={item.maHK} value={item.maHK.toString()}>
                  {item.hocKy}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>
      )}
      <AsyncDataRenderer loading={loading} data={data}>
        <TableContainer sx={{ maxHeight: 400, marginTop: '1rem' }}>
          <Table stickyHeader>
            <CustomisedTableHead columns={columns} />
            <TableBody>
              {data
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item: any, index: number) => (
                  <CustomisedTableRow data={item} index={index + 1} />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={data.length || 0}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
        />
      </AsyncDataRenderer>
    </StyledPaper>
  );
}

export default ClassTable;
