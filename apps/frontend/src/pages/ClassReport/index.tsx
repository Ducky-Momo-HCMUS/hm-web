import {
  AppBar,
  Box,
  Button,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import AppHeader from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledStickyBox,
  StyledTitle,
} from '../../components/styles';
import TabPanel from '../../components/TabPanel';
import {
  EXAM_ABSENT_LIST_PAGE_SIZE,
  FINAL_RESULT_LIST_PAGE_SIZE,
  POSTPONE_EXAM_LIST_PAGE_SIZE,
} from '../../constants';
import {
  HomeroomFinalResultListItem,
  HomeroomOverviewReport,
  StudentTerm,
  useHomeroomDetailQuery,
  useHomeroomExamAbsentListByTermLazyQuery,
  useHomeroomFinalResultListByTermLazyQuery,
  useHomeroomOverviewReportByTermLazyQuery,
  useHomeroomPostponeExamListByTermLazyQuery,
  useHomeroomReportDetailByTermQuery,
  useHomeroomTermListQuery,
} from '../../generated-types';
import { groupTermsByYear, saveDocumentToFile } from '../../utils';

import ClassOverview from './ClassOverview';
import PostponeExam from './PostponeExam';
import { StyledFormControl } from './styles';
import DocumentCreator, { ExamAbsentListItem } from './document-creator';

interface State {
  year: string;
  term: string;
}

interface Page {
  finalResult: number;
  examAbsent: number;
  postponeExam: number;
}

function ClassReport() {
  const { id = '' } = useParams();

  const [page, setPage] = useState<Page>({
    finalResult: 0,
    examAbsent: 0,
    postponeExam: 0,
  });

  const handleChangeFinalResultPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, finalResult: newPage }));
    },
    []
  );

  const handleChangeExamAbsentPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, examAbsent: newPage }));
    },
    []
  );

  const handleChangePostponeExamPage = useCallback(
    (event: unknown, newPage: number) => {
      setPage((p) => ({ ...p, postponeExam: newPage }));
    },
    []
  );

  const [values, setValues] = useState<State>({
    year: '',
    term: '',
  });
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = useCallback(
    (prop: keyof State) => (event: SelectChangeEvent) => {
      setValues((v) => ({ ...v, [prop]: event.target.value }));
    },
    []
  );

  const { loading: homeroomTermListLoading, data: homeroomTermListData } =
    useHomeroomTermListQuery({
      variables: {
        homeroomId: id,
      },
    });

  const termList = useMemo(
    () => homeroomTermListData?.homeroomTermList || [],
    [homeroomTermListData?.homeroomTermList]
  );

  const mappedData = useMemo(
    () => groupTermsByYear(termList as StudentTerm[]),
    [termList]
  );

  const years = useMemo(() => Object.keys(mappedData), [mappedData]);

  const { terms } = useMemo(() => {
    const termsByYear = mappedData[values.year || years[years.length - 1]]?.map(
      (data) => ({
        maHK: data.maHK,
        hocKy: data.hocKy,
      })
    );
    return {
      terms: termsByYear || [],
    };
  }, [mappedData, values.year, years]);

  const { initialYear, initialTerm } = useMemo(() => {
    const termsByYear = mappedData[years[years.length - 1]]?.map((data) =>
      data.maHK.toString()
    );
    return {
      initialYear: years[years.length - 1],
      initialTerm: termsByYear?.[termsByYear.length - 1] || '',
    };
  }, [mappedData, years]);

  const [
    getHomeroomOverviewReportByTerm,
    {
      loading: homeroomOverviewReportLoading,
      data: homeroomOverviewReportData,
    },
  ] = useHomeroomOverviewReportByTermLazyQuery();

  const homeroomOverviewReport = useMemo(
    () =>
      homeroomOverviewReportData?.homeroomOverviewReportByTerm ||
      ({ siSo: {}, hocTap: {}, drl: {} } as HomeroomOverviewReport),
    [homeroomOverviewReportData?.homeroomOverviewReportByTerm]
  );

  const [
    getHomeroomFinalResultListByTerm,
    {
      loading: homeroomFinalResultListLoading,
      data: homeroomFinalResultListData,
    },
  ] = useHomeroomFinalResultListByTermLazyQuery();

  const { homeroomFinalResultList, homeroomFinalResultListLength } = useMemo(
    () => ({
      homeroomFinalResultList:
        homeroomFinalResultListData?.homeroomFinalResultListByTerm.formatted ||
        [],
      homeroomFinalResultListLength:
        homeroomFinalResultListData?.homeroomFinalResultListByTerm.total || 0,
    }),
    [
      homeroomFinalResultListData?.homeroomFinalResultListByTerm.formatted,
      homeroomFinalResultListData?.homeroomFinalResultListByTerm.total,
    ]
  );

  const [
    getHomeroomExamAbsentListByTerm,
    { data: homeroomExamAbsentListData },
  ] = useHomeroomExamAbsentListByTermLazyQuery();

  const { homeroomExamAbsentList, homeroomExamAbsentListLength } =
    useMemo(() => {
      const examAbsentListData =
        homeroomExamAbsentListData?.homeroomExamAbsentListByTerm.data || [];

      return {
        homeroomExamAbsentList: examAbsentListData.map((item) => ({
          maSV: item.sinhVien.maSV,
          tenSV: item.sinhVien.tenSV,
          tenMH: item.monHoc.tenMH,
        })) as ExamAbsentListItem[],
        homeroomExamAbsentListLength:
          homeroomExamAbsentListData?.homeroomExamAbsentListByTerm.total || 0,
      };
    }, [homeroomExamAbsentListData?.homeroomExamAbsentListByTerm]);

  const [
    getHomeroomPostponeExamListByTerm,
    { data: homeroomPostponeExamListData },
  ] = useHomeroomPostponeExamListByTermLazyQuery();

  const { homeroomPostponeExamList, homeroomPostponeExamListLength } =
    useMemo(() => {
      const postponeExamListData =
        homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.data || [];

      return {
        homeroomPostponeExamList: postponeExamListData.map((item) => ({
          maSV: item.sinhVien.maSV,
          tenSV: item.sinhVien.tenSV,
          tenMH: item.monHoc.tenMH,
        })) as ExamAbsentListItem[],
        homeroomPostponeExamListLength:
          homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.total ||
          0,
      };
    }, [
      homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.data,
      homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.total,
    ]);

  const selectedTerm = useMemo(
    () => (values.term ? Number(values.term) : Number(initialTerm)),
    [initialTerm, values.term]
  );

  useEffect(() => {
    if (!homeroomTermListLoading) {
      if (selectedTab === 0) {
        getHomeroomOverviewReportByTerm({
          variables: {
            homeroomId: id,
            term: selectedTerm,
          },
        });
        getHomeroomFinalResultListByTerm({
          variables: {
            homeroomId: id,
            term: selectedTerm,
            page: page.finalResult + 1,
            size: FINAL_RESULT_LIST_PAGE_SIZE,
          },
        });

        return;
      }

      getHomeroomExamAbsentListByTerm({
        variables: {
          homeroomId: id,
          term: selectedTerm,
          page: page.examAbsent + 1,
          size: EXAM_ABSENT_LIST_PAGE_SIZE,
        },
      });

      getHomeroomPostponeExamListByTerm({
        variables: {
          homeroomId: id,
          term: selectedTerm,
          page: page.postponeExam + 1,
          size: POSTPONE_EXAM_LIST_PAGE_SIZE,
        },
      });
    }
  }, [
    getHomeroomExamAbsentListByTerm,
    getHomeroomPostponeExamListByTerm,
    getHomeroomFinalResultListByTerm,
    getHomeroomOverviewReportByTerm,
    homeroomTermListLoading,
    id,
    page,
    selectedTerm,
    selectedTab,
  ]);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);

      switch (newValue) {
        case 0:
          getHomeroomOverviewReportByTerm({
            variables: {
              homeroomId: id,
              term: selectedTerm,
            },
          });
          getHomeroomFinalResultListByTerm({
            variables: {
              homeroomId: id,
              term: selectedTerm,
              page: 1,
              size: FINAL_RESULT_LIST_PAGE_SIZE,
            },
          });
          break;
        case 1:
          getHomeroomExamAbsentListByTerm({
            variables: {
              homeroomId: id,
              term: selectedTerm,
              page: 1,
              size: EXAM_ABSENT_LIST_PAGE_SIZE,
            },
          });
          getHomeroomPostponeExamListByTerm({
            variables: {
              homeroomId: id,
              term: selectedTerm,
              page: 1,
              size: POSTPONE_EXAM_LIST_PAGE_SIZE,
            },
          });
          break;
        default:
          break;
      }
    },
    [
      getHomeroomOverviewReportByTerm,
      id,
      selectedTerm,
      getHomeroomFinalResultListByTerm,
      getHomeroomExamAbsentListByTerm,
      getHomeroomPostponeExamListByTerm,
    ]
  );

  const { data: homeroomDetailData } = useHomeroomDetailQuery({
    variables: {
      homeroomId: id,
    },
  });

  const homeroomDetail = useMemo(
    () =>
      homeroomDetailData?.homeroomDetail || {
        giaoVien: {
          tenGV: '',
        },
        siSo: '',
      },
    [homeroomDetailData?.homeroomDetail]
  );

  const {
    loading: homeroomReportDetailLoading,
    data: homeroomReportDetailData,
  } = useHomeroomReportDetailByTermQuery({
    variables: {
      homeroomId: id,
      term: selectedTerm,
    },
    skip: homeroomTermListLoading,
  });

  function convertName(tenGVCN: string) {
    const words = tenGVCN.split(' ');
    let name = '';
    words.forEach((word, index) => {
      if (index === words.length - 1) {
        name += word;
        return;
      }

      name += word[0];
    });

    return name;
  }

  const handleExportDocument = useCallback(
    (event) => {
      event.preventDefault();
      const documentCreator = new DocumentCreator();
      const namHocBD = values.year || initialYear;
      const hocKy =
        terms.find((item) => item.maHK === selectedTerm)?.hocKy.toString() ||
        '';

      const doc = documentCreator.create({
        hocKy,
        namHocBD,
        tenGVCN: homeroomDetail?.giaoVien.tenGV,
        lopChuNhiem: id,
        homeroomOverviewReport: homeroomReportDetailData
          ?.homeroomReportDetailByTerm.overviewReport as HomeroomOverviewReport,
        homeroomExamAbsentList:
          homeroomReportDetailData?.homeroomReportDetailByTerm.examAbsent.data.map(
            (item) => ({
              maSV: item.sinhVien.maSV,
              tenSV: item.sinhVien.tenSV,
              tenMH: item.monHoc.tenMH,
            })
          ) as ExamAbsentListItem[],
        homeroomPostponeExamList:
          homeroomReportDetailData?.homeroomReportDetailByTerm.examPostpone.data.map(
            (item) => ({
              maSV: item.sinhVien.maSV,
              tenSV: item.sinhVien.tenSV,
              tenMH: item.monHoc.tenMH,
            })
          ) as ExamAbsentListItem[],
        homeroomFinalResultList: homeroomReportDetailData
          ?.homeroomReportDetailByTerm.finalResult
          .formatted as HomeroomFinalResultListItem[],
      });
      saveDocumentToFile(
        doc,
        `${namHocBD.slice(2)}${String(Number(namHocBD) + 1).slice(
          2
        )}_HK${hocKy}_Bao cao Cong tac GVCN_${id.toUpperCase()}_${convertName(
          homeroomDetail?.giaoVien.tenGV
        )}.docx`
      );
    },
    [
      homeroomDetail?.giaoVien.tenGV,
      homeroomReportDetailData?.homeroomReportDetailByTerm.examAbsent.data,
      homeroomReportDetailData?.homeroomReportDetailByTerm.examPostpone.data,
      homeroomReportDetailData?.homeroomReportDetailByTerm.finalResult
        .formatted,
      homeroomReportDetailData?.homeroomReportDetailByTerm.overviewReport,
      id,
      initialYear,
      selectedTerm,
      terms,
      values.year,
    ]
  );

  return (
    <>
      <AppHeader isAuthenticated />
      <StyledContentWrapper>
        <StyledStickyBox sx={{ paddingBottom: 0 }}>
          <StyledTitle variant="h1">Báo cáo lớp học</StyledTitle>
          <StyledBreadCrumbs aria-label="breadcrumb">
            <Link to="/">Trang chủ</Link>
            <Link to={`/classes/${id}`}>Tổng quan lớp học</Link>
            <Typography color="text.primary">Báo cáo lớp học</Typography>
            <Typography color="text.primary">{id}</Typography>
          </StyledBreadCrumbs>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <AsyncDataRenderer
              loading={homeroomTermListLoading}
              data={homeroomTermListData}
            >
              <Box sx={{ zIndex: 15 }}>
                <StyledFormControl sx={{ marginRight: '1rem' }}>
                  <InputLabel id="year-select-label">Năm học</InputLabel>
                  <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={values.year || initialYear}
                    label="Năm học"
                    onChange={handleChange('year')}
                  >
                    {years.map((item) => (
                      <MenuItem value={item}>
                        {item} - {Number(item) + 1}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
                <StyledFormControl>
                  <InputLabel id="term-select-label">Học kỳ</InputLabel>
                  <Select
                    labelId="term-select-label"
                    id="term-select"
                    value={values.term || initialTerm}
                    label="Học kỳ"
                    onChange={handleChange('term')}
                  >
                    {terms.map((item) => (
                      <MenuItem key={item.maHK} value={item.maHK.toString()}>
                        {item.hocKy}
                      </MenuItem>
                    ))}
                  </Select>
                </StyledFormControl>
              </Box>
            </AsyncDataRenderer>
            <AsyncDataRenderer
              loading={homeroomReportDetailLoading}
              data={homeroomReportDetailData}
            >
              <Button
                sx={{ textTransform: 'uppercase' }}
                variant="contained"
                onClick={handleExportDocument}
              >
                Xuất báo cáo
              </Button>
            </AsyncDataRenderer>
          </Box>
          <Box sx={{ marginTop: '1rem' }}>
            <AppBar position="static" color="transparent">
              <Tabs
                value={selectedTab}
                onChange={handleChangeTab}
                textColor="inherit"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab label="Tổng kết lớp" />
                <Tab label="Hoãn/vắng thi" />
              </Tabs>
            </AppBar>
          </Box>
        </StyledStickyBox>
        <Box sx={{ marginTop: '1rem' }}>
          <TabPanel index={0} value={selectedTab}>
            <ClassOverview
              homeroomOverviewReport={homeroomOverviewReport}
              homeroomFinalResultList={homeroomFinalResultList}
              homeroomOverviewReportLoading={homeroomOverviewReportLoading}
              homeroomFinalResultListLoading={homeroomFinalResultListLoading}
              homeroomFinalResultListLength={homeroomFinalResultListLength}
              page={page.finalResult}
              handleChangePage={handleChangeFinalResultPage}
            />
          </TabPanel>
          <TabPanel index={1} value={selectedTab}>
            <PostponeExam
              homeroomExamAbsentList={homeroomExamAbsentList}
              homeroomExamAbsentListLength={homeroomExamAbsentListLength}
              homeroomExamPostponedList={homeroomPostponeExamList}
              homeroomExamPostponedListLength={homeroomPostponeExamListLength}
              examAbsentPage={page.examAbsent}
              examPostponePage={page.postponeExam}
              handleChangeExamAbsentPage={handleChangeExamAbsentPage}
              handleChangeExamPostponePage={handleChangePostponeExamPage}
            />
          </TabPanel>
        </Box>
      </StyledContentWrapper>
    </>
  );
}

export default ClassReport;
