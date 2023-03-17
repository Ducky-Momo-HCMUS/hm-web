import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import Table from './Table';

// Register Font
// Font.register({
//   family: 'Roboto',
//   src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf',
// });
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
  all: { fontFamily: 'Roboto', fontSize: '10px' },
  header: {
    flexDirection: 'row',
  },
  header__column: {
    margin: 20,
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
  info: { marginTop: 20, marginLeft: 80 },
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
    marginLeft: 60,
    fontWeight: 500,
  },
  signature: {
    textAlign: 'center',
    marginLeft: 350,
    marginTop: 30,
  },
});

// Create Document Component
function ScorePDFTemplate({ data }: { data: any }) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();

  return (
    <Document>
      <Page size="A4" style={styles.all}>
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
        <Table data={data.monHoc} />
        <View style={styles.creditTotal}>
          <Text style={{ width: '40%' }}>Tổng số tín chỉ: {data.tongTC}</Text>
          <Text style={{ width: '40%' }}>
            Tổng số tín chỉ đạt: {data.tongTCDaDat}
          </Text>
          <Text style={{ width: '20%' }}>ĐTB: {data.dtb}</Text>
        </View>
        <View style={styles.signature}>
          <Text style={{ fontStyle: 'italic' }}>
            Tp.HCM, Ngày {dd} tháng {mm} năm {yyyy}
          </Text>
          <Text>TL. HIỆU TRƯỞNG</Text>
          <Text>Trưởng Phòng Đào Tạo</Text>
        </View>
      </Page>
    </Document>
  );
}

export default ScorePDFTemplate;
