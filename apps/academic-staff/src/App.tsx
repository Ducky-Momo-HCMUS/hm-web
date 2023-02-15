import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import Login from './pages/Login';
import ResetPassword from './pages/ForgotPassword';
import Authenticated from './components/Authenticated';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
      <Route element={<Authenticated />}>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ResetPassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
