import React, { useEffect, useRef } from 'react';
import FacebookLogin from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { login } from '../../../../redux/authentication/actionCreator';

const FacebookLoginComponent = (props) => {
  // eslint-disable-next-line react/prop-types
  const { HanldeGoogleData } = props;

  const dispatch = useDispatch();
  const history = useHistory();
  const userData = useRef(null);

  const { user } = useSelector((state) => ({
    user: state.auth,
  }));

  useEffect(() => {
    if (user?.error === "User doesn't exist") {
      history.push('/');
      HanldeGoogleData(userData.current);
      // dispatch(register(userData.current, history))
    }
  }, [user?.error]);

  const responseFacebook = (res) => {
    console.log(res);

    const req = {
      inviterName: '',
      userName: res?.email,
      password: res?.id,
      firstName: res?.first_name,
      phoneNumber: '',
      lastName: res?.last_name,
      email: res?.email,
      loginMethod:'facebook',
      answers: [
        {
          questionId: 0,
          answersId: [0],
        },
      ],
    };

    userData.current = req
    const credential = {
        "userName": res?.email,
        "password": res?.id,
      }
  
      dispatch(login(credential, history, 'facebook'));
  };

  return (
    <>
      <FacebookLogin appId="917894139537116" fields="name,email,picture,first_name,last_name" callback={responseFacebook} />
    </>
  );
};

export default FacebookLoginComponent;
