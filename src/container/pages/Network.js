import React, { useEffect, useState } from 'react';
import {
  InfoCircleOutlined,
  PlusSquareOutlined,
  CheckOutlined,
  PlusCircleOutlined,
  CloseOutlined,
} from '@ant-design/icons';
import { Tabs, Button, Modal, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Modalcntbox, NamelistBox, Notebox } from './style';
import { getUserNetwork } from '../../redux/UserProfile/actionCreator';
import { connection } from '../../redux/connection/actionCreator';

function Network() {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  const [open, setOpen] = useState(false);
  const [openadd, setOpenadd] = useState(false);
  const [opencreate, setopencreate] = useState(false);
  const [Toggle, setToggle] = useState(false);
  const UserProfile = JSON.parse(localStorage.getItem('profile'));
  
  const { network } = useParams();

  const { data } = useSelector((state) => {
    return {
      data: state.userProfile.getNetwork,
    };
  });

  const [currentTab, setCurrentTab] = useState("1");

  useEffect(() => {
    const IsCheck = network !== undefined ? network : "";
    if (IsCheck !== undefined) {
      if(IsCheck === "Following"){
        setCurrentTab("2")
      }else{
        setCurrentTab("3")
      }
    }
  }, [network]);

  useEffect(() => {
    dispatch(getUserNetwork(UserProfile?.id));
  }, []);

  const handleConnection = async (id) => {
    await dispatch(connection(id));
    await dispatch(getUserNetwork(UserProfile?.id));
  };
  const onTabChange = (key) => {
    setCurrentTab(key);
  }

  // const showModal = () => {
  //   setOpen(true);
  // };
  // const showModaladd = () => {
  //   setOpenadd(true);
  // };

  const handleOk = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleOkadd = () => {
    setOpenadd(false);
  };

  const handleCanceladd = () => {
    setOpenadd(false);
  };

  const showModalcreate = () => {
    setopencreate(true);
  };
  const handlecreate = () => {
    setopencreate(false);
  };

  const handleCancelcreate = () => {
    setopencreate(false);
  };

  // const menu = (
  //   <Menu>
  //     <Menu.Item key="1">All List</Menu.Item>
  //     <Menu.Item key="2">Friend</Menu.Item>
  //     <Menu.Item key="3">Manage List</Menu.Item>
  //   </Menu>
  // );

  // const menunew = (
  //   <Menu>
  //     <Menu.Item key="1" onClick={showModaladd}>
  //       <PlusSquareOutlined /> Add/Remove from list
  //     </Menu.Item>
  //     <Menu.Item key="2">
  //       {' '}
  //       <LinkOutlined /> Copy profile URL
  //     </Menu.Item>
  //     <Menu.Item key="3" onClick={showModal} className="danger">
  //       <UserDeleteOutlined /> Unfollow{' '}
  //     </Menu.Item>
  //   </Menu>
  // );

  return (
    <>
      <div className="cntpagecomponent userprofilepage">
        <div className="tabspanel">
          <Tabs defaultActiveKey="1" activeKey={currentTab} className="custom-active-tab" onChange={onTabChange}>
            <TabPane tab={`Peers ${data?.mutual?.length}`} key="1">
              <>
                <div className="tabhead">
                  <h3>Mutual Followers List</h3>
                </div>
                <div className="analyticsBox">
                  <ul className="listItemsbox">
                    {data?.mutual && data?.mutual?.length > 0 ? (
                      data?.mutual.map((mutual) => (
                        <li key={mutual.id}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {mutual?.profileImg?.length > 5 ? (
                                    <img src={mutual.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {mutual.firstName} {mutual.lastName}
                                    <br />@{mutual.userName}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            {/* <Link to="#" className="btn btnblack btnfollow" onClick={() => handleConnection(following.id)} >UnFollow</Link> */}
                          </div>
                          <div className="userinfoBox">
                            <div className="headbpx">
                              <div className="imgmaindiv">
                                <div className="imgdiv">
                                {mutual?.profileImg?.length > 5 ? (
                                    <img src={mutual.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="namedetails">
                              <h6 className="profilename">
                              {mutual.firstName} {mutual.lastName}
                                <div className="greentickicon">
                                  <img src={require('../../static/images/icon_check.png')} alt="" />
                                </div>
                                <span>@{mutual.userName}</span>
                              </h6>
                              <p>
                              {mutual.about}
                              </p>
                              <div className="followers">
                                <Link to="#">
                                  <span>{mutual.noOfFollowing}</span> Following
                                </Link>
                                <Link to="#">
                                  <span>{mutual.noOfFollowers}</span> Followers
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>No Mutual Follower</li>
                    )}
                  </ul>
                </div>
              </>
              {/* <>
              <div className="tabheaderbox spacebetween mt-1">
                <Dropdown overlay={menu} trigger={['click']}>
                  <Button className="ant-dropdown-link" size="small">
                    All Lists <DownOutlined />
                  </Button>
                </Dropdown>
                <div className="notebox">
                  <InfoCircleOutlined /> When two people follow each other, they become Peers.
                </div>
              </div>
              <div className="analyticsBox networkpage">
                <ul className="listItemsbox">
                  <li>
                    <UserinfoBox>
                      <div className="headbpx">
                        <div className="imgmaindiv">
                          <div className="imgdiv">
                            <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                          </div>
                          <span className="greentickicon">
                            <img src={require('../../static/images/icon_check.png')} alt="" />
                          </span>
                        </div>
                        <div className="rightbtns">
                          <Dropdown menu={menunew} trigger={['click']}>
                            <Button className="ant-dropdown-link" size="small">
                              Peers <DownOutlined />
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="namedetails">
                        <h6 className="profilename">
                          Vishal Kumar
                          <span>Full Stack Developer</span>
                        </h6>
                      </div>
                    </UserinfoBox>
                  </li>
                  <li>
                    <UserinfoBox>
                      <div className="headbpx">
                        <div className="imgmaindiv">
                          <div className="imgdiv">
                            <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                          </div>
                          <span className="greentickicon">
                            <img src={require('../../static/images/icon_check.png')} alt="" />
                          </span>
                        </div>
                        <div className="rightbtns">
                          <Dropdown menu={menunew} trigger={['click']}>
                            <Button className="ant-dropdown-link" size="small">
                              Peers <DownOutlined />
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="namedetails">
                        <h6 className="profilename">
                          Vishal Kumar
                          <span>Full Stack Developer</span>
                        </h6>
                      </div>
                    </UserinfoBox>
                  </li> 
                  <li>
                    <UserinfoBox>
                      <div className="headbpx">
                        <div className="imgmaindiv">
                          <div className="imgdiv">
                            <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                          </div>
                          <span className="greentickicon">
                            <img src={require('../../static/images/icon_check.png')} alt="" />
                          </span>
                        </div>
                        <div className="rightbtns">
                          <Dropdown menu={menunew} trigger={['click']}>
                            <Button className="ant-dropdown-link" size="small">
                              Peers <DownOutlined />
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="namedetails">
                        <h6 className="profilename">
                          Vishal Kumar
                          <span>Full Stack Developer</span>
                        </h6>
                      </div>
                    </UserinfoBox>
                  </li>
                  <li>
                    <UserinfoBox>
                      <div className="headbpx">
                        <div className="imgmaindiv">
                          <div className="imgdiv">
                            <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                          </div>
                          <span className="greentickicon">
                            <img src={require('../../static/images/icon_check.png')} alt="" />
                          </span>
                        </div>
                        <div className="rightbtns">
                          <Dropdown menu={menunew} trigger={['click']}>
                            <Button className="ant-dropdown-link" size="small">
                              Peers <DownOutlined />
                            </Button>
                          </Dropdown>
                        </div>
                      </div>
                      <div className="namedetails">
                        <h6 className="profilename">
                          Vishal Kumar
                          <span>Full Stack Developer</span>
                        </h6>
                      </div>
                    </UserinfoBox>
                  </li>
                </ul>
              </div> 
              </> */}
            </TabPane>
            <TabPane tab={`Following ${data?.following?.length}`} key="2">
              <>
                <div className="tabhead">
                  <h3>Following List</h3>
                </div>
                <div className="analyticsBox">
                  <ul className="listItemsbox">
                    {data?.following && data?.following?.length > 0 ? (
                      data?.following.map((following) => (
                        <li key={following.id}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {following?.profileImg?.length > 5 ? (
                                    <img src={following.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {following.firstName} {following.lastName}
                                    <br />@{following.userName}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <Link
                              to="#"
                              className="btn btnblack btnfollow"
                              onClick={() => handleConnection(following.id)}
                            >
                              UnFollow
                            </Link>
                          </div>
                          <div className="userinfoBox">
                            <div className="headbpx">
                              <div className="imgmaindiv">
                                <div className="imgdiv">
                                {following?.profileImg?.length > 5 ? (
                                    <img src={following.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="namedetails">
                              <h6 className="profilename">
                              {following.firstName} {following.lastName}
                                <div className="greentickicon">
                                  <img src={require('../../static/images/icon_check.png')} alt="" />
                                </div>
                                <span>@{following.userName}</span>
                              </h6>
                              <p>
                              {following.about}
                              </p>
                              <div className="followers">
                                <Link to="#">
                                  <span>{following.noOfFollowing}</span> Following
                                </Link>
                                <Link to="#">
                                  <span>{following.noOfFollowers}</span> Followers
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>Not Following Anyone</li>
                    )}
                  </ul>
                </div>
              </>
            </TabPane>
            <TabPane tab={`Followers ${data?.followers?.length}`} key="3">
              <>
                <div className="tabhead">
                  <h3>Followers List</h3>
                </div>
                <div className="analyticsBox">
                  <ul className="listItemsbox">
                    {data?.followers && data?.followers?.length > 0 ? (
                      data?.followers.map((follower) => (
                        <li key={follower.id}>
                          <div className="headbpx">
                            <div className="imgmaindiv">
                              <div className="imgDesc">
                                <div className="imgdiv">
                                  {follower?.profileImg?.length > 5 ? (
                                    <img src={follower.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                                <div className="namedetails">
                                  <h6 className="profilename">
                                    {follower.firstName} {follower.lastName}
                                    <br />@{follower.userName}
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <Link
                              to="#"
                              className="btn btnblack btnfollow"
                              onClick={() => handleConnection(follower.id)}
                            >
                              Follow
                            </Link>
                          </div>
                          <div className="userinfoBox">
                            <div className="headbpx">
                              <div className="imgmaindiv">
                                <div className="imgdiv">
                                {follower?.profileImg?.length > 5 ? (
                                    <img src={follower.profileImg} alt="" />
                                  ) : (
                                    <img src={require('../../static/images/img_userpic.jpg')} alt="" />
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="namedetails">
                              <h6 className="profilename">
                              {follower.firstName} {follower.lastName}
                                <div className="greentickicon">
                                  <img src={require('../../static/images/icon_check.png')} alt="" />
                                </div>
                                <span>@{follower.userName}</span>
                              </h6>
                              <p>
                              {follower.about}
                              </p>
                              <div className="followers">
                                <Link to="#">
                                  <span>{follower.noOfFollowing}</span> Following
                                </Link>
                                <Link to="#">
                                  <span>{follower.noOfFollowers}</span> Followers
                                </Link>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))
                    ) : (
                      <li>No One Follow You</li>
                    )}
                  </ul>
                </div>
              </>
            </TabPane>
          </Tabs>

          <Modal
            open={open}
            onOk={handleOk}
            onCancel={handleCancel}
            width={400}
            className="confirmmodal"
            footer={[
              <Button key="back" onClick={handleCancel}>
                Cancel
              </Button>,
              <Button key="submit" className="ant-btn-primary" onClick={handleOk}>
                Yes, unfollow
              </Button>,
            ]}
          >
            <Modalcntbox>
              <InfoCircleOutlined />
              <p>Are you sure you want to unfollow Kamal?</p>
              <span>It will remove them from all the lists as well.</span>
            </Modalcntbox>
          </Modal>

          <Modal
            open={openadd}
            onOk={handleOkadd}
            onCancel={handleCanceladd}
            width={400}
            className="confirmmodal"
            footer={[
              <Button key="back" onClick={showModalcreate}>
                <PlusSquareOutlined /> New List
              </Button>,
              <Button key="submit" className="ant-btn-primary" onClick={handleOkadd}>
                <CheckOutlined /> Add to List
              </Button>,
            ]}
          >
            <Modalcntbox>
              <div className={Toggle ? 'addlistbox activepic' : 'addlistbox'}>
                <div className="usernamebox">
                  <span>a</span>
                </div>
                <div className="faviconbox">
                  <img src={require('../../static/images/faviconpng.png')} alt="" />
                </div>
                <div className="otheruserbox">
                  <img src={require('../../static/images/otheruser.jpg')} alt="" />
                </div>
              </div>
              <p>Add Kamal to your peer&apos;s list!</p>
              <div className="btnareabox">
                <Button className={Toggle ? 'btnFriends activebtn' : 'btnFriends'} onClick={() => setToggle(!Toggle)}>
                  Friends {Toggle ? <CloseOutlined /> : <PlusCircleOutlined />}
                </Button>
              </div>
            </Modalcntbox>
          </Modal>

          <Modal
            open={opencreate}
            onOk={handleCancelcreate}
            onCancel={handleCancelcreate}
            title="Create New List"
            width={400}
            className="confirmmodal flexend"
            footer={[
              <Button key="submit" className="ant-btn-primary" onClick={handlecreate}>
                <PlusSquareOutlined /> Create a List
              </Button>,
            ]}
          >
            <Modalcntbox>
              <NamelistBox>
                <span className="labeltext">Name your list</span>
                <Input />
              </NamelistBox>
              <Notebox>Ex: Frontend Engineers, Investors, Good content writers, etc.</Notebox>
            </Modalcntbox>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default Network;
