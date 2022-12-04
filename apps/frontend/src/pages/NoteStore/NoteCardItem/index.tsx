import React from 'react';
import ShowMoreText from 'react-show-more-text';
import { Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { extractContent } from '../../../utils';
import { NoteItemData } from '../../../types';

import { StyledCard, StyledFooter, StyledTitle } from './styles';

interface NoteCardItemProps {
  data: NoteItemData;
  onClick: any;
  onClickDelete: any;
  onClickExpand: any;
}

function NoteCardItem({
  data,
  onClick,
  onClickDelete,
  onClickExpand,
}: NoteCardItemProps) {
  const { title, lastUpdate, content } = data;

  return (
    <Grid item xs={3}>
      <StyledCard onClick={onClick}>
        <Typography color="text.secondary" variant="body2">
          {lastUpdate}
        </Typography>
        <StyledTitle>{title}</StyledTitle>
        <ShowMoreText
          className="show-more-text"
          lines={5}
          more="Xem thêm"
          less="Thu gọn"
          expanded={false}
          onClick={onClickExpand}
        >
          {extractContent(content)}
        </ShowMoreText>
        <StyledFooter>
          <Typography component="span">Nguyễn Ngọc Thanh Tâm</Typography>
          <IconButton
            size="medium"
            aria-label="delete note"
            component="label"
            onClick={(e) => {
              e.stopPropagation();
              onClickDelete();
            }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <DeleteIcon fontSize="inherit" color="action" />
          </IconButton>
        </StyledFooter>
      </StyledCard>
    </Grid>
  );
}

export default NoteCardItem;
