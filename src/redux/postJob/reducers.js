import actions from './actions';

const initialState = {
  loading: false,
  error: null,
  jobDetails: [],
  isnotifyloading:false,
};

const {
  JOB_POST_DATA_BEGIN, JOB_POST_DATA_SUCCESS, JOB_POST_DATA_ERR,
  GET_USER_RESUME_BEGIN, GET_USER_RESUME_SUCCESS, GET_USER_RESUME_ERR,
  GET_JOB_APPLICATION_BEGIN, GET_JOB_APPLICATION_SUCCESS, GET_JOB_APPLICATION_ERR,
  GET_ALL_JOBS_BEGIN, GET_ALL_JOBS_SUCCESS, GET_ALL_JOBS_ERR, GET_ALL_JOBS_EMPTY,
  TOGGLE_BOOKMARK_BEGIN, TOGGLE_BOOKMARK_SUCCESS, TOGGLE_BOOKMARK_ERR,
  GET_JOBS_DETAILS_BEGIN, GET_JOBS_DETAILS_SUCCESS, GET_JOBS_DETAILS_ERR,
  GET_BOOKMARK_JOB_BEGIN, GET_BOOKMARK_JOB_SUCCESS, GET_BOOKMARK_JOB_ERR,
  APPLY_JOB_BEGIN, APPLY_JOB_SUCCESS, APPLY_JOB_ERR,
  GET_ALL_CANDIDATE_REQUEST, GET_ALL_CANDIDATE_SUCCESS, GET_ALL_CANDIDATE_ERR,
  GET_ALL_RECUITER_REQUEST, GET_ALL_RECUITER_SUCCESS, GET_ALL_RECUITER_ERR,
  GET_ALLSTATS_REQUEST, GET_ALLSTATS_SUCCESS, GET_ALLSTATS_ERR,
  ACTION_SETTING_REQUEST, ACTION_SETTING_SUCCESS, ACTION_SETTING_ERR,
  GET_SETTING_REQUEST, GET_SETTING_SUCCESS, GET_SETTING_ERR,
  APPLICATION_VIEWED_REQUEST, APPLICATION_VIEWED_SUCCESS, APPLICATION_VIEWED_ERR,
  ACTION_DELETE_REQUEST, ACTION_DELETE_SUCCESS, ACTION_DELETE_ERR
} = actions;

const JobPostReducer = (state = initialState, action) => {
  const { type, jobDetails, job, err, bookmarkjobs, toggleBookmark, jobApplication, 
    jobResume, getStats, getSetting, actionSetting, applicationView, deleteEC,
    applyJob, totalCount, totalSize, jobpostdetails, getAllCandidate, getAllRecuiter } = action;
  switch (type) {

    case ACTION_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_DELETE_SUCCESS:
      return {
        ...state,
        deleteEC,
        loading: false,
      };
    case ACTION_DELETE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case APPLICATION_VIEWED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case APPLICATION_VIEWED_SUCCESS:
      return {
        ...state,
        applicationView,
        loading: false,
      };
    case APPLICATION_VIEWED_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_SETTING_REQUEST:
      return {
        ...state,
        isnotifyloading: true,
      };
    case GET_SETTING_SUCCESS:
      return {
        ...state,
        getSetting,
        isnotifyloading: false,
      };
    case GET_SETTING_ERR:
      return {
        ...state,
        error: err,
        isnotifyloading: false,
      };

    case ACTION_SETTING_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ACTION_SETTING_SUCCESS:
      return {
        ...state,
        actionSetting,
        loading: false,
      };
    case ACTION_SETTING_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    case GET_ALL_RECUITER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_RECUITER_SUCCESS:
      return {
        ...state,
        getAllRecuiter,
        loading: false,
      };
    case GET_ALL_RECUITER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
      case GET_ALLSTATS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case GET_ALLSTATS_SUCCESS:
        return {
          ...state,
          getStats,
          loading: false,
        };
      case GET_ALLSTATS_ERR:
        return {
          ...state,
          error: err,
          loading: false,
        };
    case GET_ALL_CANDIDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CANDIDATE_SUCCESS:
      return {
        ...state,
        getAllCandidate,
        loading: false,
      };
    case GET_ALL_CANDIDATE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

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

    case GET_USER_RESUME_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_RESUME_SUCCESS:
      return {
        ...state,
        jobResume,
        loading: false,
      };
    case GET_USER_RESUME_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GET_JOB_APPLICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case GET_JOB_APPLICATION_SUCCESS:
      return {
        ...state,
        jobApplication,
        loading: false,
      };
    case GET_JOB_APPLICATION_ERR:
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
        jobDetails: [...state.jobDetails, ...jobDetails],
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
    case APPLY_JOB_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case APPLY_JOB_SUCCESS:
      return {
        ...state,
        applyJob,
        loading: false,
      };
    case APPLY_JOB_ERR:
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
