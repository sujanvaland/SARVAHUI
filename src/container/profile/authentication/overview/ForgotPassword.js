import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import { Form, Input, Button } from 'antd';
import { useDispatch } from 'react-redux';
import propTypes from 'prop-types';
import { AuthWrapper } from './style';
import Heading from '../../../../components/heading/heading';
import { ForgotPasswordParam, forgotPassword } from '../../../../redux/authentication/actionCreator';


function ForgotPassword({signIn}) {

  const dispatch = useDispatch()

  const [email,setEmail] = useState("")

  const { otp, userid } = useParams();


  const handleChange=(e)=>{
    setEmail(e.target.value)
  }

  useEffect(() => {

    if (otp !== "0") {
      try {
        const plainotp = window.atob(otp);
        const plainuserid = window.atob(userid);
        const obj = {
          encryptedOtp: plainotp,
          encryptedUserId: plainuserid
        }
        dispatch(ForgotPasswordParam(obj));
      } catch (error) {
        console.error("Error decoding base64 string:", error.message);
      }
     
    }
  }, [])

  const handleEmailSubmit=()=>{
    dispatch(forgotPassword(email))
  }

  return (
    <AuthWrapper>
      <div className="auth-contents loginform">
        <Form name="forgotPass" onFinish={handleEmailSubmit} layout="vertical">
          <Heading as="h3">Forgot Password?</Heading>
          <p className="forgot-text">
            Enter the email address you used when you joined and we’ll send you instructions to reset your password.
          </p>
          <Form.Item
            label="Email Address"
            name="email"
            rules={[{ required: true, message: 'Please input your email!', type: 'email' }]}
          >
            <Input placeholder="name@example.com" name='email' onChange={handleChange}/>
          </Form.Item>
          <Form.Item>
            <Button className="btn-joinus" htmlType="submit" type="primary" size="large">
              Send Reset Instructions
            </Button>
          </Form.Item>
          <p className="return-text">
            Return to <NavLink to="#" onClick={signIn}>Sign In</NavLink>
          </p>
        </Form>
      </div>
    </AuthWrapper>
  );
}

ForgotPassword.propTypes = { 
  signIn: propTypes.func
};
export default ForgotPassword;
