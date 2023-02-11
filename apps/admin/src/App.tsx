import React from 'react';
import { Route, Routes } from 'react-router-dom';

import RequireAuth from './components/RequireAuth';
import ChangePassword from './pages/ChangePassword';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ForgotPassword';

function App() {
  return (
    <Routes>
      <Route element={<RequireAuth />}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ResetPassword />} />
    </Routes>
  );
}

export default App;
