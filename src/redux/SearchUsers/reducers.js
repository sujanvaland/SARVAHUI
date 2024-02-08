import actions from './actions';

const { SEARCH_USER_REQUEST, SEARCH_USER_SUCCESS, SEARCH_USER_ERR,
  USER_PROFILE_REQUEST, USER_PROFILE_SUCCESS, USER_PROFILE_ERR,
  GETCONNECTIONMENTIONS_REQUEST,GETCONNECTIONMENTIONS_SUCCESS,GETCONNECTIONMENTIONS_ERR,
  MENTIONSEARUCUSER_REQUEST,MENTIONSEARCHUSER_SUCCESS,MENTIONSEARCHUSER_ERR
} = actions;

const initState = {
  loading: false,
  error: null,
  mentionSearchUser:[],
  mentionConnections:[]
};

const SearchUserReducer = (state = initState, action) => {
  const { type, getSearchUserProfile, getSearchUser,mentionConnections,mentionSearchUser,  err } = action;
  switch (type) {

   
    case SEARCH_USER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case SEARCH_USER_SUCCESS:
      return {
        ...state,
        getSearchUser,
        loading: false,
      };

    case SEARCH_USER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case MENTIONSEARUCUSER_REQUEST:
      return {
        ...state,
        loading: true
      };

    case MENTIONSEARCHUSER_SUCCESS:
      return {
        ...state,
        mentionSearchUser,
        loading: false,
      };

    case MENTIONSEARCHUSER_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };
    
    case GETCONNECTIONMENTIONS_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GETCONNECTIONMENTIONS_SUCCESS:
      return {
        ...state,
        mentionConnections,
        loading: false,
      };

    case GETCONNECTIONMENTIONS_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        getSearchUserProfile,
        loading: false,
      };

    case USER_PROFILE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  
      
    default:
      return state;
  }
};
export default SearchUserReducer;
