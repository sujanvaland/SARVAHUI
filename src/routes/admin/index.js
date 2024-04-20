import React, { Suspense, lazy } from 'react';
import { LinkedInCallback } from 'react-linkedin-login-oauth2';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import withAdminLayout from '../../layout/withAdminLayout';
import PostDetails from '../../container/pages/post/details';
import Bookmarks from '../../container/pages/bookmarks';
import TermOfService from '../../container/profile/authentication/overview/components/termofservice';
import PrivacyPolicy from '../../container/profile/authentication/overview/components/privacypolicy';
import CookiePolicy from '../../container/profile/authentication/overview/components/cookie';
import Accessibility from '../../container/profile/authentication/overview/components/accessibility';
import AdsInfo from '../../container/profile/authentication/overview/components/adsinfo';
import ReportPost from '../../container/pages/communities/admintools/reportpost';
import MemberRequest from '../../container/pages/communities/admintools/memberrequest';
import Members from '../../container/pages/communities/admintools/members';
import Rules from '../../container/pages/communities/admintools/rules';
import Settings from '../../container/pages/communities/admintools/settings';
import PostJob from '../../container/pages/PostJob';
import Communities from '../../container/pages/communities/communities';
import SpotlightYourCommunity from '../../container/pages/communities/admintools/spotlightYourCommunity';
import SupportAndResources from '../../container/pages/communities/admintools/supportAndResources';
import JobApplication from '../../container/pages/ViewApplication';
import AdminCandidate from '../../container/pages/admin/admin-candidate';
import AdminRecuiter from '../../container/pages/admin/admin-recuiter';
import CandidateAppliedJobs from '../../container/pages/admin/admin-candidateapplied';

const MyComponent = lazy(() => import('../../container/pages/post/Message'));
const Network = lazy(() => import('../../container/pages/Network'));
const UserProfile = lazy(() => import('../../container/pages/UserProfile'));
const Setting = lazy(() => import('../../container/pages/settings/Setting'));
const People = lazy(() => import('../../container/pages/FindPeople'));
const Explore = lazy(() => import('../../container/pages/Explore'));
const Notification = lazy(() => import('../../container/pages/Notification'));
const Invitefriend = lazy(() => import('../../container/pages/Invitefriend'));
const EditProfile = lazy(() => import('../../container/pages/EditProfile'));
const Dashboard = lazy(() => import('../../container/pages/Dashboard'));
const Chatting = lazy(() => import('../../container/pages/chatting'));
const Event = lazy(() => import('../../container/pages/event'));
const AppliedJobs = lazy(() => import('../../container/pages/appliedJobs'));

function Admin() {
  const { path } = useRouteMatch();
  const User = JSON.parse(localStorage.getItem('profile'));

  return (
    <Switch>
      <Suspense>
        <Route exact path={path} component={Event} />
        <Route exact path="/linkedin" component={LinkedInCallback} />
        <Route path={`${path}postdetails/:postId`} component={PostDetails} />
        <Route path={`${path}message`} component={Chatting} />
        <Route path={`${path}admin/dashboard`} component={Dashboard} />
        <Route path={`${path}scoket`} component={MyComponent} />
        <Route path={`${path}network/:network?`} component={Network} />
        <Route path={`${path}profile/:userName?`} component={UserProfile} />
        <Route path={`${path}editProfile`} component={EditProfile} />
        <Route path={`${path}setting`} component={Setting} />
        <Route path={`${path}postjob`} component={PostJob} />
        <Route path={`${path}jobApplication/:jobId?`} component={JobApplication} />

        <Route path={`${path}candidate`} component={AdminCandidate} />

        {User.loginType === "admin" &&
        <>
        <Route path={`${path}recuiter`} component={AdminRecuiter} />
        <Route path={`${path}candidateApplied/:userId?/:userType?/:userName?`} component={CandidateAppliedJobs} />
        <Route path={`${path}recuiterJob/:userId?/:userType?/:userName?`} component={CandidateAppliedJobs} />
        </>
        }

        <Route path={`${path}people`} component={People} />
        <Route path={`${path}explore`} component={Explore} />
        <Route path={`${path}appliedjobs`} component={AppliedJobs} />
        <Route path={`${path}communities`} component={Communities} />
        <Route path={`${path}bookmarks`} component={Bookmarks} />
        <Route path={`${path}notification`} component={Notification} />
        <Route path={`${path}invitefriend`} component={Invitefriend} />
        <Route exact path="/tos" component={TermOfService} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/cookie" component={CookiePolicy} />
        <Route exact path="/access" component={Accessibility} />
        <Route exact path="/ads" component={AdsInfo} />
        <Route exact path="/reportpost" component={ReportPost} />
        <Route exact path="/memberrequest" component={MemberRequest} />
        <Route exact path="/members" component={Members} />
        <Route exact path="/rules" component={Rules} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/communities" component={Communities} />
        <Route exact path="/spotlightYourCommunity" component={SpotlightYourCommunity} />
        <Route exact path="/supportAndResources" component={SupportAndResources} />
      </Suspense>
    </Switch>
  );
}

export default withAdminLayout(Admin);
