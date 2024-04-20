const actions = {
  JOB_POST_DATA_BEGIN: 'JOB_POST_DATA_BEGIN',
  JOB_POST_DATA_SUCCESS: 'JOB_POST_DATA_SUCCESS',
  JOB_POST_DATA_ERR: 'JOB_POST_DATA_ERR',

  GET_USER_RESUME_BEGIN: 'GET_USER_RESUME_BEGIN',
  GET_USER_RESUME_SUCCESS: 'GET_USER_RESUME_SUCCESS',
  GET_USER_RESUME_ERR: 'GET_USER_RESUME_ERR',

  GET_JOB_APPLICATION_BEGIN: 'GET_JOB_APPLICATION_BEGIN',
  GET_JOB_APPLICATION_SUCCESS: 'GET_JOB_APPLICATION_SUCCESS',
  GET_JOB_APPLICATION_ERR: 'GET_JOB_APPLICATION_ERR',

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

  GET_ALL_CANDIDATE_REQUEST: 'GET_ALL_CANDIDATE_REQUEST',
  GET_ALL_CANDIDATE_SUCCESS: 'GET_ALL_CANDIDATE_SUCCESS',
  GET_ALL_CANDIDATE_ERR: 'GET_ALL_CANDIDATE_ERR',

  GET_ALL_RECUITER_REQUEST: "GET_ALL_RECUITER_REQUEST",
  GET_ALL_RECUITER_SUCCESS: "GET_ALL_RECUITER_SUCCESS",
  GET_ALL_RECUITER_ERR: "GET_ALL_RECUITER_ERR",

  getAllRecuiterRequest: () => {
    return {
      type:actions.GET_ALL_RECUITER_REQUEST,
    }
  },

  getAllRecuiterSuccess: (getAllRecuiter) => {
    return {
      type:actions.GET_ALL_RECUITER_SUCCESS,
      getAllRecuiter
    }
  },

  getAllRecuiterError: (err) => {
    return {
      type:actions.GET_ALL_RECUITER_ERR,
      err
    }
  },

  getAllCandidateRequest: () => {
    return {
      type:actions.GET_ALL_CANDIDATE_REQUEST,
    }
  },

  getAllCandidateSuccess: (getAllCandidate) => {
    return {
      type:actions.GET_ALL_CANDIDATE_SUCCESS,
      getAllCandidate
    }
  },

  getAllCandidateError: (err) => {
    return {
      type:actions.GET_ALL_CANDIDATE_ERR,
      err
    }
  },
  
  getUserResumeBegin: () => {
    return {
      type: actions.GET_USER_RESUME_BEGIN,
    };
  },

  getUserResumeSuccess: (data) => {
    return {
      type: actions.GET_USER_RESUME_SUCCESS,
      jobResume:data,
    };
  },

  getUserResumeErr: (err) => {
    return {
      type: actions.GET_USER_RESUME_ERR,
      err,
    };
  },

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

  getJobApplicationBegin: () => {
    return {
      type: actions.GET_JOB_APPLICATION_BEGIN,
    };
  },

  getJobApplicationSuccess: (data) => {
    return {
      type: actions.GET_JOB_APPLICATION_SUCCESS,
      jobApplication:data,
    };
  },

  getJobApplicationErr: (err) => {
    return {
      type: actions.GET_JOB_APPLICATION_ERR,
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
