import React from 'react';
import { StyleSheet, View, Text } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  tableContainer: {
    margin: 10,
    marginLeft: 30,
    marginRight: 30,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#D5D5D5',
    fontWeight: 500,
  },
  tableRow: { flexDirection: 'row' },
  tableCell: {
    border: '1px solid #000',
    paddingLeft: 5,
  },
  noLeftBorder: {
    borderLeft: 'none',
  },
  noTopBorder: {
    borderTop: 'none',
  },
  noLeftTopBorder: {
    borderLeft: 'none',
    borderTop: 'none',
  },
});

interface TableProps {
  data: {
    monHoc: {
      maMH: string;
      tenMH: string;
      soTC: number;
      dtb: number;
    }[];
    tichLuy: number;
    tongTCBatBuoc: number;
    loaiMon: string;
  };
}

function TableGroupSubjects({ data }: TableProps) {
  if (data.monHoc?.length !== 0)
    return (
      <View style={styles.tableContainer} wrap={false}>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, { width: '60%' }]}>
            {data.loaiMon}
          </Text>
          <Text
            style={[styles.tableCell, { width: '40%' }, styles.noLeftBorder]}
          >
            Tích lũy: {data.tichLuy || 0}/{data.tongTCBatBuoc}
          </Text>
        </View>

        {/* -----------row-------------  */}
        <View style={[styles.tableRow, { fontWeight: 500 }]}>
          <View style={[styles.tableRow, { width: '60%' }]}>
            <Text
              style={[styles.tableCell, { width: '10%' }, styles.noTopBorder]}
            >
              STT
            </Text>
            <Text
              style={[
                styles.tableCell,
                { width: '30%' },
                styles.noLeftTopBorder,
              ]}
            >
              Mã môn học
            </Text>
            <Text
              style={[
                styles.tableCell,
                { width: '60%' },
                styles.noLeftTopBorder,
              ]}
            >
              Tên môn học
            </Text>
          </View>
          <View style={[styles.tableRow, { width: '40%' }]}>
            <Text
              style={[
                styles.tableCell,
                { width: '50%', textAlign: 'center' },
                styles.noLeftTopBorder,
              ]}
            >
              Số tín chỉ
            </Text>
            <Text
              style={[
                styles.tableCell,
                { width: '50%', textAlign: 'center' },
                styles.noLeftTopBorder,
              ]}
            >
              Điểm số
            </Text>
          </View>
        </View>
        {/* -----------end row-------------  */}
        {/* -----------row-------------  */}
        {data.monHoc &&
          data.monHoc.map((item, i) => (
            <View key={i} style={styles.tableRow}>
              <View style={[styles.tableRow, { width: '60%' }]}>
                <Text
                  style={[
                    styles.tableCell,
                    { width: '10%' },
                    styles.noTopBorder,
                  ]}
                >
                  {i + 1}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: '30%' },
                    styles.noLeftTopBorder,
                  ]}
                >
                  {item.maMH}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: '60%' },
                    styles.noLeftTopBorder,
                  ]}
                >
                  {item.tenMH}
                </Text>
              </View>
              <View style={[styles.tableRow, { width: '40%' }]}>
                <Text
                  style={[
                    styles.tableCell,
                    { width: '50%', textAlign: 'center' },
                    styles.noLeftTopBorder,
                  ]}
                >
                  {item.soTC}
                </Text>
                <Text
                  style={[
                    styles.tableCell,
                    { width: '50%', textAlign: 'center' },
                    styles.noLeftTopBorder,
                  ]}
                >
                  {item.dtb}
                </Text>
              </View>
            </View>
          ))}
        {/* -----------end row-------------  */}
      </View>
    );
  return <></>;
}

export default TableGroupSubjects;
