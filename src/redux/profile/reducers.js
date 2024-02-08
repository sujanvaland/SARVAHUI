import actions from './actions';
import toData from '../../demoData/friends.json';
import posts from '../../demoData/post.json';

const initialState = {
  friends: toData,
  loading: false,
  error: null,
  posts,
  postLoading: false,
};

const {
  PROFILE_FRIENDS_BEGIN, PROFILE_FRIENDS_SUCCESS, PROFILE_FRIENDS_ERR,
  POST_DATA_BEGIN, POST_DATA_SUCCESS, POST_DATA_ERR,
  CHANGE_PASSWORD_REQUEST, CHANGE_PASSWORD_SUCCESS, CHANGE_PASSWORD_ERR,
  DEACTIVATE_ACCOUNT_REQUEST, DEACTIVATE_ACCOUNT_SUCCESS, DEACTIVATE_ACCOUNT_ERR,
  BLOCKED_USERLIST_REQUEST, BLOCKED_USERLIST_SUCCESS, BLOCKED_USERLIST_ERR,
} = actions;

const ProfileReducer = (state = initialState, action) => {
  const { type, data, err, blockedUser, changepassword, deactivateaccount } = action;
  switch (type) {
    case PROFILE_FRIENDS_BEGIN:
      return {
        ...state,
        sLoading: true,
      };
    case PROFILE_FRIENDS_SUCCESS:
      return {
        ...state,
        friends: data,
        sLoading: false,
      };
    case PROFILE_FRIENDS_ERR:
      return {
        ...state,
        error: err,
        sLoading: false,
      };
    case POST_DATA_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        posts: data,
        postLoading: false,
      };
    case POST_DATA_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };
    case CHANGE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changepassword,
        loading: false,
      };
    case CHANGE_PASSWORD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case DEACTIVATE_ACCOUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case DEACTIVATE_ACCOUNT_SUCCESS:
      return {
        ...state,
        deactivateaccount,
        loading: false,
      };
    case DEACTIVATE_ACCOUNT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case BLOCKED_USERLIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case BLOCKED_USERLIST_SUCCESS:
        return {
          ...state,
          blockedUser,
          loading: false,
        };
      case BLOCKED_USERLIST_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    default:
      return state;
  }
};

export default ProfileReducer;
