/* eslint-disable no-unreachable */
/* eslint-disable no-return-assign */
import { message } from 'antd';
import Cookies from 'js-cookie';
import actions from './actions';
import initialState from '../../demoData/friends.json';
import { DataService } from '../../config/dataService/dataService';
import { removeItem } from '../../utility/localStorageControl';




const { profileFriendsBegin, profileFriendsSuccess, profileFriendsErr, postDataBegin, postDataSuccess,
  postDataErr, changePasswordRequest, changePasswordSuccess, changePasswordErr, deactivateAccountRequest,
  deactivateAccountSuccess, deactivateAccountErr, blockedUserlistRequest, blockedUserlistSuccess, blockedUserlistErr
 } =
  actions;

const profileFriendsChangeStatus = (key) => {
  return async (dispatch) => {
    try {
      dispatch(profileFriendsBegin());
      initialState.map((friend) => {
        if (friend.key === key) {
          return friend.status ? (friend.status = false) : (friend.status = true);
        }
        return dispatch(profileFriendsSuccess(initialState));
      });
    } catch (err) {
      dispatch(profileFriendsErr(err));
    }
  };
};

const submitPost = (data) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      dispatch(postDataSuccess(data));
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const likeUpdate = (data, key) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      data.map((post) => {
        if (post.postId === key) {
          return (post.like += 1);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const commentUpdate = (data, key, comment) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      data.map((post) => {
        if (post.postId === key) {
          return (post.comment = [
            ...post.comment,
            {
              time: new Date().getTime(),
              from: 'David Warner',
              text: comment,
            },
          ]);
        }
        return dispatch(postDataSuccess(data));
      });
    } catch (err) {
      dispatch(postDataErr(err));
    }
  };
};

const postDelete = (data, key) => {
  return async (dispatch) => {
    try {
      dispatch(postDataBegin());
      const posts = data.filter((post) => {
        return post.postId !== key;
      });
      return dispatch(postDataSuccess(posts));
    } catch (err) {
      return dispatch(postDataErr(err));
    }
  };
};

const changePassword = (data) => {
  return async (dispatch) => {
    try {
      dispatch(changePasswordRequest());
      const passchange = await DataService.post('user/changePassword', data)

      if (passchange.data.success) {
        dispatch(changePasswordSuccess(passchange.data.result))
        message.success(passchange.data.message)
      }
      else {
        dispatch(changePasswordErr(passchange))
        message.error(passchange.data.message)
      }
    }
    catch (err) {
      return dispatch(changePasswordErr(err))
    }
  };
};

const deactivateUserAccount = (data) => {
  return async (dispatch) => {
    try {
      dispatch(deactivateAccountRequest());
      const deactivate = await DataService.get(`user/DeactivateUserAccount?timeperiod=${data}`)

      if (deactivate.data.success) {
        dispatch(deactivateAccountSuccess(deactivate.data.result));
        message.success('Deactivate Successfully!')
        Cookies.remove('logedIn');
        Cookies.remove('token');
        localStorage.removeItem("profile");
        removeItem("access_token");
        window.location.href = (window.location.href.includes("localhost")) ? `http://localhost:3000` : `https://k4m2a.com`
      }
      else {
        dispatch(deactivateAccountErr(deactivate))
        message.error("Something went wrong")
      }
    }
    catch (err) {
      return dispatch(deactivateAccountErr(err))
    }
  };
};

const blockedUserlist = (data) => {
  return async (dispatch) => {
    try {
      dispatch(blockedUserlistRequest());
      const res = await DataService.get('user/BlockedUsersList', data)

      if (res.data.success) {
        dispatch(blockedUserlistSuccess(res.data.result));
      }
      else {
        dispatch(blockedUserlistErr(res.data))
      }
    }
    catch (err) {
      return dispatch(blockedUserlistErr(err))
    }
  };
};

export {
  profileFriendsChangeStatus, submitPost, likeUpdate, commentUpdate, postDelete,
  changePassword, deactivateUserAccount, blockedUserlist
};
