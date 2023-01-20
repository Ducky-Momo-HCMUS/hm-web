import { AppBar, Box, Tab, Tabs } from '@mui/material';
import React, { useCallback, useState } from 'react';

import TabPanel from '../../../../components/TabPanel';
import {
  BAT_BUOC_NGANH_DATA,
  CO_SO_NGANH_DATA,
  LY_LUAN_CHINH_TRI_DATA,
  TOT_NGHIEP_DATA,
  TU_CHON_NGANH_DATA,
  TU_CHON_TU_DO_DATA,
} from '../../../../mocks';

import AcademicTable from './AcademicTable';

function AcademicResult() {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);
    },
    []
  );

  return (
    <Box mt={3}>
      <AppBar position="static">
        <Tabs
          value={selectedTab}
          onChange={handleChangeTab}
          indicatorColor="secondary"
          textColor="inherit"
          variant="scrollable"
        >
          <Tab label="Giáo dục đại cương" />
          <Tab label="Cơ sở ngành" />
          <Tab label="Bắt buộc ngành" />
          <Tab label="Tự chọn ngành" />
          <Tab label="Tự chọn tự do" />
          <Tab label="Tốt nghiệp" />
        </Tabs>
      </AppBar>
      <TabPanel index={0} value={selectedTab}>
        <AcademicTable
          header="Giáo dục đại cương"
          description="Tích lũy: 56/56"
          data={LY_LUAN_CHINH_TRI_DATA}
        />
      </TabPanel>
      <TabPanel index={1} value={selectedTab}>
        <AcademicTable
          header="Kiến thức cơ sở ngành"
          description="Tích lũy: 38/38"
          data={CO_SO_NGANH_DATA}
        />
      </TabPanel>
      <TabPanel index={2} value={selectedTab}>
        <AcademicTable
          header="Kiến thức bắt buộc ngành"
          description="Tích lũy: 12/16"
          data={BAT_BUOC_NGANH_DATA}
        />
      </TabPanel>
      <TabPanel index={3} value={selectedTab}>
        <AcademicTable
          header="Kiến thức tự chọn ngành"
          description="Tích lũy: 8/8"
          data={TU_CHON_NGANH_DATA}
        />
      </TabPanel>
      <TabPanel index={4} value={selectedTab}>
        <AcademicTable
          header="Kiến thức tự chọn tự do"
          description="Tích lũy: 4"
          data={TU_CHON_TU_DO_DATA}
        />
      </TabPanel>
      <TabPanel index={5} value={selectedTab}>
        <AcademicTable
          header="Kiến thức tốt nghiệp"
          description="Tích lũy: 0/10"
          data={TOT_NGHIEP_DATA}
        />
      </TabPanel>
    </Box>
  );
}

export default AcademicResult;
