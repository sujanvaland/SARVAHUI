import actions from './actions';

const initialState = {
  loading: false,
  error: null,
  jobDetails:[]
};

const {
  JOB_POST_DATA_BEGIN, JOB_POST_DATA_SUCCESS, JOB_POST_DATA_ERR,
  GET_ALL_JOBS_BEGIN, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_ERR, GET_ALL_JOBS_EMPTY,
  TOGGLE_BOOKMARK_BEGIN, TOGGLE_BOOKMARK_SUCCESS, TOGGLE_BOOKMARK_ERR,
  GET_JOBS_DETAILS_BEGIN, GET_JOBS_DETAILS_SUCCESS, GET_JOBS_DETAILS_ERR,
  GET_BOOKMARK_JOB_BEGIN, GET_BOOKMARK_JOB_SUCCESS, GET_BOOKMARK_JOB_ERR
} = actions;

const JobPostReducer = (state = initialState, action) => {
  const { type, jobDetails, job, err, bookmarkjobs, toggleBookmark, totalCount, totalSize, jobpostdetails } = action;
  switch (type) {
    case GET_BOOKMARK_JOB_BEGIN:
      return {
          ...state,
          loading: true,
      };
  case GET_BOOKMARK_JOB_SUCCESS:
      return {
          ...state,
          bookmarkjobs,
          loading: false,
      };
  case GET_BOOKMARK_JOB_ERR:
      return {
          ...state,
          error: err,
          loading: false,
      };
  
    case JOB_POST_DATA_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case JOB_POST_DATA_SUCCESS:
      return {
        ...state,
        job,
        loading: false,
      };
    case JOB_POST_DATA_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_ALL_JOBS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        totalCount,
        totalSize,
        jobDetails:[...state.jobDetails,...jobDetails],
        loading: false,
      };
      case GET_ALL_JOBS_EMPTY:
        return {
          ...state,
          totalCount,
          totalSize,
          jobDetails,
          loading: false,
        };
    case GET_ALL_JOBS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case TOGGLE_BOOKMARK_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case TOGGLE_BOOKMARK_SUCCESS:
      return {
        ...state,
        toggleBookmark,
        loading: false,
      };
    case TOGGLE_BOOKMARK_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GET_JOBS_DETAILS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_JOBS_DETAILS_SUCCESS:
      return {
        ...state,
        jobpostdetails,
        loading: false,
      };
    case GET_JOBS_DETAILS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default JobPostReducer;
