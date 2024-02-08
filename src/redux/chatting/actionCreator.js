import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';
import {ClearFileUploadState}  from '../UploadFile/actionCreator';

const { getChatHistoryRequest, getChatHistorySuccess, getChatHistoryError,
sendMessageRequest, sendMessageSuccess, sendMessageError,
getChatProfileRequest, getChatProfileSuccess, getChatProfileError,
getCreateGroupRequest, getCreateGroupSuccess, getCreateGroupError,
deleteChatRequest, deleteChatSuccess, deleteChatError,
updateGroupDetailRequest, updateGroupDetailSuccess, updateGroupDetailError,
leaveGroupError, leaveGroupRequest, leaveGroupSuccess,
getGroupInfoRequest, getGroupInfoSuccess, getGroupInfoError,
getRemoveUserRequest, getRemoveUserSuccess, getRemoveUserError,
snoozeGroupUserRequest, snoozeGroupUserSuccess, snoozeGroupUserError } = actions;

const getChats = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(getChatHistoryRequest())

      const res = await DataService.post("Chat/GetChatHistory",(userId));

      if(res.data.message === "Success")
      {
        dispatch(getChatHistorySuccess(res.data.result))
      }
      else
      {
        dispatch(getChatHistoryError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(getChatHistoryError(err))
    }
  }
}

const sendMessage = (messageObj) => {
  return async (dispatch) => {
    try {
      dispatch(sendMessageRequest())

      const res = await DataService.post(`Chat/SaveChat`,messageObj);

      if(res.data.message === "Success")
      {
        dispatch(sendMessageSuccess(res.data.message))
        dispatch(ClearFileUploadState("chatting"));
        const obj =  {
            "userId": messageObj.groupId === 0 ? messageObj.receiverId : messageObj.groupId,
            "isGroup":  messageObj.groupId === 0 ? 0 : 1,
          }
        dispatch(getChats(obj))
      }
      else
      {
        dispatch(sendMessageError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(sendMessageError(err))
    }
  }
}

const GetChatUserProfile = () => {
  return async (dispatch) => {
    try {
      dispatch(getChatProfileRequest())

      const res = await DataService.get("Chat/GetUserChatProfile");

      if(res.data.message === "Success")
      {
        dispatch(getChatProfileSuccess(res.data.result))
      }
      else
      {
        dispatch(getChatProfileError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(getChatProfileError(err))
    }
  }
}

const CreateGroup = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getCreateGroupRequest())

      const res = await DataService.post("Chat/CreateGroup",data);

      if(res.data.message === "Success")
      {
        await dispatch(getCreateGroupSuccess(res.data.result))
        await dispatch(GetChatUserProfile());

      }
      else
      {
        dispatch(getCreateGroupError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(getCreateGroupError(err))
    }
  }
}

const DeleteChat = (data) => {
  return async (dispatch) => {
    try {
      dispatch(deleteChatRequest())

      const res = await DataService.post("Chat/DeleteChatMessage",data);

      if(res.data.message === "Success")
      {
        dispatch(deleteChatSuccess(res.data.result))
        dispatch(GetChatUserProfile());
      }
      else
      {
        dispatch(deleteChatError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(deleteChatError(err))
    }
  }
}


const UpdateGroupDetails = (data) => {
  return async (dispatch) => {
    try {
      dispatch(updateGroupDetailRequest())

      const res = await DataService.post("Chat/UpdateGroupDetails",data);

      if(res.data.message === "Success")
      {
        dispatch(updateGroupDetailSuccess(res.data.result))
        dispatch(GetChatUserProfile());
      }
      else
      {
        dispatch(updateGroupDetailError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(updateGroupDetailError(err))
    }
  }
}

const LeaveGroupConversation = (GroupId) => {
  return async (dispatch) => {
    try {
      dispatch(leaveGroupRequest())

      const res = await DataService.post("Chat/LeaveGroupConversation",{GroupId});

      if(res.data.message === "Success")
      {
        dispatch(leaveGroupSuccess(res.data.result))
        dispatch(GetChatUserProfile());
      }
      else
      {
        dispatch(leaveGroupError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(leaveGroupError(err))
    }
  }
}

const GetGroupInfo = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getGroupInfoRequest())
      const res = await DataService.post("Chat/GetInfolist",data);
      if(res.data.message === "Success")
      {
        dispatch(getGroupInfoSuccess(res.data.result))
      }
      else
      {
        dispatch(getGroupInfoError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(getGroupInfoError(err))
    }
  }
}

const MakeActionFromGroup = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getRemoveUserRequest())
      const res = await DataService.post("Chat/MakeAdminRemoveFromGroup",data);
      if(res.data.message === "Success")
      {
        dispatch(getRemoveUserSuccess(res.data.result))
      }
      else
      {
        dispatch(getRemoveUserError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(getRemoveUserError(err))
    }
  }
}


const SnoozeGroupUser = (data) => {
  return async (dispatch) => {
    try {
      dispatch(snoozeGroupUserRequest())
      const res = await DataService.post("Chat/SnoozeGroupUser",data);
      if(res.data.message === "Success")
      {
        dispatch(snoozeGroupUserSuccess(res.data.result))
      }
      else
      {
        dispatch(snoozeGroupUserError("Something went wrong"))
      }
    }
    catch (err) {
      dispatch(snoozeGroupUserError(err))
    }
  }
}

export { getChats, sendMessage, GetChatUserProfile, CreateGroup, DeleteChat, 
  MakeActionFromGroup, UpdateGroupDetails, LeaveGroupConversation, GetGroupInfo,
  SnoozeGroupUser  };
