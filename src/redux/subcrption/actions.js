const actions = {

  BUY_SUBCRIPTION_REQUEST: 'BUY_SUBCRIPTION_REQUEST',
  BUY_SUBCRIPTION_SUCCESS:'BUY_SUBCRIPTION_SUCCESS',
  BUY_SUBCRIPTION_ERR:'BUY_SUBCRIPTION_ERR',
 
  getSubcriptionRequest:()=>{
    return {
      type: actions.BUY_SUBCRIPTION_REQUEST
    }
  },

  getSubcriptionSuccess:(data)=>{
    return {
      type: actions.BUY_SUBCRIPTION_SUCCESS,
      getSubcription:data
    };
  },

  getSubcriptionError:(err)=>{
    return {
      type: actions.BUY_SUBCRIPTION_ERR,
      err
    }
  },

};

export default actions;
