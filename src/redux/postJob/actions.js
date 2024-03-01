const actions = {
  JOB_POST_DATA_BEGIN: 'JOB_POST_DATA_BEGIN',
  JOB_POST_DATA_SUCCESS: 'JOB_POST_DATA_SUCCESS',
  JOB_POST_DATA_ERR: 'JOB_POST_DATA_ERR',

  GET_ALL_JOBS_BEGIN: 'GET_ALL_JOBS_BEGIN',
  GET_ALL_JOBS_SUCCESS: 'GET_ALL_JOBS_SUCCESS',
  GET_ALL_JOBS_ERR: 'GET_ALL_JOBS_ERR',

  POST_JOBS_BEGIN: 'POST_JOBS_BEGIN',
  POST_JOBS_SUCCESS: 'POST_JOBS_SUCCESS',
  POST_JOBS_ERR: 'POST_JOBS_ERR',

  jobPostDataBegin: () => {
    return {
      type: actions.JOB_POST_DATA_BEGIN,
    };
  },

  jobPostDataSuccess: (data) => {
    return {
      type: actions.JOB_POST_DATA_SUCCESS,
      data,
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
      data,
    };
  },

  getAllJobsErr: (err) => {
    return {
      type: actions.GET_ALL_JOBS_ERR,
      err,
    };
  },

  postJobsBegin: () => {
    return {
      type: actions.POST_JOBS_BEGIN,
    };
  },

  postJobsSuccess: (postjob) => {
    return {
      type: actions.POST_JOBS_SUCCESS,
      postjob,
    };
  },

  postJobsErr: (err) => {
    return {
      type: actions.POST_JOBS_ERR,
      err,
    };
  },
};

export default actions;
