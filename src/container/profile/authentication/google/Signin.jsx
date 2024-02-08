/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, { useEffect, useRef } from 'react';
import { GoogleLogin } from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { login } from '../../../../redux/authentication/actionCreator';

const SigninComponent = (props) => {

  const {HanldeGoogleData} = props

  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useRef(null)

  const { user } = useSelector((state) => ({
        user: state.auth
    }));
  
  useEffect(()=>{
    if(user?.error === "User doesn't exist")
    {
      history.push("/");
      HanldeGoogleData(userData.current);
      // dispatch(register(userData.current, history))
    }
  },[user?.error])

  const responseGoogle = (response) => {
    // Handle the response from Google Sign-In
    const { profileObj } = response;
    const req = {
      "inviterName": "",
      "userName": profileObj?.email,
      "password": profileObj?.googleId,
      "firstName": profileObj?.givenName,
      "phoneNumber": "",
      "lastName": profileObj?.familyName,
      "email": profileObj?.email,
      "answers": [
        {
          "questionId": 0,
          "answersId": [
            0
          ]
        }
      ]
    }

    userData.current = req
    const credential = {
      "userName": profileObj?.email,
      "password": profileObj?.googleId,
    }

    dispatch(login(credential, history, 'google'));
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Sign in with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
};

export default SigninComponent;
