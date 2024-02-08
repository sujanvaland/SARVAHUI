import actions from './actions';

const initialState = {
  data: null,
  loading: false,
  error: null,
  onlineusers: [],
  connection: null
};

const { ONLINE_USERS_REQ, ONLINE_USERS_ERR, ONLINE_USERS_SUCCESS,
  GET_ONLINE_USERS_REQ, GET_ONLINE_USERS_SUCCESS, GET_ONLINE_USERS_ERR,
  CONNECTION_REQ, CONNECTION_SUCCESS, CONNECTION_ERR } = actions;

const onlineUsersReducer = (state = initialState, action) => {
  const { type, data, err, onlineusers, connection, connectionId } = action;

  switch (type) {

    case CONNECTION_REQ:
      return {
        ...state,
        loading: true,
      };
    case CONNECTION_SUCCESS:
      return {
        ...state,
        connection,
        connectionId,
        loading: false,
      };
    case CONNECTION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GET_ONLINE_USERS_REQ:
      return {
        ...state,
        loading: true,
      };
    case GET_ONLINE_USERS_SUCCESS:
      return {
        ...state,
        onlineusers,
        loading: false,
      };
    case GET_ONLINE_USERS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case ONLINE_USERS_REQ:
      return {
        ...state,
        loading: true,
      };
    case ONLINE_USERS_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case ONLINE_USERS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };


    default:
      return state;
  }
};

export default onlineUsersReducer;
