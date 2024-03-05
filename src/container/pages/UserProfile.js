import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Link, useParams, useHistory } from 'react-router-dom';
// import RightSideBarComponent from './rightsidebar';
// import Scroll from './Scroll';
import { getUserProfile } from '../../redux/UserProfile/actionCreator';
import { convertToMonthYear } from '../../utility/ConvertToMonthYear';
import {
  GetBookSuggestion,
  GetExperienceSuggestion,
  GetGuruSuggestion,
  GetMovieSuggestion,
  GetPracticeSuggestion,
} from '../../redux/usersSuggestion/actionCreator';
// import { GetSearchUserProfile } from '../../redux/SearchUsers/actionCreator';

function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const UserProfile = JSON.parse(localStorage.getItem('profile'));
  const { userName } = useParams();
  const { data, loginuser } = useSelector((state) => {
    return {
      // data: userName?.length > 4 ? state.getUser.getSearchUserProfile : state.userProfile.getProfile,
      data: state.userProfile.getProfile,
      isLoader: state.userProfile.loading,
      bookSuggest: state.getSuggest.bookSuggest,
      movieSuggest: state.getSuggest.movieSuggest,
      guruSuggest: state.getSuggest.guruSuggest,
      practiceSuggest: state.getSuggest.practiceSuggest,
      experienceSuggest: state.getSuggest.experienceSuggest,
      loginuser: state.auth.userprofile?.userName,
      loginuserId: state.auth.userprofile?.id,
    };
  });

  const [ProfileData, setProfileData] = useState({
    skills: data?.skills ? JSON.parse(data?.skills) : [],
    tags: data?.tags ? JSON.parse(data?.tags) : [],
  });

  useEffect(() => {
    const user = userName !== undefined ? userName : loginuser;
    if (user !== undefined) {
      dispatch(getUserProfile(user));
    }
  }, [loginuser, userName]);

  useEffect(() => {
    if (data !== undefined) {
      dispatch(GetBookSuggestion(data.id));
      dispatch(GetMovieSuggestion(data.id));
      dispatch(GetGuruSuggestion(data.id));
      dispatch(GetPracticeSuggestion(data.id));
      dispatch(GetExperienceSuggestion(data.id));

      setProfileData({
        skills: data?.skills ? JSON.parse(data?.skills) : [],
        tags: data?.tags ? JSON.parse(data?.tags) : [],
      });
    }
  }, [data]);

  const { timeline } = useSelector((state) => ({
    timeline: state?.Post?.userprofiletimelinedetails,
  }));

  // const refreshSuggestion = async () => {
  //   await dispatch(GetBookSuggestion(data.id));
  //   await dispatch(GetMovieSuggestion(data.id));
  //   await dispatch(GetGuruSuggestion(data.id));
  //   await dispatch(GetPracticeSuggestion(data.id));
  //   await dispatch(GetExperienceSuggestion(data.id));
  // };

  // const handleCheckboxChange = async (id) => {
  //   await dispatch(GetUpdateReadSuggestion(id));
  //   refreshSuggestion();
  // };

  // const handleDeleteSuggest = async (id) => {
  //   await dispatch(GetDeleteSuggestion(id));
  //   refreshSuggestion();
  // };

  const [currentTab, setCurrentTab] = useState('1');
  const onTabChange = (key) => {
    setCurrentTab(key);
  };

  const showSocialLink = () => {
    onTabChange('7');
  };

  const { TabPane } = Tabs;
  const firstName = data?.firstName ? data.firstName.charAt(0).toUpperCase() + data.firstName.slice(1) : '';
  const lastName = data?.lastName ? data.lastName.charAt(0).toUpperCase() + data.lastName.slice(1) : '';
  const JoinedDate = data?.createdDate ? convertToMonthYear(data?.createdDate) : '';

  return (
    <>
      {data?.id > 0 && (
        <div className="cntpagecomponent userprofilepage">
          <div className="centersidebarcontent flexcolumn mt56">
            <div className="userNamedetails">
              <h2>
                <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                  <img src={require('../../static/images/icon_back.png')} alt="" />
                </Link>
                {firstName} {lastName}{' '}
                {data?.isPremium && (
                  <img src={require('../../static/images/blue_tick.png')} className="blueTick" alt="" />
                )}
                <span>
                  @{data?.userName} {timeline?.length} posts
                </span>
              </h2>
              {userName === undefined && (
                <Link to="/editProfile" className="btn btn-default mr-3">
                  Edit Profile
                </Link>
              )}
            </div>

            <div className="coverPic grayback">
              <img src={data?.backgroundImg} alt="" />
            </div>
            <div className="userpersondetails">
              <div className="leftcol">
                <div className="personaldetails">
                  <div className="usercol">
                    <div className="usernameMainbox">
                      <div className="usernamebox">
                        <img src={data?.profileImg} alt="" />
                      </div>
                      <p>{data?.about}</p>
                      <div className="tagsbox">
                        <ul>
                          {data?.location?.length > 0 && (
                            <li>
                              <EnvironmentOutlined /> {data.location.charAt(0).toUpperCase() + data.location.slice(1)}
                            </li>
                          )}
                          {data?.profession?.length > 0 && (
                            <li>
                              <EnvironmentOutlined />{' '}
                              {data.profession.charAt(0).toUpperCase() + data.profession.slice(1)}
                            </li>
                          )}
                          {UserProfile?.createdDate?.length > 0 && (
                            <li>
                              <CalendarOutlined /> Joined {JoinedDate}
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="tagsbox">
                        {ProfileData?.tags?.length > 0
                          ? ProfileData?.tags.map((item, index) => (
                              <Link key={index} to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}>
                                {item}
                              </Link>
                            ))
                          : ''}
                      </div>
                      <div className="locaitonbox followers">
                        <ul>
                          <li>
                            <Link to="/network/Following">
                              <span>{data?.noOfFollowing}</span> Following
                            </Link>
                          </li>
                          <li>
                            <Link to="/network/Follower">
                              <span>{data?.noOfFollowers}</span> Followers
                            </Link>
                          </li>
                          <li>
                            <Link to="#" onClick={() => showSocialLink()}>
                              {' '}
                              <span>2</span> Social Links
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="tabspanel">
              <Tabs defaultActiveKey="1" activeKey={currentTab} className="custom-active-tab" onChange={onTabChange}>
                <TabPane tab="Basic Details" key="1" className="tabcntbox">
                  <div className="projectlist">
                    {/* <Scroll isProfile profileUserId={data?.id} /> */}
                    <div className="tabhead">
                      <ul>
                        <li>
                          <div>
                            <h3>
                              Full Name: {data?.firstName} {data?.lastName}
                            </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Phone Number: {data?.phoneNumber}</h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Email: {data?.email}</h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Date of Birth: {data?.dob}</h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Gender: {data?.gender}</h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Address: {data?.address}</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabPane>
                <TabPane tab="Education" key="8" className="tabcntbox">
                  {userName === undefined && (
                    <div className="tabhead">
                      <ul>
                        <li>
                          <div>
                            <h3>University Name/Collage Name: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Highest Qualification: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Course: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Specialization: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Starting Year: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Passing Year: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Grades: </h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </TabPane>
                <TabPane tab="Experience" key="2" className="tabcntbox">
                  {userName === undefined && (
                    <div className="tabhead">
                      <ul>
                        <li>
                          <div>
                            <h3>Company Name: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Designation: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Joining Date: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Date of Leaving: </h3>
                          </div>
                        </li>
                        <li>
                          <div>
                            <h3>Responsibilities: </h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </TabPane>
                <TabPane tab="Certification" key="3" className="tabcntbox">
                  {userName === undefined && (
                    <div className="tabhead">
                      <ul>
                        <li>
                          <div>
                            <h3>Certificates: </h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  )}
                </TabPane>
                <TabPane tab="Social Media" key="4" className="tabcntbox">
                  <>
                    <div className="tabhead">
                      <h3>Social Links</h3>
                    </div>
                    <div className="analyticsBox">
                      <ul className="listItemsbox">
                        {data?.facebookLink?.length > 5 && (
                          <li>
                            <div className="headbpx">
                              <div className="imgmaindiv">
                                <div className="imgDesc">
                                  <div className="imgdiv">
                                    <img src={require('../../static/images/facebook_logo.png')} alt="" />
                                  </div>
                                  <div className="namedetails">
                                    <h6 className="profilename">
                                      Facebook <br />
                                      <Link to={data?.facebookLink}>{data?.facebookLink}</Link>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        )}
                        {data?.linkedinLink?.length > 5 && (
                          <li>
                            <div className="headbpx">
                              <div className="imgmaindiv">
                                <div className="imgDesc">
                                  <div className="imgdiv">
                                    <img src={require('../../static/images/linkedin_logo.png')} alt="" />
                                  </div>
                                  <div className="namedetails">
                                    <h6 className="profilename">
                                      Linkedin <br />
                                      <Link to={data?.linkedinLink}>{data?.linkedinLink}</Link>
                                    </h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        )}
                      </ul>
                    </div>
                  </>
                </TabPane>
              </Tabs>
            </div>
          </div>

          {/* <RightSideBarComponent /> */}
        </div>
      )}
    </>
  );
}

export default UserProfile;
