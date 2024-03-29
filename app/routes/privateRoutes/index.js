import React from 'react';
import Route from 'react-router-dom/Route';
import Redirect from 'react-router/Redirect';

const PrivateRoute = props =>
  localStorage.getItem('token') ? (
    <Route {...props} />
  ) : (
    <Redirect to="/login" />
  );

export default PrivateRoute;
