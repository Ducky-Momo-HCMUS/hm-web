import { TableCell, TableHead } from '@mui/material';
import React from 'react';

import { Column } from '../../../../types';
import { StyledTableRow } from '../styles';

interface CustomisedTableHeadProps {
  columns: Column[];
}
function CustomisedTableHead({ columns }: CustomisedTableHeadProps) {
  return (
    <TableHead>
      <StyledTableRow>
        <TableCell key="index">STT</TableCell>
        {columns.map((column) => (
          <TableCell key={column.id}>{column.label}</TableCell>
        ))}
      </StyledTableRow>
    </TableHead>
  );
}

export default CustomisedTableHead;
