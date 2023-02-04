import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ClassDetail from './pages/ClassDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import NoteStore from './pages/NoteStore';
import ResetPassword from './pages/ForgotPassword';
import StatisticalReport from './pages/ClassReport';
import StudentDashboard from './pages/StudentDashboard';
import ChangePassword from './pages/ChangePassword';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/students/:id" element={<StudentDashboard />} />
        <Route path="/notes" element={<NoteStore />} />
        <Route path="/classes/:id" element={<ClassDetail />} />
        <Route path="/classes/:id/report" element={<StatisticalReport />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
