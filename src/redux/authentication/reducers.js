import Cookies from 'js-cookie';
import actions from './actions';

const { LOGIN_BEGIN, LOGIN_SUCCESS, LOGIN_ERR, LOGOUT_BEGIN, LOGOUT_SUCCESS, LOGOUT_ERR,
  CHECK_USERNAME_REQUEST, CHECKE_USERNAME_SUCCESS, CHECK_USERNAME_ERR,
  SIGNUP_BEGIN, SIGNUP_SUCCESS, SIGNUP_ERR ,FORGOT_PASSWORD_REQUEST ,
  FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERR ,SENDPARAM_REQUEST, SENDPARAM_SUCCESS, SENDPARAM_ERR ,
  VERIFY_EMAIL_REQUEST, VERIFY_EMAIL_SUCCESS, VERIFY_EMAIL_ERR,
} = actions;

const initState = {
  login: !!Cookies.get('logedIn'),
  userprofile : JSON.parse(localStorage.getItem("profile")),
  loading: false,
  isExist: false,
  error: null,
};

/**
 *
 * @todo impure state mutation/explaination
 */

const AuthReducer = (state = initState, action) => {
  const { type, data, login, userprofile, err, isVerified, isExist } = action;
  switch (type) {

    case FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true
      };

    case FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
        isExist
      };

    case FORGOT_PASSWORD_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case CHECK_USERNAME_REQUEST:
      return {
        ...state,
        loading: true
      };

    case CHECKE_USERNAME_SUCCESS:
      return {
        ...state,
        loading: false,
        isExist
      };

    case CHECK_USERNAME_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case LOGIN_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login,
        userprofile,
        loading: false,
      };
    case LOGIN_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case SIGNUP_BEGIN:
      return {
        ...state,
        loading: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case SIGNUP_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case LOGOUT_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case LOGOUT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case SENDPARAM_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SENDPARAM_SUCCESS:
      return {
        ...state,
        login: data,
        loading: false,
      };
    case SENDPARAM_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };


    case VERIFY_EMAIL_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case VERIFY_EMAIL_SUCCESS:
      return {
        ...state,
        isVerified,
        loading: false,
      };
    case VERIFY_EMAIL_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      
    default:
      return state;
  }
};
export default AuthReducer;
