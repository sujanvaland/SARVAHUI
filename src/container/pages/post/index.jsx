/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  WhatsappShareButton, WhatsappIcon,
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon
} from 'react-share';
import { Button, Dropdown, Image, Menu, message, Modal } from 'antd';
import {
  HeartOutlined, ShareAltOutlined, HeartFilled,
  LinkOutlined, UploadOutlined, MailOutlined, PushpinFilled
} from '@ant-design/icons';
import { useHistory, Link } from "react-router-dom";
import MenuComponent from "./menu";
import VideoComponent from './video';
import ViewPoll from "./viewpoll";
import TagModal from "./tagModal";
import { PostBox, Namedetails, CommentSharebox, UserpostinfoBox } from '../style';
import { toggleBookmark, toggleLike } from "../../../redux/reaction/actionCreator";
import { blockUnBlockPost, extractMetaFromUrl, repost } from "../../../redux/post/actionCreator";
import UserinfoBoxModel from "../UserInfoBox";
import { timeAgo } from "../../../utility/utility";
import { connection } from "../../../redux/connection/actionCreator";
import FindUser from "../chatting/findUser";



function PostComponent(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const { post, createdDate, type, showUploadBox, NotificationId } = props
  const { metaData, loginUser } = useSelector((state) => ({
    metaData: state?.Post?.metaData,
    loginUser: state.auth.userprofile,
  }));


  const [openInfo, setOpenInfo] = useState(false);
  const [isNotIntreseted, setisNotIntreseted] = useState(false);
  const [UserNameList, setUserNameList] = useState([]);
  const [openMentionInfo, setOpenMentionInfo] = useState(false);

  const firstUser = post?.tagUser ? post?.tagUser[0] : false;

  const navigateToPostDetail = (e) => {
    console.log("list", e);
    if (!(e.target?.tagName.toLowerCase() === 'img' || e.target?.tagName.toLowerCase() === 'video'
      || e.target?.tagName.toLowerCase() === 'a' || e.target?.tagName.toLowerCase() === 'span'
      || e.target?.tagName.toLowerCase() === 'input' || e.target?.tagName.toLowerCase() === 'img')) {
      if (type === "detail") {
        showUploadBox(post.type);
        return;
      }
      if (post.type === "post") {
        history.push(`/postdetails/${post.mainpostId}`);
      }
    }
  }

  useEffect(() => {
    if (post.url?.length > 0) {
      dispatch(extractMetaFromUrl(post.url));
    }
  }, []);

  const showinfoBox = () => {
    setOpenInfo(true);
  }
  const hideinfoBox = () => {
    setOpenInfo(false);
  }

  const handleBookmark = (postId) => {
    dispatch(toggleBookmark({ postId }))
  }

  const handleRepost = (postId) => {
    dispatch(repost({ postId }))
  }

  const handleLike = (postId) => {
    dispatch(toggleLike({ postId }))
  }

  const openExternalUrl = (url) => {
    window.open(url, '_blank');
  }

  const handleFollow = (userId) => {
    dispatch(connection(userId));
  }

  const [viewsBtn, setViewsBtn] = useState(false);

  const handleViewsBtn = () => {
    setViewsBtn(true);
  }
  const handleViewsBtnClose = () => {
    setViewsBtn(false);
  }

  const handleMentionBox = () => {
    setUserNameList(post?.tagUser.map(x => x.userName));
    setOpenMentionInfo(true);
    console.log("mention list", post?.tagUser.map(x => x.userName));
  }

  const CloseMentionBox = () => {
    setUserNameList([]);
    setOpenMentionInfo(false);
  }

  const MetaDataRenderer = ({ metaData }) => {
    const { url } = post;
    const ogSiteName = metaData.find(item => item.property === 'og:site_name')?.content;
    const ogImage = metaData.find(item => item.property === 'og:image')?.content;
    const description = metaData.find(item => item.name === 'description' || item.name === 'og:description')?.content;

    return (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
      <div onClick={() => openExternalUrl(url)}>
        {ogSiteName && <h2>{ogSiteName}</h2>}
        {ogImage && post.imgUrl?.length === 0 && <img width={600} src={ogImage} alt='' />}
        {description && <p>{description}</p>}
        {url && <a href={url}>{url}</a>}
      </div>
    );
  };


  const renderHTML = (textMsg) => {
    if (post?.mentions?.length > 0) {
      let modifiedText = textMsg;
      // eslint-disable-next-line array-callback-return
      post?.mentions?.map((mention) => {
        const mentionRegex = new RegExp(mention.name, 'gi');
        modifiedText = modifiedText.replace(mentionRegex, `<a href="${mention.link}">${mention.name}</a>`);
      })
      textMsg = modifiedText;
    }
    return { __html: textMsg.replace(/\n/g, '<br>') };
  };

  const [showMore, setShowMore] = useState(false);

  const getYouTubeVideoId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|e\/|u\/\w+\/|embed\/|v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }
  }


  const copyPostLink = (id) => {
    const tempInput = document.createElement('input');
    tempInput.value = `${process.env.REACT_APP_BASE_URL}/postdetails/${id}`;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    message.success('Copied to clipboard');
  };


  const [shareModalVisible, setShareModalVisible] = useState(false);

  const showShareModal = () => {
    setShareModalVisible(true);
  }
  const hideShareModal = () => {
    setShareModalVisible(false);
  };

  const shareLink = `${process.env.REACT_APP_BASE_URL}/postdetails/${post.mainpostId}`;

  const [directMessage, setDirectMessage] = useState(false);
  const [ForwardLink, setForwardLink] = useState(null);

  const handleDirectMessage = (id) => {
    const postLink = `${process.env.REACT_APP_BASE_URL}/postdetails/${id}`;
    setForwardLink(postLink);
    setDirectMessage(true);
  }
  const handleCloseDirectMessage = () => {
    setDirectMessage(false);
  }

  const unBlockPost = () => {
    setisNotIntreseted(false);
    dispatch(blockUnBlockPost(post.mainpostId));
  }
  const menu = (
    <Menu>
      <Menu.Item onClick={() => copyPostLink(post.mainpostId)}><LinkOutlined /> Copy Link</Menu.Item>
      <Menu.Item onClick={() => showShareModal()}><UploadOutlined /> Share post via...</Menu.Item>
      <Menu.Item onClick={() => handleDirectMessage(post.mainpostId)}><MailOutlined /> Send via Direct Message</Menu.Item>
    </Menu>
  );

  const dropdownClassName = 'reportdropdown';
  console.log(post?.tagUser);
  return (
    <>

      {
        post && !isNotIntreseted &&
        <PostBox className={!NotificationId > 0 ?'postamain' : 0}>
          {!NotificationId > 0 &&
            <UserpostinfoBox className='userpostBox'>
              <div>
                {
                  post?.isPinPost === 1 &&
                  <h6><PushpinFilled /> Pinned</h6>
                }
              </div>
              <div className='headpostbox'>
                <div className='usernamepic'>
                  <div className='imgmaindiv' onMouseEnter={showinfoBox} onMouseLeave={hideinfoBox}>
                    <div className='imgdiv'>
                      <img src={post.profileImg ? post.profileImg : require('../../../static/images/img_userpic.jpg')} alt='' />
                    </div>
                  </div>
                  <Namedetails className='namedetails'>
                    <Link to={`/profile/${post?.userName}`}>
                      <>
                        <h6 className="profilename">
                          {post?.createdBy || ""} {post?.isPaid && <span className='svgicons'><svg viewBox="0 0 22 22" aria-label="Verified account" role="img" data-testid="icon-verified"><g><path clipRule="evenodd" d="M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z" fill="#1da1f2" fillRule="evenodd" /></g></svg></span>}
                          <span>@{post?.userName || ""}</span>
                          {
                            post?.Type === "repost" &&
                            <span>Reposted</span>
                          }

                          <span> · {timeAgo(createdDate)}</span>

                          {
                            post?.isFollowing === false && post.userName !== loginUser.userName &&
                            <Link to="#" onClick={() => handleFollow(post.userId)} >
                              <span>Follow</span>
                            </Link>
                          }

                        </h6>
                      </>
                    </Link>
                  </Namedetails>
                </div>

                <div className='rightbtns'>
                  <MenuComponent post={post} setisNotIntreseted={() => setisNotIntreseted(true)} />
                </div>
              </div>
              {
                openInfo && <UserinfoBoxModel username={post?.userName} isFollowing={post?.isFollowing}
                  showinfoBox={showinfoBox} hideinfoBox={hideinfoBox} />
              }
            </UserpostinfoBox>}
          <div className={!NotificationId > 0 ? 'postDetails' : 'postDetails'}>
            <div onClick={(e) => navigateToPostDetail(e)}>
              <div>
                <p>
                  <div dangerouslySetInnerHTML={renderHTML(showMore ? post?.textMsg : `${post?.textMsg?.substring(0, 250)}`)} />
                  {post?.textMsg?.length > 250 && (
                    <Link to="#" onClick={() => setShowMore(!showMore)}>
                      {showMore ? 'Show Less' : '...Show More'}
                    </Link>
                  )}
                </p>

              </div>
              {
                post.url?.length > 0 && !post.url?.includes('youtube.com') &&
                (NotificationId > 0 ?
                  <>{post.url}</> :
                  <div aria-label="a" tabIndex={0} style={{ cursor: 'pointer' }}
                    role="link">
                    <MetaDataRenderer metaData={metaData} />
                  </div>)
              }

              {
                post.url?.includes('youtube.com') &&
                (NotificationId > 0 ?
                  <>{post.url}</> :
                  <iframe className="youtube-video"
                    src={`https://www.youtube.com/embed/${getYouTubeVideoId(post.url)}`} title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen />)
              }

              {post.imgUrl?.length > 0 &&
              <div className={!NotificationId > 0 ? 'postimagebox' : ''}>
                  <ul>
                    {post.imgUrl?.map((item, index) => {
                      return (
                        NotificationId > 0 ?
                          (item) : (
                            <li key={index}>
                              <Image src={item} preview={{ src: item, mask: false }} />
                            </li>)
                      )
                    })
                    }
                  </ul>
                  {post?.tagUser && !NotificationId > 0 &&
                    <Link to="#" onClick={() => handleMentionBox()}>
                      <h5>
                        <span>{firstUser?.firstName}{" "}{firstUser?.lastName}{"  "}</span>
                        {post?.tagUser?.length > 1 ? (
                          <>
                            <span> and {post.tagUser.length - 1} more</span>
                          </>
                        ) : null}
                      </h5>
                    </Link>
                  }
                </div>
              }
              {
                post.videoUrl?.length > 0 && post.videoUrl?.map((item, index) => {
                  return (
                    NotificationId > 0 ?
                      (item) : (<><VideoComponent url={item} key={index} /></>)
                  )
                })
              }
              {
                post.pollId > 0 &&
                <ViewPoll post={post} />
              }
            </div>
            {!NotificationId > 0 &&
              <CommentSharebox>
                <ul>
                  <li>
                    <Button onClick={() => navigateToPostDetail(post)} className='btncmtbox'><svg viewBox="0 0 24 24" aria-hidden="true" >
                      <g><path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" /></g></svg>
                    </Button>
                    {post.noOfComment > 0 &&
                      <span> {post.noOfComment || 0}</span>
                    }

                  </li>
                  <li>
                    <Button className='btncmtbox' onClick={() => handleRepost(post.id)}>
                      {post?.noOfRepost > 0 ? <img src={require('../../../static/images/repost_active.png')} alt="" className="repostactive" /> : <img src={require('../../../static/images/repost.png')} alt="" className="repost" />}
                    </Button>
                    {post.noOfRepost > 0 &&
                      <span> {post.noOfRepost || 0}</span>
                    }
                  </li>
                  <li>
                    <Button onClick={() => handleLike(post.id)} className='btncmtbox'>
                      {post.isLiked ? <HeartFilled className="activelike" /> : <HeartOutlined />}
                    </Button>
                    {post.noOfLikes > 0 &&
                      <span> {post.noOfLikes || 0}</span>
                    }
                  </li>
                  <li>
                    <Button className='btncmtbox' onClick={handleViewsBtn}><svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" /></g></svg></Button>
                    {post.noOfViews > 0 &&
                      <span>{post.noOfViews}</span>
                    }
                    <Modal visible={viewsBtn} onCancel={handleViewsBtnClose} onOk={handleViewsBtnClose}>
                      <h1>Views</h1>
                      Times this post was seen. To learn more, visit the <Link to="#">Help Center</Link>.
                      <Button onClick={handleViewsBtnClose}>Dismiss</Button>
                    </Modal>
                  </li>
                </ul>
                <div className='rightcntbtn'>
                  <Button onClick={() => handleBookmark(post.mainpostId, "bookmark")}>
                    {!post?.isBookmarked ? <svg viewBox="0 0 24 24" aria-hidden="true">
                      <g>
                        <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                      </g>
                    </svg> :
                      <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z" /></g></svg>
                    }
                  </Button>
                  <Dropdown overlay={menu} trigger={['click']}
                    overlayClassName={dropdownClassName}
                    placement="bottomRight" width={100}>
                    <Button icon={<ShareAltOutlined />} className='shareBtn' />
                  </Dropdown>


                  <Modal visible={shareModalVisible} onCancel={hideShareModal} onOk={hideShareModal}>
                    <div>
                      <WhatsappShareButton url={shareLink}>
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </div>
                    <div>
                      <FacebookShareButton url={shareLink}>
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                    </div>
                    <div>
                      <TwitterShareButton url={shareLink}>
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                    </div>
                  </Modal>

                  {
                    directMessage &&
                    <FindUser onClose={handleCloseDirectMessage} ForwardMessage={ForwardLink} IsForward />
                  }

                </div>
              </CommentSharebox>}
          </div>
        </PostBox>

      }
      {
        isNotIntreseted &&
        <div className="noteInterested">
          <div className="thanksbox">
            Thanks. K4M2A will use this to make your timeline better.
            <Button onClick={() => unBlockPost()} className="btnundo">
              Undo
            </Button></div>
          <div className="reasonBtn">
            <Button className="btnReason">Show fewer posts from @{post.userName}.</Button>
          </div>
          <div className="reasonBtn">
            <Button className="btnReason"> This post isn&apos;t relevent.</Button>
          </div>
        </div>
      }

      {
        openMentionInfo &&
        <TagModal data={UserNameList} IsMention onClose={() => CloseMentionBox()} />
      }

    </>
  )
}

export default PostComponent;