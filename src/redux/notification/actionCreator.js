import actions from './actions';
import { DataService } from '../../config/dataService/dataService';


const { readNotificationBegin, readNotificationSuccess, readNotificationErr } = actions;

const readNotificationList = (data) => {
  return async (dispatch) => {
    try {
      dispatch(readNotificationBegin());
      const res = await DataService.post("Profile/UserNotification",data)
      if (res.data.message === "Success") {
        dispatch(readNotificationSuccess(res.data.result));
      }
      else {
        dispatch(readNotificationErr("Error"));
      }
    } catch (err) {
      dispatch(readNotificationErr(err));
    }
  };
};

export { readNotificationList };
