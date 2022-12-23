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
  rowsPerPage: number;
  handleChangePage: any;
  handleChangeTerm?: any;
  hasFilter: boolean;
}

function ClassTable({
  title,
  columns,
  data,
  loading = false,
  page,
  termList,
  termListLoading = false,
  term,
  rowsPerPage,
  handleChangePage,
  handleChangeTerm,
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
          <StyledFormControl>
            <InputLabel id="term-select-label">Học kỳ - năm học</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={term}
              label="Học kỳ - năm học"
              onChange={handleChangeTerm}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              {termList?.map((item) => (
                <MenuItem key={item.maHK} value={item.maHK.toString()}>
                  HK{item.hocKy} {item.namHocBD}-{item.namHocBD + 1}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>
      )}
      <AsyncDataRenderer loading={loading} data={data}>
        <TableContainer sx={{ maxHeight: 440, marginTop: '1rem' }}>
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
