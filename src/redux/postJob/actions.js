const actions = {
  JOB_POST_DATA_BEGIN: 'JOB_POST_DATA_BEGIN',
  JOB_POST_DATA_SUCCESS: 'JOB_POST_DATA_SUCCESS',
  JOB_POST_DATA_ERR: 'JOB_POST_DATA_ERR',

  GET_ALL_JOBS_BEGIN: 'GET_ALL_JOBS_BEGIN',
  GET_ALL_JOBS_SUCCESS: 'GET_ALL_JOBS_SUCCESS',
  GET_ALL_JOBS_ERR: 'GET_ALL_JOBS_ERR',

  TOGGLE_BOOKMARK_BEGIN: 'TOGGLE_BOOKMARK_BEGIN',
  TOGGLE_BOOKMARK_SUCCESS: 'TOGGLE_BOOKMARK_SUCCESS',
  TOGGLE_BOOKMARK_ERR: 'TOGGLE_BOOKMARK_ERR',

  GET_JOBS_DETAILS_BEGIN: 'GET_JOBS_DETAILS_BEGIN',
  GET_JOBS_DETAILS_SUCCESS: 'GET_JOBS_DETAILS_SUCCESS',
  GET_JOBS_DETAILS_ERR: 'GET_JOBS_DETAILS_ERR',


  
  jobPostDataBegin: () => {
    return {
      type: actions.JOB_POST_DATA_BEGIN,
    };
  },

  jobPostDataSuccess: (data) => {
    return {
      type: actions.JOB_POST_DATA_SUCCESS,
      job:data,
    };
  },

  jobPostDataErr: (err) => {
    return {
      type: actions.JOB_POST_DATA_ERR,
      err,
    };
  },

  getAllJobsBegin: () => {
    return {
      type: actions.GET_ALL_JOBS_BEGIN,
    };
  },

  getAllJobsSuccess: (data) => {
    return {
      type: actions.GET_ALL_JOBS_SUCCESS,
      jobDetails: data,
    };
  },

  getAllJobsErr: (err) => {
    return {
      type: actions.GET_ALL_JOBS_ERR,
      err,
    };
  },

  toggleBookmarkBegin: () => {
    return {
      type: actions.TOGGLE_BOOKMARK_BEGIN,
    };
  },

  toggleBookmarkSuccess: (data) => {
    return {
      type: actions.TOGGLE_BOOKMARK_SUCCESS,
      toggleBookmark: data,
    };
  },

  toggleBookmarkErr: (err) => {
    return {
      type: actions.TOGGLE_BOOKMARK_ERR,
      err,
    };
  },

  getJobDetailsBegin: () => {
    return {
      type: actions.GET_JOBS_DETAILS_BEGIN,
    };
  },

  getJobDetailsSuccess: (data) => {
    return {
      type: actions.GET_JOBS_DETAILS_SUCCESS,
      jobpostdetails: data,
    };
  },

  getJobDetailsErr: (err) => {
    return {
      type: actions.GET_JOBS_DETAILS_ERR,
      err,
    };
  },


};

export default actions;
