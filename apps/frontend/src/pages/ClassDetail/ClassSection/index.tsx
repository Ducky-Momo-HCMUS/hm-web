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

import CustomisedTableRow from './CustomisedTableRow';
import CustomisedTableHead from './CustomisedTableHead';
import { StyledFormControl, StyledPaper } from './styles';

interface ClassSectionProps {
  title: string;
  columns: Column[];
  data: any;
  page: number;
  semester: string;
  rowsPerPage: number;
  handleChangePage: any;
  handleChangeSemester: any;
}

function ClassSection({
  title,
  columns,
  data,
  page,
  semester,
  rowsPerPage,
  handleChangePage,
  handleChangeSemester,
}: ClassSectionProps) {
  return (
    <StyledPaper>
      <Box style={{ marginBottom: '2rem' }}>
        <Typography style={{ marginBottom: '1rem' }} variant="h6">
          {title}
        </Typography>
        <Divider />
      </Box>
      <StyledFormControl>
        <InputLabel id="semester-select-label">Học kỳ - năm học</InputLabel>
        <Select
          labelId="year-select-label"
          id="year-select"
          value={semester}
          label="Học kỳ - năm học"
          onChange={handleChangeSemester}
        >
          <MenuItem value="all">Tất cả</MenuItem>
          <MenuItem value="1-2019">HK1 2019-2020</MenuItem>
          <MenuItem value="2-2019">HK2 2019-2020</MenuItem>
          <MenuItem value="3-2019">HK3 2019-2020</MenuItem>
        </Select>
      </StyledFormControl>
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
    </StyledPaper>
  );
}

export default ClassSection;
