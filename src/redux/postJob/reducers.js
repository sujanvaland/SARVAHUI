import actions from './actions';

const initialState = {
  loading: false,
  error: null,
};

const {
  JOB_POST_DATA_BEGIN, JOB_POST_DATA_SUCCESS, JOB_POST_DATA_ERR,
  GET_ALL_JOBS_BEGIN, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_ERR,
  POST_JOBS_BEGIN, POST_JOBS_SUCCESS, POST_JOBS_ERR,
} = actions;

const JobPostReducer = (state = initialState, action) => {
  const { type, data, err, postjob } = action;
  switch (type) {
    case JOB_POST_DATA_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case JOB_POST_DATA_SUCCESS:
      return {
        ...state,
        job: data,
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
        jobDetails: data,
        postLoading: false,
      };
    case GET_ALL_JOBS_ERR:
      return {
        ...state,
        error: err,
        postLoading: false,
      };
    case POST_JOBS_BEGIN:
      return {
        ...state,
        postLoading: true,
      };
    case POST_JOBS_SUCCESS:
      return {
        ...state,
        postJobs: postjob,
        postLoading: false,
      };
    case POST_JOBS_ERR:
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
