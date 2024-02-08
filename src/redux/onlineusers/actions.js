const actions = {
  ONLINE_USERS_REQ: 'ONLINE_USERS_REQ',
  ONLINE_USERS_SUCCESS: 'ONLINE_USERS_SUCCESS',
  ONLINE_USERS_ERR: 'ONLINE_USERS_ERR',

  GET_ONLINE_USERS_REQ: 'GET_ONLINE_USERS_REQ',
  GET_ONLINE_USERS_SUCCESS: 'GET_ONLINE_USERS_SUCCESS',
  GET_ONLINE_USERS_ERR: 'GET_ONLINE_USERS_ERR',

  CONNECTION_REQ: "CONNECTION_REQ",
  CONNECTION_SUCCESS: "CONNECTION_SUCCESS",
  CONNECTION_ERR: "CONNECTION_ERR",

  connectionRequest: () => {
    return {
      type:actions.CONNECTION_REQ,
    }
  },

  connectionSuccess: (connection,connectionId) => {
    return {
      type:actions.CONNECTION_SUCCESS,
      connection,
      connectionId
    }
  },

  connectionError: (err) => {
    return {
      type:actions.CONNECTION_ERR,
      err
    }
  },

  getOnlineUsersRequest: () => {
    return {
      type:actions.GET_ONLINE_USERS_REQ,
    }
  },

  getOnlineUsersSuccess: (onlineusers) => {
    return {
      type:actions.GET_ONLINE_USERS_SUCCESS,
      onlineusers
    }
  },

  getOnlineUsersError: (err) => {
    return {
      type:actions.GET_ONLINE_USERS_ERR,
      err
    }
  },

  onlineUsersRequest: () => {
    return {
      type:actions.ONLINE_USERS_REQ,
    }
  },

  onlineUsersSuccess: (data) => {
    return {
      type:actions.ONLINE_USERS_SUCCESS,
      data
    }
  },

  onlineUsersError: (err) => {
    return {
      type:actions.ONLINE_USERS_ERR,
      err
    }
  },

  
};

export default actions;
