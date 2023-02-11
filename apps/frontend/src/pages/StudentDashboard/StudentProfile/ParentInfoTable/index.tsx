import React, { useCallback, useState } from 'react';
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  StudentEditParentInfoInput,
  StudentParentInfo,
  useStudentDeleteParentInfoMutation,
  useStudentEditParentInfoMutation,
} from '../../../../generated-types';
import { GET_STUDENT_PARENT_INFO_LIST } from '../../../../data/queries/student/get-student-parent-info';
import DeleteDialog from '../../../../components/DeleteDialog';
import EditParentInfoDialog from '../AddOrEditParentInfoDialog';
import { PARENT_PAGE_SIZE } from '../../../../constants';

import ParentInfoRow from './ParentInfoRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}

interface ParentInfoTableProps {
  data: StudentParentInfo[];
  page: number;
  count: number;
  handleChangePage: any;
  setParentPage: any;
}

function ParentInfoTable({
  data,
  page,
  count,
  handleChangePage,
  setParentPage,
}: ParentInfoTableProps) {
  const { id = '' } = useParams();

  const [values, setValues] = useState<State>({
    deleteIndex: -1,
    editIndex: -1,
  });

  const handleClickEdit = useCallback((index: number) => {
    setValues((v) => ({ ...v, editIndex: index }));
  }, []);

  const handleClickDelete = useCallback((index: number) => {
    setValues((v) => ({ ...v, deleteIndex: index }));
  }, []);

  const [editStudentParentInfo, { loading: editStudentParentInfoLoading }] =
    useStudentEditParentInfoMutation();

  const handleEditStudentParentInfo = useCallback(
    async (payload: StudentEditParentInfoInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editStudentParentInfo({
        variables: {
          parentId: values.editIndex,
          payload,
        },
        refetchQueries: [
          {
            query: GET_STUDENT_PARENT_INFO_LIST,
            variables: { studentId: id, page: 1, size: PARENT_PAGE_SIZE },
          },
          'StudentParentInfoList',
        ],
      });
    },
    [editStudentParentInfo, id, values.editIndex]
  );

  const [deleteStudentParentInfo, { loading: deleteStudentParentInfoLoading }] =
    useStudentDeleteParentInfoMutation();

  const handleDeleteStudentParentInfo = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteStudentParentInfo({
      variables: {
        parentId: values.deleteIndex,
      },
      refetchQueries: [
        {
          query: GET_STUDENT_PARENT_INFO_LIST,
          variables: { studentId: id, page: 1, size: PARENT_PAGE_SIZE },
        },
        'StudentParentInfoList',
      ],
    });
    setParentPage(0);
  }, [deleteStudentParentInfo, id, setParentPage, values.deleteIndex]);

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Họ tên</TableCell>
            <TableCell>Quan hệ</TableCell>
            <TableCell>Số điện thoại</TableCell>
            <TableCell>Mạng xã hội</TableCell>
            <TableCell align="center">Thao tác</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <ParentInfoRow
              index={index}
              key={row.maPH}
              data={row}
              onClickDelete={() => handleClickDelete(row.maPH)}
              onClickEdit={() => handleClickEdit(row.maPH)}
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={count}
        page={page}
        rowsPerPage={PARENT_PAGE_SIZE}
        onPageChange={handleChangePage}
      />
      {values.deleteIndex >= 0 && (
        <DeleteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý xoá thông tin phụ huynh"
          boldText={
            data.find((item) => item.maPH === values.deleteIndex)?.tenPH || ''
          }
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={handleDeleteStudentParentInfo}
        />
      )}

      {values.editIndex >= 0 && (
        <EditParentInfoDialog
          open={values.editIndex >= 0}
          onClose={() => setValues({ ...values, editIndex: -1 })}
          onClickCancel={() => setValues({ ...values, editIndex: -1 })}
          onClickConfirm={handleEditStudentParentInfo}
          data={data.find((item) => item.maPH === values.editIndex)}
        />
      )}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editStudentParentInfoLoading || deleteStudentParentInfoLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default ParentInfoTable;
