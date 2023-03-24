import { AppBar, Box, Tab, Tabs } from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import TabPanel from '../../../../components/TabPanel';
import AsyncDataRenderer from '../../../../components/AsyncDataRenderer';
import {
  StudentOverviewResult,
  useStudentDetailSubjectsResultLazyQuery,
} from '../../../../generated-types';

import AcademicTable from './AcademicTable';

interface AcademicResultProps {
  studentOverviewResult: Omit<StudentOverviewResult, 'tenCN | dtb'>;
}

function AcademicResult({ studentOverviewResult }: AcademicResultProps) {
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
          subject = 'daiCuong';
          break;
        case 1:
          subject = 'coSoNganh';
          break;
        case 2:
          subject = 'batBuocNganh';
          break;
        case 3:
          subject = 'tuChonChuyenNganh';
          break;
        case 4:
          subject = 'tuChonTuDo';
          break;
        case 5:
          subject = 'totNghiep';
          break;
        default:
          break;
      }

      getStudentDetailSubjectsResult({
        variables: {
          studentId: id,
          subject,
        },
        fetchPolicy: 'no-cache',
      });
    },
    [getStudentDetailSubjectsResult, id]
  );

  useEffect(() => {
    getStudentDetailSubjectsResult({
      variables: {
        studentId: id,
        subject: 'daiCuong',
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
          <Tab
            label={`Giáo dục đại cương (${studentOverviewResult.daiCuong}/56)`}
          />
          <Tab label={`Cơ sở ngành (${studentOverviewResult.coSoNganh}/38)`} />
          <Tab
            label={`Bắt buộc ngành (${studentOverviewResult.batBuocChuyenNganh}/16)`}
          />
          <Tab
            label={`Tự chọn ngành (${studentOverviewResult.tuChonChuyenNganh}/8)`}
          />
          <Tab label={`Tự chọn tự do (${studentOverviewResult.tuChonTuDo})`} />
          <Tab label={`Tốt nghiệp (${studentOverviewResult.totNghiep}/10)`} />
        </Tabs>
      </AppBar>
      <AsyncDataRenderer
        loading={studentDetailSubjectsResultLoading}
        data={studentDetailSubjectsResultData}
      >
        <TabPanel index={0} value={selectedTab}>
          <AcademicTable
            header="Giáo dục đại cương"
            description={`Tích lũy: ${studentOverviewResult.daiCuong}/56`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={1} value={selectedTab}>
          <AcademicTable
            header="Kiến thức cơ sở ngành"
            description={`Tích lũy: ${studentOverviewResult.coSoNganh}/38`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={2} value={selectedTab}>
          <AcademicTable
            header="Kiến thức bắt buộc ngành"
            description={`Tích lũy: ${studentOverviewResult.batBuocChuyenNganh}/16`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={3} value={selectedTab}>
          <AcademicTable
            header="Kiến thức tự chọn ngành"
            description={`Tích lũy: ${studentOverviewResult.tuChonChuyenNganh}/8`}
            data={data}
          />
        </TabPanel>
        <TabPanel index={4} value={selectedTab}>
          <AcademicTable header="Kiến thức tự chọn tự do" data={data} />
        </TabPanel>
        <TabPanel index={5} value={selectedTab}>
          <AcademicTable
            header="Kiến thức tốt nghiệp"
            description={`Tích lũy: ${studentOverviewResult.totNghiep}/10`}
            data={data}
          />
        </TabPanel>
      </AsyncDataRenderer>
    </Box>
  );
}

export default AcademicResult;
