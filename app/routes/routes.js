import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
const HomePage = React.lazy(() => import('../containers/HomePage'));
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'));
const AccountInfo = React.lazy(() => import('../containers/Accounts/Info'));
const AccountEmail = React.lazy(() => import('../containers/Accounts/Email'));
const AccountPassword = React.lazy(() => import('../containers/Accounts/Password'));
const AccountPhoto = React.lazy(() => import('../containers/Accounts/Photo'));
const AccountUsername = React.lazy(() => import('../containers/Accounts/Username'));
const AccountSetting = React.lazy(() => import('../containers/Accounts/Setting'));
const Login = React.lazy(() => import('../containers/Login'));
const Register = React.lazy(() => import('../containers/Register'));
const Reset = React.lazy(() => import('../containers/Reset'));
const UpdatePassword = React.lazy(() => import('../containers/UpdatePassword'));
const MyProfile = React.lazy(() => import('../containers/MyProfile'));
import PrivateRoute from './privateRoutes/index';
const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/reset-password" component={Reset} />
      <Route exact path="/user" component={MyProfile} />
      <Route exact path="/reset" component={UpdatePassword} />
      <Route exact path="/reset" component={UpdatePassword} />
      <PrivateRoute exact path="/accounts/info" component={AccountInfo} />
      <PrivateRoute exact path="/accounts/email" component={AccountEmail} />
      <PrivateRoute exact path="/accounts/password" component={AccountPassword} />
      <PrivateRoute exact path="/accounts/photo" component={AccountPhoto} />
      <PrivateRoute exact path="/accounts/username" component={AccountUsername} />
      <PrivateRoute exact path="/accounts/setting" component={AccountSetting} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
