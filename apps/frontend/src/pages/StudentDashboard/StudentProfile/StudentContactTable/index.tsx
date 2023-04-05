import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Backdrop,
  CircularProgress,
  Table,
  TableBody,
  TablePagination,
} from '@mui/material';
import { useParams } from 'react-router-dom';

import {
  StudentEditContactInput,
  useStudentContactListLazyQuery,
  useStudentDeleteContactMutation,
  useStudentEditContactMutation,
} from '../../../../generated-types';
import DeleteDialog from '../../../../components/DeleteDialog';
import EditStudentContactDialog from '../AddOrEditStudentContactDialog';
import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';
import { GET_STUDENT_CONTACT_LIST } from '../../../../data/queries/student/get-student-contacts';

import StudentContactRow from './StudentContactRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}

function StudentContactTable() {
  const { id = '' } = useParams();
  const [page, setPage] = useState(0);

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
          {
            query: GET_STUDENT_CONTACT_LIST,
            variables: { studentId: id, page: 1, size: 2 },
          },
          'StudentContactList',
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
        {
          query: GET_STUDENT_CONTACT_LIST,
          variables: { studentId: id, page: 1, size: 2 },
        },
        'StudentContactList',
      ],
    });
  }, [deleteStudentContact, id, values.deleteIndex]);

  const [
    getStudentContactList,
    { loading: studentContactListLoading, data: studentContactListData },
  ] = useStudentContactListLazyQuery();

  const { studentContactList, studentContactListLength } = useMemo(
    () => ({
      studentContactList: studentContactListData?.studentContactList.data || [],
      studentContactListLength:
        studentContactListData?.studentContactList.total || 0,
    }),
    [
      studentContactListData?.studentContactList.data,
      studentContactListData?.studentContactList.total,
    ]
  );

  useEffect(() => {
    getStudentContactList({
      variables: {
        studentId: id,
        page: page + 1,
        size: 2,
      },
    });
  }, [getStudentContactList, id, page]);

  return (
    <>
      <AsyncDataRenderer
        loading={studentContactListLoading}
        data={studentContactList}
      >
        <Table>
          <TableBody>
            {studentContactList.map((row, index) => (
              <StudentContactRow
                key={row.maLHSV}
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
          count={studentContactListLength}
          page={page}
          rowsPerPage={2}
          onPageChange={handleChangePage}
        />
      </AsyncDataRenderer>
      {values.deleteIndex >= 0 && (
        <DeleteDialog
          open={values.deleteIndex >= 0}
          onClose={() => setValues({ ...values, deleteIndex: -1 })}
          description="Bạn có đồng ý xoá liên lạc"
          boldText={
            studentContactList.find(
              (item) => item.maLHSV === values.deleteIndex
            )?.mxh || ''
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
          data={studentContactList.find(
            (item) => item.maLHSV === values.editIndex
          )}
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
