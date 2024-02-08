const actions = {
  PROFILE_FRIENDS_BEGIN: 'PROFILE_FRIENDS_BEGIN',
  PROFILE_FRIENDS_SUCCESS: 'PROFILE_FRIENDS_SUCCESS',
  PROFILE_FRIENDS_ERR: 'PROFILE_FRIENDS_ERR',

  POST_DATA_BEGIN: 'POST_DATA_BEGIN',
  POST_DATA_SUCCESS: 'POST_DATA_SUCCESS',
  POST_DATA_ERR: 'POST_DATA_ERR',

  CHANGE_PASSWORD_REQUEST: 'CHANGE_PASSWORD_REQUEST',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_ERR: 'CHANGE_PASSWORD_ERR',

  DEACTIVATE_ACCOUNT_REQUEST: 'DEACTIVATE_ACCOUNT_REQUEST',
  DEACTIVATE_ACCOUNT_SUCCESS: 'DEACTIVATE_ACCOUNT_SUCCESS',
  DEACTIVATE_ACCOUNT_ERR: 'DEACTIVATE_ACCOUNT_ERR',

  BLOCKED_USERLIST_REQUEST: 'BLOCKED_USERLIST_REQUEST',
  BLOCKED_USERLIST_SUCCESS: 'BLOCKED_USERLIST_SUCCESS',
  BLOCKED_USERLIST_ERR: 'BLOCKED_USERLIST_ERR',

  profileFriendsBegin: () => {
    return {
      type: actions.PROFILE_FRIENDS_BEGIN,
    };
  },

  profileFriendsSuccess: (data) => {
    return {
      type: actions.PROFILE_FRIENDS_SUCCESS,
      data,
    };
  },

  profileFriendsErr: (err) => {
    return {
      type: actions.PROFILE_FRIENDS_ERR,
      err,
    };
  },

  postDataBegin: () => {
    return {
      type: actions.POST_DATA_BEGIN,
    };
  },

  postDataSuccess: (data) => {
    return {
      type: actions.POST_DATA_SUCCESS,
      data,
    };
  },

  postDataErr: (err) => {
    return {
      type: actions.POST_DATA_ERR,
      err,
    };
  },

  changePasswordRequest: () => {
    return {
      type: actions.CHANGE_PASSWORD_REQUEST,
    };
  },

  changePasswordSuccess: (changepassword) => {
    return {
      type: actions.CHANGE_PASSWORD_SUCCESS,
      changepassword,
    };
  },

  changePasswordErr: () => {
    return {
      type: actions.CHANGE_PASSWORD_ERR,
    };
  },

  deactivateAccountRequest: () => {
    return {
      type: actions.CHANGE_PASSWORD_REQUEST,
    };
  },

  deactivateAccountSuccess: (deactivateaccount) => {
    return {
      type: actions.CHANGE_PASSWORD_REQUEST,
      deactivateaccount,
    };
  },

  deactivateAccountErr: () => {
    return {
      type: actions.CHANGE_PASSWORD_REQUEST,
    };
  },

  blockedUserlistRequest: () => {
    return {
      type: actions.BLOCKED_USERLIST_REQUEST,
    };
  },

  blockedUserlistSuccess: (blockedUser) => {
    return {
      type: actions.BLOCKED_USERLIST_SUCCESS,
      blockedUser,
    };
  },

  blockedUserlistErr: () => {
    return {
      type: actions.BLOCKED_USERLIST_ERR,
    };
  },
};

export default actions;
