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
import {
  Tag,
  TagEditInput,
  useTagDeleteMutation,
  useTagEditMutation,
} from '../../../generated-types';
import EditTagInfoDialog from '../AddOrEditTagInfoDialog';
import { GET_TAG_LIST } from '../../../data/queries/tag/get-tag-list';

import TagTableRow from './TagTableRow';

interface State {
  deleteIndex: number;
  editIndex: number;
}
interface TagInfoTableProps {
  data: Tag[];
}

function TagTable({ data }: TagInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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

  const [editTag, { loading: editTagLoading }] = useTagEditMutation();
  const handleEditTag = useCallback(
    async (payload: TagEditInput) => {
      setValues((v) => ({ ...v, editIndex: -1 }));
      await editTag({
        variables: {
          tagId: values.editIndex,
          payload,
        },
        refetchQueries: [{ query: GET_TAG_LIST }, 'TagList'],
      });
    },
    [editTag, values.editIndex]
  );

  const [deleteTag, { loading: deleteTagLoading }] = useTagDeleteMutation();
  const handleDeleteTag = useCallback(async () => {
    setValues((v) => ({ ...v, deleteIndex: -1 }));
    await deleteTag({
      variables: {
        tagId: values.deleteIndex,
      },
      refetchQueries: [{ query: GET_TAG_LIST }, 'TagList'],
    });
  }, [deleteTag, values.deleteIndex]);

  return (
    <>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>STT</TableCell>
              <TableCell>Tag</TableCell>
              <TableCell align="center">Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TagTableRow
                  data={row}
                  onClickDelete={() => handleClickDelete(row.maTag)}
                  onClickEdit={() => handleClickEdit(row.maTag)}
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
            description="Bạn có đồng ý xoá tag"
            boldText={
              data.find((item) => item.maTag === values.deleteIndex)?.tenTag ||
              ''
            }
            onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
            onClickConfirm={handleDeleteTag}
          />
        )}
        {values.editIndex >= 0 && (
          <EditTagInfoDialog
            open={values.editIndex >= 0}
            onClose={() => setValues({ ...values, editIndex: -1 })}
            onClickCancel={() => setValues({ ...values, editIndex: -1 })}
            onClickConfirm={handleEditTag}
            data={data.find((item) => item.maTag === values.editIndex)}
          />
        )}
      </Paper>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editTagLoading || deleteTagLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default TagTable;
