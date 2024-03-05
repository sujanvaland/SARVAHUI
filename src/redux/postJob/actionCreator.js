import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
// import initialState from '../../demoData/jobPosts.json';

const { jobPostDataBegin, jobPostDataSuccess, jobPostDataErr, getAllJobsBegin, getAllJobsSuccess,
  getAllJobsErr, toggleBookmarkBegin, toggleBookmarkSuccess, toggleBookmarkErr, getJobDetailsBegin,
  getJobDetailsSuccess, getJobDetailsErr } =
  actions;

const submitPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(jobPostDataBegin());
      const obj = {
        JobTitle : data.jobTitle,
        CompanyInfo : data.companyInfo,
        JobDescription : data.jobDescription,
        RequiredQualification : data.requiredQualification,
        NoOfVaccancy : data.numberOfVacancies,
        ApplicationDeadline : data.dateOfApplicationDeadline,
        SkillsRequired : data.skillsRequired,
        MinSalary : data.minSalary,
        MaxSalary : data.maxSalary,
      }
      const response = await DataService.post('Job/SaveUpdateJobPost',obj);

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

const getAllJobs = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getAllJobsBegin());
      const response = await DataService.post('Job/GetAllJobs',data);
      if (response.data.success) {
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
  return async (dispatch) => {
    try {
      dispatch(toggleBookmarkBegin());
      const response = await DataService.post('Job/ToggleBookmark',data);
      if (response.data.success) {
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
      const response = await DataService.post("Job/GetJobById",data);
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

export { submitPost, getAllJobs, toggleBookmark, getJobDetails };
