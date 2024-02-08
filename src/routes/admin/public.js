import React, { Suspense } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withPublicAdminLayout from '../../layout/withPublicAdminLayout';
import PostDetails from '../../container/pages/post/details';



function Admin() {
  const { path } = useRouteMatch();
 
  return (
    <Switch>
      <Suspense>
        <Route path={`${path}postdetails/:postId`} component={PostDetails} />
      </Suspense>
    </Switch>
  );
}

export default withPublicAdminLayout(Admin);
