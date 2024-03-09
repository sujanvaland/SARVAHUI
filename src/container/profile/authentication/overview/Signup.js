import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Checkbox, Col, Form, Input, Row, message, Radio } from 'antd';
// import { toast } from 'react-toastify'; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import SignIn from './SignIn';
import ForgotPassword from './ForgotPassword';
import Terms from './components/termsmodal';
import AboutUsComponent from './components/aboutus';
import Fosters from './components/fosters';
import GetInvolvedComponent from './components/getInvolved';
import { Main } from '../../../styled';
// import { Modal } from '../../../../components/modals/antd-modals';
import { preregister, sendVerificiationEmail } from '../../../../redux/authentication/actionCreator';


function SignUp() {

  const history = useHistory();
  const [AboutUs, setAboutUs] = useState(false);
  const [GetInvolved, setGetInvolved] = useState(true);
  const [AvailableFosters, setAvailableFosters] = useState(false);
  const [SignInStep, setSignInStep] = useState(false);
  const [UserSignUp, setUserSignUp] = useState(false);
  const [ResendEmail, setResendEmail] = useState(false);
  const [forgotPassword, setforgotPassword] = useState(false);
  const [hidebox, sethidebox] = useState(false);
  const [showPrivacyPolicy, setshowPrivacyPolicy] = useState(false);
  const isLoading = useSelector((state) => state.auth.loading);
  const authdata = useSelector((state) => state.auth.data);
  const [GoogleData, setGoogleData] = useState({});
  const dispatch = useDispatch();

  const { user } = useSelector((state) => ({
    user: state.auth
  }));

  const [userinfo, setUserInfo] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    loginType: '',
  });

  const [state, setState] = useState({
    values: null,
    checked: null,
  });

  const handleUserInfoChange = (e) => {
    e.preventDefault();
    setUserInfo({
      ...userinfo,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  const changeStep = (step) => {
    setAboutUs(false);
    setGetInvolved(false);
    setAvailableFosters(false);
    setSignInStep(false);
    setUserSignUp(false);
    setResendEmail(false);
    setforgotPassword(false);
    switch (step) {
      case 'AboutUs':
        setAboutUs(true);
        break;

      case 'GetInvolved':
        setGetInvolved(true);
        break;

      case 'UserSignUp':
        setUserSignUp(true);
        break;

      case 'AvailableFosters':
        setAvailableFosters(true);
        break;

      case 'SignInStep':
        setSignInStep(true);
        break;

      case 'ResendEmail':
        setResendEmail(true);
        break;
      case 'forgotPassword':
        setforgotPassword(true);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (authdata?.success) {
      sethidebox(true);
      setUserInfo({
        username: '',
        firstname: '',
        lastname: '',
        email: '',
        password: '',
      });
      if(!(GoogleData?.password)){
        setResendEmail(true);
      }
    }
  }, [authdata]);

  useEffect(() => {
    if (user?.error === "User doesn't exist" && (GoogleData?.password)) {
      changeStep('ClaimUserName');
      setUserInfo({
        firstname: GoogleData?.firstName,
        lastname: GoogleData?.lastName,
        email: GoogleData?.email,
        password: GoogleData?.password,
      });
    }
  }, [GoogleData])

  const handleUserInfoSubmit = async () => {
      const obj = {
        ...userinfo,
      };
      if (!userinfo.email) {
        message.error('Please add Email required');
        return;
      }
      await dispatch(preregister(obj,GoogleData,history));
  };

  const [passwordError, setPasswordError] = useState('');

  const validatePassword = (_, value) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;

    if (passwordRegex.test(value)) {
      setPasswordError('');
      return Promise.resolve();
    }
    setPasswordError(
      'Password should contain at least 8 characters, including at least one lowercase letter, one uppercase letter, one number, and one special character.',
    );
    return Promise.reject();
  };

  const resendVerificationEmail = async () => {
    await dispatch(sendVerificiationEmail(userinfo.email));
  }

  const loginTypeArray = [
    {
      id: 'jobSeeker',
      title: 'Job Seeker',
    },
    {
      id: 'recruiter',
      title: 'Recruiter',
    },
  ];

  return (
    <>
      <div>
        <div className="signupStepsMain">
          <div className="signuplayerBox">
            <div className="signupLeftBox">
              <div className='signuplogo'><img src={require('../../../../static/images/logowhite.png')} alt='' /></div>
              {AboutUs && <img src={require('../../../../static/images/3.jpg')} alt="" />}
              {GetInvolved && <img src={require('../../../../static/images/2.jpg')} alt="" />}
              {AvailableFosters && <img src={require('../../../../static/images/3.jpg')} alt="" />}
              {SignInStep && <img src={require('../../../../static/images/4.jpg')} alt="" />}
              {(UserSignUp || forgotPassword) && <img src={require('../../../../static/images/img_registerimg.jpg')} alt="" />}
            </div>
            <div className="signupRightBox">
              <div className='innernav'>
                <ul>
                  <li className={GetInvolved ? 'active' : ''}>
                    <Link to="" onClick={() => changeStep('GetInvolved')}>
                      Home
                    </Link>
                  </li>
                  <li className={AvailableFosters ? 'active' : ''}>
                    <Link to="" onClick={() => changeStep('AvailableFosters')}>
                      About Us
                    </Link>
                  </li>
                  <li className="deviceheader">
                    <Link to="">
                      <img src={require('../../../../static/images/logo.png')} alt="" className="devicelogo" />
                    </Link>
                  </li>
                  <li className={SignInStep ? 'active' : ''}>
                    <Link to="" onClick={() => changeStep('SignInStep')}>
                      Sign In
                    </Link>
                  </li>
                  <li className={AboutUs || UserSignUp || ResendEmail ? 'active' : ''}>
                    <Link to="" onClick={() => changeStep('UserSignUp')}>
                      Sign Up
                    </Link>
                  </li>
                </ul>
              </div>
              {GetInvolved && (
                <GetInvolvedComponent changeStep={() => changeStep('UserSignUp')} />
              )}
              {AboutUs && (
                <AboutUsComponent changeStep={() => changeStep('UserSignUp')} />
              )}
              {AvailableFosters && (
                <Fosters />
              )}
              {UserSignUp && !authdata?.success && (
                <div className="signUpcntBoxmain answerbox ">
                  <div className="signUpcntBox">
                    <h3>SignUp!</h3>
                    <div className="loginformarea signupform ">
                      <div className="container">
                        <Main className="backtransparent">
                          <Row>
                            <Col xxl={24} lg={24} md={24} xs={24}>
                              <div className={hidebox ? 'loginform registerform hide' : 'loginform registerform'}>
                                <div className="loginelements">
                                  <Form name="register" onFinish={handleUserInfoSubmit} layout="vertical">
                                    <div className="formbox">
                                    {!(GoogleData?.password?.length > 5) &&
                                      <>
                                      <Form.Item
                                        label=""
                                        name="username"
                                        rules={[{ required: true, message: 'Username required' }]}
                                      >
                                        <Input
                                          type="text"
                                          name="username"
                                          value={userinfo?.username}
                                          onChange={handleUserInfoChange}
                                          placeholder="Username"
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label=""
                                        name="firstname"
                                        rules={[{ required: true, message: 'First name required' }]}
                                      >
                                        <Input
                                          type="text"
                                          name="firstname"
                                          value={userinfo?.firstname}
                                          onChange={handleUserInfoChange}
                                          placeholder="First Name"
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label=""
                                        name="lastname"
                                        rules={[{ required: true, message: 'Last Name required' }]}
                                      >
                                        <Input
                                          type="text"
                                          name="lastname"
                                          value={userinfo.lastname}
                                          onChange={handleUserInfoChange}
                                          placeholder="Last Name"
                                        />
                                      </Form.Item>
                                      <Form.Item
                                        label=""
                                        name="email"
                                        rules={[{ required: true, message: 'Email required' }]}
                                      >
                                        <Input
                                          type="text"
                                          name="email"
                                          value={userinfo.email}
                                          onChange={handleUserInfoChange}
                                          placeholder="Email"
                                        />
                                      </Form.Item>
                                      
                                          <Form.Item
                                            label=""
                                            name="password"
                                            rules={[
                                              { required: true, message: 'Password required' },
                                              { validator: validatePassword },
                                            ]}
                                            validateStatus={passwordError ? 'error' : ''}
                                            help={passwordError}
                                          >
                                            <Input
                                              type="password"
                                              name="password"
                                              value={userinfo.password}
                                              onChange={handleUserInfoChange}
                                              placeholder="Password"
                                            />
                                          </Form.Item></>}
                                        
                                          <Form.Item
                                              label=""
                                              name="loginType"
                                              rules={[{ required: true, message: 'Select Appropriate Login Type' }]}

                                            >
                                        <Radio.Group name="loginType" onChange={handleUserInfoChange} value={userinfo.loginType}>
                                          {loginTypeArray.map((item) => (
                                          <div key={item.id} className='radiobox'>
                                              <Radio value={item.id} />
                                              <div>
                                                <p className="title">{item.title}</p>
                                              </div>
                                            </div>
                                          ))}
                                        </Radio.Group>
                                     </Form.Item>
                                      <div className="auth-form-action">
                                        <Checkbox onChange={onChange} checked={state.checked}>
                                          Creating an account means you’re okay with our Terms of Service and Privacy
                                          Policy
                                        </Checkbox>
                                      </div>
                                    </div>

                                    {isLoading ? (
                                      <Button
                                        className="btn-joinus"
                                        htmlType="submit"
                                        type="primary"
                                        size="large"
                                        disabled
                                      >
                                        Loading..
                                      </Button>
                                    ) : (
                                      <Button
                                        className="btn-joinus"
                                        htmlType="submit"
                                        type="primary"
                                        size="large"
                                      >
                                        Claim and Sign Up
                                      </Button>
                                    )}
                                  </Form>
                                  <Button onClick={() => console.log("SIGN UP REQUESTED")} className="btnback blockbtn">
                                    Back
                                  </Button>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </Main>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {SignInStep && (
                <div className="signUpcntBoxmain">
                  <div className="signUpcntBox">
                    <SignIn goStep1={() => changeStep('UserSignUp')} forgotPassword={() => changeStep('forgotPassword')}
                      setGoogleData={(data) => setGoogleData(data)}  />
                  </div>
                </div>
              )}
              {forgotPassword && (
                <div className="signUpcntBoxmain">
                  <div className="signUpcntBox">
                    <ForgotPassword signIn={() => changeStep('SignInStep')} />
                  </div>
                </div>
              )}
              {(authdata?.success && ResendEmail ) && (
                <>
                  <div className="signUpcntBoxmain thankyou  ">
                    <div className="signUpcntBox">
                      <h3>Verify Your Email</h3>
                      <h4>You will need to verify your email to complete registration</h4>
                      <div className='verifyimgbox'>
                        <img src={require('../../../../static/images/imgverify.jpg')} alt="" />
                      </div>
                      <p>
                        An email has been sent to {userinfo.email} with a link to verify your account. If you
                        have not received the email after a few minutes, please check your spam folder
                      </p>
                      <div className="twobuttonsbox">
                        <Link to="" className="btnLearnmore btnresend mr15" onClick={() => resendVerificationEmail()}>
                          Resend Email
                        </Link>
                        <Link to="" className="btnLearnmore">
                          Contact Support
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {showPrivacyPolicy && <Terms setshowPrivacyPolicy={setshowPrivacyPolicy} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
