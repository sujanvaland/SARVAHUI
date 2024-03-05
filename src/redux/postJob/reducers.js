import actions from './actions';

const initialState = {
  loading: false,
  error: null,
};

const {
  JOB_POST_DATA_BEGIN, JOB_POST_DATA_SUCCESS, JOB_POST_DATA_ERR,
  GET_ALL_JOBS_BEGIN, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_ERR,
  TOGGLE_BOOKMARK_BEGIN, TOGGLE_BOOKMARK_SUCCESS, TOGGLE_BOOKMARK_ERR,
  GET_JOBS_DETAILS_BEGIN, GET_JOBS_DETAILS_SUCCESS, GET_JOBS_DETAILS_ERR,

} = actions;

const JobPostReducer = (state = initialState, action) => {
  const { type, jobDetails, job, err, toggleBookmark, jobpostdetails } = action;
  switch (type) {
    case JOB_POST_DATA_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case JOB_POST_DATA_SUCCESS:
      return {
        ...state,
        job,
        postLoading: false,
      };
    case JOB_POST_DATA_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };
    case GET_ALL_JOBS_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case GET_ALL_JOBS_SUCCESS:
      return {
        ...state,
        jobDetails,
        postLoading: false,
      };
    case GET_ALL_JOBS_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };
    case TOGGLE_BOOKMARK_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case TOGGLE_BOOKMARK_SUCCESS:
      return {
        ...state,
        toggleBookmark,
        postLoading: false,
      };
    case TOGGLE_BOOKMARK_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };

    case GET_JOBS_DETAILS_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case GET_JOBS_DETAILS_SUCCESS:
      return {
        ...state,
        jobpostdetails,
        postLoading: false,
      };
    case GET_JOBS_DETAILS_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };

    default:
      return state;
  }
};

export default JobPostReducer;
