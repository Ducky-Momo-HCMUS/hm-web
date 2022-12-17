import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ClassDetail from './pages/ClassDetail';
import Home from './pages/Home';
import Login from './pages/Login';
import NoteStore from './pages/NoteStore';
import ResetPassword from './pages/ResetPassword';
import StatisticalReport from './pages/ClassReport';
import StudentDashboard from './pages/StudentDashboard';
import UploadFile from './pages/UploadFile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/students/:id" element={<StudentDashboard />} />
      <Route path="/notes" element={<NoteStore />} />
      <Route path="/classes/:id" element={<ClassDetail />} />
      <Route path="/classes/:id/report" element={<StatisticalReport />} />
      <Route path="/upload" element={<UploadFile />} />
    </Routes>
  );
}

export default App;
