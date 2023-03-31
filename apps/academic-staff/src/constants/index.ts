export const STUDENT_LIST_PAGE_SIZE = 25;
export const TEACHER_LIST_PAGE_SIZE = 25;
export const STUDENT_SCORE_PAGE_SIZE = 25;
export const TRAINING_POINT_PAGE_SIZE = 25;
export const COURSE_PAGE_SIZE = 25;
export const MAJOR_PAGE_SIZE = 25;
export const MAJOR_RESULT_PAGE_SIZE = 25;
export const ENROLLED_PAGE_SIZE = 25;
export const NOT_ENROLLED_PAGE_SIZE = 25;

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};
