import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer';

import Table from '../../components/TablePDF';

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

const data = {
  maSV: '19127189',
  tenSV: 'Hồ Lâm Bảo Khuyên',
  dob: '24/01/2001',
  tongTC: 23,
  tongTCDaDat: 23,
  dtb: 7.83,
};

// Create Document Component
function MyDocument() {
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
            <Text style={styles.info__right}>19127189</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Họ tên:</Text>
            <Text style={styles.info__right}>Hồ Lâm Bảo Khuyên</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Ngày sinh:</Text>
            <Text style={styles.info__right}>24/01/2001</Text>
          </View>
          <View style={styles.info_row}>
            <Text style={styles.info__left}>Chương trình:</Text>
            <Text style={styles.info__right}>
              Chương trình Cử nhân CNTT theo chuẩn kiểm định quốc tế
            </Text>
          </View>
        </View>
        <Table data={data} />
        <View style={styles.creditTotal}>
          <Text style={{ width: '40%' }}>Tổng số tín chỉ: 23</Text>
          <Text style={{ width: '40%' }}>Tổng số tín chỉ đạt: 23</Text>
          <Text style={{ width: '20%' }}>ĐTB: 8.63</Text>
        </View>
        <View style={styles.signature}>
          <Text style={{ fontStyle: 'italic' }}>
            Tp.HCM, Ngày 5 tháng 3 năm 2023
          </Text>
          <Text>TL. HIỆU TRƯỞNG</Text>
          <Text>Trưởng Phòng Đào Tạo</Text>
        </View>
      </Page>
    </Document>
  );
}

export default MyDocument;
