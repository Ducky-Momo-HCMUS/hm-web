import { AppBar, Box, Tab, Tabs } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import TabPanel from '../../../../components/TabPanel';
import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';
import { useStudentDetailSubjectsResultLazyQuery } from '../../../../generated-types';

import AcademicTable from './AcademicTable';

function AcademicResult() {
  const { id = '' } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);

  const [
    getStudentDetailSubjectsResult,
    {
      data: studentDetailSubjectsResultData,
      loading: studentDetailSubjectsResultLoading,
    },
  ] = useStudentDetailSubjectsResultLazyQuery();

  const { tichLuy, data } = useMemo(() => {
    return {
      tichLuy:
        studentDetailSubjectsResultData?.studentDetailSubjectsResult.tichLuy,
      data:
        studentDetailSubjectsResultData?.studentDetailSubjectsResult.monHoc ||
        [],
    };
  }, [studentDetailSubjectsResultData?.studentDetailSubjectsResult]);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
      let subject = '';
      switch (newValue) {
        case 0:
          subject = 'dai-cuong';
          break;
        case 1:
          subject = 'co-so-nganh';
          break;
        case 2:
          subject = 'bat-buoc-nganh';
          break;
        case 3:
          subject = 'tu-chon-chuyen-nganh';
          break;
        case 4:
          subject = 'tu-chon-tu-do';
          break;
        case 5:
          subject = 'tot-nghiep';
          break;
        default:
          break;
      }

      getStudentDetailSubjectsResult({
        variables: {
          studentId: id,
          subject,
        },
      });
    },
    [getStudentDetailSubjectsResult, id]
  );

  useEffect(() => {
    getStudentDetailSubjectsResult({
      variables: {
        studentId: id,
        subject: 'dai-cuong',
      },
    });
  }, [getStudentDetailSubjectsResult, id]);

  return (
    <Box mt={3}>
      <AppBar position="static">
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
        >
          <Tab label="Giáo dục đại cương" />
          <Tab label="Cơ sở ngành" />
          <Tab label="Bắt buộc ngành" />
          <Tab label="Tự chọn ngành" />
          <Tab label="Tự chọn tự do" />
          <Tab label="Tốt nghiệp" />
        </Tabs>
      </AppBar>
      <AsyncDataRenderer loading={studentDetailSubjectsResultLoading}>
        <TabPanel index={0} value={selectedTab}>
          <AcademicTable
            header="Giáo dục đại cương"
            description={`Tích lũy: ${tichLuy}/56`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={1} value={selectedTab}>
          <AcademicTable
            header="Kiến thức cơ sở ngành"
            description={`Tích lũy: ${tichLuy}/38`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={2} value={selectedTab}>
          <AcademicTable
            header="Kiến thức bắt buộc ngành"
            description={`Tích lũy: ${tichLuy}/16`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={3} value={selectedTab}>
          <AcademicTable
            header="Kiến thức tự chọn ngành"
            description={`Tích lũy: ${tichLuy}/8`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={4} value={selectedTab}>
          <AcademicTable header="Kiến thức tự chọn tự do" data={data} />
        </TabPanel>
        <TabPanel index={5} value={selectedTab}>
          <AcademicTable
            header="Kiến thức tốt nghiệp"
            description={`Tích lũy: ${tichLuy}/10`}
            data={data}
          />
        </TabPanel>
      </AsyncDataRenderer>
    </Box>
  );
}

export default AcademicResult;
