import React, { SyntheticEvent, useState } from 'react';
import { Box, Tabs, AppBar, Paper, Tab } from '@mui/material';

import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import TabPanel from '../../../components/TabPanel';

import CourseList from './CourseList';
import MajorList from './MajorList';
import MajorResultList from './MajorResult';

function MajorCourseList() {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Môn học và chuyên ngành</StyledTitle>
        <AppBar position="static" color="transparent">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Danh sách Môn học" />
            <Tab label="Danh sách Chuyên ngành" />
            <Tab label="Kết quả chuyên ngành" />
          </Tabs>
        </AppBar>
      </StyledStickyBox>
      <Paper>
        <TabPanel value={value} index={0}>
          <CourseList />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MajorList />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <MajorResultList />
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default MajorCourseList;
