/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Button, Input } from 'antd';
import { CloseOutlined,SearchOutlined } from '@ant-design/icons';
import { Modal } from '../../../components/modals/antd-modals';
import { sendMessage } from "../../../redux/chatting/actionCreator";
import { MessageMainBoxInner, MessageMainBox, SearchBox } from '../style';
import { GetSearchUser } from "../../../redux/SearchUsers/actionCreator";

const FindUser = (props) => {
    const dispatch = useDispatch();
    const UserProfile = JSON.parse(localStorage.getItem('profile'));
    const [SearchUserdata, SetSearchUserdata] = useState([]);
    const [UserThreads, SetUserThreads] = useState([]);

    const { SearchUser, FollowingData } = useSelector((state) => {
        return {
            SearchUser: state.getUser.getSearchUser,
            FollowingData: state.userProfile.getNetwork?.following,
        };
      });

    const { handleCloseAddMessageBox, onClose, ForwardMessage, IsForward, handleOpenChatBox , setTagUser, IsTag, TagUser, IsInvite } = props;

    const [State, setState] = useState({
        SearchUserName: '',
        focustext: false,
        showboxlist: false,
      });
    
    useEffect(()=>{
        if (State.SearchUserName?.length < 3) {
            SetSearchUserdata(FollowingData);
        }
        if(IsTag)
        {
            SetUserThreads(TagUser);
        }
    },[])

    useEffect(()=>{
        if (State.SearchUserName?.length > 3) {
            SetSearchUserdata(SearchUser);
        }
    },[SearchUser])

    useEffect(()=>{
    if (State.SearchUserName?.length > 3) {
        setState({
            ...State,
            showboxlist: true,
        });
        dispatch(GetSearchUser({ name: State.SearchUserName, pageNo:1, records: 50 }));
    }
    },[State.SearchUserName])



    const handleUserThreads = (thread) => {
        if (!UserThreads?.map(x=> x.id).includes(thread?.id)) {
            SetUserThreads([...UserThreads, thread]);
        }
    };

    const handleRemoveThreads = (id)=> {
        const newThreads = UserThreads.filter(user => user.id !== id);
        SetUserThreads(newThreads);
    }

    const handleFowardMessage = () => {
        if (UserThreads.length > 0 && IsForward) {
            const obj =
            {
                "isDeleted": false,
                "senderId": UserProfile?.id,
                "groupId": 0,
                "replyId": 0,
                "message": ForwardMessage,
                "isDelivered": 0,
                "isRead": 0,
                "attachmentId": 0,
                "deleteForUserId1": 0,
                "deleteForUserId2": 0
            }
            // eslint-disable-next-line array-callback-return
            UserThreads.map((item)=>{
                const userObj = { ...obj, receiverId: parseInt(item.id) };
                dispatch(sendMessage(userObj));
            })
        }
        SetUserThreads([]);
        onClose();
    };

    const handleChange = (e) => {
        e.preventDefault();
        setState({
          ...State,
          SearchUserName: e.target.value,
          showboxlist: true,
        });
    };

    const fnFocus = () => {
        setState({
          ...State,
          focustext: true,
        });
      };
    
      const fnFocusOut = () => {
        setState({
          ...State,
          focustext: false,
        });
      };

    const hideSearch = () => {
        setState({
            ...State,
            SearchUserName: '',
            showboxlist: false,
        });
    };
    
    return (
        <Modal
            type="primary"
            title={
                <div className="modalHeader">
                    New Message
                    {(!IsForward && !IsTag && !IsInvite) &&
                        <Button className="btnnextheader" onClick={() => handleOpenChatBox(UserThreads)}>
                            Next
                        </Button>}
                    {IsForward &&
                        <Button className="btnnextheader btnBlack" onClick={() => handleFowardMessage()}>
                            Next
                        </Button>}
                    {IsTag &&
                        <Button className="btnnextheader btnBlack" onClick={() => {setTagUser(UserThreads); onClose();}}>
                            Tag
                        </Button>
                    }
                </div>
            }
            visible
            onCancel={(IsForward || IsTag || IsInvite) ? () => onClose() : () => handleCloseAddMessageBox()}
            footer={" "}
            width={600}
            top={20}
            className="imgPreviewModal addMessageBox">
            <div className="seachTagsBox">
           
                <SearchBox>
                <div className="messgsearcharea">
                    <div className="searchIconbox">
                    <SearchOutlined />
                    </div>
                    <Input
                    className="form-control"
                    placeholder="Search"
                    name="SearchUserName"
                    onFocus={fnFocus}
                    onBlur={fnFocusOut}
                    onChange={handleChange}
                    value={State?.SearchUserName}
                    />
                    <Button className={State.showboxlist ? 'btnClose show' : 'btnClose'} onClick={hideSearch}>
                    <CloseOutlined />
                    </Button>
                </div>
                </SearchBox>
            
                <div className="messageTagsBox">
                    {UserThreads && UserThreads?.length > 0 &&
                        UserThreads?.map((user) => (
                            <div className="tagsMainBox">
                                <div className="userimgBox">
                                    {user.profileImg?.length > 5 ?
                                        <img src={user.profileImg} alt="" /> :
                                        <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                </div>
                                <div className="userName">
                                {user.firstName}{" "}{user.lastName}
                                </div>
                                <Button>
                                    <CloseOutlined onClick={()=>handleRemoveThreads(user.id)}/>
                                </Button>
                            </div>))}
                </div>
            </div>
            <MessageMainBox className="messagaBoxUsers">
                {SearchUserdata && SearchUserdata.length > 0 ? (
                        SearchUserdata?.map((User) => (
                <MessageMainBoxInner onClick={()=>handleUserThreads(User)} className="Msgboxuser">
                    <div className="userPic" >
                        {User?.profileImg?.length > 5 ?
                            <img src={User.profileImg} alt="" /> :
                            <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                    </div>
                    <div className="nameMsgBox">
                        <div className="namedtls">
                            <div>
                                <span className="uname"> {User.firstName} {User.lastName}</span>
                                <div className="flex row flextart aligncenter">
                                    {User.online &&
                                    <span className="greentickicon">
                                    <img src={require('../../../static/images/icon_check.png')} alt="" />
                                    </span>}
                                    <span className="accountname">@ {User.userName}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </MessageMainBoxInner>
                ))
                ) : (
                    <li>No user found</li>
                )}
            </MessageMainBox>
        </Modal>
    )
};

export default FindUser;