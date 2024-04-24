import actions from './actions';

const { UPDATE_PROFILE_REQUEST, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_ERR,
  GET_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_PROFILE_ERR, GET_PROFILE_INFO_REQUEST, 
  GET_PROFILE_INFO_SUCCESS, GET_PROFILE_INFO_ERR,
  GET_NETWORK_REQUEST, GET_NETWORK_SUCCESS, GET_NETWORK_ERR
} = actions;

const initState = {
  loading: false,
  isPloading:false,
  error: null,
};

const UserProfileReducer = (state = initState, action) => {
  const { type, getProfile, updateProfile, userInfoBox, getNetwork, err } = action;
  switch (type) {

   
    case UPDATE_PROFILE_REQUEST:
      return {
        ...state,
        loading: true
      };

    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        updateProfile,
        loading: false,
      };

    case UPDATE_PROFILE_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case GET_PROFILE_REQUEST:
      return {
        ...state,
        isPloading: true
      };

    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        getProfile,
        isPloading: false,
      };

    case GET_PROFILE_ERR:
      return {
        ...state,
        isPloading: false,
        error: err
      };  
    
    case GET_PROFILE_INFO_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        userInfoBox,
        loading: false,
      };

    case GET_PROFILE_INFO_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  
    case GET_NETWORK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_NETWORK_SUCCESS:
      return {
        ...state,
        getNetwork,
        loading: false,
      };
    case GET_NETWORK_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };   
    default:
      return state;
  }
};
export default UserProfileReducer;
