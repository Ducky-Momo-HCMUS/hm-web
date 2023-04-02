import React, { SyntheticEvent, useCallback, useMemo, useState } from 'react';
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

import EnrolledList from './EnrolledList';
import NotEnrolledList from './NotEnrolledList';

interface State {
  year: string;
  semester: string;
}

function CourseRegisterList() {
  const theme = useTheme();
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event: SyntheticEvent, newValue: number) => {
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

  const { loading: allTermsLoading, data: allTermsData } = useTermListQuery({
    fetchPolicy: 'no-cache',
  });

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

  return (
    <Box>
      <StyledStickyBox>
        <StyledTitle>Tình hình đăng ký học phần</StyledTitle>
        <AsyncDataRenderer loading={allTermsLoading} data={allTermsData}>
          <StyledFormControl sx={{ marginRight: '1rem' }}>
            <InputLabel id="year-select-label">Năm học</InputLabel>
            <Select
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
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
        <AppBar position="static" color="transparent">
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            textColor="inherit"
            indicatorColor="primary"
          >
            <StyledTab label="Danh sách ĐKHP" {...a11yProps(0)} />
            <StyledTab label="Danh sách không ĐKHP" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={tabValue} index={0} dir={theme.direction}>
          <EnrolledList
            termId={
              values.semester ? Number(values.semester) : Number(initialTerm)
            }
          />
        </TabPanel>
        <TabPanel value={tabValue} index={1} dir={theme.direction}>
          <NotEnrolledList
            termId={
              values.semester ? Number(values.semester) : Number(initialTerm)
            }
          />
        </TabPanel>
      </Paper>
    </Box>
  );
}

export default CourseRegisterList;
