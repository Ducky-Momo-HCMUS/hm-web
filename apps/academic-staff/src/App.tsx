import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import Authenticated from './components/Authenticated';
import NotFound from './pages/NotFound';
import ResetPassword from './pages/ResetPassword';
import HomeroomTeacherList from './pages/Home/HomeroomTeacherList';
import StudentList from './pages/Home/StudentList';
import MajorCourseList from './pages/Home/MajorCourseList';
import CourseRegisterList from './pages/Home/CourseRegisterList';
import CourseScoreList from './pages/Home/CourseScoreList';
import TrainingPointList from './pages/Home/TrainingPointList';
import PostponeAbsentList from './pages/Home/PostponeAbsentList';
import ImportFile from './pages/Home/ImportFile';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route
          path="/"
          element={<Navigate to="/homeroom-teachers" replace />}
        />
        <Route element={<Home />}>
          <Route path="/homeroom-teachers" element={<HomeroomTeacherList />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/major-courses" element={<MajorCourseList />} />
          <Route path="/course-registration" element={<CourseRegisterList />} />
          <Route path="/course-result" element={<CourseScoreList />} />
          <Route path="/training-result" element={<TrainingPointList />} />
          <Route path="/exam-status" element={<PostponeAbsentList />} />
          <Route path="/import-file" element={<ImportFile />} />
        </Route>
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
      <Route element={<Authenticated />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
