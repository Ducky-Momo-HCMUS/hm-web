import React, { useCallback, useState } from 'react';
import {
  Box,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from '@mui/material';

import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import { StyledTitle } from '../../../components/styles';
import { StyledFormControl } from '../styles';
import { MOCK_SCHOOL_YEARS } from '../mock/year';

interface State {
  year: string;
  semester: string;
}

function CourseRegisterList() {
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
      <StyledTitle>Điểm rèn luyện</StyledTitle>
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
          something
        </Paper>
      </AsyncDataRenderer>
    </Box>
  );
}

export default CourseRegisterList;
