import React, { useState, useCallback, useEffect, useMemo } from 'react';
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
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import DeleteDialog from '../../../components/DeleteDialog';
import {
  TagEditInput,
  useTagDeleteMutation,
  useTagEditMutation,
  useTagListLazyQuery,
} from '../../../generated-types';
import EditTagInfoDialog from '../AddOrEditTagInfoDialog';
import { GET_TAG_LIST } from '../../../data/queries/tag/get-tag-list';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { TAG_LIST_PAGE_SIZE } from '../../../constants';

interface State {
  deleteIndex: number;
  editIndex: number;
}

function TagTable() {
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

  const [getTagList, { loading: tagListLoading, data: tagListData }] =
    useTagListLazyQuery();

  const { tagList, tagListLength } = useMemo(
    () => ({
      tagList: tagListData?.tagList.data || [],
      tagListLength: tagListData?.tagList.total || 0,
    }),
    [tagListData?.tagList.data, tagListData?.tagList.total]
  );

  useEffect(() => {
    getTagList({
      variables: {
        page: page + 1,
        size: TAG_LIST_PAGE_SIZE,
      },
    });
  }, [getTagList, page]);

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
          <AsyncDataRenderer loading={tagListLoading} data={tagListData}>
            <TableBody>
              {tagList.map((row, index) => (
                <TableRow key={row.maTag}>
                  <TableCell>{page * TAG_LIST_PAGE_SIZE + index + 1}</TableCell>
                  <TableCell>{row.tenTag}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleClickEdit(row.maTag)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleClickDelete(row.maTag)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </AsyncDataRenderer>
        </Table>
        {!!tagListLength && (
          <TablePagination
            rowsPerPageOptions={[]}
            component="div"
            count={tagListLength}
            page={page}
            rowsPerPage={TAG_LIST_PAGE_SIZE}
            onPageChange={handleChangePage}
          />
        )}
        {values.deleteIndex >= 0 && (
          <DeleteDialog
            open={values.deleteIndex >= 0}
            onClose={() => setValues({ ...values, deleteIndex: -1 })}
            description="Bạn có đồng ý xoá tag"
            boldText={
              tagList.find((item) => item.maTag === values.deleteIndex)
                ?.tenTag || ''
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
            data={tagList.find((item) => item.maTag === values.editIndex)}
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
