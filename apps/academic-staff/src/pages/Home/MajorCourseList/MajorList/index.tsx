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
import { MAJOR_PAGE_SIZE } from '../../../../constants';
import {
  MajorEditInput,
  MajorListItem,
  useMajorEditMutation,
  useMajorListLazyQuery,
} from '../../../../generated-types';
import { GET_MAJOR_LIST } from '../../../../data/queries/course/get-major-list';

import EditMajorInfoDialog from './EditMajorInfoDialog';

function MajorList() {
  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

  const [getMajorList, { loading: majorListLoading, data: majorListData }] =
    useMajorListLazyQuery();

  const { majorListLength, majorList } = useMemo(() => {
    return {
      majorListLength: majorListData?.majorList.total || 0,
      majorList: majorListData?.majorList.data || [],
    };
  }, [majorListData?.majorList.data, majorListData?.majorList.total]);

  useEffect(() => {
    getMajorList({
      variables: {
        page: page + 1,
        size: MAJOR_PAGE_SIZE,
      },
      fetchPolicy: 'no-cache',
    });
  }, [getMajorList, page]);

  const [majorId, setMajorId] = useState(0);
  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [editMajor, { loading: editMajorLoading }] = useMajorEditMutation();

  const handleEditMajor = useCallback(
    (payload: MajorEditInput) => {
      setOpenEditDialog(false);
      editMajor({
        variables: {
          majorId,
          payload,
        },
        refetchQueries: [
          {
            query: GET_MAJOR_LIST,
            variables: { page: page + 1, size: MAJOR_PAGE_SIZE },
          },
          'MajorList',
        ],
      });
    },
    [editMajor, majorId, page]
  );

  return (
    <>
      <Box>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <AsyncDataRenderer
            hasFullWidth
            loading={majorListLoading}
            data={majorList}
          >
            <TableContainer sx={{ maxHeight: '100vh' }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell key="index">STT</TableCell>
                    <TableCell key="tenVietTat">Mã chuyên ngành</TableCell>
                    <TableCell key="tenMH">Tên chuyên ngành</TableCell>
                    <TableCell key="action">Thao tác</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {majorList.map((row, index) => (
                    <TableRow hover tabIndex={-1} key={row.maCN}>
                      <TableCell>
                        {page * MAJOR_PAGE_SIZE + index + 1}
                      </TableCell>
                      <TableCell>{row.tenVietTat}</TableCell>
                      <TableCell>{row.tenCN}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => {
                            setMajorId(row.maCN);
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
              count={majorListLength}
              rowsPerPageOptions={[]}
              rowsPerPage={MAJOR_PAGE_SIZE}
              page={page}
              onPageChange={handleChangePage}
            />
          </AsyncDataRenderer>
        </Paper>
        {openEditDialog && (
          <EditMajorInfoDialog
            open={openEditDialog}
            onClose={() => setOpenEditDialog(false)}
            onClickCancel={() => setOpenEditDialog(false)}
            data={
              majorList.find((major) => major.maCN === majorId) as MajorListItem
            }
            onClickConfirm={handleEditMajor}
          />
        )}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={editMajorLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
}

export default MajorList;
