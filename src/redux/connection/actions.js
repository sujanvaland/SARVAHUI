const actions = {
  CONNECTION_REQUEST: 'CONNECTION_REQUEST',
  CONNECTION_SUCCESS: 'CONNECTION_SUCCESS',
  CONNECTION_ERR: 'CONNECTION_ERR',

  BLOCK_USER_REQUEST: "BLOCK_USER_REQUEST",
  BLOCK_USER_SUCCESS: "BLOCK_USER_SUCCESS",
  BLOCK_USER_ERR: "BLOCK_USER_ERR",

  blockUserRequest: () => {
    return {
      type:actions.BLOCK_USER_REQUEST,
    }
  },

  blockUserSuccess: (data) => {
    return {
      type:actions.BLOCK_USER_SUCCESS,
      data
    }
  },

  blockUserError: (err) => {
    return {
      type:actions.BLOCK_USER_ERR,
      err
    }
  },


  connectionRequest: () => {
    return {
      type:actions.CONNECTION_REQUEST,
    }
  },

  connectionSuccess: (data) => {
    return {
      type:actions.CONNECTION_SUCCESS,
      data
    }
  },

  connectionError: (err) => {
    return {
      type:actions.CONNECTION_ERR,
      err
    }
  },
  
};

export default actions;
