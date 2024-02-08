import React, { lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';

const Communities = lazy(() => import('./index'));
const CommunitySetting = lazy(() => import('./admintools/index'))
const ReportPost = lazy(() => import('./admintools/reportpost'));
const MemberRequest = lazy(() => import('./admintools/memberrequest'));
const Members = lazy(() => import('./admintools/members'));
const Rules = lazy(() => import('./admintools/rules'));
const Settings = lazy(() => import('./admintools/settings'));
const CommunityList = lazy(() => import('./admintools/communitylist'));
const SpotlightYourCommunity = lazy(() => import('./admintools/spotlightYourCommunity'));
const SupportAndResources = lazy(() => import('./admintools/supportAndResources'));
const CommunityProfile = lazy(() => import('./CommunityProfile'));



function CommuntitiesRoutes() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path} component={Communities} />
            <Route path={`${path}/communityProfile`} component={CommunityProfile} />
            <Route exact path={`${path}/reportpost`} component={ReportPost} />
            <Route exact path={`${path}/memberrequest`} component={MemberRequest} />
            <Route exact path={`${path}/members`} component={Members} />
            <Route exact path={`${path}/rules`} component={Rules} />
            <Route exact path={`${path}/settings`} component={Settings} />
            <Route exact path={`${path}/communityList`} component={CommunityList} />
            <Route exact path={`${path}/communitysetting`} component={CommunitySetting} />
            <Route exact path={`${path}/spotlightYourCommunity`} component={SpotlightYourCommunity} />
            <Route exact path={`${path}/supportAndResources`} component={SupportAndResources} />
        </Switch>
    );
}

export default CommuntitiesRoutes;