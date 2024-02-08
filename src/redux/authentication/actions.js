const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  SIGNUP_BEGIN: 'SIGNUP_BEGIN',
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
  SIGNUP_ERR: 'SIGNUP_ERR',

  CHECK_USERNAME_REQUEST: 'CHECK_USERNAME_REQUEST',
  CHECKE_USERNAME_SUCCESS: 'CHECK_USERNAME_SUCCESS',
  CHECK_USERNAME_ERR: 'CHECK_USERNAME_ERR',

  FORGOT_PASSWORD_REQUEST: 'FORGOT_PASSWORD_REQUEST',
  FORGOT_PASSWORD_SUCCESS: 'FORGOT_PASSWORD_SUCCESSFUL',
  FORGOT_PASSWORD_ERR: 'FORGOT_PASSWORD_ERR',

  SENDPARAM_REQUEST: 'SENDPARAM_REQUEST',
  SENDPARAM_SUCCESS: 'SENDPARAM_SUCCESS',
  SENDPARAM_ERR: 'SENDPARAM_ERR',

  SENDVERIFYEMAIL_REQUEST: 'SENDVERIFYEMAIL_REQUEST',
  SENDVERIFYEMAIL_SUCCESS: 'SENDVERIFYEMAIL_SUCCESS',
  SENDVERIFYEMAIL_ERR: 'SENDVERIFYEMAIL_ERR',

  VERIFY_EMAIL_REQUEST: 'VERIFY_EMAIL_REQUEST',
  VERIFY_EMAIL_SUCCESS: 'VERIFY_EMAIL_SUCCESS',
  VERIFY_EMAIL_ERR: 'VERIFY_EMAIL_ERR',

  forgotPasswordRequest: () => {
    return {
      type: actions.FORGOT_PASSWORD_REQUEST,
    };
  },

  forgotPasswordSuccess: (isExist) => {
    return {
      type: actions.FORGOT_PASSWORD_SUCCESS,
      isExist,
    };
  },

  forgotPasswordError: (err) => {
    return {
      type: actions.FORGOT_PASSWORD_ERR,
      err,
    };
  },

  checkUserNameRequest: () => {
    return {
      type: actions.CHECK_USERNAME_REQUEST,
    };
  },

  checkUserNameSuccess: (isExist) => {
    return {
      type: actions.CHECKE_USERNAME_SUCCESS,
      isExist,
    };
  },

  checkUserNameError: (err) => {
    return {
      type: actions.checkUserNameError,
      err,
    };
  },

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: (login, userprofile) => {
    return {
      type: actions.LOGIN_SUCCESS,
      login,
      userprofile,
    };
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: (login) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      login,
      userprofile: null,
    };
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },

  signupBegin: () => {
    return {
      type: actions.SIGNUP_BEGIN,
    };
  },

  signupSuccess: (data) => {
    return {
      type: actions.SIGNUP_SUCCESS,
      data,
    };
  },

  signupErr: (err) => {
    return {
      type: actions.SIGNUP_ERR,
      err,
    };
  },
  sendParamStart: () => {
    return {
      type: actions.SENDPARAM_REQUEST,
    };
  },

  sendParamSuccess: (data) => {
    return {
      type: actions.SENDPARAM_SUCCESS,
      data,
    };
  },

  sendParamErr: (err) => {
    return {
      type: actions.SENDPARAM_ERR,
      err,
    };
  },
  sendVerifyEmailStart: () => {
    return {
      type: actions.SENDVERIFYEMAIL_REQUEST,
    };
  },

  sendVerifyEmailSuccess: (data) => {
    return {
      type: actions.SENDVERIFYEMAIL_SUCCESS,
      data,
    };
  },

  sendVerifyEmailErr: (err) => {
    return {
      type: actions.SENDVERIFYEMAIL_ERR,
      err,
    };
  },

  VerifyEmailStart: () => {
    return {
      type: actions.VERIFY_EMAIL_REQUEST,
    };
  },

  VerifyEmailSuccess: (data) => {
    return {
      type: actions.VERIFY_EMAIL_SUCCESS,
      isVerified: data,
    };
  },

  VerifyEmailErr: (err) => {
    return {
      type: actions.VERIFY_EMAIL_ERR,
      err,
    };
  },
};

export default actions;
