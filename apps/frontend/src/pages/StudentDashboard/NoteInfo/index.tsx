import React, { useState } from 'react';
import { Box, Grid, List, TablePagination, Typography } from '@mui/material';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import { Item, StyledDivider, StyledTitle } from '../../../components/styles';
import NoteItem from './NoteItem';
import { StyledDefaultImage, StyledHeader, StyledIconButton } from './styles';
import { NoteItemData } from '../../../types';

const ROWS_PER_PAGE = 7;

function NoteInfo() {
  const [page, setPage] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const notesList: NoteItemData[] = [
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
    {
      title: 'Tình hình học tập môn nhập môn công nghệ phần mềm',
      lastUpdate: '06/11/2022 10:18',
    },
  ];

  return (
    <>
      <StyledTitle variant="h1">Ghi chú sinh viên</StyledTitle>
      <Grid container spacing={3} columns={20}>
        <Grid item xs={8}>
          <Item>
            <List>
              <StyledHeader>
                <Typography component="p" variant="h5">
                  Danh sách ghi chú
                </Typography>
                <Box>
                  <StyledIconButton
                    size="large"
                    aria-label="add note"
                    color="inherit"
                  >
                    <AddCircleOutlineOutlinedIcon fontSize="inherit" />
                  </StyledIconButton>
                  <StyledIconButton
                    size="large"
                    aria-label="filter note"
                    color="inherit"
                  >
                    <FilterAltOutlinedIcon fontSize="inherit" />
                  </StyledIconButton>
                </Box>
              </StyledHeader>
              <StyledDivider />
              {notesList
                .slice(
                  page * ROWS_PER_PAGE,
                  page * ROWS_PER_PAGE + ROWS_PER_PAGE
                )
                .map((item) => (
                  <NoteItem data={item} />
                ))}
            </List>
            <TablePagination
              rowsPerPageOptions={[ROWS_PER_PAGE]}
              component="div"
              count={notesList.length}
              rowsPerPage={ROWS_PER_PAGE}
              page={page}
              onPageChange={handleChangePage}
            />
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <StyledDefaultImage
              src="/img/empty_note_list.svg"
              alt="empty note list"
            />
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

export default NoteInfo;
