import React, { useEffect, useRef, useState } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
// import { toast } from 'react-toastify';
import { Modal, Button, Col, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import io from "socket.io-client";
import RightSideBarComponent from './rightsidebar'
import UploadPost from './post/uploadPost';
import PostComponent from './post';
import { getTimeline, getUserProfileTimeline } from '../../redux/post/actionCreator';
// import { onlineUser } from '../../redux/onlineusers/actionCreator';
import { doConnect } from '../../redux/onlineusers/actionCreator';
import { getUserNetwork } from '../../redux/UserProfile/actionCreator';
import askMeAnything from '../../redux/ama/actionCreator';

function Scroll(props) {

  const dispatch = useDispatch();

  // eslint-disable-next-line no-unused-vars
  const scrollRef = useRef(null);
  const [pageNo, setpageno] = useState(1)
  const [isModalOpen, setIsModalOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const { isProfile, profileUserId } = props;
  const UserProfile = JSON.parse(localStorage.getItem('profile'));
  const [type, setType] = useState('post');
  const [placeholder, setplaceholder] = useState('Share your spiritual journey!');

  useEffect(() => {
    if (!profileUserId) {
      dispatch(getTimeline({ pageNo, type }))
    }
  }, [pageNo])

  useEffect(() => {
    if (profileUserId > 0) {
      dispatch(getUserProfileTimeline({ pageNo, profileUserId }))
    }
  }, [])

  useEffect(() => {
    // Connect to the WebSocket server
    // const socket = io("http://localhost:4000");
    // socket.on('connect', () => {
    //   // Access the socket connection ID
    //   const {  id } = socket;
    //   console.log('Socket ID:', id);
    //   localStorage.setItem('socketId',id);
    //   dispatch(onlineUser(id));
    // });


    // Subscribe to the "likepost" event
    // socket.on('likepost', ({ comment }) => {
    //   // Handle the new comment received from the server
    //   console.log('New Like:', comment);
    //   message.success("New Like");
    //   // Add your logic to update the UI or perform any other actions
    // });

    // Handle other socket events or actions as needed

    // Clean up the socket connection on component unmount
    // return () => {
    //   socket.disconnect();
    // };
  }, []);


  useEffect(() => {
    // dispatch(doConnect());
    dispatch(getUserNetwork(UserProfile?.id));
    dispatch(doConnect);
  }, [])

  const { timeline, isLoader, newpostcount } = useSelector((state) => ({
    timeline: profileUserId > 0 ? state?.Post?.userprofiletimelinedetails : (type === 'question') ? state?.ama.amadata : state?.Post?.timelinedata,
    newpostcount: state?.Post?.newpostcount,
    isLoader: state?.Post.loading,
  }));

  const handleScroll = () => {

    const { scrollHeight } = document.documentElement;
    const { scrollTop } = document.documentElement;
    const { clientHeight } = document.documentElement;


    // eslint-disable-next-line eqeqeq
    if (scrollTop + clientHeight + 500 > scrollHeight && !isLoader) {
      if (!isLoader) {
        setpageno((prevPage) => prevPage + 1);
      }

    }
  };

  useEffect(() => {
    if (timeline?.length === 0) {
      window.addEventListener('scroll', handleScroll);
    }
    else {
      window.removeEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const settingBox = () => {
    setIsModalOpen(true);
  }
  const handleOk = () => {
    setIsModalOpen(false);
  }
  const handleCancel = () => {
    setIsModalOpen(false);
  }

  const showTimeLine = (currenttype) => {
    setType(currenttype);
    setpageno(1)
    if (currenttype === "question") {
      dispatch(askMeAnything({ pageNo, type: currenttype }))
    } else {
      dispatch(getTimeline({ pageNo, type: currenttype }))
    }

    if (currenttype === "post") {
      setplaceholder("Share your spiritual journey!")
    } else {
      setplaceholder("Ask me anyting ?")
    }
  }

  console.log(type);
  console.log(timeline);
  return (
    <>
      <div className='cntpagecomponent'>
        <div className='centersidebarcontent flexcolumn mt56'>
          {
            !isProfile &&
            <>
              <div className='tabbox'>
                <Button onClick={() => showTimeLine('post')} className={type === 'post' ? 'btntab active' : 'btntab'}> For You</Button>
                <Button onClick={() => showTimeLine('question')} className={type === 'question' ? 'btntab active' : 'btntab'}> AMA </Button>
                <Button className='btntabsetting' onClick={settingBox}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.53-.59 2.17 2.17-.58 2.54c-.05.2.04.41.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.12-.26.33-.21.53l.58 2.54-2.17 2.17-2.53-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.58-2.36c-.11-.17-.32-.25-.52-.21l-2.54.59-2.17-2.17.58-2.54c.05-.2-.03-.41-.21-.53l-2.35-1.57v-2.92L4.1 8.97c.18-.12.26-.33.21-.53L3.73 5.9 5.9 3.73l2.54.59c.2.04.41-.04.52-.21l1.58-2.36zm1.07 2l-.98 1.47C10.05 6.08 9 6.5 7.99 6.27l-1.46-.34-.6.6.33 1.46c.24 1.01-.18 2.07-1.05 2.64l-1.46.98v.78l1.46.98c.87.57 1.29 1.63 1.05 2.64l-.33 1.46.6.6 1.46-.34c1.01-.23 2.06.19 2.64 1.05l.98 1.47h.78l.97-1.47c.58-.86 1.63-1.28 2.65-1.05l1.45.34.61-.6-.34-1.46c-.23-1.01.18-2.07 1.05-2.64l1.47-.98v-.78l-1.47-.98c-.87-.57-1.28-1.63-1.05-2.64l.34-1.46-.61-.6-1.45.34c-1.02.23-2.07-.19-2.65-1.05l-.97-1.47h-.78zM12 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5c.82 0 1.5-.67 1.5-1.5s-.68-1.5-1.5-1.5zM8.5 12c0-1.93 1.56-3.5 3.5-3.5 1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5c-1.94 0-3.5-1.57-3.5-3.5z" /> </g></svg></Button>
              </div>
              <UploadPost type={type} placeholder={placeholder} parentid={0} />
              {newpostcount > 0 &&
                <div className='show140post'>
                  <Link to="/">Show {newpostcount} new post</Link>
                </div>
              }
            </>
          }

          <div className='wdth100 mdt-50' ref={scrollRef}>
            {
              isLoader && (
                <Col xs={24}>
                  <div className="spin scroll">
                    <Spin indicator={
                      <LoadingOutlined
                        style={{
                          fontSize: 24,
                        }}
                        spin
                      />
                    } />
                  </div>
                </Col>
              )
            }
            {
              timeline?.map((item, index) => {

                const post = item?.postMessage?.length > 0 ? JSON.parse(item?.postMessage) : {};

                delete post.isBookMarked

                const obj = {
                  ...post,
                  mainpostId: item.id,
                  poll: item.poll,
                  isBookmarked: item.isBookmarked,
                  isFollowing: item.isFollowing,
                  isLiked: item.isLiked,
                  userId: item.userId,
                }

                return (
                  <PostComponent post={obj} createdDate={item.createdDate} key={index} />
                )
              })
            }
          </div>
        </div>
        {
          !isProfile &&
          <RightSideBarComponent />
        }
      </div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={650}>
        gj
      </Modal>

    </>
  );
}

export default Scroll;
