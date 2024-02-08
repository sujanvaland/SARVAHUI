const actions = {

  UPDATE_PROFILE_REQUEST: 'UPDATE_PROFILE_REQUEST',
  UPDATE_PROFILE_SUCCESS:'UPDATE_PROFILE_SUCCESS',
  UPDATE_PROFILE_ERR:'UPDATE_PROFILE_ERR',

  GET_PROFILE_REQUEST: 'GET_PROFILE_REQUEST',
  GET_PROFILE_SUCCESS:'GET_PROFILE_SUCCESS',
  GET_PROFILE_ERR:'GET_PROFILE_ERR',

  GET_PROFILE_INFO_REQUEST: 'GET_PROFILE_INFO_REQUEST',
  GET_PROFILE_INFO_SUCCESS:'GET_PROFILE_INFO_SUCCESS',
  GET_PROFILE_INFO_ERR:'GET_PROFILE_INFO_ERR',

  GET_NETWORK_REQUEST: 'GET_NETWORK_REQUEST',
  GET_NETWORK_SUCCESS: 'GET_NETWORK_SUCCESS',
  GET_NETWORK_ERR: 'GET_NETWORK_ERR',

  updateProfileRequest:()=>{
    return {
      type: actions.UPDATE_PROFILE_REQUEST
    }
  },

  updateProfileSuccess:(data)=>{
    return {
      type: actions.UPDATE_PROFILE_SUCCESS,
      updateProfile:data
    };
  },

  updateProfileError:(err)=>{
    return {
      type: actions.UPDATE_PROFILE_ERR,
      err
    }
  },

  getProfileRequest:()=>{
    return {
      type: actions.GET_PROFILE_REQUEST
    }
  },

  getProfileSuccess:(data)=>{
    return {
      type: actions.GET_PROFILE_SUCCESS,
      getProfile:data
    };
  },

  getProfileError:(err)=>{
    return {
      type: actions.GET_PROFILE_ERR,
      err
    }
  },
  getUserInfoBoxRequest:()=>{
    return {
      type: actions.GET_PROFILE_INFO_REQUEST
    }
  },

  getUserInfoBoxSuccess:(data)=>{
    return {
      type: actions.GET_PROFILE_INFO_SUCCESS,
      userInfoBox:data
    };
  },

  getUserInfoBoxError:(err)=>{
    return {
      type: actions.GET_PROFILE_INFO_ERR,
      err
    }
  },
  getNetworkRequest: () => {
    return {
      type: actions.GET_NETWORK_REQUEST,
    };
  },

  getNetworkSuccess: (data) => {
    return {
      type: actions.GET_NETWORK_SUCCESS,
      getNetwork: data,
    };
  },

  getNetworkErr: (err) => {
    return {
      type: actions.GET_NETWORK_ERR,
      err,
    };
  },
};

export default actions;
