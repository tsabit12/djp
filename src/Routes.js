import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { 
  RouteWithLayout,
  UserRouteDjp,
  GuestRouteDjp
} from './components';
import { 
  Main as MainLayout, 
  Login as LoginLayout
} from './layouts';

import {
  NotFound as NotFoundView,
  Scan as ScanView,
  SignIn as SignInView
} from './views';


const Routes = () => {
  return (
    <Switch>
      <GuestRouteDjp
        component={ScanView}
        exact
        layout={MainLayout}
        path="/"
      />
      <UserRouteDjp
        component={SignInView}
        exact
        layout={LoginLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={NotFoundView}
        exact
        layout={LoginLayout}
        path="/not-found"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
