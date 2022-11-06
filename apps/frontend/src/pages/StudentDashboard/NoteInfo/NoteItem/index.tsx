import React from 'react';
import { IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  StyledContent,
  StyledContentWrapper,
  StyledListItem,
  StyledTag,
} from './styles';
import { NoteItemData } from '../../../../types';

interface NoteItemProps {
  data: NoteItemData;
}

function NoteItem({ data }: NoteItemProps) {
  const { title, lastUpdate } = data;
  return (
    <StyledListItem divider>
      <StyledContentWrapper>
        <StyledContent>
          <Typography variant="body1">{title}</Typography>
          <Typography variant="body2">{lastUpdate}</Typography>
        </StyledContent>
        <StyledTag label="#Sinhvien" />
      </StyledContentWrapper>
      <IconButton size="medium" aria-label="delete note" component="label">
        <DeleteIcon fontSize="inherit" color="action" />
      </IconButton>
    </StyledListItem>
  );
}

export default NoteItem;
