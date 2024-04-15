import actions from './actions';

const initialState = {
  data: null,
  loading: false,
  infoLoading: false,
  error: null,
  chats: [],
  chatMessages: [],
  DMuser: [],
  isDMUser: false,
};

const { GET_CHAT_HISTORY_REQ, GET_CHAT_HISTORY_SUCCESS, GET_CHAT_HISTORY_ERR,
  SEND_MESSAGE_REQ, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_ERR,
  CHAT_PROFILE_REQ, CHAT_PROFILE_SUCCESS, CHAT_PROFILE_ERR,
  DELETE_CHAT_REQ, DELETE_CHAT_SUCCESS, DELETE_CHAT_ERR,
  CREATE_GROUP_REQ, CREATE_GROUP_SUCCESS, CREATE_GROUP_ERR,
  UPDATE_GROUPDETAILS_REQ, UPDATE_GROUPDETAILS_SUCCESS, UPDATE_GROUPDETAILS_ERR,
  LEAVE_GROUP_REQ, LEAVE_GROUP_SUCCESS, LEAVE_GROUP_ERR,
  GROUP_INFO_REQ, GROUP_INFO_SUCCESS, GROUP_INFO_ERR,
  REMOVE_FROMGROUP_REQ, REMOVE_FROMGROUP_SUCCESS, REMOVE_FROMGROUP_ERR,
  SNOOZE_GROUPUSER_REQ, SNOOZE_GROUPUSER_SUCCESS, SNOOZE_GROUPUSER_ERR,
  GET_EMPTYCHAT_HISTORY_SUCCESS, SET_DMUSER, SET_EMPTY_DMUSER } = actions;

const chattingReducer = (state = initialState, action) => {
  const { type, messageSent, chatProfile, getCreatedGroup, err, chatMessages, DMuser, isDMUser,
    userProfile, chatCount, chatSize, deleteChat, getRemoveGroup, getUpdatedGroupDetails,
    getLeaveGroup, getGroupInfo, getSnooze } = action;

  switch (type) {

    case SET_DMUSER:
      return {
        ...state,
        DMuser:[DMuser],
        isDMUser: isDMUser,
        loading: false,
      };
    case SET_EMPTY_DMUSER:
      return {
        ...state,
        DMuser:[],
        isDMUser: false,
        loading: false,
      };

    case SEND_MESSAGE_REQ:
      return {
        ...state,
        loading: true,
      };
    case SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        messageSent,
        loading: false,
      };
    case SEND_MESSAGE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GET_CHAT_HISTORY_REQ:
      return {
        ...state,
        loading: true,
      };
    case GET_CHAT_HISTORY_SUCCESS:
      return {
        ...state,
        chatMessages: [...chatMessages, ...state.chatMessages],
        userProfile,
        chatCount,
        chatSize,
        loading: false,
      };
    case GET_EMPTYCHAT_HISTORY_SUCCESS:
      return {
        ...state,
        chatMessages: [],
        userProfile,
        chatCount,
        chatSize,
        loading: false,
      };
    case GET_CHAT_HISTORY_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CHAT_PROFILE_REQ:
      return {
        ...state,
        loading: true,
      };
    case CHAT_PROFILE_SUCCESS:
      return {
        ...state,
        chatProfile,
        loading: false,
      };
    case CHAT_PROFILE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case DELETE_CHAT_REQ:
      return {
        ...state,
        loading: true,
      };
    case DELETE_CHAT_SUCCESS:
      return {
        ...state,
        deleteChat,
        loading: false,
      };
    case DELETE_CHAT_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case CREATE_GROUP_REQ:
      return {
        ...state,
        loading: true,
      };
    case CREATE_GROUP_SUCCESS:
      return {
        ...state,
        getCreatedGroup,
        loading: false,
      };
    case CREATE_GROUP_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case UPDATE_GROUPDETAILS_REQ:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_GROUPDETAILS_SUCCESS:
      return {
        ...state,
        getUpdatedGroupDetails,
        loading: false,
      };
    case UPDATE_GROUPDETAILS_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case LEAVE_GROUP_REQ:
      return {
        ...state,
        loading: true,
      };
    case LEAVE_GROUP_SUCCESS:
      return {
        ...state,
        getLeaveGroup,
        loading: false,
      };
    case LEAVE_GROUP_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case GROUP_INFO_REQ:
      return {
        ...state,
        infoLoading: true,
      };
    case GROUP_INFO_SUCCESS:
      return {
        ...state,
        getGroupInfo,
        infoLoading: false,
      };
    case GROUP_INFO_ERR:
      return {
        ...state,
        error: err,
        infoLoading: false,
      };

    case REMOVE_FROMGROUP_REQ:
      return {
        ...state,
        infoLoading: true,
      };
    case REMOVE_FROMGROUP_SUCCESS:
      return {
        ...state,
        getRemoveGroup,
        infoLoading: false,
      };
    case REMOVE_FROMGROUP_ERR:
      return {
        ...state,
        error: err,
        infoLoading: false,
      };
    case SNOOZE_GROUPUSER_REQ:
      return {
        ...state,
        infoLoading: true,
      };
    case SNOOZE_GROUPUSER_SUCCESS:
      return {
        ...state,
        getSnooze,
        infoLoading: false,
      };
    case SNOOZE_GROUPUSER_ERR:
      return {
        ...state,
        error: err,
        infoLoading: false,
      };

    default:
      return state;
  }
};

export default chattingReducer;
