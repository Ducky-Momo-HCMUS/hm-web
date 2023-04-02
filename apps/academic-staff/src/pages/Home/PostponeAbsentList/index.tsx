import React, { useCallback, useMemo, useState } from 'react';
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
import { StyledStickyBox, StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import { groupTermsByYear } from '../ImportFile/utils';
import { useTermListQuery } from '../../../generated-types';
import { MenuProps } from '../../../constants';

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

  const { loading: allTermsLoading, data: allTermsData } = useTermListQuery({});

  const termsData = useMemo(
    () => allTermsData?.termList || [],
    [allTermsData?.termList]
  );

  const mappedData = useMemo(() => groupTermsByYear(termsData), [termsData]);

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { terms } = useMemo(() => {
    const termsByYear = mappedData[values.year || years[years.length - 1]]?.map(
      (data) => ({
        maHK: data.maHK,
        hocKy: data.hocKy,
      })
    );
    return {
      terms: termsByYear || [],
    };
  }, [mappedData, values.year, years]);

  const { initialYear, initialTerm } = useMemo(() => {
    const termsByYear = mappedData[years[years.length - 1]]?.map((data) =>
      data.maHK.toString()
    );
    return {
      initialYear: years[years.length - 1],
      initialTerm: termsByYear?.[termsByYear.length - 1] || '',
    };
  }, [mappedData, years]);

  const termId = useMemo(
    () => (values.semester ? Number(values.semester) : Number(initialTerm)),
    [initialTerm, values.semester]
  );

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Danh sách hoãn/vắng thi</StyledTitle>
        <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
          <StyledFormControl>
            <InputLabel id="year-select-label">Năm học</InputLabel>
            <Select
              sx={{ marginRight: '1rem' }}
              labelId="year-select-label"
              id="year-select"
              value={values.year || initialYear}
              label="Năm học"
              onChange={handleChange('year')}
              MenuProps={MenuProps}
            >
              {years.map((item) => (
                <MenuItem value={item}>
                  {item} - {Number(item) + 1}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
          <StyledFormControl>
            <InputLabel id="semester-select-label">Học kỳ</InputLabel>
            <Select
              labelId="semester-select-label"
              id="semester-select"
              value={values.semester || initialTerm}
              label="Học kỳ"
              onChange={handleChange('semester')}
              MenuProps={MenuProps}
            >
              {terms.map((item) => (
                <MenuItem value={item.maHK}>{item.hocKy}</MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </AsyncDataRenderer>
      </StyledStickyBox>
      <AsyncDataRenderer loading={false} data={[{}]}>
        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
          <AppBar position="static">
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="primary"
              variant="fullWidth"
            >
              <StyledTab label="Danh sách vắng thi" {...a11yProps(0)} />
              <StyledTab label="Danh sách hoãn thi" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <TabPanel value={tabValue} index={0} dir={theme.direction}>
            <AbsentList termId={termId} />
          </TabPanel>
          <TabPanel value={tabValue} index={1} dir={theme.direction}>
            <PostponeList termId={termId} />
          </TabPanel>
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default PostponeAbsentList;
