import React, { useState, useCallback } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
  Backdrop,
  CircularProgress,
} from '@mui/material';

import DeleteDialog from '../../../components/DeleteDialog';
import { TeacherListItem } from '../../../types';
import EditHomeroomTeacherInfoDialog from '../AddOrEditHomeroomTeacherInfoDialog';
import { TEACHER_LIST_PAGE_SIZE } from '../../../constants';
import {
  TeacherEditInput,
  useTeacherDeleteMutation,
  useTeacherEditMutation,
} from '../../../generated-types';
import { GET_ALL_TEACHER_LIST } from '../../../data/queries/teacher/get-all-teacher-list';

import HomeroomTeacherTableRow from './HomeroomTeacherTableRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}
interface HomeroomTeacherInfoTableProps {
  data: TeacherListItem[];
  page: number;
  handleChangePage: any;
  total: number;
}

function HomeroomTeacherTable({
  data,
  page,
  handleChangePage,
  total,
}: HomeroomTeacherInfoTableProps) {
  const [values, setValues] = useState<State>({
    deleteIndex: -1,
    editIndex: -1,
  });

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

  const handleClickEdit = useCallback((index: number) => {
    setValues((v) => ({ ...v, editIndex: index }));
  }, []);

  const [editTeacher, { loading: editTeacherLoading }] =
    useTeacherEditMutation();

  const handleEditTeacher = useCallback(
    async (payload: TeacherEditInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editTeacher({
        variables: {
          teacherId: values.editIndex,
          payload,
        },
        refetchQueries: [
          {
            query: GET_ALL_TEACHER_LIST,
            variables: { page: page + 1, size: TEACHER_LIST_PAGE_SIZE },
          },
          'AllTeacherList',
        ],
      });
    },
    [editTeacher, page, values.editIndex]
  );

  const [deleteTeacher, { loading: deleteTeacherLoading }] =
    useTeacherDeleteMutation();

  const handleDeleteTeacher = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteTeacher({
      variables: {
        teacherId: values.deleteIndex,
      },
      refetchQueries: [
        {
          query: GET_ALL_TEACHER_LIST,
          variables: { page: page + 1, size: TEACHER_LIST_PAGE_SIZE },
        },
        'AllTeacherList',
      ],
    });
  }, [deleteTeacher, page, values.deleteIndex]);

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Họ tên</TableCell>
              <TableCell>Lớp chủ nhiệm</TableCell>
              <TableCell>Email</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <HomeroomTeacherTableRow
                index={page * TEACHER_LIST_PAGE_SIZE + index + 1}
                key={row.email}
                data={row}
                onClickDelete={() => handleClickDelete(row.maGV)}
                onClickEdit={() => handleClickEdit(row.maGV)}
              />
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[]}
          component="div"
          count={total}
          page={page}
          rowsPerPage={TEACHER_LIST_PAGE_SIZE}
          onPageChange={handleChangePage}
        />
        {values.deleteIndex >= 0 && (
          <DeleteDialog
            open={values.deleteIndex >= 0}
            onClose={() => setValues({ ...values, deleteIndex: -1 })}
            description="Bạn có đồng ý xoá giáo viên chủ nhiệm"
            boldText={
              data.find((item) => item.maGV === values.deleteIndex)?.tenGV || ''
            }
            onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
            onClickConfirm={handleDeleteTeacher}
          />
        )}
        {values.editIndex >= 0 && (
          <EditHomeroomTeacherInfoDialog
            open={values.editIndex >= 0}
            onClose={() => setValues({ ...values, editIndex: -1 })}
            onClickCancel={() => setValues({ ...values, editIndex: -1 })}
            onClickConfirm={handleEditTeacher}
            data={data.find((item) => item.maGV === values.editIndex)}
          />
        )}
      </Paper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editTeacherLoading || deleteTeacherLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default HomeroomTeacherTable;
