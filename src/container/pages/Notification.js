import React, { useEffect, useState } from 'react';
import { Form, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { SettingOutlined, EllipsisOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { MessageMainBox, MessageMainBoxInner } from './style';
import PostDetails from './post/details';
import { readNotificationList } from '../../redux/notification/actionCreator';


function Notification() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [notificationList, setnotificationList] = useState([]);
  const [IsAll, setIsAll] = useState(true);
  const [IsLiked, setIsLiked] = useState(false);
  const [IsComment, setIsComment] = useState(false);
  const [IsFollow, setIsFollow] = useState(false);
  const [IsPost, setIsPost] = useState(false);
  const [IsRepost, setIsRepost] = useState(false);
  const [IsTagged, setIsTagged] = useState(false);
  const [IsMention, setIsMention] = useState(false);

  const { Notification } = useSelector((state) => ({
    Notification: state?.notification?.notificationList?.result,
  }));

  useEffect(() => {
    setnotificationList(Notification);
  }, [Notification])


  // const onChange = (key) => {
  //   console.log(key);
  //   setPageNo(1);
  // };

  useEffect(() => {
    const obj = {
      "pageNo": 1,
      "size": 100,
    }
    dispatch(readNotificationList(obj))
  }, [])

  const renderIcon = (actionType) => {
    switch (actionType) {
      case 'like':
        return <i className="fi fi-sr-heart violet" />;
      case 'comment':
        return <i className="fi fi-sr-comment green" />;
      case 'repost':
        return <i className="fi fi-rs-arrows-retweet blue" />;
      case 'post':
        return <i className="fi fi-sr-star blue3" />;
      case 'follow':
        return <i className="fi fi-sr-user blue2" />;
      case 'tag':
        return <i className="fi fi-sr-user blue2" />;
      case 'mention':
        return <i className="fi fi-sr-user blue2" />;
      default:
        return null;
    }
  };

  const renderMessage = (actionType) => {
    switch (actionType) {
      case 'like':
        return 'liked your Post';
      case 'comment':
        return 'Comment On Your Post';
      case 'repost':
        return 'Repost';
      case 'post':
        return 'NewPost';
      case 'follow':
        return 'Followed You';
      case 'tag':
        return 'Tagged You in A Post';
      case 'mention':
        return 'Mentioned You in A Post';
      default:
        return null;
    }
  };

  const handleNotificationFilter = (actionType) => {
    let filteredNotifications = [];
    setIsAll(false);
    setIsLiked(false);
    setIsComment(false);
    setIsFollow(false);
    setIsMention(false);
    setIsTagged(false);
    setIsRepost(false);
    setIsPost(false);
    switch (actionType) {
      case 'all':
        setnotificationList(Notification);
        setIsAll(!IsAll);
        break;
      case 'like':
        filteredNotifications = Notification.filter((notification) => notification.type === 'like');
        setnotificationList(filteredNotifications);
        setIsLiked(!IsLiked);
        break;
      case 'comment':
        filteredNotifications = Notification.filter((notification) => notification.type === 'comment');
        setnotificationList(filteredNotifications);
        setIsComment(!IsComment);
        break;
      case 'repost':
        filteredNotifications = Notification.filter((notification) => notification.type === 'repost');
        setnotificationList(filteredNotifications);
        setIsRepost(!IsRepost);
        break;
      case 'post':
        filteredNotifications = Notification.filter((notification) => notification.type === 'post');
        setnotificationList(filteredNotifications);
        setIsPost(!IsPost);
        break;
      case 'follow':
        filteredNotifications = Notification.filter((notification) => notification.type === 'follow');
        setnotificationList(filteredNotifications);
        setIsFollow(!IsFollow);
        break;
      case 'tag':
        filteredNotifications = Notification.filter((notification) => notification.type === 'tag');
        setnotificationList(filteredNotifications);
        setIsTagged(!IsTagged);
        break;
      case 'mention':
        filteredNotifications = Notification.filter((notification) => notification.type === 'mention');
        setnotificationList(filteredNotifications);
        setIsMention(!IsMention);
        break;
      default:
        break;
    }
  }

  // const items = [
  //   {
  //     key: '1',
  //     label: 'All',
  //     children: <div>
  //       {notificationList && notificationList?.length > 0 ? (
  //         notificationList.map((notification) => (
  //           <>
  //             <MessageMainBox className='notificationBox'>
  //               <div className='iconBox'>
  //                 {renderIcon(notification?.type)}
  //                 {/* <i className="fi fi-sr-star blue3" />
  //                 <i className="fi fi-sr-heart violet" />
  //                 <i className="fi fi-rs-arrows-retweet blue" />
  //                 <i className="fi fi-sr-comment green" />
  //                 <i className="fi fi-sr-user blue2" /> */}
  //               </div>
  //               <MessageMainBoxInner className='notificationBoxInner'>
  //                 <div className='innerNotification'>
  //                   <div className="userPic" >
  //                     {notification?.userDetail?.profileImg?.length > 5 ?
  //                       <img src={notification?.userDetail?.profileImg} alt="" /> :
  //                       <img src={require('../../static/images/img_userpic.jpg')} alt="" />}
  //                   </div>
  //                   <div className="rightbtnsbox">
  //                     <EllipsisOutlined />
  //                   </div>
  //                 </div>
  //                 <div className="nameMsgBox">
  //                   <div className="namedtls">
  //                     <div>
  //                       <span className="uname">{notification?.userDetail?.firstName}{"  "}{notification?.userDetail?.lastName}</span>
  //                     </div>
  //                   </div>
  //                   <div className="msgText">{renderMessage(notification?.type)}</div>
  //                 </div>
  //                 <Link to={`/postdetails/${notification?.postId}`}>
  //                 <PostDetails NotificationPostId={notification?.postId} className="notificationPost"/></Link>
  //               </MessageMainBoxInner>
  //             </MessageMainBox>

  //             {/* <MessageMainBox className='notificationBox'>
  //               <div className='iconBox'>
  //                 <i className="fi fi-sr-heart violet" />

  //               </div>
  //               <MessageMainBoxInner className='notificationBoxInner'>
  //                 <div className='innerNotification'>
  //                   <div className="userPic" >
  //                     <img src={require('../../static/images/img_userpic.jpg')} alt="" />
  //                   </div>
  //                   <div className="rightbtnsbox">
  //                     <EllipsisOutlined />
  //                   </div>
  //                 </div>
  //                 <div className="nameMsgBox">
  //                   <div className="namedtls">
  //                     <div>
  //                       <span className="uname">Sujan Valand</span>
  //                     </div>
  //                   </div>
  //                   <div className="msgText">liked your Post</div>
  //                 </div>
  //               </MessageMainBoxInner>

  //             </MessageMainBox>
  //             <MessageMainBox className='notificationBox'>
  //               <div className='iconBox'>
  //                 <i className="fi fi-rs-arrows-retweet blue" />
  //               </div>
  //               <MessageMainBoxInner className='notificationBoxInner'>
  //                 <div className='innerNotification'>
  //                   <div className="userPic" >
  //                     <img src={require('../../static/images/img_userpic.jpg')} alt="" />
  //                   </div>
  //                   <div className="rightbtnsbox">
  //                     <EllipsisOutlined />
  //                   </div>
  //                 </div>
  //                 <div className="nameMsgBox">
  //                   <div className="namedtls">
  //                     <div>
  //                       <span className="uname">Sujan Valand</span>
  //                     </div>
  //                   </div>
  //                   <div className="msgText">liked your Post</div>
  //                 </div>
  //               </MessageMainBoxInner>

  //             </MessageMainBox>
  //             <MessageMainBox className='notificationBox'>
  //               <div className='iconBox'>
  //                 <i className="fi fi-sr-comment green" />

  //               </div>
  //               <MessageMainBoxInner className='notificationBoxInner'>
  //                 <div className='innerNotification'>
  //                   <div className="userPic" >
  //                     <img src={require('../../static/images/img_userpic.jpg')} alt="" />
  //                   </div>
  //                   <div className="rightbtnsbox">
  //                     <EllipsisOutlined />
  //                   </div>
  //                 </div>
  //                 <div className="nameMsgBox">
  //                   <div className="namedtls">
  //                     <div>
  //                       <span className="uname">Sujan Valand</span>
  //                     </div>
  //                   </div>
  //                   <div className="msgText">liked your Post</div>
  //                 </div>
  //               </MessageMainBoxInner>

  //             </MessageMainBox>
  //             <MessageMainBox className='notificationBox'>
  //               <div className='iconBox'>
  //                 <i className="fi fi-sr-user blue2" />

  //               </div>
  //               <MessageMainBoxInner className='notificationBoxInner'>
  //                 <div className='innerNotification'>
  //                   <div className="userPic" >
  //                     <img src={require('../../static/images/img_userpic.jpg')} alt="" />
  //                   </div>
  //                   <div className="rightbtnsbox">
  //                     <EllipsisOutlined />
  //                   </div>
  //                 </div>
  //                 <div className="nameMsgBox">
  //                   <div className="namedtls">
  //                     <div>
  //                       <span className="uname">Sujan Valand</span>
  //                     </div>
  //                   </div>
  //                   <div className="msgText">liked your Post</div>
  //                 </div>
  //               </MessageMainBoxInner>

  //             </MessageMainBox> */}

  //           </>))) : ""}

  //     </div>,
  //   },
  //   {
  //     key: '2',
  //     label: 'Verified',
  //     children: 'Content of Tab Pane 2',
  //   },
  //   {
  //     key: '3',
  //     label: 'Mentions',
  //     children: 'Content of Tab Pane 3',
  //   },
  // ];

  return (
    <>
      <div className="cntpagecomponent userprofilepage">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className="userNamedetails">
            <h2>
              <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                <img src={require('../../static/images/icon_prevarrow.png')} alt="" />
              </Link>
              Notification
            </h2>
            <Link to="#" className="btn btn-default mr-3">
              <SettingOutlined />
            </Link>
          </div>

          {/* <MainTabs> */}
          <div className='notificationMaintabs'>
            {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
            <div>
              {notificationList && notificationList?.length > 0 ? (
                notificationList.map((notification) => (
                  <>
                    <MessageMainBox className='notificationBox'>
                      <div className='iconBox'>
                        {renderIcon(notification?.type)}
                        {/* <i className="fi fi-sr-star blue3" />
                              <i className="fi fi-sr-heart violet" />
                              <i className="fi fi-rs-arrows-retweet blue" />
                              <i className="fi fi-sr-comment green" />
                              <i className="fi fi-sr-user blue2" /> */}
                      </div>
                      <MessageMainBoxInner className='notificationBoxInner'>
                        <div className='innerNotification'>
                          <div className="userPic" >
                            {notification?.userDetail?.profileImg?.length > 5 ?
                              <img src={notification?.userDetail?.profileImg} alt="" /> :
                              <img src={require('../../static/images/img_userpic.jpg')} alt="" />}
                          </div>
                          <div className="rightbtnsbox">
                            <EllipsisOutlined />
                          </div>
                        </div>
                        <div className="nameMsgBox">
                          <div className="namedtls">
                            <div>
                              <span className="uname">{notification?.userDetail?.firstName}{"  "}{notification?.userDetail?.lastName}</span>
                            </div>
                          </div>
                          <div className="msgText">{renderMessage(notification?.type)}</div>
                        </div>
                        {notification?.postId > 0 &&
                          <Link to={`/postdetails/${notification?.postId}`}>
                            <PostDetails NotificationPostId={notification?.postId} className="notificationPost" /></Link>}
                      </MessageMainBoxInner>
                    </MessageMainBox>
                  </>))) : ""}
            </div>
          </div>
          {/* </MainTabs> */}
        </div>
        <div className='rightsidebarcntbox'>
          <div className='rightsidecntbox notificationlist'>
            <Form>
              <ul className='msglist'>
                <li>
                  <Form.Item name="fieldA" valuePropName="checked1">
                    <Checkbox checked={IsAll}
                      onClick={() => handleNotificationFilter('all')}>
                      All
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldB" valuePropName="checked2">
                    <Checkbox checked={IsLiked}
                      onClick={() => handleNotificationFilter('like')}>
                      Like
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldC" valuePropName="checked3">
                    <Checkbox checked={IsComment}
                      onClick={() => handleNotificationFilter('comment')}>
                      Comment
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldD" valuePropName="checked4">
                    <Checkbox checked={IsFollow}
                      onClick={() => handleNotificationFilter('follow')}>
                      Followed
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldE" valuePropName="checked5">
                    <Checkbox checked={IsPost}
                      onClick={() => handleNotificationFilter('post')}>
                      New Post
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldF" valuePropName="checked6">
                    <Checkbox checked={IsRepost}
                      onClick={() => handleNotificationFilter('repost')}>
                      Repost
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldG" valuePropName="checked7">
                    <Checkbox checked={IsMention}
                      onClick={() => handleNotificationFilter('mention')}>
                      Mention
                    </Checkbox>
                  </Form.Item>
                </li>
                <li>
                  <Form.Item name="fieldH" valuePropName="checked8">
                    <Checkbox checked={IsTagged}
                      onClick={() => handleNotificationFilter('tag')}>
                      Tagged
                    </Checkbox>
                  </Form.Item>
                </li>
              </ul>
            </Form>
          </div>


        </div>
      </div>
    </>

  );
}

export default Notification;
