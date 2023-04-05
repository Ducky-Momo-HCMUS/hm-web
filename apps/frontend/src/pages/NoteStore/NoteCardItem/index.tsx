import React from 'react';
import ShowMoreText from 'react-show-more-text';
import { Box, Chip, Grid, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';

import { NoteListItem } from '../../../generated-types';
import { extractContent } from '../../../utils';

import { StyledCard, StyledFooter, StyledTitle } from './styles';

interface NoteCardItemProps {
  data: NoteListItem;
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
  const {
    tieuDe,
    thoiGianTao = '',
    thoiGianSua = '',
    noiDung,
    maSV,
    sinhVien,
  } = data;

  const tenSV = sinhVien?.tenSV;

  return (
    <Grid item xs={3} sx={{ paddingTop: '0!important' }}>
      <StyledCard onClick={onClick}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography color="text.secondary" variant="body2">
            {thoiGianSua
              ? format(new Date(thoiGianSua), 'dd/MM/yyyy HH:mm:ss')
              : format(new Date(thoiGianTao), 'dd/MM/yyyy HH:mm:ss')}
          </Typography>
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
        </Box>

        <StyledTitle>{tieuDe}</StyledTitle>
        <ShowMoreText
          className="show-more-text"
          lines={5}
          more="Xem thêm"
          less="Thu gọn"
          expanded={false}
          onClick={onClickExpand}
        >
          {extractContent(noiDung)}
        </ShowMoreText>
        <StyledFooter>
          <Box>
            {maSV && <Chip label={`${maSV} - ${tenSV}`} color="primary" />}
          </Box>
        </StyledFooter>
      </StyledCard>
    </Grid>
  );
}

export default NoteCardItem;
