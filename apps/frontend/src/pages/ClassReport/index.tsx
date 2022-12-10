/* eslint-disable react/jsx-props-no-spreading */
import {
  AppBar,
  Box,
  Button,
  InputLabel,
  Link,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useCallback, useState } from 'react';
import { useParams } from 'react-router-dom';

import Header from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledFormControl,
  StyledTitle,
} from '../../components/styles';
import TabPanel from '../../components/TabPanel';

import ClassOverview from './ClassOverview';
import PostponeExam from './PostponeExam';

interface State {
  semester: string;
}

function ClassReport() {
  const { id } = useParams();
  const [values, setValues] = useState<State>({
    semester: 'all',
  });
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    },
    []
  );

  return (
    <>
      <Header isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle variant="h1">Báo cáo lớp học</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Trang chủ
          </Link>
          <Link underline="hover" color="inherit" href={`/classes/${id}`}>
            Tổng quan lớp học
          </Link>
          <Typography color="text.primary">Báo cáo lớp học</Typography>
        </StyledBreadCrumbs>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledFormControl>
            <InputLabel id="semester-select-label">Học kỳ - năm học</InputLabel>
            <Select
              labelId="year-select-label"
              id="year-select"
              value={values.semester}
              label="Học kỳ - năm học"
              onChange={handleChange('semester')}
            >
              <MenuItem value="all">Tất cả</MenuItem>
              <MenuItem value="1-2019">HK1 2019-2020</MenuItem>
              <MenuItem value="2-2019">HK2 2019-2020</MenuItem>
              <MenuItem value="3-2019">HK3 2019-2020</MenuItem>
            </Select>
          </StyledFormControl>
          <Button sx={{ textTransform: 'uppercase' }} variant="contained">
            Xuất báo cáo
          </Button>
        </Box>
        <Box sx={{ marginTop: '1rem' }}>
          <AppBar position="static">
            <Tabs
              value={selectedTab}
              onChange={handleChangeTab}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Tổng kết lớp" />
              <Tab label="Hoãn/vắng thi" />
            </Tabs>
          </AppBar>
          <TabPanel index={0} value={selectedTab}>
            <ClassOverview />
          </TabPanel>
          <TabPanel index={1} value={selectedTab}>
            <PostponeExam />
          </TabPanel>
        </Box>
      </StyledContentWrapper>
    </>
  );
}

export default ClassReport;
