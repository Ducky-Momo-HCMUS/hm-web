import { Box, Button, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';

import { MOCK_DATA_EXPORT } from '../../../components/ScorePDFTemplate/mock';
import ScorePDFTemplate from '../../../components/ScorePDFTemplate';
import {
  StyledBreadCrumbs,
  StyledStickyBox,
  StyledTitle,
} from '../../../components/styles';
import {
  StudentDetailQuery,
  StudentOverviewResult,
  useStudentOverviewResultQuery,
} from '../../../generated-types';

import AcademicInfo from './AcademicInfo';
import AcademicResult from './AcademicResult';

const OVERVIEW_CONTENT = [
  { title: 'Chuyên ngành', goal: '' },
  { title: 'Giáo dục đại cương', goal: '56' },
  { title: 'Kiến thức cơ sở ngành', goal: '38' },
  { title: 'Kiến thức bắt buộc ngành', goal: '16' },
  { title: 'Kiến thức tự chọn ngành', goal: '8' },
  { title: 'Kiến thức tự chọn tự do', goal: '' },
  { title: 'Kiến thức tốt nghiệp', goal: '10' },
  { title: 'Tổng tín chỉ tích luỹ', goal: '138' },
  { title: 'Điểm trung bình', goal: '' },
];

function AcademicOverview() {
  const { id = '' } = useParams();
  const { data: studentOverviewResultData } = useStudentOverviewResultQuery({
    variables: {
      studentId: id,
    },
  });

  const handleExportScoreFile = () => {
    console.log('xuất phiếu điểm');
  };

  const studentOverviewResult = useMemo(() => {
    const data = studentOverviewResultData?.studentOverviewResult;
    return {
      daiCuong: data?.daiCuong || 0,
      coSoNganh: data?.coSoNganh || 0,
      batBuocChuyenNganh: data?.batBuocChuyenNganh || 0,
      tuChonChuyenNganh: data?.tuChonChuyenNganh || 0,
      tuChonTuDo: data?.tuChonTuDo || 0,
      totNghiep: data?.totNghiep || 0,
    } as Omit<StudentOverviewResult, 'tenCN | dtb'>;
  }, [studentOverviewResultData?.studentOverviewResult]);

  const mappedData = useMemo(() => {
    const data = studentOverviewResultData?.studentOverviewResult;
    const result = [
      data?.tenCN || 'Chưa có',
      data?.daiCuong || 0,
      data?.coSoNganh || 0,
      data?.batBuocChuyenNganh || 0,
      data?.tuChonChuyenNganh || 0,
      data?.tuChonTuDo || 0,
      data?.totNghiep || 0,
      data?.tongTC || 0,
      data?.dtb || 'Chưa có',
    ];

    return OVERVIEW_CONTENT.map((item, index) => ({
      title: OVERVIEW_CONTENT[index].title,
      content:
        OVERVIEW_CONTENT[index].goal.length > 0
          ? `${result[index]}/${OVERVIEW_CONTENT[index].goal}`
          : `${result[index]}`,
    }));
  }, [studentOverviewResultData?.studentOverviewResult]);

  const { studentDetail } = client.readQuery({
    query: GET_STUDENT_DETAIL,
    variables: {
      studentId: id,
    },
  }) as StudentDetailQuery;

  console.log('student', studentDetail);

  return (
    <>
      <StyledStickyBox>
        <StyledTitle variant="h1">Kết quả học tập</StyledTitle>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <StyledBreadCrumbs sx={{ marginBottom: 0 }} aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Typography color="text.primary">{id}</Typography>
            <Typography color="text.primary">Kết quả học tập</Typography>
          </StyledBreadCrumbs>
          <PDFDownloadLink
            document={<ScorePDFTemplate data={MOCK_DATA_EXPORT} />}
            fileName={`PhieuDiem_${MOCK_DATA_EXPORT.maSV}`}
          >
            {({ loading }) =>
              loading ? (
                <Button variant="contained" disabled>
                  Xuất phiếu điểm
                </Button>
              ) : (
                <Button variant="contained" onClick={handleExportScoreFile}>
                  Xuất phiếu điểm
                </Button>
              )
            }
          </PDFDownloadLink>
        </Box>
      </StyledStickyBox>
      <Box mt={3}>
        <AcademicInfo infoList={mappedData} />
        <AcademicResult studentOverviewResult={studentOverviewResult} />
      </Box>
    </>
  );
}

export default AcademicOverview;
