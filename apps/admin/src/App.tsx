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
import ManageAccount from './pages/ManageAccount';
import ImportAccount from './pages/ImportAccount';
import ManageHomeroomTeacher from './pages/ManageHomeroomTeacher';
import ManageTag from './pages/ManageTag';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route
          path="/"
          element={<Navigate to="/account-management" replace />}
        />
        <Route element={<Home />}>
          <Route path="/account-management" element={<ManageAccount />} />
          <Route path="/import-account" element={<ImportAccount />} />
          <Route
            path="/teacher-management"
            element={<ManageHomeroomTeacher />}
          />
          <Route path="/tag-management" element={<ManageTag />} />
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
