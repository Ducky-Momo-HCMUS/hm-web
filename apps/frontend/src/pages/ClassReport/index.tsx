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
import { Packer } from 'docx';
import { saveAs } from 'file-saver';

import AsyncDataRenderer from '../../components/AsyncDataRenderer';
import AppHeader from '../../components/Header';
import {
  StyledBreadCrumbs,
  StyledContentWrapper,
  StyledScrollableBox,
  StyledTitle,
} from '../../components/styles';
import TabPanel from '../../components/TabPanel';
import { FINAL_RESULT_LIST_PAGE_SIZE } from '../../constants';
import {
  HomeroomOverviewReport,
  StudentTerm,
  useHomeroomDetailQuery,
  useHomeroomExamAbsentListByTermLazyQuery,
  useHomeroomFinalResultListByTermLazyQuery,
  useHomeroomOverviewReportByTermLazyQuery,
  useHomeroomPostponeExamListByTermLazyQuery,
  useHomeroomTermListQuery,
} from '../../generated-types';
import { groupTermsByYear } from '../../utils';

import ClassOverview from './ClassOverview';
import PostponeExam from './PostponeExam';
import { StyledFormControl } from './styles';
import DocumentCreator, { ExamAbsentListItem } from './document-creator';

interface State {
  year: string;
  term: string;
}

function ClassReport() {
  const { id = '' } = useParams();

  const [page, setPage] = useState(0);

  const handleChangePage = useCallback((event: unknown, newPage: number) => {
    setPage(newPage);
  }, []);

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

  const homeroomFinalResultList = useMemo(
    () =>
      homeroomFinalResultListData?.homeroomFinalResultListByTerm.formatted ||
      [],
    [homeroomFinalResultListData?.homeroomFinalResultListByTerm.formatted]
  );

  const [
    getHomeroomExamAbsentListByTerm,
    {
      loading: homeroomExamAbsentListLoading,
      data: homeroomExamAbsentListData,
    },
  ] = useHomeroomExamAbsentListByTermLazyQuery();

  const homeroomExamAbsentList = useMemo(() => {
    const examAbsentListData =
      homeroomExamAbsentListData?.homeroomExamAbsentListByTerm.data || [];

    return examAbsentListData.map((item) => ({
      maSV: item.sinhVien.maSV,
      tenSV: item.sinhVien.tenSV,
      tenMH: item.monHoc.tenMH,
    })) as ExamAbsentListItem[];
  }, [homeroomExamAbsentListData?.homeroomExamAbsentListByTerm.data]);

  const [
    getHomeroomPostponeExamListByTerm,
    {
      loading: homeroomPostponeExamListLoading,
      data: homeroomPostponeExamListData,
    },
  ] = useHomeroomPostponeExamListByTermLazyQuery();

  const homeroomPostponeExamList = useMemo(() => {
    const postponeExamListData =
      homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.data || [];

    return postponeExamListData.map((item) => ({
      maSV: item.sinhVien.maSV,
      tenSV: item.sinhVien.tenSV,
      tenMH: item.monHoc.tenMH,
    })) as ExamAbsentListItem[];
  }, [homeroomPostponeExamListData?.homeroomPostponeExamListByTerm.data]);

  useEffect(() => {
    if (!homeroomTermListLoading) {
      if (selectedTab === 0) {
        getHomeroomOverviewReportByTerm({
          variables: {
            homeroomId: id,
            term: values.term ? Number(values.term) : Number(initialTerm),
          },
        });
        getHomeroomFinalResultListByTerm({
          variables: {
            homeroomId: id,
            term: values.term ? Number(values.term) : Number(initialTerm),
            page: page + 1,
            size: FINAL_RESULT_LIST_PAGE_SIZE,
          },
        });

        return;
      }

      getHomeroomExamAbsentListByTerm({
        variables: {
          homeroomId: id,
          term: values.term ? Number(values.term) : Number(initialTerm),
        },
      });
      getHomeroomPostponeExamListByTerm({
        variables: {
          homeroomId: id,
          term: values.term ? Number(values.term) : Number(initialTerm),
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
    initialTerm,
    selectedTab,
    values.term,
    page,
  ]);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: number) => {
      setSelectedTab(newValue);

      switch (newValue) {
        case 0:
          getHomeroomOverviewReportByTerm({
            variables: {
              homeroomId: id,
              term: values.term ? Number(values.term) : Number(initialTerm),
            },
          });
          getHomeroomFinalResultListByTerm({
            variables: {
              homeroomId: id,
              term: values.term ? Number(values.term) : Number(initialTerm),
              page: 1,
              size: FINAL_RESULT_LIST_PAGE_SIZE,
            },
          });
          break;
        case 1:
          getHomeroomExamAbsentListByTerm({
            variables: {
              homeroomId: id,
              term: values.term ? Number(values.term) : Number(initialTerm),
            },
          });
          getHomeroomPostponeExamListByTerm({
            variables: {
              homeroomId: id,
              term: values.term ? Number(values.term) : Number(initialTerm),
            },
          });
          break;
        default:
          break;
      }
    },
    [
      getHomeroomExamAbsentListByTerm,
      getHomeroomPostponeExamListByTerm,
      getHomeroomFinalResultListByTerm,
      getHomeroomOverviewReportByTerm,
      id,
      initialTerm,
      values.term,
    ]
  );

  const { loading: homeroomDetailLoading, data: homeroomDetailData } =
    useHomeroomDetailQuery({
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

  function saveDocumentToFile(doc, fileName) {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, fileName);
    });
  }

  const handleExportDocument = useCallback(
    (event) => {
      event.preventDefault();
      const documentCreator = new DocumentCreator();
      const selectedTerm = values.term || initialTerm;

      const doc = documentCreator.create({
        hocKy:
          terms
            .find((item) => item.maHK.toString() === selectedTerm)
            ?.hocKy.toString() || '',
        namHocBD: values.year || initialYear,
        tenGVCN: homeroomDetail?.giaoVien.tenGV,
        lopChuNhiem: id,
        homeroomOverviewReport,
        homeroomExamAbsentList,
        homeroomPostponeExamList,
        homeroomFinalResultList,
      });
      saveDocumentToFile(doc, 'New Document.docx');
    },
    [
      homeroomDetail?.giaoVien.tenGV,
      homeroomExamAbsentList,
      homeroomFinalResultList,
      homeroomOverviewReport,
      homeroomPostponeExamList,
      id,
      initialTerm,
      initialYear,
      terms,
      values.term,
      values.year,
    ]
  );

  return (
    <>
      <AppHeader isAuthenticated />
      <StyledContentWrapper>
        <StyledTitle variant="h1">Báo cáo lớp học</StyledTitle>
        <StyledBreadCrumbs aria-label="breadcrumb">
          <Link to="/">Trang chủ</Link>
          <Link to={`/classes/${id}`}>Tổng quan lớp học</Link>
          <Typography color="text.primary">Báo cáo lớp học</Typography>
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
            <Box>
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
            loading={homeroomDetailLoading}
            data={homeroomDetailData}
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
          <AppBar position="static">
            <Tabs
              value={selectedTab}
              onChange={handleChangeTab}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Tổng kết lớp" />
              <Tab label="Hoãn/vắng thi" />
            </Tabs>
          </AppBar>
          <TabPanel index={0} value={selectedTab}>
            <StyledScrollableBox
              sx={{ padding: '0!important', height: '25rem' }}
            >
              <ClassOverview
                homeroomOverviewReport={homeroomOverviewReport}
                homeroomFinalResultList={homeroomFinalResultList}
                homeroomOverviewReportLoading={homeroomOverviewReportLoading}
                homeroomFinalResultListLoading={homeroomFinalResultListLoading}
                page={page}
                handleChangePage={handleChangePage}
              />
            </StyledScrollableBox>
          </TabPanel>
          <TabPanel index={1} value={selectedTab}>
            <AsyncDataRenderer
              loading={
                homeroomExamAbsentListLoading || homeroomPostponeExamListLoading
              }
              data={homeroomExamAbsentListData && homeroomPostponeExamListData}
            >
              <StyledScrollableBox
                sx={{ padding: '0!important', height: '25rem' }}
              >
                <PostponeExam
                  homeroomExamAbsentList={homeroomExamAbsentList}
                  homeroomExamPostponedList={homeroomPostponeExamList}
                />
              </StyledScrollableBox>
            </AsyncDataRenderer>
          </TabPanel>
        </Box>
      </StyledContentWrapper>
    </>
  );
}

export default ClassReport;
