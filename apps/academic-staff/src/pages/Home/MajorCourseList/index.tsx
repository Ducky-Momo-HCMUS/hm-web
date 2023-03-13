import React from 'react';
import { Box, Tabs, Tab, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import {
  a11yProps,
  StyledTab,
  TabPanel,
} from '../../../components/TabsContainer';
import { StyledTitle } from '../../../components/styles';

import CourseList from './CourseList';
import MajorList from './MajorList';
import MajorResultList from './MajorResult';

function MajorCourseList() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <StyledTitle>Môn học và chuyên ngành</StyledTitle>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <StyledTab label="Danh sách Môn học" {...a11yProps(0)} />
          <StyledTab label="Danh sách Chuyên ngành" {...a11yProps(1)} />
          <StyledTab label="Kết quả chuyên ngành" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} dir={theme.direction}>
        <CourseList />
      </TabPanel>
      <TabPanel value={value} index={1} dir={theme.direction}>
        <MajorList />
      </TabPanel>
      <TabPanel value={value} index={2} dir={theme.direction}>
        <MajorResultList />
      </TabPanel>
    </Box>
  );
}

export default MajorCourseList;
