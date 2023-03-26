/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-shadow */
import {
  AlignmentType,
  convertInchesToTwip,
  Document,
  LevelFormat,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from 'docx';

import { StudentDetail, StudentParentInfo } from '../../../generated-types';

export type GeneralInfo = Pick<
  StudentDetail,
  'maSV' | 'tenSV' | 'dob' | 'maSH'
> & { gioiTinh: string };

export type LearningInfo = Pick<
  StudentDetail,
  'tenCN' | 'xepLoai' | 'gpa_10' | 'tinhTrang'
> & { ngoaiNgu: string };

export type ContactInfo = Pick<
  StudentDetail,
  'sdt' | 'emailCaNhan' | 'emailSV' | 'lienHeSV'
>;

interface DocumentCreatorProps {
  generalInfo: GeneralInfo;
  learningInfo: LearningInfo;
  contactInfo: ContactInfo;
  parentInfo: StudentParentInfo[];
}

class DocumentCreator {
  // tslint:disable-next-line: typedef
  public create({
    generalInfo,
    learningInfo,
    contactInfo,
    parentInfo,
  }: DocumentCreatorProps): Document {
    const document = new Document({
      numbering: {
        config: [
          {
            reference: 'my-bullet-points-1',
            levels: [
              {
                level: 0,
                format: LevelFormat.DECIMAL,
                text: '%1.',
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
              {
                level: 2,
                format: LevelFormat.BULLET,
                text: '\u2022',
                alignment: AlignmentType.START,
                style: {
                  paragraph: {
                    indent: {
                      left: convertInchesToTwip(0.5),
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
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                new TextRun({
                  text: 'THÔNG TIN SINH VIÊN',
                  size: 32,
                  bold: true,
                }),
              ],
              spacing: {
                after: 100,
              },
            }),
            ...this.createGeneralInfo(generalInfo),
            ...this.createLearningInfo(learningInfo),
            ...this.createContactInfo(contactInfo),
            this.createBullet('my-bullet-points-1', 'Thông tin phụ huynh', 0),
            this.createParentInfo(parentInfo),
          ],
        },
      ],
    });

    return document;
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

  public createGeneralInfo(generalInfo: GeneralInfo) {
    return [
      this.createBullet('my-bullet-points-1', 'Thông tin cá nhân', 0),
      this.createBullet('my-bullet-points-1', `MSSV: ${generalInfo.maSV}`, 1),
      this.createBullet(
        'my-bullet-points-1',
        `Họ và tên: ${generalInfo.tenSV}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Ngày sinh: ${generalInfo.dob}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Giới tính: ${generalInfo.gioiTinh}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Lớp sinh hoạt: ${generalInfo.maSH}`,
        1
      ),
    ];
  }

  public createLearningInfo(learningInfo: LearningInfo) {
    return [
      this.createBullet('my-bullet-points-1', 'Thông tin học tập', 0),
      this.createBullet(
        'my-bullet-points-1',
        `Chuyên ngành: ${learningInfo.tenCN}`,
        1
      ),
      this.createBullet('my-bullet-points-1', `GPA: ${learningInfo.gpa_10}`, 1),
      this.createBullet(
        'my-bullet-points-1',
        `Xếp loại học lực: ${learningInfo.xepLoai}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Tình trạng: ${learningInfo.tinhTrang}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Chứng chỉ ngoại ngữ: ${learningInfo.ngoaiNgu}`,
        1
      ),
    ];
  }

  public createContactInfo(contactInfo: ContactInfo) {
    const socialInfo = contactInfo.lienHeSV?.map((lienHe) =>
      this.createBullet(
        'my-bullet-points-1',
        `${lienHe.mxh} : ${lienHe.url}`,
        2
      )
    ) as Paragraph[];
    return [
      this.createBullet('my-bullet-points-1', 'Thông tin liên lạc', 0),
      this.createBullet(
        'my-bullet-points-1',
        `Số điện thoại: ${contactInfo.sdt}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Email cá nhân: ${contactInfo.emailCaNhan}`,
        1
      ),
      this.createBullet(
        'my-bullet-points-1',
        `Email sinh viên: ${contactInfo.emailSV}`,
        1
      ),
      this.createBullet('my-bullet-points-1', `Mạng xã hội`, 1),
      ...socialInfo,
    ];
  }

  public createParentInfo(parentInfo: StudentParentInfo[]) {
    return new Table({
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: {
                size: 5000,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({ text: 'Họ tên', bold: true, size: 24 }),
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
                    new TextRun({ text: 'Quan hệ', bold: true, size: 24 }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 3000,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Số điện thoại',
                      bold: true,
                      size: 24,
                    }),
                  ],
                }),
              ],
            }),
            new TableCell({
              width: {
                size: 7000,
                type: WidthType.DXA,
              },
              children: [
                new Paragraph({
                  children: [
                    new TextRun({
                      text: 'Mạng xã hội',
                      bold: true,
                      size: 24,
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        ...parentInfo.map(
          (item) =>
            new TableRow({
              children: [
                new TableCell({
                  width: {
                    size: 5000,
                    type: WidthType.DXA,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: item.tenPH,
                          size: 24,
                        }),
                      ],
                      alignment: AlignmentType.LEFT,
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
                          text: item.quanHe,
                          size: 24,
                        }),
                      ],
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 3000,
                    type: WidthType.DXA,
                  },
                  children: [
                    new Paragraph({
                      children: [
                        new TextRun({
                          text: item.sdt,
                          size: 24,
                        }),
                      ],
                    }),
                  ],
                }),
                new TableCell({
                  width: {
                    size: 7000,
                    type: WidthType.DXA,
                  },
                  children: item.lienHePH.map((lienHePH) =>
                    this.createBullet(
                      'my-bullet-points-1',
                      `${lienHePH.mxh} : ${lienHePH.url}`,
                      2
                    )
                  ),
                }),
              ],
            })
        ),
      ],
    });
  }
}

export default DocumentCreator;
