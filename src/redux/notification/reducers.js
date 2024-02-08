import actions from './actions';

const { READ_NOTIFICATION_BEGIN, READ_NOTIFICATION_SUCCESS, READ_NOTIFICATION_ERR } = actions;

const initialStateFilter = {
  loading: false,
  error: null,
};

const readNotificationReducer = (state = initialStateFilter, action) => {
  const { type, notificationList, err } = action;
  switch (type) {
    case READ_NOTIFICATION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case READ_NOTIFICATION_SUCCESS:
      return {
        ...state,
        notificationList,
        loading: false,
      };
    case READ_NOTIFICATION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
    default:
      return state;
  }
};

export { readNotificationReducer };
