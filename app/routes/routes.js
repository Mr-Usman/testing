import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
const HomePage = React.lazy(() => import('../containers/HomePage'));
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'));
const Login = React.lazy(() => import('../containers/Login'));
const Register = React.lazy(() => import('../containers/Register'));
const Reset = React.lazy(() => import('../containers/Reset'));
const UpdatePassword = React.lazy(() => import('../containers/UpdatePassword'));
const MyProfile = React.lazy(() => import('../containers/MyProfile'));
const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reset-password" component={Reset} />
      <Route exact path="/user" component={MyProfile} />
      <Route exact path="/reset" component={UpdatePassword} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
