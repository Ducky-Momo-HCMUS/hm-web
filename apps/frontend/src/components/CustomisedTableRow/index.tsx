import { TableCell } from '@mui/material';
import React from 'react';

import { GenericObject } from '../../types';
import { StyledTableRow } from '../../pages/ClassDetail/ClassTable/styles';
import { StyledTableCell } from '../styles';
import { renderGPA10WithProperColor } from '../../utils';

interface CustomisedTableRowProps {
  data: GenericObject;
  index: number;
}

function CustomisedTableRow({ data, index }: CustomisedTableRowProps) {
  return (
    <StyledTableRow hover tabIndex={-1} key={index}>
      <TableCell>{index}</TableCell>
      {Object.keys(data).map((k) =>
        typeof k === 'number' ? (
          <StyledTableCell>
            {renderGPA10WithProperColor(data[k] as number)}
          </StyledTableCell>
        ) : (
          <TableCell>{data[k]}</TableCell>
        )
      )}
    </StyledTableRow>
  );
}

export default CustomisedTableRow;
