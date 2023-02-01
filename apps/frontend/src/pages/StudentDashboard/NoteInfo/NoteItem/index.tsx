import React, { useMemo } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

import { StudentNote } from '../../../../generated-types';

import { StyledContent, StyledListItem, StyledTag } from './styles';

interface NoteItemProps {
  selected: number;
  data: StudentNote;
  onClick: any;
  onClickDelete: any;
}

function NoteItem({ selected, data, onClick, onClickDelete }: NoteItemProps) {
  const { maGC, tieuDe, thoiGianSua, thoiGianTao, ghiChuTag = [] } = data;
  const isActive = useMemo(() => maGC === selected, [maGC, selected]);

  return (
    <StyledListItem divider onClick={onClick} active={isActive}>
      <StyledContent>
        <Typography variant="body1">{tieuDe}</Typography>
        <Typography variant="body2">
          {thoiGianSua
            ? format(new Date(thoiGianSua), 'dd/MM/yyyy HH:mm:ss')
            : format(new Date(thoiGianTao), 'dd/MM/yyyy HH:mm:ss')}
        </Typography>
        <Box>
          {ghiChuTag?.map((item) => (
            <StyledTag label={item.tag?.tenTag} />
          ))}
        </Box>
      </StyledContent>
      <IconButton
        size="large"
        aria-label="delete note"
        component="label"
        onClick={onClickDelete}
      >
        <DeleteIcon fontSize="inherit" color="action" />
      </IconButton>
    </StyledListItem>
  );
}

export default NoteItem;
