import actions from './actions';

const { BUY_SUBCRIPTION_REQUEST, BUY_SUBCRIPTION_SUCCESS, BUY_SUBCRIPTION_ERR,
} = actions;

const initState = {
  loading: false,
  error: null,
};

const SubcrptionReducer = (state = initState, action) => {
  const { type, getSubcription,  err } = action;
  switch (type) {

   
    case BUY_SUBCRIPTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case BUY_SUBCRIPTION_SUCCESS:
      return {
        ...state,
        getSubcription,
        loading: false,
      };

    case BUY_SUBCRIPTION_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    default:
      return state;
  }
};
export default SubcrptionReducer;
