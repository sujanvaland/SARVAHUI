import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
// import initialState from '../../demoData/jobPosts.json';

const { jobPostDataBegin, jobPostDataSuccess, jobPostDataErr, getAllJobsBegin, getAllJobsSuccess, getAllJobsErr,
   } =
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

export { submitPost, getAllJobs,  };
