import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EnvironmentOutlined, CalendarOutlined } from '@ant-design/icons';
import { Button, Tabs } from 'antd';
import { Link, useParams, useHistory } from 'react-router-dom';
import EventTimeline from './event';
// import RightSideBarComponent from './rightsidebar';
// import Scroll from './Scroll';
import { getUserProfile } from '../../redux/UserProfile/actionCreator';
import { convertToMonthYear } from '../../utility/ConvertToMonthYear';
import { ActionDelete } from '../../redux/postJob/actionCreator';


function UserProfile() {
  const dispatch = useDispatch();
  const history = useHistory();
  const UserProfile = JSON.parse(localStorage.getItem('profile'));
  const { userName } = useParams();

  const { data, loginuser ,isPloading} = useSelector((state) => {
    return {
      // data: userName?.length > 4 ? state.getUser.getSearchUserProfile : state.userProfile.getProfile,
      data: state.userProfile.getProfile,
      isLoader: state.userProfile.loading,
      isPloading: state.userProfile.isPloading,

      loginuser: state.auth.userprofile?.userName,
      loginuserId: state.auth.userprofile?.id,
    };
  });

  useEffect(() => {
    const user = userName !== undefined ? userName : loginuser;
    if (user !== undefined) {
      dispatch(getUserProfile(user));
    }
  }, [loginuser, userName]);

  const [currentTab, setCurrentTab] = useState('1');
  const onTabChange = (key) => {
    setCurrentTab(key);
  };

  const showSocialLink = () => {
    onTabChange('7');
  };

  const handleDelete = async (data) =>{
   await dispatch(ActionDelete(data));
   const user = userName !== undefined ? userName : loginuser;
   if (user !== undefined) {
     dispatch(getUserProfile(user));
   }
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
                  <img src={require('../../static/images/icon_prevarrow.png')} alt="" />
                </Link>
                {firstName} {lastName}{' '}
                {data?.isPremium && (
                  <img src={require('../../static/images/blue_tick.png')} className="blueTick" alt="" />
                )}
              </h2>
              {data?.id === UserProfile?.id && (
                <Link to="/editProfile" className="btn btn-default mr-3">
                  Edit Profile
                </Link>
              )}
            </div>

            {/* <div className="coverPic grayback">
              <img src={data?.backgroundImg} alt="" />
            </div> */}
            <div className="userpersondetails profileheader">
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
                <TabPane tab={data?.loginType === "recruiter" ? "Company Details" : "Basic Details"} key="1" className="tabcntbox">
                  <div className="projectlist">
                    {/* <Scroll isProfile profileUserId={data?.id} /> */}
                    <div className="tabhead profilecnt">
                      <ul>
                        <li>
                          <div>
                            <div className='form-group'>{data?.loginType === "recruiter" ? "Company" : "Full"} Name:</div>
                            <p>{data?.firstName} {data?.lastName}</p>

                          </div>
                        </li>
                        <li>
                          <div>
                            <div className='form-group'> Phone Number:</div>
                            <p>{data?.phoneNumber}</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <div className='form-group'>Email:</div>
                            <p>{data?.email}</p>
                          </div>
                        </li>
                        {data?.loginType === "jobSeeker" ?
                          <>
                            <li>
                              <div>
                                <div className='form-group'>Date of Birth:</div>
                                <p>{data?.dob}</p>
                              </div>
                            </li>
                            <li>
                              <div>
                                <div className='form-group'>Gender:</div>
                                <p>{data?.gender}</p>
                              </div>
                            </li>
                          </> :
                          <li>
                            <div>
                              <div className='form-group'>No Of Employees:</div>
                              <p>{data?.totalExperience}</p>
                            </div>
                          </li>}
                        {/* <li>
                          <div> 
                            <div className='form-group'>Address:</div>
                             <p>{data?.address}</p> 
                          </div>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </TabPane>
                {data?.loginType === "jobSeeker" &&
                  <>
                    <TabPane tab="Education" key="8" className="tabcntbox">
                      {userName === undefined && 
                      (data?.university && data?.highestQualification && data?.course &&
                        data?.specialization && data?.startingYear && data?.passingYear && data?.grades) && (
                        <div className="projectlist">
                          <div className="tabhead profilecnt">
                            <ul>
                              <li>
                                <div>
                                  <div className='form-group'>University Name/Collage Name:</div>
                                  <p> {data?.university}</p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Highest Qualification:</div>
                                  <p> {data?.highestQualification} </p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Course</div>
                                  <p> {data?.course}  </p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Specialization</div>
                                  <p> {data?.specialization}  </p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Starting Year:</div>
                                  <p> {convertToMonthYear(data?.startingYear)} </p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Passing Year: </div>
                                  <p> {convertToMonthYear(data?.passingYear)}</p>
                                </div>
                              </li>
                              <li>
                                <div>
                                  <div className='form-group'>Grades</div>
                                  <p>{data?.grades}</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      )}
                    </TabPane>
                    <TabPane tab="Experience" key="2" className="tabcntbox">
                      {data.experience.length > 0 ?
                        (data?.experience.map((exper, index) => (
                          <div className="projectlist">
                            <div className="tabhead profilecnt">
                              <ul>
                                <li>
                                  <div>
                                    <div className='form-group'>Experience</div>
                                    <p>{index + 1} </p>
                                    {data?.id === UserProfile?.id &&
                                    <Button onClick={()=>handleDelete({id:exper.id,type:"experience"})}>Delete Experience</Button>}
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className='form-group'>Company Name</div>
                                    <p>{exper.company} </p>

                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className='form-group'>Designation</div>
                                    <p>{exper.designation} </p>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className='form-group'>Joining Date</div>
                                    <p>{convertToMonthYear(exper.joinedDate)}</p>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className='form-group'>Date of Leaving</div>
                                    <p> {convertToMonthYear(exper.endDate)}</p>
                                  </div>
                                </li>
                                <li>
                                  <div>
                                    <div className='form-group'>Responsibilities</div>
                                    <p>{exper.responsibility}</p>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        ))) :
                        <li>
                          <div>
                            <h3>No Experience</h3>
                          </div>
                        </li>}

                    </TabPane>
                    <TabPane tab="Certification" key="3" className="tabcntbox">
                      <div className="projectlist">
                        <div className="tabhead profilecnt">
                          <ul>
                            {data.certificate.length > 0 ?
                              (data?.certificate.map((certi, index) => (

                                <li>
                                  <div>
                                    <div className='form-group'>Certificates</div>
                                    <p> {index + 1} : {certi?.certificateName}</p>
                                    {data?.id === UserProfile?.id &&
                                    <Button onClick={()=>handleDelete({id:certi.id,type:"certification"})}>Delete Experience</Button>}
                                  </div>
                                </li>

                              ))) :
                              <li>
                                <div>
                                  <h3>No Certificate</h3>
                                </div>
                              </li>
                            }
                          </ul>
                        </div>
                      </div>

                    </TabPane>
                    <TabPane tab="Social Media" key="4" className="tabcntbox">
                      <>
                        <div className="projectlist">
                          <div className="tabhead profilecnt socialmedialinks">
                            <h3>Social Links</h3>

                            <div className="analyticsBox">
                              <ul className="listItemsbox ">
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
                          </div>
                        </div>
                      </>
                    </TabPane>
                  </>}
                  {data?.loginType === "recruiter" &&
                     <TabPane tab="Job" key="2" className="tabcntbox">
                      <br/>
                      <br/>
                      {!isPloading &&
                     <EventTimeline  userId={data?.id}/>}
                    </TabPane>}
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
