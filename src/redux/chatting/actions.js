const actions = {

  GET_CHAT_HISTORY_REQ: "GET_CHAT_HISTORY_REQ",
  GET_CHAT_HISTORY_SUCCESS:"GET_CHAT_HISTORY_SUCCESS",
  GET_CHAT_HISTORY_ERR:"GET_CHAT_HISTORY_ERR",

  SEND_MESSAGE_REQ: "SEND_MESSAGE_REQ",
  SEND_MESSAGE_SUCCESS: "SEND_MESSAGE_SUCCESS",
  SEND_MESSAGE_ERR: "SEND_MESSAGE_ERR",

  CHAT_PROFILE_REQ: "CHAT_PROFILE_REQ",
  CHAT_PROFILE_SUCCESS: "CHAT_PROFILE_SUCCESS",
  CHAT_PROFILE_ERR: "CHAT_PROFILE_ERR",

  DELETE_CHAT_REQ: "DELETE_CHAT_REQ",
  DELETE_CHAT_SUCCESS: "DELETE_CHAT_SUCCESS",
  DELETE_CHAT_ERR: "DELETE_CHAT_ERR",

  CREAT_GROUP_REQ: "CREAT_GROUP_REQ",
  CREAT_GROUP_SUCCESS: "CREAT_GROUP_SUCCESS",
  CREAT_GROUP_ERR: "CREAT_GROUP_ERR",

  UPDATE_GROUPDETAILS_REQ: "UPDATE_GROUPDETAILS_REQ",
  UPDATE_GROUPDETAILS_SUCCESS: "UPDATE_GROUPDETAILS_SUCCESS",
  UPDATE_GROUPDETAILS_ERR: "UPDATE_GROUPDETAILS_ERR",

  LEAVE_GROUP_REQ: "LEAVE_GROUP_REQ",
  LEAVE_GROUP_SUCCESS: "LEAVE_GROUP_SUCCESS",
  LEAVE_GROUP_ERR: "LEAVE_GROUP_ERR",

  GROUP_INFO_REQ: "GROUP_INFO_REQ",
  GROUP_INFO_SUCCESS: "GROUP_INFO_SUCCESS",
  GROUP_INFO_ERR: "GROUP_INFO_ERR",

  REMOVE_FROMGROUP_REQ: "REMOVE_FROMGROUP_REQ",
  REMOVE_FROMGROUP_SUCCESS: "REMOVE_FROMGROUP_SUCCESS",
  REMOVE_FROMGROUP_ERR: "REMOVE_FROMGROUP_ERR",

  
  SNOOZE_GROUPUSER_REQ: "SNOOZE_GROUPUSER_REQ",
  SNOOZE_GROUPUSER_SUCCESS: "SNOOZE_GROUPUSER_SUCCESS",
  SNOOZE_GROUPUSER_ERR: "SNOOZE_GROUPUSER_ERR",


  sendMessageRequest: () => {
    return {
      type:actions.SEND_MESSAGE_REQ,
      messageSent:''
    }
  },

  sendMessageSuccess: (messageSent) => {
    return {
      type:actions.SEND_MESSAGE_SUCCESS,
      messageSent
    }
  },

  sendMessageError: (err) => {
    return {
      type:actions.SEND_MESSAGE_ERR,
      err
    }
  },

  getChatHistoryRequest: () => {
    return {
      type:actions.GET_CHAT_HISTORY_REQ,
    }
  },

  getChatHistorySuccess: (chats) => {
    return {
      type:actions.GET_CHAT_HISTORY_SUCCESS,
      chats
    }
  },

  getChatHistoryError: (err) => {
    return {
      type:actions.GET_CHAT_HISTORY_ERR,
      err
    }
  },

  getChatProfileRequest: () => {
    return {
      type:actions.CHAT_PROFILE_REQ,
    }
  },

  getChatProfileSuccess: (chatProfile) => {
    return {
      type:actions.CHAT_PROFILE_SUCCESS,
      chatProfile
    }
  },

  getChatProfileError: (err) => {
    return {
      type:actions.CHAT_PROFILE_ERR,
      err
    }
  },

  deleteChatRequest: () => {
    return {
      type:actions.DELETE_CHAT_REQ,
    }
  },

  deleteChatSuccess: (deleteChat) => {
    return {
      type:actions.DELETE_CHAT_SUCCESS,
      deleteChat
    }
  },

  deleteChatError: (err) => {
    return {
      type:actions.DELETE_CHAT_ERR,
      err
    }
  },

  getCreateGroupRequest: () => {
    return {
      type:actions.CREAT_GROUP_REQ,
    }
  },

  getCreateGroupSuccess: (getCreatedGroup) => {
    return {
      type:actions.CREAT_GROUP_SUCCESS,
      getCreatedGroup
    }
  },

  getCreateGroupError: (err) => {
    return {
      type:actions.CREAT_GROUP_ERR,
      err
    }
  },

  updateGroupDetailRequest: () => {
    return {
      type:actions.UPDATE_GROUPDETAILS_REQ,
    }
  },

  updateGroupDetailSuccess: (getUpdatedGroupDetails) => {
    return {
      type:actions.UPDATE_GROUPDETAILS_SUCCESS,
      getUpdatedGroupDetails
    }
  },

  updateGroupDetailError: (err) => {
    return {
      type:actions.UPDATE_GROUPDETAILS_ERR,
      err
    }
  },

  leaveGroupRequest: () => {
    return {
      type:actions.LEAVE_GROUP_REQ,
    }
  },

  leaveGroupSuccess: (getLeaveGroup) => {
    return {
      type:actions.LEAVE_GROUP_SUCCESS,
      getLeaveGroup
    }
  },

  leaveGroupError: (err) => {
    return {
      type:actions.LEAVE_GROUP_ERR,
      err
    }
  },

  getGroupInfoRequest: () => {
    return {
      type:actions.GROUP_INFO_REQ,
    }
  },

  getGroupInfoSuccess: (getGroupInfo) => {
    return {
      type:actions.GROUP_INFO_SUCCESS,
      getGroupInfo
    }
  },

  getGroupInfoError: (err) => {
    return {
      type:actions.GROUP_INFO_ERR,
      err
    }
  },

  getRemoveUserRequest: () => {
    return {
      type:actions.REMOVE_FROMGROUP_REQ,
    }
  },

  getRemoveUserSuccess: (getRemoveGroup) => {
    return {
      type:actions.REMOVE_FROMGROUP_SUCCESS,
      getRemoveGroup
    }
  },

  getRemoveUserError: (err) => {
    return {
      type:actions.REMOVE_FROMGROUP_ERR,
      err
    }
  },

  snoozeGroupUserRequest: () => {
    return {
      type:actions.SNOOZE_GROUPUSER_REQ,
    }
  },

  snoozeGroupUserSuccess: (getSnooze) => {
    return {
      type:actions.SNOOZE_GROUPUSER_SUCCESS,
      getSnooze
    }
  },

  snoozeGroupUserError: (err) => {
    return {
      type:actions.SNOOZE_GROUPUSER_ERR,
      err
    }
  },

};

export default actions;
