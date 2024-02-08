import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { getSearchUserRequest, getSearchUserSuccess, getSearchUserError,
  getUserProfileRequest, getUserProfileSuccess, getUserProfileError,
  getConnectionsMentionsRequest,getConnectionsMentionsSuccess, getConnectionsMentionsError,
  mentionSearchUserRequest,mentionSearchUserSuccess,mentionSearchUserError
  } = actions;

const GetSearchUser = (Data) => {
  return async (dispatch) => {
    try {
      await dispatch(getSearchUserRequest());
      const res = await DataService.post("Search/SearchUser",Data);

      if (res.data.success) {
        dispatch(getSearchUserSuccess(res.data.result));
      }
      else {
        dispatch(getSearchUserError(res.data.message))
      }
    } catch (err) {
      dispatch(getSearchUserError(err));
    }
  };
}

const getConnectionsMentions = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(getConnectionsMentionsRequest());
      const res = await DataService.get(`Profile/GetConnectionsMentions?UserId=${userId}`);
      console.log("mentionConnections");
      console.log(res.data);
      if (res.data.success) {
        dispatch(getConnectionsMentionsSuccess(res.data.result));
      }
      else {
        dispatch(getConnectionsMentionsError(res.data.message))
      }
    } catch (err) {
      dispatch(getConnectionsMentionsError(err));
    }
  };
}

const mentionSearchUser = (Data) => {
  return async (dispatch) => {
    try {
      await dispatch(mentionSearchUserRequest());
      const res = await DataService.post("Search/MentionSearchUser",Data);

      if (res.data.success) {
        dispatch(mentionSearchUserSuccess(res.data.result));
      }
      else {
        dispatch(mentionSearchUserError(res.data.message))
      }
    } catch (err) {
      dispatch(mentionSearchUserError(err));
    }
  };
}

const GetSearchUserProfile = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(getUserProfileRequest());
      const res = await DataService.post("Search/SearchedUserData",data);

      if (res.data.success) {
        dispatch(getUserProfileSuccess(res.data.result));
      }
      else {
        dispatch(getUserProfileError(res.data.message))
      }
    } catch (err) {
      dispatch(getUserProfileError(err));
    }
  };
}



export {  GetSearchUser, GetSearchUserProfile,getConnectionsMentions,mentionSearchUser };
