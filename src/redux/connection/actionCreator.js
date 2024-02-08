// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';
import { updateTimeline } from '../post/actionCreator';

const { connectionRequest, connectionSuccess, connectionError,
  blockUserRequest, blockUserSuccess, blockUserError } = actions;


const connection = (userid) => {
  return async (dispatch, getState) => {

    try {
      dispatch(connectionRequest())

      // const res = await DataService.post('User/FollowUnFollowUser?userId=' + userid)
      const res = await DataService.get(`User/FollowUnFollowUser?userId=${userid}`);


      if (res.data.message === "Success") {
        dispatch(connectionSuccess(res.data.result))

        const temptimeline = getState().Post.timelinedata
          .map(x => {
            const obj = {
              ...x
            }
            if (x.userId.toString() === userid.toString()) {

              if (obj.isFollowing === true) {
                obj.isFollowing = false
              }
              else {
                obj.isFollowing = true
              }

            }
            return obj
          })

        dispatch(updateTimeline(temptimeline))
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(connectionError())
    }

  }
}


const blockUser = (userid, type) => {
  return async (dispatch, getState) => {

    try {
      dispatch(blockUserRequest())

      const res = await DataService.get(`User/BlockMuteUser?userId=${userid}&type=${type}`);

      if (res.data.message === "Success") {
        const temptimeline = getState().Post.timelinedata.filter(post => post.userId !== userid)
        dispatch(blockUserSuccess(res.data?.result))
        dispatch(updateTimeline(temptimeline))
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(blockUserError())
    }

  }
}


export { connection, blockUser };
