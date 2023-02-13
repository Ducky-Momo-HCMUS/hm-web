import React, { useState, useCallback } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material';

import DeleteDialog from '../../../components/DeleteDialog';
import { TeacherListItem } from '../../../types';

import HomeroomTeacherTableRow from './HomeroomTeacherTableRow';

interface State {
  deleteIndex: number;
}
interface HomeroomTeacherInfoTableProps {
  data: TeacherListItem[];
}

function HomeroomTeacherTable({ data }: HomeroomTeacherInfoTableProps) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [values, setValues] = useState<State>({
    deleteIndex: -1,
  });

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

  return (
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
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <HomeroomTeacherTableRow
                index={index}
                key={row.email}
                data={row}
                onClickDelete={() => handleClickDelete(index)}
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
          description="Bạn có đồng ý xoá giáo viên chủ nhiệm"
          boldText={data[values.deleteIndex].tenGV}
          onClickCancel={() => setValues({ ...values, deleteIndex: -1 })}
          onClickConfirm={() => setValues({ ...values, deleteIndex: -1 })}
        />
      )}
    </Paper>
  );
}

export default HomeroomTeacherTable;
