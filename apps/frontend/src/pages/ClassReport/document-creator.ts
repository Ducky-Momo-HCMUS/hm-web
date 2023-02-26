/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  AlignmentType,
  convertInchesToTwip,
  Document,
  LevelFormat,
  Paragraph,
  Tab,
  TabStopPosition,
  TabStopType,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from 'docx';

import {
  HomeroomFinalResultListItem,
  HomeroomOverviewReport,
} from '../../generated-types';

export interface ExamAbsentListItem {
  maSV: string;
  tenSV: string;
  tenMH: string;
}

interface DocumentProps {
  hocKy: string;
  namHocBD: string;
  tenGVCN: string;
  lopChuNhiem: string;
  homeroomOverviewReport: HomeroomOverviewReport;
  homeroomExamAbsentList: ExamAbsentListItem[];
  homeroomPostponeExamList: ExamAbsentListItem[];
  homeroomFinalResultList: HomeroomFinalResultListItem[];
}

class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create({
    hocKy,
    namHocBD,
    tenGVCN,
    lopChuNhiem,
    homeroomOverviewReport,
    homeroomExamAbsentList,
    homeroomPostponeExamList,
    homeroomFinalResultList,
  }: DocumentProps): Document {
    const document = new Document({
      numbering: {
        config: [
          {
            reference: 'my-bullet-points',
            levels: [
              {
                level: 0,
                text: '\u2022',
                format: LevelFormat.BULLET,
                alignment: AlignmentType.LEFT,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0),
                      hanging: convertInchesToTwip(0),
                    },
                  },
                },
              },
            ],
          },
          {
            reference: 'my-bullet-points-1',
            levels: [
              {
                level: 0,
                format: LevelFormat.UPPER_ROMAN,
                text: '%1',
                alignment: AlignmentType.START,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0),
                      hanging: convertInchesToTwip(0),
                    },
                  },
                },
              },
              {
                level: 1,
                format: LevelFormat.DECIMAL,
                text: '%2.',
                alignment: AlignmentType.START,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0.25),
                      hanging: convertInchesToTwip(0),
                    },
                  },
                },
              },
              {
                level: 2,
                format: LevelFormat.BULLET,
                text: '\u2010',
                alignment: AlignmentType.START,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0.25),
                      hanging: convertInchesToTwip(0),
                    },
                  },
                },
              },
            ],
          },
        ],
      },
      sections: [
        {
          children: [
            this.createHeaderSection(
              'TRƯỜNG ĐẠI HỌC KHOA HỌC TỰ NHIÊN',
              'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM'
            ),
            this.createHeaderSection(
              '    KHOA CÔNG NGHỆ THÔNG TIN',
              'Độc lập - Tự do - Hạnh phúc'
            ),
            this.createDateSection(),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'BÁO CÁO',
                  size: 32,
                  bold: true,
                }),
              ],
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'CÔNG TÁC GIÁO VIÊN CHỦ NHIỆM',
                  size: 26,
                  bold: true,
                }),
              ],
              spacing: {
                after: 100,
              },
            }),
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: `Học kỳ ${hocKy} / Năm học: ${namHocBD}-${
                    Number(namHocBD) + 1
                  }`,
                  size: 24,
                  bold: true,
                }),
              ],
              spacing: {
                after: 200,
              },
            }),
            this.createBullet(
              'my-bullet-points',
              `GVCN: ${tenGVCN.toUpperCase()}`,
              0
            ),
            this.createBullet(
              'my-bullet-points',
              `LỚP SINH HOẠT: ${lopChuNhiem.toUpperCase()}`,
              0
            ),
            new Paragraph({
              text: '',
              spacing: {
                after: 100,
              },
            }),
            this.createBullet('my-bullet-points-1', 'TÌNH HÌNH CHUNG:', 0),
            this.createBullet('my-bullet-points-1', 'Thông tin chung:', 1),
            ...this.createGeneralNumberReport(homeroomOverviewReport),
            ...this.createGeneralLearningReport(
              hocKy,
              namHocBD,
              homeroomOverviewReport
            ),
            ...this.createGeneralTrainingPointReport(
              hocKy,
              namHocBD,
              homeroomOverviewReport
            ),
            this.createBullet(
              'my-bullet-points-1',
              `Chứng chỉ ngoại ngữ tính đến HK${hocKy}/${namHocBD}-${
                Number(namHocBD) + 1
              }: ${homeroomOverviewReport.hocTap.chungChiNgoaiNgu} chứng chỉ`,
              1
            ),
            this.createBullet(
              'my-bullet-points-1',
              `Tình hình thi hết học phần HK${hocKy}/${namHocBD}-${
                Number(namHocBD) + 1
              }:`,
              1
            ),
            this.createBullet(
              'my-bullet-points-1',
              `CÔNG TÁC CỦA GVCN TRONG HỌC KỲ ${hocKy} / NĂM HỌC ${namHocBD}-${
                Number(namHocBD) + 1
              }`,
              0
            ),
            this.createBullet(
              'my-bullet-points-1',
              'Đánh giá tình hình của sinh viên trong kỳ:',
              1
            ),
            this.createBullet(
              'my-bullet-points-1',
              `Tình hình điểm danh đến lớp HK${hocKy}/${namHocBD}-${
                Number(namHocBD) + 1
              }:`,
              1
            ),
            ...this.createExamPostponedReport(
              hocKy,
              namHocBD,
              homeroomExamAbsentList,
              homeroomPostponeExamList
            ),
            this.createBullet(
              'my-bullet-points-1',
              'Những hoạt động đã thực hiện trong kỳ:',
              1
            ),
            ...this.createFinalResultReport(
              hocKy,
              namHocBD,
              homeroomFinalResultList
            ),
            this.createBullet(
              'my-bullet-points-1',
              'Đánh giá các hoạt động khác:',
              1
            ),
          ],
        },
      ],
    });

    return document;
  }

  public createHeaderSection(
    primaryContent: string,
    secondaryContent: string
  ): Paragraph {
    return new Paragraph({
      tabStops: [
        {
          type: TabStopType.RIGHT,
          position: TabStopPosition.MAX,
        },
      ],
      children: [
        new TextRun({
          text: primaryContent,
          size: 22,
        }),
        new TextRun({
          children: [new Tab(), secondaryContent],
          size: 22,
        }),
      ],
      spacing: {
        after: 200,
      },
    });
  }

  public createDateSection(): Paragraph {
    const date = new Date();
    const month =
      date.getMonth() + 1 < 10
        ? `0${date.getMonth() + 1}`
        : date.getMonth() + 1;
    return new Paragraph({
      alignment: AlignmentType.RIGHT,
      spacing: {
        after: 500,
        before: 300,
      },
      children: [
        new TextRun({
          text: `Thành phố Hồ Chí Minh, ngày ${date.getDate()} tháng ${month} năm ${date.getFullYear()}`,
          size: 24,
          italics: true,
        }),
      ],
    });
  }

  public createBullet(
    reference: string,
    text: string,
    level: number
  ): Paragraph {
    return new Paragraph({
      children: [new TextRun({ text, size: 24 })],
      numbering: {
        reference,
        level,
      },
      spacing: {
        after: 100,
      },
    });
  }

  public createGeneralNumberReport(
    homeroomOverviewReport: HomeroomOverviewReport
  ) {
    const { siSo } = homeroomOverviewReport;
    return [
      new Paragraph({
        children: [
          new TextRun({
            text: `Số sinh viên: ${siSo.tong} sinh viên`,
            size: 24,
          }),
        ],
        indent: {
          left: convertInchesToTwip(0.5),
        },
        spacing: {
          after: 100,
        },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: 'Trong đó:',
            size: 24,
          }),
        ],
        indent: {
          left: convertInchesToTwip(0.5),
        },
        spacing: {
          after: 100,
        },
      }),
      this.createBullet('my-bullet-points-1', `Nam: ${siSo.nam} bạn`, 2),
      this.createBullet('my-bullet-points-1', `Nữ: ${siSo.nu} bạn`, 2),
    ];
  }

  public createGeneralLearningReport(
    hocKy: string,
    namHocBD: string,
    homeroomOverviewReport: HomeroomOverviewReport
  ) {
    const { hocTap } = homeroomOverviewReport;
    return [
      this.createBullet(
        'my-bullet-points-1',
        `Tình hình học tập của lớp tính đến HK${hocKy}/${namHocBD}-${
          Number(namHocBD) + 1
        }:`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Xuất sắc: ${hocTap.xuatSac} sv`,
        2
      ),
      this.createBullet('my-bullet-points-1', `Giỏi: ${hocTap.gioi} sv`, 2),
      this.createBullet('my-bullet-points-1', `Khá: ${hocTap.kha} sv`, 2),
      this.createBullet(
        'my-bullet-points-1',
        `Trung bình: ${hocTap.trungBinh} sv`,
        2
      ),
      this.createBullet('my-bullet-points-1', `Yếu: ${hocTap.yeu} sv`, 2),
      this.createBullet('my-bullet-points-1', `Kém: ${hocTap.kem} sv`, 2),
    ];
  }

  public createGeneralTrainingPointReport(
    hocKy: string,
    namHocBD: string,
    homeroomOverviewReport: HomeroomOverviewReport
  ) {
    const { drl } = homeroomOverviewReport;
    return [
      this.createBullet(
        'my-bullet-points-1',
        `Tình hình điểm rèn luyện tính đến HK${hocKy}/${namHocBD}-${
          Number(namHocBD) + 1
        }:`,
        1
      ),
      this.createBullet('my-bullet-points-1', `Xuất sắc: ${drl.xuatSac} sv`, 2),
      this.createBullet('my-bullet-points-1', `Giỏi: ${drl.gioi} sv`, 2),
      this.createBullet('my-bullet-points-1', `Khá: ${drl.kha} sv`, 2),
      this.createBullet(
        'my-bullet-points-1',
        `Trung bình: ${drl.trungBinh} sv`,
        2
      ),
      this.createBullet('my-bullet-points-1', `Yếu: ${drl.yeu} sv`, 2),
      this.createBullet('my-bullet-points-1', `Kém: ${drl.kem} sv`, 2),
    ];
  }

  public createExamPostponedReport(
    hocKy: string,
    namHocBD: string,
    homeroomExamAbsentList: ExamAbsentListItem[],
    homeroomPostponeExamList: ExamAbsentListItem[]
  ) {
    const examAbsentReport =
      homeroomExamAbsentList.length > 0 ? '' : ' chưa có kết quả tổng hợp';
    const examPostponeReport =
      homeroomPostponeExamList.length > 0 ? '' : ' chưa có kết quả tổng hợp';

    function generateTable(data: ExamAbsentListItem[]) {
      return data.length > 0
        ? new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1000,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'STT', bold: true, size: 24 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1800,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'MSSV', bold: true, size: 24 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 5000,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'HỌ TÊN',
                            bold: true,
                            size: 24,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 6000,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'MÔN HỌC',
                            bold: true,
                            size: 24,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ...data.map(
                (item, index) =>
                  new TableRow({
                    children: [
                      new TableCell({
                        width: {
                          size: 1000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: String(index + 1),
                                size: 24,
                              }),
                            ],
                            alignment: AlignmentType.RIGHT,
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 1800,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.maSV,
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 5000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.tenSV,
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 6000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.tenMH,
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
              ),
            ],
          })
        : new Paragraph({ text: '' });
    }

    return [
      this.createBullet(
        'my-bullet-points-1',
        `Tình hình thi hết học phần HK${hocKy}/${namHocBD}-${
          Number(namHocBD) + 1
        }:`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Vắng thi:${examAbsentReport}`,
        2
      ),
      generateTable(homeroomExamAbsentList),
      this.createBullet(
        'my-bullet-points-1',
        `Hoãn thi:${examPostponeReport}`,
        2
      ),
      generateTable(homeroomPostponeExamList),
    ];
  }

  public createFinalResultReport(
    hocKy: string,
    namHocBD: string,
    homeroomFinalResultList: HomeroomFinalResultListItem[]
  ) {
    function generateTable(data: HomeroomFinalResultListItem[]) {
      return data.length > 0
        ? new Table({
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 1000,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'STT', bold: true, size: 24 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1800,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({ text: 'MSSV', bold: true, size: 24 }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 3500,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'HỌ TÊN',
                            bold: true,
                            size: 24,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 1500,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'ĐTB_TL',
                            bold: true,
                            size: 24,
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 2000,
                      type: WidthType.DXA,
                    },
                    children: [
                      new Paragraph({
                        children: [
                          new TextRun({
                            text: 'XẾP LOẠI',
                            bold: true,
                            size: 24,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              ...data.map(
                (item, index) =>
                  new TableRow({
                    children: [
                      new TableCell({
                        width: {
                          size: 1000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: String(index + 1),
                                size: 24,
                              }),
                            ],
                            alignment: AlignmentType.RIGHT,
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 1800,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.maSV,
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 5000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.tenSV,
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 1000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.dtb?.toString() || '',
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 1000,
                          type: WidthType.DXA,
                        },
                        children: [
                          new Paragraph({
                            children: [
                              new TextRun({
                                text: item.xepLoai || '',
                                size: 24,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  })
              ),
            ],
          })
        : new Paragraph({ text: '' });
    }

    return [
      this.createBullet(
        'my-bullet-points-1',
        `Đánh giá kết quả học tập cuối kỳ, HK${hocKy}/${namHocBD}-${
          Number(namHocBD) + 1
        }:`,
        1
      ),
      generateTable(homeroomFinalResultList),
    ];
  }
}

export default DocumentCreator;
