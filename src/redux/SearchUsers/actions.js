const actions = {

  SEARCH_USER_REQUEST: 'SEARCH_USER_REQUEST',
  SEARCH_USER_SUCCESS:'SEARCH_USER_SUCCESS',
  SEARCH_USER_ERR:'SEARCH_USER_ERR',

  GETCONNECTIONMENTIONS_REQUEST: 'GETCONNECTIONMENTIONS_REQUEST',
  GETCONNECTIONMENTIONS_SUCCESS:'GETCONNECTIONMENTIONS_SUCCESS',
  GETCONNECTIONMENTIONS_ERR:'GETCONNECTIONMENTIONS_ERR',

  MENTIONSEARUCUSER_REQUEST: 'MENTIONSEARUCUSER_REQUEST',
  MENTIONSEARCHUSER_SUCCESS:'MENTIONSEARCHUSER_SUCCESS',
  MENTIONSEARCHUSER_ERR:'MENTIONSEARCHUSER_ERR',

  USER_PROFILE_REQUEST: 'USER_PROFILE_REQUEST',
  USER_PROFILE_SUCCESS:'USER_PROFILE_SUCCESS',
  USER_PROFILE_ERR:'USER_PROFILE_ERR',

 
  getSearchUserRequest:()=>{
    return {
      type: actions.SEARCH_USER_REQUEST
    }
  },

  getSearchUserSuccess:(data)=>{
    return {
      type: actions.SEARCH_USER_SUCCESS,
      getSearchUser:data
    };
  },

  getSearchUserError:(err)=>{
    return {
      type: actions.SEARCH_USER_ERR,
      err
    }
  },

  getConnectionsMentionsRequest:()=>{
    return {
      type: actions.GETCONNECTIONMENTIONS_REQUEST
    }
  },

  getConnectionsMentionsSuccess:(data)=>{
    return {
      type: actions.GETCONNECTIONMENTIONS_SUCCESS,
      mentionConnections:data
    };
  },

  getConnectionsMentionsError:(err)=>{
    return {
      type: actions.GETCONNECTIONMENTIONS_ERR,
      err
    }
  },

  mentionSearchUserRequest:()=>{
    return {
      type: actions.MENTIONSEARUCUSER_REQUEST
    }
  },

  mentionSearchUserSuccess:(data)=>{
    return {
      type: actions.MENTIONSEARCHUSER_SUCCESS,
      mentionSearchUser:data
    };
  },

  mentionSearchUserError:(err)=>{
    return {
      type: actions.MENTIONSEARCHUSER_ERR,
      err
    }
  },
  
  getUserProfileRequest:()=>{
    return {
      type: actions.USER_PROFILE_REQUEST
    }
  },

  getUserProfileSuccess:(data)=>{
    return {
      type: actions.USER_PROFILE_SUCCESS,
      getSearchUserProfile:data
    };
  },

  getUserProfileError:(err)=>{
    return {
      type: actions.USER_PROFILE_ERR,
      err
    }
  },
  
};

export default actions;
