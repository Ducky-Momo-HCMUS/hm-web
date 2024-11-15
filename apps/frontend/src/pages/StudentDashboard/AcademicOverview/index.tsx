import { Box, Button, Typography } from '@mui/material';
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { format } from 'date-fns';

// eslint-disable-next-line import/no-cycle
import FullScorePDFTemplate from '../../../components/ScorePDFTemplate/template-many-tables';
import AsyncDataRenderer from '../../../components/AsyncDataRenderer';
import {
  StyledBreadCrumbs,
  StyledStickyBox,
  StyledTitle,
} from '../../../components/styles';
import {
  StudentOverviewResult,
  useStudentAllSubjectsResultQuery,
  useStudentOverviewResultQuery,
} from '../../../generated-types';

import AcademicInfo from './AcademicInfo';
import AcademicResult from './AcademicResult';

export const OVERVIEW_CONTENT = [
  { title: 'Chuyên ngành', goal: '' },
  { title: 'Giáo dục đại cương', goal: '56' },
  { title: 'Kiến thức cơ sở ngành', goal: '38' },
  { title: 'Kiến thức bắt buộc ngành', goal: '16' },
  { title: 'Kiến thức tự chọn ngành', goal: '8' },
  { title: 'Kiến thức tự chọn tự do', goal: '' },
  { title: 'Kiến thức tốt nghiệp', goal: '10' },
  { title: 'Tổng tín chỉ tích luỹ', goal: '138' },
  { title: 'Chứng chỉ ngoại ngữ', goal: '' },
  { title: 'Điểm trung bình', goal: '' },
];

function AcademicOverview() {
  const { id = '' } = useParams();
  const { data: studentOverviewResultData } = useStudentOverviewResultQuery({
    variables: {
      studentId: id,
    },
  });

  const studentOverviewResult = useMemo(() => {
    const data = studentOverviewResultData?.studentOverviewResult;
    return {
      daiCuong: data?.daiCuong || 0,
      coSoNganh: data?.coSoNganh || 0,
      batBuocChuyenNganh: data?.batBuocChuyenNganh || 0,
      tuChonChuyenNganh: data?.tuChonChuyenNganh || 0,
      tuChonTuDo: data?.tuChonTuDo || 0,
      totNghiep: data?.totNghiep || 0,
      dtb: data?.dtb,
    } as StudentOverviewResult;
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
      data?.ngoaiNgu ? 'Đã nộp' : 'Chưa nộp',
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

  const { loading: allSubjectsResultLoading, data: allSubjectsResultData } =
    useStudentAllSubjectsResultQuery({
      variables: {
        studentId: id,
      },
    });

  const { subjectList, studentDetail } = useMemo(
    () => ({
      subjectList: allSubjectsResultData?.studentAllSubjectsResult.result || [],
      studentDetail: allSubjectsResultData?.studentAllSubjectsResult.sinhVien,
    }),
    [
      allSubjectsResultData?.studentAllSubjectsResult.result,
      allSubjectsResultData?.studentAllSubjectsResult.sinhVien,
    ]
  );

  return (
    <>
      <StyledStickyBox sx={{ paddingBottom: 0 }}>
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
          <AsyncDataRenderer
            loading={allSubjectsResultLoading}
            data={allSubjectsResultData}
          >
            <PDFDownloadLink
              document={
                <FullScorePDFTemplate
                  data={{
                    maSV: id,
                    tenSV: studentDetail?.tenSV || '',
                    dob: studentDetail
                      ? format(new Date(studentDetail?.dob), 'dd/MM/yyyy')
                      : '',
                    dtb: studentOverviewResult.dtb,
                    loaiMonHoc: subjectList,
                    tongTCDaDat:
                      studentOverviewResultData?.studentOverviewResult
                        ?.tongTC || 0,
                    ngoaiNgu: studentOverviewResultData?.studentOverviewResult
                      ?.ngoaiNgu
                      ? 'Đã nộp'
                      : 'Chưa nộp',
                  }}
                />
              }
              fileName={`PhieuDiem_${id}`}
            >
              {({ loading }) =>
                loading ? (
                  <Button variant="contained" disabled>
                    Xuất phiếu điểm
                  </Button>
                ) : (
                  <Button variant="contained">Xuất phiếu điểm</Button>
                )
              }
            </PDFDownloadLink>
          </AsyncDataRenderer>
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
