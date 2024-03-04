import Cookies from 'js-cookie';
// import { toast } from 'react-toastify';
// import { gapi } from 'gapi-script';
import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import { removeItem } from '../../utility/localStorageControl';

const {
  loginBegin,
  loginErr,
  logoutBegin,
  loginSuccess,
  logoutSuccess,
  logoutErr,
  signupBegin,
  signupSuccess,
  signupErr,
  checkUserNameRequest,
  checkUserNameSuccess,
  checkUserNameError,
  forgotPasswordError,
  forgotPasswordRequest,
  forgotPasswordSuccess,
  sendParamStart,
  sendParamSuccess,
  sendParamErr,
  sendVerifyEmailStart,
  sendVerifyEmailSuccess,
  sendVerifyEmailErr,
  VerifyEmailSuccess,
  VerifyEmailStart,
  VerifyEmailErr,
} = actions;

const checkUsername = (username) => {
  return async (dispatch) => {
    try {
      await dispatch(checkUserNameRequest());
      const res = await DataService.post('User/CheckUsername', { username });

      if (res.data.success) {
        dispatch(checkUserNameSuccess(res.data.result));
      } else {
        dispatch(checkUserNameError('Something went wrong'));
      }
    } catch (err) {
      dispatch(checkUserNameError(err));
    }
  };
};

// const fetchContacts = async () => {
//   console.log('hello from fetchContacts');

//   try {
//     const response = await gapi.client.people.people.connections.list({
//       resourceName: 'people/me',
//       pageSize: 10,
//       personFields: 'names,emailAddresses,phoneNumbers',
//     });

//     return response;
//   } catch (err) {
//     return err;
//   }
// };

// async function dummyAsyncFunction() {
//   // Simulate an asynchronous operation using setTimeout
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('Async operation completed');
//       resolve('Result of the async operation');
//     }, 2000); // Simulating a 2-second delay
//   });
// }

const checkLoginMethod = async (userName) => {
  const res = await DataService.post('User/GetUserByName', { userName });
  return res;
  // console.log("verify user login method.....",res)
  // await dummyAsyncFunction()
  // return "manual"
};

const login = (credential, history, loginMethod) => {
  console.log('credentials....', credential);

  return async (dispatch) => {
    try {
      // const conres = await fetchContacts();
      // console.log('conres', conres);

      await dispatch(loginBegin());

      const resLoginMethod = await checkLoginMethod(credential.userName);

      if (resLoginMethod.data.result === null) {
        dispatch(loginErr("User doesn't exist"));
        return;
      }

      if (!resLoginMethod.data.success) {
        message.error('Something went wrong');
        dispatch(loginErr('Something went wrong'));
        return;
      }

      const loginMethodResponse = resLoginMethod.data.result.loginMethod;

      if (loginMethodResponse !== loginMethod) {
        message.error('Login methods not same');
        dispatch(loginErr('Login methods not same'));
        return;
      }
      const res = await DataService.post('User/SignIn', credential);
      if (res.data.message === 'Success') {
        const obj = {
          ...res?.data?.result?.profile,
          fullName: `${res?.data?.result?.profile?.firstName} ${res.data.result.profile.lastName}`,
        };

        localStorage.setItem('profile', JSON.stringify(obj));
        Cookies.set('logedIn', true);
        Cookies.set('token', res.data.result.token);
        localStorage.setItem('access_token', res.data.result.token);
        dispatch(loginSuccess(true, obj));
        history.push('/');
      } else if (res.data.message === 'Not Exist') {
        dispatch(loginErr("User doesn't exist"));
      } else if (res.data.message === 'UnAuthenticated') {
        message.error('Something went wrong');
        dispatch(loginErr(res.data.message));
      } else {
        message.error('Something went wrong');
        dispatch(loginErr(res.data.message));
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (history) => {
  return async (dispatch) => {
    try {
      dispatch(logoutBegin());
      Cookies.remove('logedIn');
      Cookies.remove('token');
      localStorage.removeItem('profile');
      removeItem('access_token');
      dispatch(logoutSuccess(null));
      history.push('/');
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const preregister = (data, GoogleData, history) => {
  return async (dispatch) => {
    try {
      dispatch(signupBegin());

      const req = {
        ...data,
        loginMethod: GoogleData.password ? GoogleData.loginMethod : 'manual',
      };

      const res = await DataService.post('User/SignUp', req);
      if (res.data.success) {
        message.success(res.data.message);
        dispatch(signupSuccess(res.data));
        if (GoogleData.password) {
          const credential = {
            userName: res.data.result.userName,
            password: GoogleData.password,
          };
          dispatch(login(credential, history, GoogleData.loginMethod));
        }
      } else {
        message.error(res.data.message);
        dispatch(signupErr(res.data.message));
      }
    } catch (err) {
      dispatch(signupErr(err));
    }
  };
};

const register = (data, history) => {
  return async (dispatch) => {
    try {
      dispatch(signupBegin());

      const res = await DataService.post('User/SignUp', data);

      if (res.success === 'Success') {
        message.success('Signup successfull !');
        history.push('/');
        dispatch(signupSuccess(res.data));
        const credential = {
          userName: data?.userName,
          password: data?.password,
        };
        dispatch(login(credential, history));
        dispatch(loginErr(null));
      } else {
        message.error(res.data.message);
        dispatch(signupErr(res.data.message));
      }
    } catch (err) {
      dispatch(signupErr(err));
    }
  };
};

const forgotPassword = (email) => {
  return async (dispatch) => {
    try {
      dispatch(forgotPasswordRequest());

      const res = await DataService.get(`User/ForgotPassword?email=${email}`);

      if (res.data.success) {
        message.success(res.data.message);

        dispatch(forgotPasswordSuccess(res.data));
      } else {
        message.error(res.data.message);
        dispatch(forgotPasswordError(res.data.message));
      }
    } catch (err) {
      dispatch(forgotPasswordError(err));
    }
  };
};

const ForgotPasswordParam = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(sendParamStart());
      const res = await DataService.post('User/ValidateOTP', data);

      if (res.data.success) {
        message.success('Password update success');
        await dispatch(sendParamSuccess(res));
      } else {
        message.error('Something went wrong');
        dispatch(sendParamErr(res.data.message));
      }
    } catch (err) {
      dispatch(sendParamErr(err));
    }
  };
};

const VerifyEmailParam = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(VerifyEmailStart());
      const res = await DataService.post('User/VerifyEmail', data);

      if (res.data.success) {
        await dispatch(VerifyEmailSuccess(res));
        message.success(res.data.message);
      } else {
        message.error('Something went wrong');
        dispatch(VerifyEmailErr(res.data.message));
      }
    } catch (err) {
      dispatch(VerifyEmailErr(err));
    }
  };
};

const sendVerificiationEmail = (username) => {
  return async (dispatch) => {
    try {
      await dispatch(sendVerifyEmailStart());
      const res = await DataService.get('User/SendVerificationEmail?username=', username);
      if (res.data.message === 'Success') {
        message.success('Email sent successfully');
      } else {
        message.error('Something went wrong');
      }
      await dispatch(sendVerifyEmailSuccess(res));
    } catch (err) {
      dispatch(sendVerifyEmailErr(err));
    }
  };
};

export {
  login,
  logOut,
  register,
  checkUsername,
  preregister,
  forgotPassword,
  ForgotPasswordParam,
  VerifyEmailParam,
  sendVerificiationEmail,
};
