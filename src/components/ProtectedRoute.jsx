// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ allowedRoles }) => {
  const token = localStorage.getItem('jwtToken');
  const userRole = localStorage.getItem('userRole'); // Ensure you set this in your login logic

  // Check if token is present and if the userRole is in the allowedRoles
  if (!token || !allowedRoles.includes(userRole)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
