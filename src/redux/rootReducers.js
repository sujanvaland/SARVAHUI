import { combineReducers } from 'redux';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import { readMessageReducer } from './message/reducers';
import { readNotificationReducer } from './notification/reducers';
import authReducer from './authentication/reducers';
import ChangeLayoutMode from './themeLayout/reducers';
import { userReducer, userGroupReducer } from './users/reducers';
import { headerSearchReducer } from './headerSearch/reducers';
import { chatReducer, SingleChatReducer, groupChatReducer, SingleChatGroupReducer } from './chat/reducers';
import Note from './note/reducers';
import Profile from './profile/reducers';
import { fsCrudReducer, fsSingleCrudReducer } from './firebase/firestore/reducers';
import firebaseAuth from './firebase/auth/reducers';
import questionReducer from './question/reducers';
import postReducer from './post/reducers';
import reactionReducer from './reaction/reducers';
import connectionReducer from './connection/reducers';
import onlineUsersReducer from './onlineusers/reducers';
import chattingReducer from './chatting/reducers';
import UserProfileReducer from './UserProfile/reducers';
import UploadFileReducer from './UploadFile/reducers';
import SuggestionReducer from './usersSuggestion/reducers';
import SearchUserReducer from './SearchUsers/reducers';
import amaReducer from './ama/reducers';
import fetchContactsReducer from './usercontacts/reducers';

const rootReducers = combineReducers({
  fb: firebaseReducer,
  fs: firestoreReducer,
  headerSearchData: headerSearchReducer,
  message: readMessageReducer,
  notification: readNotificationReducer,
  users: userReducer,
  userGroup: userGroupReducer,
  auth: authReducer,
  chatSingle: SingleChatReducer,
  chatSingleGroup: SingleChatGroupReducer,
  chat: chatReducer,
  groupChat: groupChatReducer,
  ChangeLayoutMode,
  crud: fsCrudReducer,
  singleCrud: fsSingleCrudReducer,
  Note,
  Profile,
  firebaseAuth,
  Ques: questionReducer,
  Connection: connectionReducer,
  Post: postReducer,
  Reaction: reactionReducer,
  OnlineUsers: onlineUsersReducer,
  Chatting: chattingReducer,
  userProfile: UserProfileReducer,
  uploadFile: UploadFileReducer,
  getSuggest: SuggestionReducer,
  getUser: SearchUserReducer,
  ama: amaReducer,
  UserContacts: fetchContactsReducer
});

export default rootReducers;
