import actions from './actions';

const initialState = {
  data: [],
  timelinedata: [],
  metaData: [],
  bookmarks: [],
  loading: false,
  IsMentionLoading: false,
  error: null,
  progress: 0,
  postdetails: null,
  pageno: 0,
  profilepageno: 0,
  nopost: false,
  newpostcount:0
};

const { POST_UPLOAD_REQUEST, POST_UPLOAD_SUCCESS, POST_UPLOAD_ERR,
  TIMELINE_REQUEST, TIMELINE_SUCCESS, TIMELINEPOST_SUCCESS, TIMELINE_ERR, SET_UPLOAD_PROGRESS,
  DELETE_POST_REQ, DELETE_POST_SUCCESS, DELETE_POST_ERR,
  POST_DETAILS_START, POST_DETAILS_SUCCESS, POST_DETAILS_ERR,
  POST_EXTRACTMETA_REQUEST, POST_EXTRACTMETA_SUCCESS, POST_EXTRACTMETA_ERR,
  BOOKMARKS_REQUEST, BOOKMARKS_SUCCESS, BOOKMARKS_ERR, SET_PAGENO,
  BLOCK_POST_REQ, BLOCK_POST_SUCCESS, BLOCK_POST_ERR, SET_NO_POST,
  GETPOSTBYID_REQUEST, GETPOSTBYID_SUCCESS, GETPOSTBYID_ERR,
  SAVE_POLLPOST_REQUEST, SAVE_POLLPOST_SUCCESS, SAVE_POLLPOST_ERR,
  SAVE_POLLVOTE_REQUEST, SAVE_POLLVOTE_SUCCESS, SAVE_POLLVOTE_ERR,
  GET_POLLDETAILS_REQUEST, GET_POLLDETAILS_SUCCESS, GET_POLLDETAILS_ERR,
  GET_USERPROFILETIMELINE_REQUEST, GET_USERPROFILETIMELINE_SUCCESS, GET_USERPROFILETIMELINE_ERR,
  SET_PROFILEPAGENO, UPDATE_NEWPOST_REQUEST, CHANGEWHOCANREPLY_REQUEST, CHANGEWHOCANREPLY_SUCCESS,
  CHANGEWHOCANREPLY_ERR, PINUNPINPOST_REQUEST, PINUNPINPOST_SUCCESS, PINUNPINPOST_ERR,
  GET_MENTIONLIST_REQUEST, GET_MENTIONLIST_SUCCESS, GET_MENTIONLIST_ERR,

} = actions;

const postReducer = (state = initialState, action) => {
  const { type, data, err, timelinedata, progress, postdetails, metaData, bookmarks, pageno, profilepageno, nopost,
    pollpostdetails, savepollvotes, polldetails, userprofiletimelinedetails, newpostcount, pinunpinpost, getMentionList } = action;


  switch (type) {

    case UPDATE_NEWPOST_REQUEST:
      return {
        ...state,
        newpostcount
      }

    case SET_NO_POST:
      return {
        ...state,
        nopost
      }

    case BLOCK_POST_REQ:
      return {
        ...state,
        loading: true,
      };
    case BLOCK_POST_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case BLOCK_POST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case SET_PAGENO:
      return {
        ...state,
        pageno
      }

    case SET_PROFILEPAGENO:
      return {
        ...state,
        profilepageno
      }

    case BOOKMARKS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BOOKMARKS_SUCCESS:
      return {
        ...state,
        bookmarks,
        loading: false,
      };
    case BOOKMARKS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case POST_DETAILS_START:
      return {
        ...state,
        loading: true,
      };
    case POST_DETAILS_SUCCESS:
      return {
        ...state,
        postdetails,
        loading: false,
      };
    case POST_DETAILS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };


    case DELETE_POST_REQ:
      return {
        ...state,
        loading: true,
      };
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case DELETE_POST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };


    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        loading: true,
        progress,
      }

    case TIMELINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case TIMELINE_SUCCESS:
      return {
        ...state,
        timelinedata: [...state.timelinedata, ...timelinedata],
        loading: false,
      };
    case TIMELINEPOST_SUCCESS:
      return {
        ...state,
        timelinedata,
        loading: false,
      };
    case TIMELINE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case POST_UPLOAD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_UPLOAD_SUCCESS:
      return {
        ...state,
        data,
        loading: false,
      };
    case POST_UPLOAD_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case POST_EXTRACTMETA_REQUEST:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case POST_EXTRACTMETA_SUCCESS:
      return {
        ...state,
        error: err,
        metaData,
        loading: false,
      };
    case POST_EXTRACTMETA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GETPOSTBYID_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GETPOSTBYID_SUCCESS:
      return {
        ...state,
        postdetails,
        loading: false,
      };
    case GETPOSTBYID_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };


      case GET_MENTIONLIST_REQUEST:
        return {
          ...state,
          IsMentionLoading: true,
        };
      case GET_MENTIONLIST_SUCCESS:
        return {
          ...state,
          getMentionList,
          IsMentionLoading: false,
        };
      case GET_MENTIONLIST_ERR:
        return {
          ...state,
          error: err,
          IsMentionLoading: false,
        };


    case SAVE_POLLPOST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_POLLPOST_SUCCESS:
      return {
        ...state,
        pollpostdetails,
        loading: false,
      };
    case SAVE_POLLPOST_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case SAVE_POLLVOTE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SAVE_POLLVOTE_SUCCESS:
      return {
        ...state,
        savepollvotes,
        loading: false,
      };
    case SAVE_POLLVOTE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_POLLDETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POLLDETAILS_SUCCESS:
      return {
        ...state,
        polldetails,
        loading: false,
      };
    case GET_POLLDETAILS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_USERPROFILETIMELINE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERPROFILETIMELINE_SUCCESS:
      return {
        ...state,
        userprofiletimelinedetails,
        loading: false,
      };
    case GET_USERPROFILETIMELINE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case CHANGEWHOCANREPLY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CHANGEWHOCANREPLY_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case CHANGEWHOCANREPLY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case PINUNPINPOST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case PINUNPINPOST_SUCCESS:
        return {
          ...state,
          loading: false,
          pinunpinpost,
        };
      case PINUNPINPOST_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    default:
      return state;
  }
};

export default postReducer;
