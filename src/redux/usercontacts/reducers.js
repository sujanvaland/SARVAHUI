import actions from './actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const { FETCH_STORE_CONTACTS_REQ, FETCH_STORE_CONTACTS_SUCCESS, FETCH_STORE_CONTACTS_ERR } = actions;

const fetchContactsReducer = (state = initialState, action) => {
  const { type, data, err } = action;

  switch (type) {
    case FETCH_STORE_CONTACTS_REQ:
      return {
        ...state,
        loading: true,
      };
    case FETCH_STORE_CONTACTS_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case FETCH_STORE_CONTACTS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default fetchContactsReducer;
