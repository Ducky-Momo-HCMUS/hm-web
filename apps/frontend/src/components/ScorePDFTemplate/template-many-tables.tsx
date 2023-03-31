import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

// eslint-disable-next-line import/no-cycle
import { OVERVIEW_CONTENT } from '../../pages/StudentDashboard/AcademicOverview';

import TableGroupSubjects from './TableGroupSubjects';

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'http://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf',
    },
    {
      src: 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf',
      fontWeight: 500,
    },
    {
      src: 'http://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf',
      fontWeight: 700,
    },
    {
      src: 'http://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf',
      fontStyle: 'italic',
    },
  ],
});

// Create styles
const styles = StyleSheet.create({
  all: { fontFamily: 'Roboto', fontSize: '10px', padding: 40 },
  header: {
    flexDirection: 'row',
  },
  header__column: {
    padding: 20,
    fontSize: '10px',
    width: '50%',
    textAlign: 'center',
  },
  title: {
    fontSize: '20px',
    width: '100%',
    textAlign: 'center',
    fontWeight: 700,
  },
  info: {
    paddingTop: 20,
    paddingLeft: 80,
  },
  info_row: {
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 500,
  },
  info__left: {
    width: '20%',
  },
  info__right: {
    width: '80%',
  },
  creditTotal: {
    flexDirection: 'row',
    paddingLeft: 60,
    fontWeight: 500,
  },
  signature: {
    textAlign: 'center',
    paddingLeft: 350,
    paddingTop: 30,
  },
});

interface ScoreTemplateProps {
  data: {
    maSV: string;
    tenSV: string;
    dob: string;
    dtb: number | undefined;
    loaiMonHoc: any;
    tongTC: number;
  };
}

// Create Document Component
function FullScorePDFTemplate({ data }: ScoreTemplateProps) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return (
    <Document>
      <Page size="A4" style={styles.all} wrap>
        <View style={styles.header}>
          <View style={styles.header__column}>
            <Text>ĐẠI HỌC QUỐC GIA TP HCM</Text>
            <Text style={{ fontWeight: 500 }}>
              TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN
            </Text>
          </View>
          <View style={styles.header__column}>
            <Text>CỘNG HOÀ XÃ HỘI CHỦ NGHĨA VIỆT NAM</Text>
            <Text>Độc lập – Tự do – Hạnh phúc</Text>
          </View>
        </View>
        <View style={styles.title}>
          <Text>BẢNG ĐIỂM</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>MSSV:</Text>
            <Text style={styles.info__right}>{data.maSV}</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Họ tên:</Text>
            <Text style={styles.info__right}>{data.tenSV}</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Ngày sinh:</Text>
            <Text style={styles.info__right}>{data.dob}</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Chương trình:</Text>
            <Text style={styles.info__right}>
              Chương trình Cử nhân CNTT theo chuẩn kiểm định quốc tế
            </Text>
          </View>
        </View>
        <View wrap>
          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.daiCuong?.monHoc,
              tichLuy: data.loaiMonHoc?.daiCuong?.tichLuy,
              loaiMon: OVERVIEW_CONTENT[1].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[1].goal,
            }}
          />
          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.coSoNganh.monHoc,
              tichLuy: data.loaiMonHoc?.coSoNganh.tichLuy,
              loaiMon: OVERVIEW_CONTENT[2].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[2].goal,
            }}
          />
          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.batBuocChuyenNganh.monHoc,
              tichLuy: data.loaiMonHoc?.batBuocChuyenNganh.tichLuy,
              loaiMon: OVERVIEW_CONTENT[3].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[3].goal,
            }}
          />
          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.tuChonChuyenNganh.monHoc,
              tichLuy: data.loaiMonHoc?.tuChonChuyenNganh.tichLuy,
              loaiMon: OVERVIEW_CONTENT[4].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[4].goal,
            }}
          />
          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.tuChonTuDo.monHoc,
              tichLuy: data.loaiMonHoc?.tuChonTuDo.tichLuy,
              loaiMon: OVERVIEW_CONTENT[5].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[5].goal,
            }}
          />

          <TableGroupSubjects
            data={{
              monHoc: data.loaiMonHoc?.totNghiep.monHoc,
              tichLuy: data.loaiMonHoc?.totNghiep.tichLuy,
              loaiMon: OVERVIEW_CONTENT[6].title,
              tongTCBatBuoc: +OVERVIEW_CONTENT[6].goal,
            }}
          />
          <View wrap={false}>
            <View style={styles.creditTotal}>
              <Text style={{ width: '40%' }}>
                Tổng số tín chỉ đạt: {data.tongTC}
              </Text>
              <Text style={{ width: '20%' }}>ĐTB: {data.dtb}</Text>
            </View>
            <View
              style={{
                marginLeft: 40,
                marginTop: 30,
                fontStyle: 'italic',
                fontWeight: 500,
              }}
            >
              <Text>
                *Phiếu điểm xuất ra từ hệ thống chỉ mang tính chất tham khảo,
                không có giá trị pháp lý cũng như không thể sử dụng như một
                phiếu điểm chính thức của nhà trường
              </Text>
            </View>
            <View style={styles.signature}>
              <Text style={{ fontStyle: 'italic' }}>
                Tp.HCM, Ngày {dd} tháng {mm} năm {yyyy}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default FullScorePDFTemplate;
