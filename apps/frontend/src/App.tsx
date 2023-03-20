import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ClassDetail from './pages/ClassDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import NoteStore from './pages/NoteStore';
import ForgotPassword from './pages/ForgotPassword';
import StatisticalReport from './pages/ClassReport';
import StudentDashboard from './pages/StudentDashboard';
import ChangePassword from './pages/ChangePassword';
import RequireAuth from './components/RequireAuth';
import ResetPassword from './pages/ResetPassword';
import Authenticated from './components/Authenticated';
import NotFound from './pages/NotFound';
import Search from './pages/Search';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import StudentProfile from './pages/StudentDashboard/StudentProfile';
import AcademicReport from './pages/StudentDashboard/AcademicReport';
import AcademicOverview from './pages/StudentDashboard/AcademicOverview';
import NoteInfo from './pages/StudentDashboard/NoteInfo';

function App() {
  return (
    <>
      <Routes>
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/notes" element={<NoteStore />} />
          <Route path="/classes/:id" element={<ClassDetail />} />
          <Route path="/classes/:id/report" element={<StatisticalReport />} />
          <Route path="/search" element={<Search />} />
          <Route element={<StudentDashboard />}>
            <Route path="/students/:id/info" element={<StudentProfile />} />
            <Route
              path="/students/:id/academic-report"
              element={<AcademicReport />}
            />
            <Route
              path="/students/:id/academic-overview"
              element={<AcademicOverview />}
            />
            <Route path="/students/:id/notes" element={<NoteInfo />} />
          </Route>
        </Route>
        <Route element={<Authenticated />}>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Route>
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
    </>
  );
}

export default App;
