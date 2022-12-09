import { TableCell } from '@mui/material';
import React from 'react';

import { GenericObject } from '../../../../types';
import { StyledTableRow } from '../styles';

interface CustomisedTableRowProps {
  data: GenericObject;
  index: number;
}

function CustomisedTableRow({ data, index }: CustomisedTableRowProps) {
  return (
    <StyledTableRow hover tabIndex={-1} key={index}>
      <TableCell>{index}</TableCell>
      {Object.keys(data).map((k) => (
        <TableCell>{data[k]}</TableCell>
      ))}
    </StyledTableRow>
  );
}

export default CustomisedTableRow;
