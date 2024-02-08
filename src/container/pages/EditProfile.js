import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import RightSideBarComponent from './rightsidebar';
import { getUserProfile, updateUserProfile } from '../../redux/UserProfile/actionCreator';
import { FileUploading } from '../../redux/UploadFile/actionCreator';
import { extractFacebookURLs, extractLinkedinURLs } from '../../utility/validationHelper';

function EditProfile() {
  const dispatch = useDispatch();
  const { Option } = Select;
  const dateFormat = 'YYYY/MM/DD';
  const { username, data, profileUrl, backgroundUrl, isLoader } = useSelector((state) => {
    return {
      data: state.userProfile.getProfile,
      isLoader: state.userProfile.loading,
      profileUrl:  state.uploadFile.profileImgUrl ,
      backgroundUrl: state.uploadFile.backgroundImgUrl,
      username: state.auth.userprofile?.userName,
    };
  });

  useEffect(() => {
    dispatch(getUserProfile(username));
  }, [username]);

  const handleBinaryChange = async (e, imgType) => {
    await dispatch(FileUploading(e.target.files[0], 'images/profile/',imgType));
  };

  const [ProfileData, setProfileData] = useState({
    about: data?.about || '',
    dob: data?.dob,
    gender: data?.gender || '',
    location: data?.location || '',
    profession: data?.profession || '',
    organization: data?.organization || '',
    title: data?.title || '',
    facebookLink: data?.facebookLink || '',
    linkedinLink: data?.linkedinLink || '',
    skills: data?.skills ? JSON.parse(data?.skills) : [],
    profileImg: data?.profileImg || '',
    backgroundImg: data?.backgroundImg || '',
    tags: data?.tags ? JSON.parse(data?.tags) : [],
  });
  const [validationErrorMSG, setvalidationErrorMSG] = useState({
    facebookError: '',
    linkedinError: '',
  });

  useEffect(() => {
    setProfileData({
      about: data?.about || '',
      dob: data?.dob,
      gender: data?.gender || '',
      location: data?.location || '',
      profession: data?.profession || '',
      organization: data?.organization || '',
      title: data?.title || '',
      facebookLink: data?.facebookLink || '',
      linkedinLink: data?.linkedinLink || '',
      skills: data?.skills ? JSON.parse(data?.skills) : [],
      profileImg: data?.profileImg || '',
      backgroundImg: data?.backgroundImg || '',
      tags: data?.tags ? JSON.parse(data?.tags) : [],
    });
  }, [data]);

  useEffect(() => {
    setProfileData({
      ...ProfileData,
      profileImg: profileUrl?.data?.result[0]?.actualUrl,
    });
  }, [profileUrl]);

  useEffect(() => {
    setProfileData({
      ...ProfileData,
      backgroundImg: backgroundUrl?.data?.result[0]?.actualUrl,
    });
  }, [backgroundUrl]);

  const handleChange = (e) => {
    e.preventDefault();
    setProfileData({
      ...ProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleDate = (dateString) => {
    setProfileData({
      ...ProfileData,
      dob: dateString,
    });
  };

  const handleSubmit = async () => {
    const res = {
      ...ProfileData,
      skills: JSON.stringify(ProfileData.skills),
      tags: JSON.stringify(ProfileData.tags),
    };
    await dispatch(updateUserProfile(res));
  };
  const [form] = Form.useForm();

  const handleSelectedSkills = (selected) => {
    setProfileData({
      ...ProfileData,
      skills: selected,
    });
  };

  const handleValidation = (platform, link) => {
    if (platform === 'Facebook') {
      if (extractFacebookURLs(link)) {
        setvalidationErrorMSG({
          ...validationErrorMSG,
          facebookError: '',
        });
        console.log('Facebook link is valid:', link);
      } else {
        setProfileData({
          ...ProfileData,
          facebookLink: '',
        });
        setvalidationErrorMSG({
          ...validationErrorMSG,
          facebookError: 'Facebook link is Invalid',
        });
        console.log('Facebook link is Invalid:', link);
      }
    } else if (platform === 'LinkedIn') {
      if (extractLinkedinURLs(link)) {
        setvalidationErrorMSG({
          ...validationErrorMSG,
          linkedinError: '',
        });
        console.log('LinkedIn link is valid:', link);
      } else {
        setProfileData({
          ...ProfileData,
          linkedinLink: '',
        });
        setvalidationErrorMSG({
          ...validationErrorMSG,
          linkedinError: 'LinkedIn link is Invalid',
        });
        console.log('LinkedIn link is Invalid:', link);
      }
    }
  };

  const handleSelectedGender = (selected) => {
    setProfileData({
      ...ProfileData,
      gender: selected,
    });
  };

  const handleSelectedTags = (selected) => {
    setProfileData({
      ...ProfileData,
      tags: selected,
    });
  };

  const disabledDate = (current) => {
    const fifteenYearsAgo = moment().subtract(15, 'years');
    return current && current > fifteenYearsAgo.endOf('day');
  };

  return (
    <>
      {isLoader && (
        <Col xs={24}>
          <div className="spin">
            <Spin />
          </div>
        </Col>
      )}
      {!isLoader && (
        <>
          <div className="cntpagecomponent userprofilepage">
            <div className="centersidebarcontent flexcolumn mt56">
              <div className="userNamedetails">
                <h2>
                  <Link to="/profile" className="btnBacklink">
                    <img src={require('../../static/images/icon_back.png')} alt="" />
                  </Link>
                  Profile
                </h2>
                <Link to="/editProfile" className="btn btn-green mr-3" onClick={handleSubmit}>
                  Save
                </Link>
              </div>
              <div className="coverPic">
                {ProfileData?.backgroundImg && <img src={ProfileData?.backgroundImg} alt="" />}
                <div className="uploadProfilePic">
                  <img src={require('../../static/images/icon_addphoto.png')} alt="" />

                  <Input
                    type="file"
                    id="fileInputBackground"
                    multiple={false}
                    onChange={(e) => handleBinaryChange(e, 'background')}
                  />
                </div>
              </div>
              <div className="userpersondetails">
                <div className="leftcol">
                  <div className="personaldetails editprofile">
                    <div className="profilePicBox">
                      {ProfileData?.profileImg && <img src={ProfileData?.profileImg} alt="" />}
                      {
                        !ProfileData?.profileImg &&
                        <div className="uploadProfilePic">
                          <img src={require('../../static/images/icon_addphoto.png')} alt="" />
                          <Input
                            type="file"
                            id="fileInputProfile"
                            multiple={false}
                            onChange={(e) => handleBinaryChange(e, 'profile')}
                          />
                        </div>
                      }
                      
                    </div>
                    <div className="editprofileForm">
                      <Form name="UpdateProfile" form={form} onFinish={handleSubmit} layout="vertical">
                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="About">
                              <Input name="about" value={ProfileData?.about} onChange={handleChange} maxLength={1000} />
                            </Form.Item>
                          </Col>
                          <Col lg={12} sm={12}>
                            {/* <Form.Item label="DOB">
                      <Input name="dob" value={ProfileData.dob} onChange={handleChange} />
                    </Form.Item> */}
                            <Form.Item label="Date Of Birth">
                              <DatePicker
                                onChange={handleDate}
                                style={{ width: '100%' }}
                                defaultValue={ProfileData?.dob ? moment(`${ProfileData?.dob}`, dateFormat) : null}
                                format={dateFormat}
                                disabledDate={disabledDate}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={12} sm={12}>
                            <Form.Item label="Gender">
                              <Select onChange={handleSelectedGender} value={ProfileData?.gender}>
                                <Option value=""> Select Gender</Option>
                                <Option value="male">Male </Option>
                                <Option value="female"> Female</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Location">
                              <Input
                                name="location"
                                value={ProfileData?.location}
                                onChange={handleChange}
                                maxLength={1000}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Profession">
                              <Input
                                name="profession"
                                value={ProfileData?.profession}
                                onChange={handleChange}
                                maxLength={1000}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Organization">
                              <Input
                                name="organization"
                                value={ProfileData?.organization}
                                onChange={handleChange}
                                maxLength={1000}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Title">
                              <Input name="title" value={ProfileData?.title} onChange={handleChange} />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item
                              label="Facebook Link"
                              validateStatus={validationErrorMSG.facebookError ? 'error' : ''}
                              help={validationErrorMSG.facebookError}
                            >
                              <Input
                                name="facebookLink"
                                value={ProfileData?.facebookLink}
                                onBlur={() => handleValidation('Facebook', ProfileData?.facebookLink)}
                                onChange={handleChange}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item
                              label="Linkedin Link"
                              validateStatus={validationErrorMSG.linkedinError ? 'error' : ''}
                              help={validationErrorMSG.linkedinError}
                            >
                              <Input
                                name="linkedinLink"
                                value={ProfileData?.linkedinLink}
                                onBlur={() => handleValidation('LinkedIn', ProfileData?.linkedinLink)}
                                onChange={handleChange}
                              />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Search Skills And Techniques">
                              <Select
                                mode="tags"
                                showSearch
                                filterOption={(input, option) =>
                                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={handleSelectedSkills}
                                value={ProfileData.skills}
                              >
                                <Option value="Entrepreneur"> Entrepreneur</Option>
                                <Option value="Founder">Founder </Option>
                                <Option value="Blogger"> Blogger</Option>
                                <Option value="Writer">Writer </Option>
                                <Option value="Designer"> Designer</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Tags ">
                              <Select
                                mode="tags"
                                showSearch
                                filterOption={(input, option) =>
                                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                                onChange={handleSelectedTags}
                                value={ProfileData?.tags}
                              >
                                <Option value="Product Management"> Product Management</Option>
                                <Option value="JavaScript">JavaScript </Option>
                                <Option value="Figma"> Figma</Option>
                                <Option value="Marketing">Marketing </Option>
                                <Option value="Python"> Python</Option>
                                <Option value="ReactJS"> ReactJS</Option>
                                <Option value="Startups"> Startups</Option>
                                <Option value="Software Engineer"> Software Engineer</Option>
                                <Option value="Growth Strategy"> Growth Strategy</Option>
                                <Option value="NodeJS"> NodeJS</Option>
                              </Select>
                            </Form.Item>
                          </Col>
                        </Row>

                        <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item className="btnboxmain">
                              <Button
                                className="btn-signin btnblack btnsaveprofile"
                                htmlType="submit"
                                type="submit"
                                size="large"
                              >
                                Save Profile
                              </Button>{' '}
                            </Form.Item>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <RightSideBarComponent />

          </div>
        </>
      )}
    </>
  );
}

export default EditProfile;
