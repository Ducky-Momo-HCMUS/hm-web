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

import {
  StudentEditParentInfoInput,
  StudentParentInfo,
  useStudentDeleteParentInfoMutation,
  useStudentEditParentInfoMutation,
} from '../../../../generated-types';
import DeleteDialog from '../../../../components/DeleteDialog';
import EditParentInfoDialog from '../AddOrEditParentInfoDialog';

import ParentInfoRow from './ParentInfoRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}

interface ParentInfoTableProps {
  data: StudentParentInfo[];
}

function ParentInfoTable({ data }: ParentInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

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

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const handleChangeRowsPerPage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    },
    []
  );

  const [editStudentParentInfo, { loading: editStudentParentInfoLoading }] =
    useStudentEditParentInfoMutation();

  const handleEditStudentParentInfo = useCallback(
    async (payload: StudentEditParentInfoInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editStudentParentInfo({
        variables: {
          parentId: data[values.editIndex].maPH,
          payload,
        },
      });
    },
    [data, editStudentParentInfo, values.editIndex]
  );

  const [deleteStudentParentInfo, { loading: deleteStudentParentInfoLoading }] =
    useStudentDeleteParentInfoMutation();

  const handleDeleteStudentParentInfo = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteStudentParentInfo({
      variables: {
        parentId: data[values.deleteIndex].maPH,
      },
    });
  }, [data, deleteStudentParentInfo, values.deleteIndex]);

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
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <ParentInfoRow
                index={index}
                key={row.maPH}
                data={row}
                onClickDelete={() => handleClickDelete(index)}
                onClickEdit={() => handleClickEdit(index)}
              />
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[]}
        component="div"
        count={data.length || 0}
        page={page}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage="Số dòng trên trang"
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      {values.deleteIndex >= 0 && (
        <DeleteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý xoá thông tin phụ huynh"
          boldText={data[values.deleteIndex].tenPH}
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
          data={data[values.editIndex]}
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
