import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
import initialState from '../../demoData/jobPosts.json';

const { jobPostDataBegin, jobPostDataSuccess, jobPostDataErr, getAllJobsBegin, getAllJobsSuccess, getAllJobsErr } =
  actions;

const submitPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(jobPostDataBegin());
      const response = await DataService.get('Profile/GetFollowers?UserId=2');

      if (response.data.success) {
        dispatch(jobPostDataSuccess(data));
        message.success('Job Post Successfull');
      } else {
        dispatch(jobPostDataErr(response.data.message));
        message.error('Job Post Failed');
      }
    } catch (err) {
      dispatch(jobPostDataErr(err));
    }
  };
};

const getAllJobs = (filter) => {
  return async (dispatch) => {
    try {
      dispatch(getAllJobsBegin());
      if (initialState && filter) {
        dispatch(getAllJobsSuccess(initialState));
      } else if (initialState) {
        dispatch(getAllJobsSuccess(initialState));
      } else {
        dispatch(getAllJobsErr(null));
      }
    } catch (err) {
      dispatch(getAllJobsErr(err));
    }
  };
};
export { submitPost, getAllJobs };
