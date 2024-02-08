// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { updateProfileRequest, updateProfileSuccess, updateProfileError,
  getProfileRequest, getProfileSuccess, getProfileError, 
  getUserInfoBoxRequest, getUserInfoBoxSuccess, getUserInfoBoxError,
  getNetworkRequest, getNetworkSuccess, getNetworkErr,

} = actions;

const updateUserProfile = (Data) => {
  return async (dispatch) => {
    try {
      await dispatch(updateProfileRequest());
      const res = await DataService.post("Profile/UpdateProfile",Data);

      if (res.data.success) {
        dispatch(updateProfileSuccess(res.data.result));
        message.success(res.data.message);
      }
      else {
        message.error("Something went wrong");
        dispatch(updateProfileError(res.data.message))
      }
    } catch (err) {
      dispatch(updateProfileError(err));
    }
  };
}



const getUserProfile = (username) => {
  return async (dispatch) => {
    try {
      await dispatch(getProfileRequest());
      const res = await DataService.get(`Profile/GetProfile?username=${username}`);

      if (res.data.success) {
        dispatch(getProfileSuccess(res.data.result));
      }
      else {
        dispatch(getProfileError(res.data.message))
      }
    } catch (err) {
      dispatch(getProfileError(err));
    }
  };
}

const getUserInfoBox = (username) => {
  return async (dispatch) => {
    try {
      await dispatch(getUserInfoBoxRequest());
      const res = await DataService.get(`Profile/GetUserInfoBox?username=${username}`);

      if (res.data.success) {
        dispatch(getUserInfoBoxSuccess(res.data.result));
      }
      else {
        dispatch(getUserInfoBoxError(res.data.message))
      }
    } catch (err) {
      dispatch(getUserInfoBoxError(err));
    }
  };
}

const getUserNetwork = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(getNetworkRequest());
      const res = await DataService.get(`Profile/GetFollowers?UserId=${id}`);

      if (res.data.success) {
        const list = res.data.result;
        const IdsToCheck = list?.mutual.map(user => user.id);
        IdsToCheck.forEach(userId => {
          const isUserInMutual = list?.mutual.some(user => user.id === userId);
          if (isUserInMutual) {
            list?.followers.forEach(follower => {
              if (follower.id === userId) {
                follower.isFollowedByLoginUser = true;
              }
            });
          }
          console.log("is ture",list);
        });

        dispatch(getNetworkSuccess(res.data.result));
      }
      else {
        dispatch(getNetworkErr(res.data.message))
      }
    } catch (err) {
      dispatch(getNetworkErr(err));
    }
  };
}

export {  updateUserProfile, getUserProfile, getUserInfoBox, getUserNetwork };
