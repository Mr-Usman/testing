import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
// Import Containers
const HomePage = React.lazy(() => import('../containers/HomePage'));
const NotFoundPage = React.lazy(() => import('../containers/NotFoundPage'));
const Login = React.lazy(() => import('../containers/Login'));
const SignUp = React.lazy(() => import('../containers/SignUp'));
const Reset = React.lazy(() => import('../containers/Reset'));
const UpdatePassword = React.lazy(() => import('../containers/UpdatePassword'));
const Routes = () => (
  <Suspense fallback="Loading......">
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/reset-password" component={Reset} />
      <Route exact path="/update-password" component={UpdatePassword} />
      <Route exact path="/" component={HomePage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Suspense>
);

export default Routes;
