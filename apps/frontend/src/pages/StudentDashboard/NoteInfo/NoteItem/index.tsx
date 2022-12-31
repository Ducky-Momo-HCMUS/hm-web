import React, { useMemo } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { StudentNote } from '../../../../generated-types';

import { StyledContent, StyledListItem, StyledTag } from './styles';

interface NoteItemProps {
  selected: string;
  data: StudentNote;
  onClick: any;
  onClickDelete: any;
}

function NoteItem({ selected, data, onClick, onClickDelete }: NoteItemProps) {
  const { maGC, tieuDe, thoiGianSua, tag } = data;
  const isActive = useMemo(() => maGC === selected, [maGC, selected]);

  return (
    <StyledListItem divider onClick={onClick} active={isActive}>
      <StyledContent>
        <Typography variant="body1">{tieuDe}</Typography>
        <Typography variant="body2">{thoiGianSua}</Typography>
        <Box>
          {tag.map((item) => (
            <StyledTag label={item} />
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
