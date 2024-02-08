import actions from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null
};

const { CONNECTION_REQUEST, CONNECTION_SUCCESS, CONNECTION_ERR,
BLOCK_USER_REQUEST, BLOCK_USER_SUCCESS, BLOCK_USER_ERR } = actions;

const connectionReducer = (state = initialState, action) => {
  const { type, data, err } = action;


  switch (type) {

    case BLOCK_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BLOCK_USER_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case BLOCK_USER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CONNECTION_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case CONNECTION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export default connectionReducer;
