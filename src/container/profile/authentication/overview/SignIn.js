/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { gapi } from 'gapi-script';
// eslint-disable-next-line import/no-extraneous-dependencies
// import { FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { Auth0Lock } from 'auth0-lock';
import { AuthWrapper } from './style';
import { login } from '../../../../redux/authentication/actionCreator';
import { Checkbox } from '../../../../components/checkbox/checkbox';
import { Main } from '../../../styled';
import { auth0options } from '../../../../config/auth0';
import SigninComponent from '../google/Signin';
import FacebookLoginComponent from '../facebook';
import LinkedInLoginComponent from '../linkedin';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

function SignIn(props) {
  const { goStep1, forgotPassword, setGoogleData } = props;

  useEffect(() => {
    const initializeGapi = () => {
      gapi.client.init({
        clientId: `${process.env.REACT_APP_GOOGLE_CLIENT_ID}`,
        scope: '',
      });
    };

    gapi.load('client:auth2', initializeGapi);
  }, []);

  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.auth.loading);
  const [form] = Form.useForm();
  const [state, setState] = useState({
    checked: null,
  });

  const [credential, setCredential] = useState({
    userName: '',
    password: '',
  });

  const lock = new Auth0Lock(clientId, domain, auth0options);

  const handleInputChange = (e) => {
    setCredential({
      ...credential,
      [e.target.name]: e.target.value,
    });
  };

  const HanldeGoogleData = (data) => {
    setGoogleData(data);
  };

  const handleSubmit = () => {
    dispatch(login(credential, history, 'manual'));
  };

  const onChange = (checked) => {
    setState({ ...state, checked });
  };

  lock.on('authenticated', (authResult) => {
    lock.getUserInfo(authResult.accessToken, (error) => {
      if (error) {
        return;
      }

      handleSubmit();
      lock.hide();
    });
  });

  return (
    <AuthWrapper>
      <div className="loginformarea loginpage">
        <div className="container">
          <Main className="backtransparent">
            {/* <Row>
                        <Col xxl={16} lg={12} md={12} xs={24}>
                          <div className='loginleftcnt'>
                              <h1>Join the spiritual network you&apos;ve been waiting for!</h1>
                              <p>
                                Our mission is to empower people worldwide by connecting them with the people, resources, and opportunities needed to grow in their spiritual journey.
                              </p>
                          </div>
                        </Col>
                        <Col xxl={8} lg={12} md={12} xs={24}> */}
            <div className="loginform">
              <div className="auth-contents">
                <div className="loginelements">
                  <h3 className="text-center">Sign In</h3>
                  <Form name="login" form={form} onFinish={handleSubmit} layout="vertical">
                    <div className="formbox">
                      <Form.Item
                        name="vusername"
                        rules={[{ message: 'Please input your username or Email!', required: true }]}
                        label="Username or Email Address"
                      >
                        <Input
                          name="userName"
                          value={credential.userName}
                          placeholder="Username"
                          onChange={handleInputChange}
                        />
                      </Form.Item>
                      <Form.Item label="Password">
                        <Input.Password
                          name="password"
                          value={credential.password}
                          onChange={handleInputChange}
                          placeholder="Password"
                        />
                      </Form.Item>
                      <div className="auth-form-action">
                        <Checkbox onChange={onChange} checked={state.checked}>
                          Keep me logged in
                        </Checkbox>
                        <NavLink className="forgot-pass-link" to="#" onClick={forgotPassword}>
                          Forgot password?
                        </NavLink>
                      </div>
                      <Form.Item className="enditem">
                        <Button className="btn-joinus" htmlType="submit" type="primary" size="large">
                          {isLoading ? 'Loading...' : 'Sign In'}
                        </Button>
                      </Form.Item>
                      <p className="form-divider mt-2">
                        <span>Or</span>
                      </p>
                      <div className="socialloginbox">
                        <ul className="social-login">
                          <li>
                            {/* <Link className="google-signup" to="#">
                                      <img src={require('../../../../static/img/google.png')} alt="" />
                                      <span>Sign in with Google</span>
                                    </Link> */}
                            <SigninComponent HanldeGoogleData={(data) => HanldeGoogleData(data)} gclicnet/>
                          </li>

                          <li>
                            <FacebookLoginComponent HanldeGoogleData={(data) => HanldeGoogleData(data)}/>
                          </li>

                          <li>
                            <LinkedInLoginComponent />
                          </li>

                          <li>
                            <p className="auth-notice">
                              Don&rsquo;t have an account?{' '}
                              <NavLink to="/" onClick={goStep1} className="btn btnsignup">
                                Get Involved
                              </NavLink>
                            </p>
                          </li>
                          {/* <li>
                                    <Link className="facebook-sign" to="#">
                                      <FacebookOutlined />
                                    </Link>
                                  </li>
                                  <li>
                                    <Link className="twitter-sign" to="#">
                                      <TwitterOutlined />
                                    </Link>
                                  </li> */}
                        </ul>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
            {/* </Col>
                      </Row> */}
          </Main>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
