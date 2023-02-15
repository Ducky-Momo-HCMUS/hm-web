import React from 'react';
import { useLocation, Navigate, Outlet } from 'react-router-dom';

function Authenticated() {
  const token = localStorage.getItem('ACCESS_TOKEN');
  const location = useLocation();

  return token ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
}
export default Authenticated;
