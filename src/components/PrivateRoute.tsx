import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

interface PrivateRouteProps {
  children: React.ReactNode;
  role: 'merchant' | 'customer';
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, role }) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" />;
  }

  if (user?.role !== role) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default PrivateRoute;