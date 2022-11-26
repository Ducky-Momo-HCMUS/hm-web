import React from 'react';
import ShowMoreText from 'react-show-more-text';
import { Chip, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { NoteItemData } from '../../../types';

import { StyledCard, StyledFooter, StyledTitle } from './styles';

interface NoteCardItemProps {
  data: NoteItemData;
  onClickDelete: any;
}

function NoteCardItem({ data, onClickDelete }: NoteCardItemProps) {
  const { title, lastUpdate, content } = data;

  return (
    <Grid item xs={3}>
      <StyledCard>
        <Typography color="text.secondary" variant="body2">
          {lastUpdate}
        </Typography>
        <StyledTitle>{title}</StyledTitle>
        <ShowMoreText lines={5} more="Xem thêm" less="Thu gọn" expanded={false}>
          {content}
        </ShowMoreText>
        <StyledFooter>
          <Chip label="Nguyễn Ngọc Thanh Tâm" />
          <IconButton
            size="medium"
            aria-label="delete note"
            component="label"
            onClick={onClickDelete}
          >
            <DeleteIcon fontSize="inherit" color="action" />
          </IconButton>
        </StyledFooter>
      </StyledCard>
    </Grid>
  );
}

export default NoteCardItem;
