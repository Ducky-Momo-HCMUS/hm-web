import React, { useCallback, useState } from 'react';
import {
  AppBar,
  Box,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tabs,
  useTheme,
} from '@mui/material';

import {
  a11yProps,
  StyledTab,
  TabPanel,
} from '../../../components/TabsContainer';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import { MOCK_SCHOOL_YEARS } from '../mock/year';

import AbsentList from './AbsentList';
import PostponeList from './PostponeList';

interface State {
  year: string;
  semester: string;
}

function PostponeAbsentList() {
  const theme = useTheme();
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  const [values, setValues] = useState<State>({
    year: '',
    semester: '',
  });

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  return (
    <Box>
      <StyledTitle>Danh sách hoãn/vắng thi</StyledTitle>
      <AsyncDataRenderer loading={false} data={[{}]}>
        <StyledFormControl>
          <InputLabel id="year-select-label">Năm học</InputLabel>
          <Select
            labelId="year-select-label"
            id="year-select"
            value={values.year || ''}
            label="Năm học"
            onChange={handleChange('year')}
          >
            {MOCK_SCHOOL_YEARS.data.map((item) => (
              <MenuItem value={item.namHocBD}>
                {item.namHocBD} - {item.namHocBD + 1}
              </MenuItem>
            ))}
          </Select>
        </StyledFormControl>
        <StyledFormControl>
          <InputLabel id="semester-select-label">Học kỳ</InputLabel>
          <Select
            labelId="semester-select-label"
            id="semester-select"
            value={values.semester || ''}
            label="Học kỳ"
            onChange={handleChange('semester')}
          >
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </StyledFormControl>
      </AsyncDataRenderer>
      <AsyncDataRenderer loading={false} data={[{}]}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <AppBar position="static">
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              indicatorColor="secondary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <StyledTab label="Danh sách vắng thi" {...a11yProps(0)} />
              <StyledTab label="Danh sách hoãn thi" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0} dir={theme.direction}>
            <AbsentList />
          </TabPanel>
          <TabPanel value={tabValue} index={1} dir={theme.direction}>
            <PostponeList />
          </TabPanel>
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default PostponeAbsentList;
