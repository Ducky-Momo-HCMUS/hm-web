import React, { useCallback, useState } from 'react';
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TablePagination,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import { GET_STUDENT_DETAIL } from '../../../../data/queries/student/get-student-detail';
import {
  StudentContact,
  StudentEditContactInput,
  useStudentDeleteContactMutation,
  useStudentEditContactMutation,
} from '../../../../generated-types';
import DeleteDialog from '../../../../components/DeleteDialog';
import EditStudentContactDialog from '../AddOrEditStudentContactDialog';

import StudentContactRow from './StudentContactRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}

interface StudentContactTableProps {
  data: StudentContact[];
}

function StudentContactTable({ data }: StudentContactTableProps) {
  const { id = '' } = useParams();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(2);

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

  const [editStudentContact, { loading: editStudentContactLoading }] =
    useStudentEditContactMutation();

  const handleEditStudentContact = useCallback(
    async (payload: StudentEditContactInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editStudentContact({
        variables: {
          contactId: values.editIndex,
          payload,
        },
        refetchQueries: [
          { query: GET_STUDENT_DETAIL, variables: { studentId: id } },
          'StudentDetail',
        ],
      });
    },
    [editStudentContact, id, values.editIndex]
  );

  const [deleteStudentContact, { loading: deleteStudentContactLoading }] =
    useStudentDeleteContactMutation();

  const handleDeleteStudentContact = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteStudentContact({
      variables: {
        contactId: values.deleteIndex,
      },
      refetchQueries: [
        { query: GET_STUDENT_DETAIL, variables: { studentId: id } },
        'StudentDetail',
      ],
    });
  }, [deleteStudentContact, id, values.deleteIndex]);

  return (
    <>
      <Table>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <StudentContactRow
                index={index}
                data={row}
                onClickEdit={() => handleClickEdit(row.maLHSV)}
                onClickDelete={() => handleClickDelete(row.maLHSV)}
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
          description="Bạn có đồng ý xoá liên lạc"
          boldText={
            data.find((item) => item.maLHSV === values.deleteIndex)?.mxh || ''
          }
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={handleDeleteStudentContact}
        />
      )}

      {values.editIndex >= 0 && (
        <EditStudentContactDialog
          open={values.editIndex >= 0}
          onClose={() => setValues({ ...values, editIndex: -1 })}
          onClickCancel={() => setValues({ ...values, editIndex: -1 })}
          onClickConfirm={handleEditStudentContact}
          data={data.find((item) => item.maLHSV === values.editIndex)}
        />
      )}

      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editStudentContactLoading || deleteStudentContactLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default StudentContactTable;
