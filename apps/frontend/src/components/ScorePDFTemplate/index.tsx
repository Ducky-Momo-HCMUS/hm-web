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

Font.register({
  family: 'Roboto',
  fonts: [
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOmCnqEu92Fr1Me5WZLCzYlKw.ttf',
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmEU9vAx05IsDqlA.ttf',
      fontWeight: 500,
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOlCnqEu92Fr1MmWUlvAx05IsDqlA.ttf',
      fontWeight: 700,
    },
    {
      src: 'https://fonts.gstatic.com/s/roboto/v30/KFOkCnqEu92Fr1Mu52xPKTM1K9nz.ttf',
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

interface ScoreTemplateProps {
  data: {
    maSV: string;
    tenSV: string;
    dob: string;
    dtb: number | undefined;
    hocKy:
      | {
          maHK: number;
          hocKy: number;
        }
      | undefined;
    namHoc: number;
    monHoc: any;
  };
}

// Create Document Component
function ScorePDFTemplate({ data }: ScoreTemplateProps) {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const yyyy = today.getFullYear();
  let tongTC = 0;

  if (data.monHoc) {
    data.monHoc.forEach((item) => {
      if (item.dtb >= 5) tongTC += item.soTinChi;
    });
  }

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
        <Table
          data={{
            monHoc: data.monHoc,
            hocKy: data.hocKy?.hocKy || 0,
            namHoc: data.namHoc,
          }}
        />
        <View style={styles.creditTotal}>
          <Text style={{ width: '40%' }}>Tổng số tín chỉ: {tongTC}</Text>
          <Text style={{ width: '20%' }}>
            ĐTB: {data.dtb ? data.dtb : 'Chưa có'}
          </Text>
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
            *Phiếu điểm xuất ra từ hệ thống chỉ mang tính chất tham khảo, không
            có giá trị pháp lý cũng như không thể sử dụng như một phiếu điểm
            chính thức của nhà trường
          </Text>
        </View>
        <View style={styles.signature}>
          <Text style={{ fontStyle: 'italic' }}>
            Tp.HCM, Ngày {dd} tháng {mm} năm {yyyy}
          </Text>
        </View>
      </Page>
    </Document>
  );
}

export default ScorePDFTemplate;
