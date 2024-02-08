import React, { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Image, Menu, Radio, Checkbox, Input, Switch, message } from 'antd';
import {
    EllipsisOutlined, SettingOutlined, CloseOutlined, ArrowLeftOutlined,
    SendOutlined, SearchOutlined, InfoCircleOutlined, HeartOutlined,
    DeleteOutlined, ArrowDownOutlined
} from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import MessageBox from "./MessageBox";
import FindUser from "./findUser";
import EditGroupInfoModal from "./editGroupInfoModal";
import ReportGroupModal from "./reportGroupModal";
import BlockUserModal from "./blockUserModal";
import LeaveConversationModal from "./leaveConversationModal";
import { Modal } from '../../../components/modals/antd-modals';
import { doConnect, getOnlineUsers } from "../../../redux/onlineusers/actionCreator";
import { MessageMainBox, ActiveUser, ChatMainBox, MessageMainBoxInner, SearchBox } from '../style';
import { getUserNetwork } from "../../../redux/UserProfile/actionCreator";
import { CreateGroup, DeleteChat, GetChatUserProfile, GetGroupInfo, MakeActionFromGroup, SnoozeGroupUser, getChats } from "../../../redux/chatting/actionCreator";
import { convertToMonthYear, formatDate } from "../../../utility/ConvertToMonthYear";
import { connection } from "../../../redux/connection/actionCreator";
import { messageTime } from "../../../utility/utility";

const Chatting = () => {

    const dispatch = useDispatch();
    const UserProfile = JSON.parse(localStorage.getItem('profile'));
    const messagesEndRef = useRef()
    const [chatThreads, setChatThreads] = useState([]);
    const [showinfoBox, setshowinfoBox] = useState(false);
    const [infoBoxId, setinfoBoxId] = useState(0);
    const [ShowEditGroupModal, setShowEditGroupModal] = useState(false);
    const [showReportGroupModal, setShowReportGroupModal] = useState(false);
    const [ShowLeaveConversationGroupModal, setShowLeaveConversationGroupModal] = useState(false);
    const [showBlockUserModal, setShowBlockUserModal] = useState(false);
    const [UserDetails, setUserDetails] = useState([]);

    const { onlineUsers, chatProfile, chatHistory, chatUser, infoUserList, groupInfo, infoLoading } = useSelector((state) => {
        return {
            onlineUsers: state.userProfile.getNetwork?.following,
            chatProfile: state.Chatting.chatProfile,
            chatHistory: state.Chatting.chats.chatMessages,
            chatUser: state.Chatting.chats.userProfile,
            infoUserList: state.Chatting.getGroupInfo?.groupInfoBoxModel,
            groupInfo: state.Chatting.getGroupInfo,
            infoLoading: state.Chatting.infoLoading,
        };
    });

    useEffect(() => {
        setChatThreads(chatProfile);
    }, [chatProfile])

    useEffect(() => {
        dispatch(doConnect());
        dispatch(getOnlineUsers());
        dispatch(getUserNetwork(UserProfile?.id));
        dispatch(GetChatUserProfile());
    }, [])

    const [showChatBox, setShowChatBox] = useState(false);
    const [showSettingBox, setShowSettingBox] = useState(false);
    const [showAddMessage, setShowAddMessage] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [SearchUserName, setSearchUserName] = useState('');
    const [value, setValue] = useState(1);
    const [Reply, setReply] = useState({});
    const [checkedReadReceipt] = useState(1);
    const [isgroupChat, setisgroupChat] = useState(false);

    const [IsForward, setIsForward] = useState(false);
    const [ForwardMessage, setForwardMessage] = useState("");

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.clientHeight;
            // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }); // messagesEndRef.current.scrollHeight;
        }
    }
    // useEffect(() => {
    //     scrollToBottom();
    // }, [chatHistory]);

    const closeInfoBox = () => {
        setshowinfoBox(false);
        setinfoBoxId(0);
    }

    const handleChatBox = async (obj) => {
        setisgroupChat(false);
        closeInfoBox();
        setShowChatBox(false);
        if (obj) {
            dispatch(getChats(obj))
            setShowChatBox(true);
            if (obj.isGroup) {
                setisgroupChat(true);
            }
        } else {
            setShowChatBox(false);
            dispatch(GetChatUserProfile());
            scrollToBottom();
        }
        setinfoBoxId(0);
    };

    const handleOpenChatBox = async (selectedUsers) => {
        setShowChatBox(false);
        if (selectedUsers.length === 1 && infoBoxId === 0) {
            dispatch(getChats({ userId: selectedUsers[0].id, isGroup: 0 }))
            setShowChatBox(true);
        }
        else if (selectedUsers.length > 1 && infoBoxId === 0) {
            await dispatch(CreateGroup({ groupId: 0, userId: selectedUsers?.map(x => x.id) }))
            setShowChatBox(true);
            setisgroupChat(true);
            //  await handleChatBox({ userId: chatThreads?.map(x => x.userId)[0], isGroup: 1 })
        }
        else if (selectedUsers.length > 0 && infoBoxId !== 0) {
            await dispatch(CreateGroup({ groupId: infoBoxId, userId: selectedUsers?.map(x => x.id) }))
            await dispatch(GetGroupInfo({ Id: infoBoxId, IsGroup: true }));
            setShowChatBox(true);
            setisgroupChat(true);
        }
        else {
            setShowChatBox(false);
            dispatch(GetChatUserProfile());
            scrollToBottom();
        }
        setShowAddMessage(false);
    }

    const handleCloseAddMessageBox = () => {
        setShowAddMessage(false);
        scrollToBottom();
        dispatch(GetChatUserProfile());
        setIsForward(false);
        setForwardMessage("");
    }

    const openInfoBox = (data) => {
        setshowinfoBox(true);
        setinfoBoxId(data.id);
        dispatch(GetGroupInfo({ Id: data.id, IsGroup: data.isGroup }));
    };

    const handleConnection = async (id) => {
        await dispatch(connection(id));
        await dispatch(GetGroupInfo({ Id: infoBoxId, IsGroup: isgroupChat }));
    };

    const handleMakeAdminRemoveUser = async (id, type) => {
        await dispatch(MakeActionFromGroup({ groupId: infoBoxId, userId: id, type }));
        await dispatch(GetGroupInfo({ Id: infoBoxId, IsGroup: isgroupChat }));
    };

    const handleSettingBox = async (id) => {
        setShowChatBox(false);
        if (id !== 0) {
            setShowSettingBox(true);
        } else {
            setShowSettingBox(false);
            scrollToBottom();
        }
    };

    const handleAddMessage = async (id) => {
        if (id !== 0) {
            setShowAddMessage(true);
        } else {
            setShowAddMessage(false);
            scrollToBottom();
        }
    }

    const onChange = (e) => {
        if (e.target.value === 2 || e.target.value === 3) {
            setIsDisabled(false);
        }
        if (e.target.value === 1) {
            setIsDisabled(true);
        }
        setValue(e.target.value);
    };

    const handleBlockUsers = (data) => {
        setUserDetails(data);
        setShowBlockUserModal(true);
    }

    const handelReportUser = (data) => {
        setUserDetails(data);
        setShowReportGroupModal(true);
    }


    const [deleteChatModalOpen, isDeleteChatModalOpen] = useState(false);

    const handleDeleteModalOpen = () => {
        isDeleteChatModalOpen(true);
    }

    const handleUserChat = async (id, messageId) => {
        await dispatch(DeleteChat({ id, messageId }));
        if (messageId > 0) {
            await handleChatBox({ userId: id, isGroup: isgroupChat ? 1 : 0 })
        }
        isDeleteChatModalOpen(false);
    }

    const HandleSnooze = async (data, info) => {
        await dispatch(SnoozeGroupUser(data));
        dispatch(GetChatUserProfile());
        if (info > 0) {
            openInfoBox(data);
        }
    }

    const copyChatMessage = (Message) => {
        const tempInput = document.createElement('input');
        tempInput.value = Message;
        document.body.appendChild(tempInput);
        tempInput.select();
        document.execCommand('copy');
        document.body.removeChild(tempInput);
        message.success('Copied to clipboard');
    };

    const handleDirectMessage = (message) => {
        setForwardMessage(message);
        setIsForward(true);
    }

    const OpenLeaveConfirmation = (data) => {
        setinfoBoxId(data?.userId);
        setShowLeaveConversationGroupModal(true);
    }
    const CloseLeaveConfirmation = () => {
        setinfoBoxId(0);
        setShowLeaveConversationGroupModal(false);
    }
    const handleLeaveConfirm = () => {
        CloseLeaveConfirmation();
        handleChatBox(0);
    }


    const AdminRights = (list) => {
        return (
            <>
                <Menu className='moremnuBox'>
                    {list?.isfollowing === 1 ?
                        <Menu.Item Key="1" onClick={() => handleConnection(list?.id)}>UnFollow</Menu.Item> :
                        <Menu.Item Key="1" onClick={() => handleConnection(list?.id)}>Follow</Menu.Item>
                    }
                    {list?.isAdmin ?
                        <Menu.Item Key="2" onClick={() => handleMakeAdminRemoveUser(list?.id, "removeAdmin")}>Remove From Admin</Menu.Item> :
                        <Menu.Item Key="2" onClick={() => handleMakeAdminRemoveUser(list?.id, "makeAdmin")}>Make Admin</Menu.Item>}

                    <Menu.Item Key="3" onClick={() => handleMakeAdminRemoveUser(list?.id, "remove")}>Remove</Menu.Item>
                </Menu>
            </>
        )
    };

    const Moremenu = (data) => {
        return (
            <>
                <Menu className='reportdropdown'>
                    {data?.isGroup === 0 ?
                        <Menu.Item key="1" className="textRed" onClick={handleDeleteModalOpen}><DeleteOutlined />Delete</Menu.Item> :
                        <Menu.Item key="1" className="textRed" onClick={() => OpenLeaveConfirmation(data)}>
                            <DeleteOutlined />Leave Conversation</Menu.Item>}
                    {data?.isSnooze === 0 ?
                        <Menu.Item key="2" onClick={() => HandleSnooze({ id: data?.userId, type: "notification", isGroup: !!data?.isGroup }, 0)}><Icon icon="raphael:mute" /> Snooze Conversation</Menu.Item> :
                        <Menu.Item key="2" onClick={() => HandleSnooze({ id: data?.userId, type: "notification", isGroup: !!data?.isGroup }, 0)}><Icon icon="raphael:mute" /> Take Conversation off Snooze</Menu.Item>}
                    <Menu.Item key="3" onClick={() => handleBlockUsers(data)}><Icon icon="mdi-light:cancel" /> Block</Menu.Item>
                    <Menu.Item key="4" onClick={() => handelReportUser(data)}><Icon icon="teenyicons:flag-outline" /> Report Conversation</Menu.Item>
                </Menu>

                {
                    deleteChatModalOpen &&
                    <Modal
                        type="primary"
                        title="Delete all Messages?"
                        visible
                        footer={[
                            <Button onClick={() => handleUserChat(data?.userId, 0)} className="btnRed">Delete</Button>,
                            <Button className="btnDefault">Cancel</Button>
                        ]}
                        width={400}
                        top={20}
                        onCancel={() => isDeleteChatModalOpen(false)}
                        className="reportPost deletePostModal">
                        <div className="project-modal scroll">
                            <p>
                                This can’t be undone and it will delete all your messages from {data?.firstName}.
                            </p>
                        </div>
                    </Modal>
                }
            </>
        )
    };

    const ChatMenu = (id, data) => {
        return (
            <> <Menu className='moremnuBox'>
                <Menu.Item key="1" onClick={() => setReply(data)} >Reply</Menu.Item>
                <Menu.Item key="2" onClick={() => copyChatMessage(data?.message)} >Copy Message</Menu.Item>
                <Menu.Item className="textRed" key="3" onClick={() => handleUserChat(id, data?.id)}>Delete</Menu.Item>
            </Menu></>
        )
    };
    const renderHTML = (textMsg) => {
        return { __html: textMsg.replace(/\n/g, '<br>') };
    };

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchUserName(e.target.value);
    };

    useEffect(() => {
        if (SearchUserName?.length > 0) {
            const data = chatProfile?.filter(
                (x) =>
                    x?.userName.toLowerCase().includes(SearchUserName) ||
                    x?.firstName.toLowerCase().includes(SearchUserName) ||
                    x?.lastName.toLowerCase().includes(SearchUserName)
            );
            setChatThreads(data);
        } else {
            setChatThreads(chatProfile);
        }
    }, [SearchUserName])

    const clearSearch = () => {
        setSearchUserName(null);
        setChatThreads(chatProfile);
    }
    const dropdownClassName = 'reportdropdown';
    return (
        <>
            <div className='cntpagecomponent'>
                <div className={showChatBox === true ? 'centersidebarcontent flexcolumn mt56 messageBoxDiv hideBox' : 'centersidebarcontent flexcolumn mt56 messageBoxDiv'}>
                    <div className='userNamedetails headerBox msgheader'>
                        <h2>Messages</h2>
                        <div className="hdRight">
                            <Button className="btnSettings" onClick={() => handleSettingBox(2)}>
                                <SettingOutlined />
                            </Button>
                            <Button className="btnAddMsg" onClick={() => handleAddMessage(2)}>
                                <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" /></g></svg>
                            </Button>
                        </div>
                    </div>
                    <ActiveUser >
                        <div className="userDataBox">
                            {onlineUsers?.length > 0 && onlineUsers.map((item) => (
                                <>
                                    {item.connectionDetail && (
                                        <div className="userPic" key={item.id}>

                                            <Link to="#">
                                                <img src={item.profileImg?.length > 5 ? item.profileImg : require('../../../static/images/img_userpic.jpg')} alt="" />
                                            </Link>
                                        </div>
                                    )}
                                </>
                            ))}
                        </div>
                    </ActiveUser>
                    <SearchBox className="modalSearch">
                        <div className="messgsearcharea">
                            <div className="searchIconbox">
                                <SearchOutlined />
                            </div>
                            <Input className="form-control" placeholder="Search" name="SearchUserName" onChange={handleSearch} value={SearchUserName} />
                            <Button className={SearchUserName ? 'btnClose show' : 'btnClose'} onClick={() => clearSearch()}>
                                <CloseOutlined />
                            </Button>
                        </div>
                    </SearchBox>
                    {chatThreads && chatThreads?.length > 0 ? (
                        chatThreads?.map((profile) => (
                            <MessageMainBox className="msgUser" onClick={() => handleChatBox({ userId: profile.userId, isGroup: profile.isGroup })}>
                                <MessageMainBoxInner >
                                    <div className="userPic" >
                                        {profile.profileImg.length > 5 ?
                                            <img src={profile.profileImg} alt="" /> :
                                            <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}

                                    </div>
                                    <div className="nameMsgBox">
                                        <div className="namedtls">
                                            <div>
                                                <span className="uname">{profile.firstName}</span>
                                                {profile.userName?.length > 4 &&
                                                    <span className="accountname">@{profile.userName}</span>}
                                                <span className="datebox">{messageTime(profile.createdDate)}</span>
                                                {profile.isSnooze === 1 &&
                                                    <span><Icon icon="raphael:mute" /></span>}
                                            </div>
                                            <div className="msgText">{profile.message}</div>
                                        </div>
                                    </div>
                                </MessageMainBoxInner>
                                <div className="rightbtnsbox">
                                    <Dropdown overlay={() => Moremenu(profile)} placement='bottomRight' trigger={['click']}

                                        overlayClassName={dropdownClassName}>
                                        <EllipsisOutlined />
                                    </Dropdown>
                                </div>
                            </MessageMainBox>))) : ("")}
                </div>
                {(showChatBox && chatUser) &&

                    <div className="rightsidebarcntbox messageChat">
                        <div className="rightsidecntbox scrollbox">
                            {showinfoBox && isgroupChat === false &&
                                <ChatMainBox className="conversionInfoBox">
                                    <div className="chatUsername">
                                        <Link to="#" onClick={() => closeInfoBox()} className="btnbackBox"><ArrowLeftOutlined /></Link>
                                        <h2 className="headerText">Conversation info</h2>
                                    </div>
                                    <div className="chatUserBox">
                                        <MessageMainBox className="chatbox">
                                            {infoUserList && !infoLoading && infoUserList?.length > 0 && (
                                                infoUserList?.map((list) => (
                                                    <MessageMainBoxInner className="msgChatBoxMain">
                                                        <div className="msgChatBox">
                                                            <div className="userPic" >
                                                                {list.profileImgUrl?.length > 5 ?
                                                                    <img src={list.profileImgUrl} alt="" /> :
                                                                    <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                                            </div>
                                                            <div className="nameMsgBox">
                                                                <div className="namedtls">
                                                                    <div>
                                                                        <span className="uname">{list.fullName}</span> <br />
                                                                        <span className="accountname">@{list.userName}</span>
                                                                        {list.isPeer === 1 &&
                                                                            <Link to="#">Follows you</Link>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {list.isfollowing === 1 ?
                                                            <Button className="btnBlack btnRound">
                                                                Following
                                                            </Button> :
                                                            <Button className="btnBlack btnRound">
                                                                Follow
                                                            </Button>}
                                                    </MessageMainBoxInner>)))}
                                        </MessageMainBox>
                                    </div>
                                    <div className="ChatUserNotification">
                                        <h3>Notifications</h3>
                                        <div className="snoozBox">
                                            Snooze notifications from {chatUser?.name}
                                            {!infoLoading && <Switch size="small" defaultChecked={groupInfo?.isNotification} onChange={() => HandleSnooze({ id: chatUser?.id, type: "notification", isGroup: chatUser.isGroup }, 1)} />}
                                        </div>
                                        <div className="InfobtnBox">
                                            <Link to="#" onClick={() => handleBlockUsers({ userId: chatUser?.id, firstName: chatUser?.name })}>
                                                Block @{chatUser.userName}
                                            </Link>
                                            <Link to="#" onClick={() => handelReportUser({ userId: chatUser?.id, firstName: chatUser?.name })}>
                                                Report @{chatUser.userName}
                                            </Link>
                                            {/* <Link to="" className="redTextbtn"> 
                                                Leave Conversation
                                            </Link> */}
                                        </div>
                                    </div>
                                </ChatMainBox>
                            }
                            {showinfoBox && isgroupChat &&
                                <ChatMainBox className="conversionInfoBox">
                                    <div className="chatUsername">
                                        <Link to="#" onClick={() => closeInfoBox()} className="btnbackBox"><ArrowLeftOutlined /></Link>
                                        <h2 className="headerText">Group info</h2>
                                    </div>
                                    <div className="chatUserBox ">
                                        <div className="chatbox groupbox">
                                            <div className="msgChatBoxMain">
                                                <div className="msgChatBox">
                                                    <div className="userPic" >
                                                        {chatUser.profileImg?.length > 5 ?
                                                            <img src={chatUser.profileImg} alt="" /> :
                                                            <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                                    </div>
                                                    <div className="nameMsgBox">
                                                        <div className="namedtls">
                                                            <span className="uname">{chatUser?.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Button className="groupedit" onClick={() => setShowEditGroupModal(true)}>Edit</Button>
                                            </div>
                                        </div>
                                        <div className="groupPeople">
                                            <h3>People</h3>
                                            <MessageMainBox className="chatbox groupChatBox">
                                                {infoUserList && !infoLoading && infoUserList?.length > 0 && (
                                                    infoUserList?.map((list) => (
                                                        <MessageMainBoxInner className="msgChatBoxMain">
                                                            <div className="msgChatBox">
                                                                <div className="userPic" >
                                                                    {list.profileImgUrl?.length > 5 ?
                                                                        <img src={list.profileImgUrl} alt="" /> :
                                                                        <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                                                </div>
                                                                <div className="nameMsgBox">
                                                                    <div className="namedtls">
                                                                        <div>
                                                                            <span className="uname">{list.fullName}</span> <br />
                                                                            <span className="accountname">@{list.userName}</span>
                                                                            {list.isPeer === 1 &&
                                                                                <Link to="#">Follows you</Link>
                                                                            }
                                                                            {list.isAdmin &&
                                                                                <Link to="#">Admin</Link>

                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            {groupInfo?.isAdmin ?
                                                                <Dropdown overlay={AdminRights(list)} trigger={['click']}>
                                                                    <EllipsisOutlined />
                                                                </Dropdown>
                                                                :
                                                                <>
                                                                    {list.isfollowing === 1 ?
                                                                        <Button className="btnBlack btnRound" onClick={() => handleConnection(list.id)}>
                                                                            UnFollow
                                                                        </Button> :
                                                                        <Button className="btnBlack btnRound" onClick={() => handleConnection(list.id)}>
                                                                            Follow
                                                                        </Button>} </>}
                                                        </MessageMainBoxInner>)))}
                                                <Link to="#" onClick={() => setShowAddMessage(true)} className="btnAddPeople">
                                                    Add People
                                                </Link>
                                            </MessageMainBox>
                                        </div>
                                    </div>
                                    <div className="ChatUserNotification">
                                        <h3>Notifications</h3>
                                        <div className="snoozBox">
                                            Snooze notifications from {chatUser?.name}
                                            {!infoLoading && <Switch size="small" defaultChecked={groupInfo?.isNotification} onChange={() => HandleSnooze({ id: chatUser?.id, type: "notification", isGroup: chatUser.isGroup }, 1)} />}
                                        </div>
                                        <div className="snoozBox">
                                            Snooze mentions
                                            {!infoLoading && <Switch size="small" defaultChecked={groupInfo?.isMention} onChange={() => HandleSnooze({ id: chatUser?.id, type: "mention", isGroup: chatUser.isGroup }, 1)} />}
                                        </div>
                                        <div className="noteboxText">Disable notifications when people mention you in this conversation.</div>
                                        <div className="InfobtnBox">
                                            <Link to="#" onClick={() => handelReportUser({ userId: chatUser?.id, firstName: chatUser?.name })}>
                                                Report {chatUser?.name}
                                            </Link>
                                            <Link to="#" onClick={() => OpenLeaveConfirmation({ userId: chatUser?.id })} className="redTextbtn">
                                                Leave Conversation
                                            </Link>
                                        </div>
                                    </div>
                                </ChatMainBox>
                            }
                            {showinfoBox === false &&
                                <ChatMainBox>
                                    <div className="chatMainbox" ref={messagesEndRef}>
                                        {chatUser && (
                                            <div className="chatUsername">
                                                <h2>{chatUser.name}<span className="svgicons"><svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path clipRule="evenodd" d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="#1da1f2" fillRule="evenodd" /> </g></svg></span></h2>
                                                <div className="flex flexrow">
                                                    <Button onClick={() => openInfoBox(chatUser)} className="btninfo"><InfoCircleOutlined /></Button>
                                                    <Link to="#" onClick={() => handleChatBox(0)}><CloseOutlined /></Link>
                                                </div>
                                            </div>
                                        )}

                                        <div className="chatMsgBox">
                                            {chatUser && (
                                                <div className="oneBox">

                                                    <div className="profileMain">
                                                        <div className="userpic">
                                                            {chatUser.profileImg?.length > 5 ?
                                                                <img src={chatUser.profileImg} alt="" /> :
                                                                <img src={require('../../../static/images/img_userpic.jpg')} alt="" />}
                                                        </div>
                                                        <h3>{chatUser.name}<span className="svgicons"><svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path clipRule="evenodd" d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="#1da1f2" fillRule="evenodd" /> </g></svg></span></h3>
                                                        <div className="userprofilename">@{chatUser.userName}</div>
                                                        <p>{chatUser.about}</p>
                                                        <p className="fnt18">{convertToMonthYear(chatUser.createdDate)} · {chatUser.noOfFollowers} Followers</p>
                                                        {/* <div className="cntFollowed">
                                                                Followed by Abhilash Awasthi and Tim Hedberg
                                                            </div> */}
                                                    </div></div>
                                            )}

                                            <div className="chattingBox">
                                                <ul>

                                                    {chatHistory && chatHistory?.length > 0 ? (
                                                        chatHistory?.map((chat) => (
                                                            <li className={chat.senderId !== UserProfile.id ? '' : 'userReply'}>
                                                                <div className="msgChatBox">
                                                                    {chat.replyMessage !== null ?
                                                                        <>
                                                                            <div className="replyMessageBox">
                                                                            {(chatUser.isGroup &&  chat.replyTo !== UserProfile.firstName) && <h5><img src={require('../../../static/images/icon_reply.png')} alt="" /> Replying to {chat.replyTo}</h5>}
                                                                                <div className="replymsg">
                                                                                    <div className="oldMsgbox">
                                                                                    {chat.replyMessage}
                                                                                    </div>
                                                                                    <div className="newMsgbox">
                                                                                    {chat.message}
                                                                                    {(chatUser.isGroup &&  chat.senderName !== UserProfile.firstName) &&
                                                                                    <h6>{chat?.senderName}</h6>}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </> : 
                                                                        <>
                                                                            <div className="chatTextcnt">
                                                                                <div dangerouslySetInnerHTML={renderHTML(chat?.message)} />
                                                                                {(chatUser.isGroup &&  chat.senderName !== UserProfile.firstName) &&
                                                                                    <h6>{chat?.senderName}</h6>}
                                                                                {chat.actualUrl &&
                                                                                    <Image src={chat.actualUrl} alt="" />
                                                                                }
                                                                            </div>
                                                                        </>}
                                                                    <div className="chatIconsBox">
                                                                        <Dropdown overlay={() => ChatMenu(chatUser.id, chat)} placement='bottomRight' trigger={['click']} overlayClassName={dropdownClassName} >
                                                                            <EllipsisOutlined />
                                                                        </Dropdown>

                                                                        <Link to="#"><HeartOutlined /></Link>
                                                                        <Link to="#" onClick={() => handleDirectMessage(chat?.message)}><SendOutlined /></Link>
                                                                    </div>

                                                                </div>
                                                                <span className="chatDate">{formatDate(chat.createdDate)}</span>
                                                            </li>))) : ("")}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <MessageBox senderId={UserProfile?.id} receiverId={chatUser.isGroup ? 0 : chatUser?.id}
                                        groupId={chatUser.isGroup ? chatUser?.id : 0} Reply={Reply}
                                        setReply={(value) => setReply(value)} />
                                </ChatMainBox>
                            }


                            <Button className="buttonDownScroll">
                                <ArrowDownOutlined />
                            </Button>
                        </div>
                    </div>
                }

                {(showSettingBox) &&
                    <div className="rightsidebarcntbox messageChat">
                        <div className="rightsidecntbox scrollbox">
                            <ChatMainBox>
                                <div className="chatMainbox" ref={messagesEndRef}>
                                    <div className="oneBox">
                                        <div className="chatUsername">
                                            <h2>Direct Messages</h2>
                                            <Link to="#" onClick={() => handleSettingBox(0)}><CloseOutlined /></Link>
                                        </div>
                                        <div className="profileMain">
                                            <p>Allow message requests from:</p>
                                            <p>People you follow will always be able to message you. Learn more</p>
                                            <Radio.Group onChange={onChange} value={value}>
                                                <Radio value={1}>No One</Radio>
                                                <Radio value={2}>Verified users</Radio>
                                                <Radio value={3}>Everyone</Radio>
                                            </Radio.Group>
                                        </div>

                                        <Checkbox className="check-box" disabled={isDisabled}>
                                            Filter low-quality messages
                                        </Checkbox>
                                        <p>Hide message requests that have been detected as being potentially spam or low-quality. These will be sent to a separate inbox at the bottom of your message requests. You can still access them if you want. Learn more</p>
                                        <Checkbox className="check-box" checked={checkedReadReceipt}>
                                            Show read receipts
                                        </Checkbox>
                                        <p>Let people you’re messaging with know when you’ve seen their messages. Read receipts are not shown on message requests. Learn more</p>
                                    </div>
                                </div>
                            </ChatMainBox>
                        </div>
                    </div>
                }
                {
                    showAddMessage &&
                    <FindUser handleCloseAddMessageBox={() => handleCloseAddMessageBox()}
                        handleOpenChatBox={(selectedUsers) => handleOpenChatBox(selectedUsers)} />
                }
                {
                    ShowEditGroupModal &&
                    <EditGroupInfoModal setShowEditGroupModal={(value) => setShowEditGroupModal(value)} GroupId={infoBoxId} />
                }
                {
                    showReportGroupModal &&
                    <ReportGroupModal setUserDetails={(value) => setUserDetails(value)} setShowReportGroupModal={(value) => setShowReportGroupModal(value)} UserDetails={UserDetails} />
                }
                {
                    ShowLeaveConversationGroupModal &&
                    <LeaveConversationModal handleLeaveConfirm={() => handleLeaveConfirm()} CloseLeaveConfirmation={() => CloseLeaveConfirmation()} GroupId={infoBoxId} />
                }

                {showBlockUserModal &&
                    <BlockUserModal setUserDetails={(value) => setUserDetails(value)} setShowBlockUserModal={(value) => setShowBlockUserModal(value)} UserDetails={UserDetails} />
                }
                {IsForward &&
                    <FindUser onClose={handleCloseAddMessageBox} ForwardMessage={ForwardMessage} IsForward />
                }

            </div>
        </>
    )
}

export default Chatting;