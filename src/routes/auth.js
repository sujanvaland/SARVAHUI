import React, { lazy, Suspense } from 'react';
import { Spin } from 'antd';
import { Switch, Route } from 'react-router-dom';
import AuthLayout from '../container/profile/authentication/Index';
import Privacy from '../container/privacy';
import MyComponent from '../container/pages/post/Message';
import Donate from '../container/donation';
import TermOfService from '../container/profile/authentication/overview/components/termofservice';
import PrivacyPolicy from '../container/profile/authentication/overview/components/privacypolicy';
import CookiePolicy from '../container/profile/authentication/overview/components/cookie';
import Accessibility from '../container/profile/authentication/overview/components/accessibility';
import AdsInfo from '../container/profile/authentication/overview/components/adsinfo';

// const HomePage = lazy(() => import('../container/profile/authentication/overview/HomePage'));
const Login = lazy(() => import('../container/profile/authentication/overview/SignIn'));
const SignUp = lazy(() => import('../container/profile/authentication/overview/Signup'));
const FbLogin = lazy(() => import('../container/profile/authentication/overview/FbSignIn'));
const FbSignUp = lazy(() => import('../container/profile/authentication/overview/FbSignup'));
const ForgotPass = lazy(() => import('../container/profile/authentication/overview/ForgotPassword'));
const verifyEmail = lazy(() => import('../container/profile/authentication/overview/verifyEmail'));



function FrontendRoutes() {
  return (
    <Switch>
      <Suspense
        fallback={
          <div className="spin">
            <Spin />
          </div>
        }
      >
        <Route exact path="/forgotPassword/:otp/:userid" component={ForgotPass} />
        
        <Route path="/register?" component={SignUp} />
        
        {/* <Route exact path="/" component={HomePage} /> */}

        <Route exact path="/socket" component={MyComponent} />
        <Route exact path="/" component={SignUp} />
        <Route exact path="/verifyEmail/:otp/:userid" component={verifyEmail} />
        <Route exact path="/k" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path="/fbRegister" component={FbSignUp} />
        <Route exact path="/fbSignIn" component={FbLogin} />
        <Route exact path="/donation" component={Donate} />
        <Route exact path="/tos" component={TermOfService} />
        <Route exact path="/privacy" component={PrivacyPolicy} />
        <Route exact path="/cookie" component={CookiePolicy}/>
        <Route exact path="/access" component={Accessibility}/>
        <Route exact path="/ads" component={AdsInfo}/>
        
      </Suspense>
    </Switch>
  );
}

export default AuthLayout(FrontendRoutes);
