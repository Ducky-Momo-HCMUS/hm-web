import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import React, { useCallback, useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContainer,
  StyledContentWrapper,
  StyledRouterLink,
  StyledTitle,
} from '../../components/styles';
import { STUDENT_LIST_PAGE_SIZE } from '../../constants';
import { useTeacherSearchStudentListQuery } from '../../generated-types';

interface Column {
  id: 'maSV' | 'tenSV' | 'tenCN' | 'tinhTrang' | 'gpa4' | 'gpa10';
  label: string;
  minWidth?: number;
  align?: 'left';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'maSV', label: 'MSSV' },
  {
    id: 'tenSV',
    label: 'Họ tên',
    minWidth: 200,
  },
  {
    id: 'tenCN',
    label: 'Chuyên ngành',
    minWidth: 120,
  },
  {
    id: 'tinhTrang',
    label: 'Tình trạng',
    minWidth: 120,
  },
  {
    id: 'gpa4',
    label: 'GPA hệ 4',
    minWidth: 60,
  },
  {
    id: 'gpa10',
    label: 'GPA hệ 10',
    minWidth: 60,
  },
];

function Search() {
  const [page, setPage] = useState(0);
  const [searchParams] = useSearchParams();

  const { maSV, tenSV } = useMemo(
    () => ({
      maSV: searchParams.get('maSV') || '',
      tenSV: searchParams.get('tenSV') || '',
    }),
    [searchParams]
  );

  const { loading: searchStudentsLoading, data: searchStudentsData } =
    useTeacherSearchStudentListQuery({
      variables: {
        maSV,
        tenSV,
      },
    });

  const { studentsList, studentsListLength } = useMemo(
    () => ({
      studentsList: searchStudentsData?.teacherSearchStudentList.data || [],
      studentsListLength:
        searchStudentsData?.teacherSearchStudentList.total || 0,
    }),
    [
      searchStudentsData?.teacherSearchStudentList.data,
      searchStudentsData?.teacherSearchStudentList.total,
    ]
  );

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <StyledContainer>
      <Header isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle>Kết quả tìm kiếm</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Typography color="text.primary">Kết quả tìm kiếm</Typography>
        </StyledBreadCrumbs>
        <AsyncDataRenderer loading={searchStudentsLoading} data={studentsList}>
          <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
            <TableContainer sx={{ maxHeight: 350 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell key="index">STT</TableCell>
                    {columns.map((column) => (
                      <TableCell key={column.id}>{column.label}</TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentsList.map((item, index) => (
                    <TableRow key={item.maSV}>
                      <TableCell>
                        {page * STUDENT_LIST_PAGE_SIZE + index + 1}
                      </TableCell>
                      <TableCell>{item.maSV}</TableCell>
                      <TableCell>
                        <StyledRouterLink to={`/students/${item.maSV}`}>
                          {item.tenSV}
                        </StyledRouterLink>
                      </TableCell>
                      <TableCell>{item.tenCN || 'Chưa có'}</TableCell>
                      <TableCell>{item.tinhTrang}</TableCell>
                      <TableCell>{item.gpa4 || 'Chưa có'}</TableCell>
                      <TableCell>{item.gpa10 || 'Chưa có'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[]}
              component="div"
              count={studentsListLength}
              rowsPerPage={STUDENT_LIST_PAGE_SIZE}
              page={page}
              onPageChange={handleChangePage}
            />
          </Paper>
        </AsyncDataRenderer>
      </StyledContentWrapper>
    </StyledContainer>
  );
}

export default Search;
