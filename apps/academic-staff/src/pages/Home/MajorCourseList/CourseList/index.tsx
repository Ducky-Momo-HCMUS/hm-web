import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Backdrop,
  Box,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';
import { COURSE_PAGE_SIZE } from '../../../../constants';
import {
  CourseEditInput,
  CourseListItem,
  useCourseEditMutation,
  useCourseListLazyQuery,
} from '../../../../generated-types';
import { GET_COURSE_LIST } from '../../../../data/queries/course/get-course-list';

import EditCourseInfoDialog from './EditCourseInfoDialog';

function CourseList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [getCourseList, { loading: courseListLoading, data: courseListData }] =
    useCourseListLazyQuery();

  const { courseListLength, courseList } = useMemo(() => {
    return {
      courseListLength: courseListData?.courseList.total || 0,
      courseList: courseListData?.courseList.data || [],
    };
  }, [courseListData?.courseList.data, courseListData?.courseList.total]);

  useEffect(() => {
    getCourseList({
      variables: {
        page: page + 1,
        size: COURSE_PAGE_SIZE,
      },
      fetchPolicy: 'no-cache',
    });
  }, [getCourseList, page]);

  const [courseId, setCourseId] = useState('');
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [editCourse, { loading: editCourseLoading }] = useCourseEditMutation();

  const handleEditCourse = useCallback(
    (payload: CourseEditInput) => {
      setOpenEditDialog(false);
      editCourse({
        variables: {
          courseId,
          payload,
        },
        refetchQueries: [
          {
            query: GET_COURSE_LIST,
            variables: { page: page + 1, size: COURSE_PAGE_SIZE },
          },
          'CourseList',
        ],
      });
    },
    [courseId, editCourse, page]
  );

  return (
    <>
      <Box>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <AsyncDataRenderer
            hasFullWidth
            loading={courseListLoading}
            data={courseList}
          >
            <TableContainer sx={{ maxHeight: '100vh' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell key="index">STT</TableCell>
                    <TableCell key="maMH">Mã môn học</TableCell>
                    <TableCell key="tenMH">Tên môn học</TableCell>
                    <TableCell key="soTC">Số tín chỉ</TableCell>
                    <TableCell key="tenCN">Chuyên ngành</TableCell>
                    <TableCell key="loaiMH">Loại môn học</TableCell>
                    <TableCell key="action">Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {courseList.map((row, index) => (
                    <TableRow hover tabIndex={-1} key={row.maMH}>
                      <TableCell>
                        {page * COURSE_PAGE_SIZE + index + 1}
                      </TableCell>
                      <TableCell>{row.maMH}</TableCell>
                      <TableCell>{row.tenMH}</TableCell>
                      <TableCell>{row.soTinChi}</TableCell>
                      <TableCell>{row.tenCN || row.chuyenNganh}</TableCell>
                      <TableCell>{row.loaiMonHoc}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setCourseId(row.maMH);
                            setOpenEditDialog(true);
                          }}
                        >
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              component="div"
              rowsPerPageOptions={[]}
              count={courseListLength}
              rowsPerPage={COURSE_PAGE_SIZE}
              page={page}
              onPageChange={handleChangePage}
            />
          </AsyncDataRenderer>
        </Paper>
        {openEditDialog && (
          <EditCourseInfoDialog
            open={openEditDialog}
            onClose={() => setOpenEditDialog(false)}
            onClickCancel={() => setOpenEditDialog(false)}
            data={
              courseList.find(
                (course) => course.maMH === courseId
              ) as CourseListItem
            }
            onClickConfirm={handleEditCourse}
          />
        )}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editCourseLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default CourseList;
