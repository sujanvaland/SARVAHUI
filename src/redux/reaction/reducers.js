import actions from './actions';

const initialState = {
  loading: false,
  error: null,
  data:null,
  comments:[],
  bookmark:null
};

const { INSERT_COMMENT_REQUEST,INSERT_COMMENT_SUCCESS, INSERT_COMMENT_ERR,
GET_COMMNET_REQ, GET_COMMNET_SUCCESS, GET_COMMENT_ERR, 
BOOKMARK_REQUEST,BOOKMARK_SUCCESS, BOOKMARK_ERR,
LIKE_REQ, LIKE_SUCCESS, LIKE_ERR } = actions;

const reactionReducer = (state = initialState, action) => {
  const { type, data, err, comments, bookmark } = action;
  switch (type) {
    case LIKE_REQ:
      return {
        ...state,
        loading: true,
      };
    case LIKE_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case LIKE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case BOOKMARK_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case BOOKMARK_SUCCESS:
      return {
        ...state,
        bookmark,
        loading: false,
      };
    case BOOKMARK_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_COMMNET_REQ:
      return {
        ...state,
        loading: true,
      };
    case GET_COMMNET_SUCCESS:
      return {
        ...state,
        comments,
        loading: false,
      };
    case GET_COMMENT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case INSERT_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case INSERT_COMMENT_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case INSERT_COMMENT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default reactionReducer;
