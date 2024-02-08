import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';





const Dashboard = lazy(() => import('../../container/dashboard'));
const Network = lazy(() => import('../../container/pages/Network'));
const UserProfile = lazy(() => import('../../container/pages/UserProfile'));
const Scroll = lazy(() => import('../../container/pages/Scroll'));
const Setting = lazy(() => import('../../container/pages/settings/Setting'));
const People = lazy(() => import('../../container/pages/FindPeople'));
const Notification = lazy(() => import('../../container/pages/Notification'));
const Invitefriend = lazy(() => import('../../container/pages/Invitefriend'));


function DashboardRoutes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Dashboard} />
      <Route path={`${path}/network`} component={Network}/>
      <Route path={`${path}/profile`} component={UserProfile} />
      <Route path={`${path}/scroll`} component={Scroll} />
      <Route path={`${path}/setting`} component={Setting} />
      <Route path={`${path}/people`} component={People} />
      <Route path={`${path}/notification`} component={Notification} />
      <Route path={`${path}/invitefriend`} component={Invitefriend} />
      
    </Switch>
  );
}

export default DashboardRoutes;
