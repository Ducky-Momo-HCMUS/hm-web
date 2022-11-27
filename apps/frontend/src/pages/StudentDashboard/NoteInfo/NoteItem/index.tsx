import React, { useMemo } from 'react';
import { IconButton, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { NoteItemData } from '../../../../types';

import { StyledContent, StyledListItem, StyledTag } from './styles';

interface NoteItemProps {
  index: number;
  selected: number;
  data: NoteItemData;
  onClick: any;
  onClickDelete: any;
}

function NoteItem({
  index,
  selected,
  data,
  onClick,
  onClickDelete,
}: NoteItemProps) {
  const { title, lastUpdate, tags } = data;
  const isActive = useMemo(() => index === selected, [index, selected]);

  return (
    <StyledListItem divider onClick={onClick} active={isActive}>
      <StyledContent>
        <Typography variant="body1">{title}</Typography>
        <Typography variant="body2">{lastUpdate}</Typography>
        <Box>
          {tags.map((tag) => (
            <StyledTag label={tag} />
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
