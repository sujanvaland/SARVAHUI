const actions = {
  JOB_POST_DATA_BEGIN: 'JOB_POST_DATA_BEGIN',
  JOB_POST_DATA_SUCCESS: 'JOB_POST_DATA_SUCCESS',
  JOB_POST_DATA_ERR: 'JOB_POST_DATA_ERR',

  GET_ALL_JOBS_BEGIN: 'GET_ALL_JOBS_BEGIN',
  GET_ALL_JOBS_SUCCESS: 'GET_ALL_JOBS_SUCCESS',
  GET_ALL_JOBS_ERR: 'GET_ALL_JOBS_ERR',

  GET_ALL_JOBS_EMPTY: 'GET_ALL_JOBS_EMPTY',

  TOGGLE_BOOKMARK_BEGIN: 'TOGGLE_BOOKMARK_BEGIN',
  TOGGLE_BOOKMARK_SUCCESS: 'TOGGLE_BOOKMARK_SUCCESS',
  TOGGLE_BOOKMARK_ERR: 'TOGGLE_BOOKMARK_ERR',

  GET_JOBS_DETAILS_BEGIN: 'GET_JOBS_DETAILS_BEGIN',
  GET_JOBS_DETAILS_SUCCESS: 'GET_JOBS_DETAILS_SUCCESS',
  GET_JOBS_DETAILS_ERR: 'GET_JOBS_DETAILS_ERR',

  GET_BOOKMARK_JOB_BEGIN: 'GET_BOOKMARK_JOB_BEGIN',
  GET_BOOKMARK_JOB_SUCCESS: 'GET_BOOKMARK_JOB_SUCCESS',
  GET_BOOKMARK_JOB_ERR: 'GET_BOOKMARK_JOB_ERR',

  APPLY_JOB_BEGIN: 'APPLY_JOB_BEGIN',
  APPLY_JOB_SUCCESS: 'APPLY_JOB_SUCCESS',
  APPLY_JOB_ERR: 'APPLY_JOB_ERR',

  getBookmarkJobBegin: () => {
      return {
          type: actions.GET_BOOKMARK_JOB_BEGIN,
      };
  },

  getBookmarkJobSuccess: (bookmarkjobs) => {
      return {
          type: actions.GET_BOOKMARK_JOB_SUCCESS,
          bookmarkjobs,
      };
  },

  getBookmarkJobErr: (err) => {
      return {
          type: actions.GET_BOOKMARK_JOB_ERR,
          err,
      };
  },
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
      totalCount: data[0] ? data[0].totalCount : 0, 
      totalSize: data[0] ? data[0].totalSize : 0,
      jobDetails: data ,
    };
  },
  getAllJobsEmpty: (data) => {
    return {
      type: actions.GET_ALL_JOBS_EMPTY,
      totalCount: data ? data[0].totalCount : 0, 
      totalSize: data ? data[0].totalSize : 0,
      jobDetails: data || [],
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

  applyJobBegin: () => {
    return {
      type: actions.APPLY_JOB_BEGIN,
    };
  },

  applyJobSuccess: (data) => {
    return {
      type: actions.APPLY_JOB_SUCCESS,
      applyJob: data,
    };
  },

  applyJobErr: (err) => {
    return {
      type: actions.APPLY_JOB_ERR,
      err,
    };
  },


};

export default actions;
