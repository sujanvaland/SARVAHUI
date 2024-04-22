import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
// import initialState from '../../demoData/jobPosts.json';

const { jobPostDataBegin, jobPostDataSuccess, jobPostDataErr, getAllJobsBegin, getAllJobsSuccess,
  getAllJobsErr, toggleBookmarkBegin, toggleBookmarkSuccess, toggleBookmarkErr, getJobDetailsBegin,
  getJobDetailsSuccess, getJobDetailsErr, getBookmarkJobBegin, getBookmarkJobSuccess, getBookmarkJobErr,
  getAllJobsEmpty, applyJobBegin, applyJobSuccess, applyJobErr,
  getJobApplicationBegin, getJobApplicationSuccess, getJobApplicationErr,
  getUserResumeBegin, getUserResumeSuccess, getUserResumeErr,
  getAllCandidateRequest, getAllCandidateSuccess, getAllCandidateError,
  getAllRecuiterRequest, getAllRecuiterSuccess, getAllRecuiterError,
  getAllStatsRequest, getAllStatsSuccess, getAllStatsError } =
  actions;

const GetAllStats = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllStatsRequest());
      const response = await DataService.get("Admin/GetAllStats");
      if (response.data.success) {
        dispatch(getAllStatsSuccess(response.data.result[0]));
      } else {
        dispatch(getAllStatsError(response.data.success));
      }
    } catch (err) {
      dispatch(getAllStatsError(err));
    }
  };
};

const GetAllRecuiter = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllRecuiterRequest());
      const response = await DataService.get("Admin/GetAllRecuiter");
      if (response.data.success) {
        dispatch(getAllRecuiterSuccess(response.data.result));
      } else {
        dispatch(getAllRecuiterError(response.data.success));
      }
    } catch (err) {
      dispatch(getAllRecuiterError(err));
    }
  };
};

const GetAllCandidate = () => {
  return async (dispatch) => {
    try {
      dispatch(getAllCandidateRequest());
      const response = await DataService.get("Admin/GetAllCandidate");
      if (response.data.success) {
        dispatch(getAllCandidateSuccess(response.data.result));
      } else {
        dispatch(getAllCandidateError(response.data.success));
      }
    } catch (err) {
      dispatch(getAllCandidateError(err));
    }
  };
};

const submitPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(jobPostDataBegin());
      const obj = {
        JobTitle: data.jobTitle,
        CompanyInfo: data.companyInfo,
        JobDescription: data.jobDescription,
        RequiredQualification: data.requiredQualification,
        NoOfVaccancy: data.numberOfVacancies,
        ApplicationDeadline: data.dateOfApplicationDeadline,
        SkillsRequired: data.skillsRequired,
        MinSalary: data.minSalary,
        MaxSalary: data.maxSalary,
      }
      const response = await DataService.post('Job/SaveUpdateJobPost', obj);

      if (response.data.success) {
        dispatch(jobPostDataSuccess(data));
        message.success('Job Posted Successfully');
        console.log(response.data.message);
      } else {
        dispatch(jobPostDataErr(response.data.message));
        message.error('Job Post Failed');
      }
    } catch (err) {
      dispatch(jobPostDataErr(err));
    }
  };
};

const EmptyMyJobs = () => {
  return async (dispatch) => {
    dispatch(getAllJobsEmpty(null))
  }
}

const getAllJobs = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getAllJobsBegin());

      const User = JSON.parse(localStorage.getItem('profile'));

      let response = "";
      if (User.loginType === "admin") {
        response = await DataService.post('admin/GetJob', data);
      } else {
        response = await DataService.post('Job/GetAllJobs', data);
      }

      if (response.data.success) {
        if (data?.pageNo === 1) {
          dispatch(EmptyMyJobs());
        }
        dispatch(getAllJobsSuccess(response.data.result));
      } else {
        dispatch(getAllJobsErr(response.data.success));
      }
    } catch (err) {
      dispatch(getAllJobsErr(err));
    }
  };
};

const toggleBookmark = (data) => {
  return async (dispatch, getState) => {
    try {
      dispatch(toggleBookmarkBegin());
      const response = await DataService.post('Job/ToggleBookmark', data);
      if (response.data.success) {
        const { jobDetails, bookmarkjobs } = getState().postJob;
        let idxj = -1;
        let idxb = -1;

        if (jobDetails) {
          idxj = jobDetails.findIndex(x => x.id === data.PostId);
          if (idxj !== -1) {
            jobDetails[idxj] = {
              ...jobDetails[idxj],
              isBookmarked: jobDetails[idxj].isBookmarked === 1 ? 0 : 1
            };
            dispatch(getAllJobsEmpty(jobDetails));
          }
        }

        if (bookmarkjobs) {
          idxb = bookmarkjobs.findIndex(x => x.id === data.PostId);
          if (idxb !== -1) {
            bookmarkjobs[idxb] = {
              ...bookmarkjobs[idxb],
              isBookmarked: bookmarkjobs[idxb].isBookmarked === 1 ? 0 : 1
            };
            dispatch(getBookmarkJobSuccess(bookmarkjobs));
          }
        }
        dispatch(toggleBookmarkSuccess(response.data.result));

      } else {
        dispatch(toggleBookmarkErr(response.data.success));
      }
    } catch (err) {
      dispatch(toggleBookmarkErr(err));
    }
  };
};

const getJobDetails = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getJobDetailsBegin());
      const response = await DataService.post("Job/GetJobById", data);
      if (response.data.success) {
        dispatch(getJobDetailsSuccess(response.data.result));
      } else {
        dispatch(getJobDetailsErr(response.data.success));
      }
    } catch (err) {
      dispatch(getJobDetailsErr(err));
    }
  };
};

const GetJobApplication = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getJobApplicationBegin());
      const response = await DataService.post("Job/GetAllApplications", data);
      if (response.data.success) {
        dispatch(getJobApplicationSuccess(response.data.result));
      } else {
        dispatch(getJobApplicationErr(response.data.success));
      }
    } catch (err) {
      dispatch(getJobApplicationErr(err));
    }
  };
};

const GetUserResume = () => {
  return async (dispatch) => {
    try {
      dispatch(getUserResumeBegin());
      const response = await DataService.get("Job/GetResume");
      if (response.data.success) {
        dispatch(getUserResumeSuccess(response.data.result));
      } else {
        dispatch(getUserResumeErr(response.data.success));
      }
    } catch (err) {
      dispatch(getUserResumeErr(err));
    }
  };
};

const getAllBookmarkJobs = () => {
  return async (dispatch) => {
    try {
      dispatch(getBookmarkJobBegin());
      const response = await DataService.get('Job/GetAllBookmarkJobs');
      if (response.data.success) {
        dispatch(getBookmarkJobSuccess(response.data.result));
      } else {
        dispatch(getBookmarkJobErr(response.data.success));
      }
    } catch (err) {
      dispatch(getBookmarkJobErr(err));
    }
  };
};

const ApplyJobs = (data) => {
  return async (dispatch) => {
    try {
      dispatch(applyJobBegin());
      const response = await DataService.post("Job/SaveApplication", data);
      if (response.data.success) {
        dispatch(applyJobSuccess(response.data.result));
        dispatch(getJobDetails(data));
      } else {
        dispatch(applyJobErr(response.data.success));
      }
    } catch (err) {
      dispatch(applyJobErr(err));
    }
  };
};

export {
  submitPost, getAllJobs, toggleBookmark, getJobDetails, getAllBookmarkJobs, GetAllStats,
  ApplyJobs, GetUserResume, GetJobApplication, GetAllRecuiter, GetAllCandidate
};
