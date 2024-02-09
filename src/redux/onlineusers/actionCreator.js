// import { toast } from 'react-toastify';
import { message } from 'antd';
import io from "socket.io-client";
import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';
import { getChats } from '../chatting/actionCreator';
import store from '../store';
import { updateNewPostCountReq } from '../post/actionCreator';

const { onlineUsersRequest, onlineUsersSuccess, onlineUsersError,
  getOnlineUsersRequest, getOnlineUsersSuccess, getOnlineUsersError,
  connectionRequest, connectionSuccess, connectionError } = actions;

const makeUserOffline = async (cid) => {
  try {
    await DataService.get(`User/OnlineOfflineUsers?connectionid=${cid}`);
  }
  catch (err) {
    message.error("Something went wrong")
  }
}


const onlineUser = (cid) => {
  return async (dispatch) => {

    try {
      dispatch(onlineUsersRequest())
      const res = await DataService.get(`User/OnlineOfflineUsers?connectionid=${cid}`);
      if (res.data.message === "Success") {
        localStorage.setItem("connectionId",cid);
        dispatch(onlineUsersSuccess(res.data.result))
      }else{
        localStorage.setItem("connectionId",null);
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(onlineUsersError(err))
      localStorage.setItem("connectionId",null);
    }

  }
}

// const doConnect = () => {
//   return async (dispatch) => {
//     try {
//         const { connection } = store.getState().OnlineUsers;
//         let { newpostcount } = store.getState().Post;
//         if (connection) {
//           return;
//         }
//         dispatch(connectionRequest())
//         const newConnection = await new signalR.HubConnectionBuilder()
//           .withUrl(`${process.env.REACT_APP_HUBS_ENDPOINT}${'chathub'}`,{
//             skipNegotiation: true,
//             transport: signalR.HttpTransportType.WebSockets
//           })
//           .build();
          
//         newConnection
//           .start()
//           .then(() => {
//             newConnection.on("SendMessage", (message) => {
//               const state = message.split('-')?.[0];
//               const connectionId = message.split('-')?.[1];
//               if(state === "connected"){
//                 localStorage.setItem("connectionId",connectionId);
//                 dispatch(connectionSuccess(newConnection,connectionId))
//                 dispatch(onlineUser(connectionId))
//               }else{
//                 dispatch(connectionSuccess(null,""))
//                 dispatch(onlineUser(""))
//                 localStorage.setItem("connectionId",null);
//               }
//             });

//             newConnection.on("OnNewPost", (message) => {
//               const data = JSON.parse(message);
//               console.log(data)
//               newpostcount += 1;
//               dispatch(updateNewPostCountReq(newpostcount));
//             });
//             newConnection.on("SendChatMessage", (message) => {
//               const data = JSON.parse(message);
//               if(data.ActionType === "newgroupmessage"){
//                 dispatch(getChats({ userId: data.RefId2, isGroup: 1 }));
//               }else{
//                 dispatch(getChats({ userId: data.RefId2, isGroup: 0 }));
//               }
              
//             });
//           })
//     }
//     catch (err) {
//       dispatch(connectionError(err))
//     }
//   }

// }

const doConnect = () => {
  return async (dispatch) => {
    try {
        let { newpostcount } = store.getState().Post;
        const notificationApi = `${process.env.NOTIFICATION_API}`;
        const socket = io(notificationApi);
        dispatch(connectionRequest())
          socket.on('connect', () => {
            // Access the socket connection ID
            const {  id } = socket;
            console.log('Socket ID:', id);
            localStorage.setItem('socketId',id);
            dispatch(onlineUser(id));
            dispatch(connectionSuccess(id))
          });

          socket.on('disconnect', () => {
            // Access the socket connection ID
            const {  id } = socket;
            console.log('Socket ID:', id);
            localStorage.setItem('socketId',id);
            dispatch(onlineUser(id));
            dispatch(connectionSuccess(id))
          });

          // Subscribe to the "likepost" event
          socket.on('likepost', ({ comment }) => {
            // Handle the new comment received from the server
            console.log('New Like:', comment);
            message.success("New Like");
            // Add your logic to update the UI or perform any other actions
          });

          socket.on("OnNewPost", (message) => {
            const data = JSON.parse(message);
            console.log(data)
            newpostcount += 1;
            dispatch(updateNewPostCountReq(newpostcount));
          });
          socket.on("SendChatMessage", (message) => {
            const data = JSON.parse(message);
            if(data.ActionType === "newgroupmessage"){
              dispatch(getChats({ userId: data.RefId2, isGroup: 1 }));
            }else{
              dispatch(getChats({ userId: data.RefId2, isGroup: 0 }));
            }
          });
          
    }
    catch (err) {
      dispatch(connectionError(err))
    }
  }

}


const getOnlineUsers = () => {
  return async (dispatch) => {

    try {
      dispatch(getOnlineUsersRequest())

      // const res = await DataService.post('User/FollowUnFollowUser?userId=' + userid)
      const res = await DataService.get(`User/GetOnlineUsers`);


      if (res.data.message === "Success") {
        const profile = JSON.parse(localStorage.getItem("profile"));

        const onlineusers = res.data.result.filter(user => user.username !== profile.userName)

        dispatch(getOnlineUsersSuccess(onlineusers))
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(getOnlineUsersError(err))
    }

  }
}

export { onlineUser, makeUserOffline, getOnlineUsers, doConnect };
