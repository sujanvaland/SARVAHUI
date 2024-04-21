import React, { useEffect, useRef, useState } from "react";
import { Button, Dropdown, Image, Menu, Input, Switch, message } from 'antd';
import {
    EllipsisOutlined, CloseOutlined, ArrowLeftOutlined,
    SendOutlined, SearchOutlined, InfoCircleOutlined, HeartOutlined,
    DeleteOutlined, ArrowDownOutlined
} from '@ant-design/icons';
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import MessageBox from "./MessageBox";
import FindUser from "./findUser";
import BlockUserModal from "./blockUserModal";
import { Modal } from '../../../components/modals/antd-modals';
// import { doConnect } from "../../../redux/onlineusers/actionCreator";
import { MessageMainBox, ChatMainBox, MessageMainBoxInner, SearchBox } from '../style';
import { DeleteChat, GetChatUserProfile, GetGroupInfo, SnoozeGroupUser, getChats } from "../../../redux/chatting/actionCreator";
import { convertToMonthYear, formatDate } from "../../../utility/ConvertToMonthYear";
import { messageTime } from "../../../utility/utility";


const Chatting = () => {

    const dispatch = useDispatch();
    const history = useHistory();

    const UserProfile = JSON.parse(localStorage.getItem('profile'));
    const messagesEndRef = useRef()
    const [chatThreads, setChatThreads] = useState([]);
    const [showinfoBox, setshowinfoBox] = useState(false);
    const [infoBoxId, setinfoBoxId] = useState(0);
    const [chatPage, setchatPage] = useState(1);
    const [showChatBox, setShowChatBox] = useState(false);
    const [showAddMessage, setShowAddMessage] = useState(false);
    const [SearchUserName, setSearchUserName] = useState('');
    const [Reply, setReply] = useState({});
    const [isgroupChat, setisgroupChat] = useState(false);
    const [IsForward, setIsForward] = useState(false);
    const [ForwardMessage, setForwardMessage] = useState("");
    const [showBlockUserModal, setShowBlockUserModal] = useState(false);
    const [UserDetails, setUserDetails] = useState([]);
    const [deleteChatModalOpen, isDeleteChatModalOpen] = useState(false);
    const [IsLoadMore, setIsLoadMore] = useState(true);

    const { chatProfile, chatHistory, chatCount, chatSize, chatUser, groupInfo, infoLoading, DMuser, isDMUser } = useSelector((state) => {
        return {
            chatProfile: state.Chatting.chatProfile,
            chatHistory: state.Chatting.chatMessages,
            chatCount: state.Chatting.chatCount,
            chatSize: state.Chatting.chatSize,
            chatUser: state.Chatting.userProfile,
            groupInfo: state.Chatting.getGroupInfo,
            infoLoading: state.Chatting.infoLoading,
            DMuser: state.Chatting.DMuser,
            isDMUser: state.Chatting.isDMUser,
        };
    });

    useEffect(() => {
        const totalPages = Math.ceil(chatCount / chatSize);
        if (chatPage >= totalPages) {
            setIsLoadMore(false);
        }
    }, [chatHistory])

    useEffect(() => {
        setChatThreads(chatProfile);
    }, [chatProfile])

    useEffect(() => {
        // dispatch(doConnect());
        dispatch(GetChatUserProfile());
    }, [])

    const scrollToBottom = () => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollTop = messagesEndRef.current.clientHeight;
            // messagesEndRef.current.scrollIntoView({ behavior: 'smooth' }); // messagesEndRef.current.scrollHeight;
        }
    }

    const closeInfoBox = () => {
        setshowinfoBox(false);
        setinfoBoxId(0);
    }

    const handleChatBox = async (obj) => {
        setIsLoadMore(true);
        setchatPage(1);
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
        setIsLoadMore(true);
        setchatPage(1);
        if (selectedUsers.length === 1 && infoBoxId === 0) {
            dispatch(getChats({ userId: selectedUsers[0].id, isGroup: 0, pageNo: 1 }))
            setShowChatBox(true);
        }
        else {
            setShowChatBox(false);
            dispatch(GetChatUserProfile());
            scrollToBottom();
        }
        setShowAddMessage(false);
    }

    useEffect(() => {
        if (DMuser[0]?.id > 0 && isDMUser) {
            handleOpenChatBox(DMuser);
        }
        console.log("data", DMuser, isDMUser);
    }, [DMuser, isDMUser])

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

    const handleAddMessage = async (id) => {
        if (id !== 0) {
            setShowAddMessage(true);
        } else {
            setShowAddMessage(false);
            scrollToBottom();
        }
    }

    const handleBlockUsers = (data) => {
        setUserDetails(data);
        setShowBlockUserModal(true);
    }

    const handelReportUser = (data) => {
        setUserDetails(data);
    }


    const handleDeleteModalOpen = () => {
        isDeleteChatModalOpen(true);
    }

    const handleUserChat = async (id, messageId) => {
        await dispatch(DeleteChat({ id, messageId }));
        if (messageId > 0) {
            await handleChatBox({ userId: id, isGroup: isgroupChat ? 1 : 0, pageNo: 1 })
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
    }

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

    const HandleLoadMore = () => {
        setchatPage(chatPage + 1);
        dispatch(getChats({ userId: chatUser?.id, isGroup: chatUser?.isGroup ? 1 : 0, pageNo: chatPage + 1 }))
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
                        <h2><Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                                <img src={require('../../../static/images/icon_prevarrow.png')} alt="" />
                            </Link>
                            Messages</h2>
                        <div className="hdRight">
                            {/* <Button className="btnSettings" onClick={() => handleSettingBox(2)}>
                                <SettingOutlined />
                            </Button> */}
                            {UserProfile.loginType === "recruiter" &&
                                <Button className="btnAddMsg" onClick={() => handleAddMessage(2)}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" /></g></svg>
                                </Button>}
                        </div>
                    </div>
                    <br />
                    <br />
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
                            <MessageMainBox className="msgUser" onClick={() => handleChatBox({ userId: profile.userId, isGroup: profile.isGroup, pageNo: 1 })}>
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
                                    <div className="chatUsername height63">
                                        <Link to="#" onClick={() => closeInfoBox()} className="btnbackBox"> <img src={require('../../../static/images/icon_prevarrow.png')} alt="" /></Link>
                                        <h2 className="headerText">Conversation info</h2>
                                    </div>
                                    <div className="ChatUserNotification padd20">
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
                                        </div>
                                    </div>
                                </ChatMainBox>
                            }
                            {showinfoBox === false &&
                                <ChatMainBox>
                                    <div className="chatMainbox" ref={messagesEndRef}>
                                        {chatUser && (
                                            <div className="chatUsername">
                                                <h2>{chatUser.name}{chatUser.isPremium && <span className="svgicons"><svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path clipRule="evenodd" d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="#1da1f2" fillRule="evenodd" /> </g></svg></span>}</h2>
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
                                                        <h3>{chatUser.name}{chatUser.isPremium && <span className="svgicons"><svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path clipRule="evenodd" d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="#1da1f2" fillRule="evenodd" /> </g></svg></span>}</h3>
                                                        {chatUser.userName.length > 4 && <div className="userprofilename">@{chatUser.userName}</div>}
                                                        <p>{chatUser.about}</p>
                                                        <p className="fnt18">{convertToMonthYear(chatUser.createdDate)}{!chatUser.isGroup && <> · {chatUser.noOfFollowers} Followers</>} </p>
                                                        {/* <div className="cntFollowed">
                                                                Followed by Abhilash Awasthi and Tim Hedberg
                                                            </div> */}
                                                    </div></div>
                                            )}

                                            <div className="chattingBox">
                                                <ul>
                                                    {IsLoadMore && <li>
                                                        <div className="loadmorebox">
                                                        <Link to="#" onClick={() => HandleLoadMore()}>Load More</Link>
                                                        </div>
                                                    </li>}

                                                    {chatHistory && chatHistory?.length > 0 ? (
                                                        chatHistory?.map((chat) => (
                                                            (chat.senderId === 0 && chat.receiverId === 0) ?
                                                                <>
                                                                    <li>
                                                                        <span className="chatDate">{chat?.message}</span>
                                                                    </li>
                                                                </> :
                                                                <>
                                                                    <li className={chat.senderId !== UserProfile.id ? '' : 'userReply'}>
                                                                        <div className="msgChatBox">
                                                                            {chat.replyMessage !== null ?
                                                                                <>
                                                                                    <div className="replyMessageBox">
                                                                                        {(chatUser.isGroup && chat.replyTo !== UserProfile.firstName) && <h5><img src={require('../../../static/images/icon_reply.png')} alt="" /> Replying to {chat.replyTo}</h5>}
                                                                                        <div className="replymsg">
                                                                                            <div className="oldMsgbox">
                                                                                                {chat.replyMessage}
                                                                                            </div>
                                                                                            <div className="newMsgbox">
                                                                                                {chat.message}
                                                                                                {(chatUser.isGroup && chat.senderName !== UserProfile.firstName) &&
                                                                                                    <h6>{chat?.senderName}</h6>}
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </> :
                                                                                <>
                                                                                    <div className="chatTextcnt">
                                                                                        <div dangerouslySetInnerHTML={renderHTML(chat?.message)} />
                                                                                        {(chatUser.isGroup && chat.senderName !== UserProfile.firstName) &&
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
                                                                    </li>
                                                                </>))) : ("")}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <MessageBox senderId={UserProfile?.id} receiverId={chatUser.isGroup ? 0 : chatUser?.id}
                                        groupId={chatUser.isGroup ? chatUser?.id : 0} Reply={Reply}
                                        setReply={(value) => setReply(value)} />
                                </ChatMainBox>
                            }
                            {chatHistory?.length > 0 &&
                                <Button className="buttonDownScroll">
                                    <ArrowDownOutlined />
                                </Button>}
                        </div>
                    </div>
                }

                {
                    showAddMessage &&
                    <FindUser handleCloseAddMessageBox={() => handleCloseAddMessageBox()}
                        handleOpenChatBox={(selectedUsers) => handleOpenChatBox(selectedUsers)} />
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