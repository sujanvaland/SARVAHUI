import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, DatePicker, Form, Input, Row, Select, Spin, Tabs } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { getUserProfile, updateUserProfile } from '../../redux/UserProfile/actionCreator';
import { FileUploading } from '../../redux/UploadFile/actionCreator';
import { extractLinkedinURLs } from '../../utility/validationHelper';
import { GetUserResume } from '../../redux/postJob/actionCreator';

function EditProfile() {
  const dispatch = useDispatch();
  const { TabPane } = Tabs;
  const { Option } = Select;
  const { TextArea } = Input;

  const dateFormat = 'YYYY/MM/DD';
  const { username, data, profileUrl, backgroundUrl, isLoader, resumeUrl, jobResume } = useSelector((state) => {
    return {
      data: state.userProfile.getProfile,
      isLoader: state.userProfile.loading,
      profileUrl: state.uploadFile.profileImgUrl,
      backgroundUrl: state.uploadFile.backgroundImgUrl,
      resumeUrl: state.uploadFile.resumeUrl,
      username: state.auth.userprofile?.userName,
      jobResume: state?.postJob?.jobResume,
    };
  });

  console.log("resumeUrl", jobResume);

  useEffect(() => {
    dispatch(getUserProfile(username));
  }, [username]);

  useEffect(() => {
    dispatch(GetUserResume());
  }, [data]);

  const handleBinaryChange = async (e, imgType) => {
    let path = 'images/profile/'
    if (imgType === 'resume') {
      path = 'resume/'
    }
    await dispatch(FileUploading(e.target.files[0], path, imgType));
  };

  const [ProfileData, setProfileData] = useState({
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    about: data?.about || '',
    dob: data?.dob,
    gender: data?.gender || '',
    address: data?.address || '',
    address2: data?.address2 || '',
    city: data?.city || '',
    state: data?.state || '',
    country: data?.country || '',
    zipCode: data?.zipCode || '',
    phoneNumber: data?.phoneNumber || '',
    email: data?.email || '',
    resumeId: data?.resumeId || 0,
    resume: jobResume?.actualUrl || '',
    linkedinLink: data?.linkedinLink || '',
    skills: data?.skills ? data?.skills.split(', ') : [],
    profileImg: data?.profileImg || '',
    backgroundImg: data?.backgroundImg || '',
    tags: data?.tags ? data?.tags.split(', ') : [],
    totalExperience: data?.totalExperience || '',
    university: data?.university || '',
    highestQualification: data?.highestQualification || '',
    course: data?.course || '',
    specialization: data?.specialization || '',
    startingYear: data?.startingYear || '',
    passingYear: data?.passingYear || '',
    grades: data?.grades || '',
    experience: data?.experience?.length > 0
      ? data.experience.map((job) => ({
        id: job.id,
        userId: job.userId || 0,
        company: job.company || '',
        designation: job.designation || '',
        joinedDate: job.joinedDate || '',
        endDate: job.endDate || '',
        responsibility: job.responsibility || '',
      }))
      : [
        {
          id: 0,
          userId: 0,
          company: '',
          designation: '',
          joinedDate: '',
          endDate: '',
          responsibility: '',
        },
      ],
    certificate: data?.certificate?.length > 0
      ? data.certificate.map((job) => ({
        id: job.id,
        userId: job.userId || 0,
        certificateName: job.certificateName || '',
      }))
      : [
        {
          id: 0,
          userId: 0,
          certificateName: '',
        },
      ],
  });

  const [validationErrorMSG, setvalidationErrorMSG] = useState({
    facebookError: '',
    linkedinError: '',
  });

  useEffect(() => {
    setProfileData({
      ...ProfileData,
      firstName: data?.firstName || '',
      lastName: data?.lastName || '',
      about: data?.about || '',
      dob: data?.dob,
      gender: data?.gender || '',
      address: data?.address || '',
      address2: data?.address2 || '',
      city: data?.city || '',
      country: data?.country || '',
      zipCode: data?.zipCode || '',
      phoneNumber: data?.phoneNumber || '',
      email: data?.email || '',
      resumeId: data?.resumeId || 0,
      resume: jobResume?.actualUrl || '',
      linkedinLink: data?.linkedinLink || '',
      skills: data?.skills ? data?.skills.split(', ') : [],
      tags: data?.tags ? data?.tags.split(', ') : [],
      totalExperience: data?.totalExperience || 0,
      university: data?.university || '',
      highestQualification: data?.highestQualification || '',
      course: data?.course || '',
      specialization: data?.specialization || '',
      startingYear: data?.startingYear || null,
      passingYear: data?.passingYear || null,
      grades: data?.grades || '',
      experience: data?.experience?.length > 0
        ? data.experience.map((job) => ({
          id: job.id,
          userId: job.userId || 0,
          company: job.company || '',
          designation: job.designation || '',
          joinedDate: job.joinedDate || '',
          endDate: job.endDate || '',
          responsibility: job.responsibility || '',
        }))
        : [
          {
            id: 0,
            userId: 0,
            company: '',
            designation: '',
            joinedDate: '',
            endDate: '',
            responsibility: '',
          },
        ],
      certificate: data?.certificate?.length > 0
        ? data.certificate.map((job) => ({
          id: job.id,
          userId: job.userId || 0,
          certificateName: job.certificateName || '',
        }))
        : [
          {
            id: 0,
            userId: 0,
            certificateName: '',
          },
        ],
    });
  }, [data]);

  console.log("data", ProfileData, profileUrl, backgroundUrl);

  useEffect(() => {
    if (resumeUrl?.data?.result[0]?.id > 0) {
      console.log("reached");
      setProfileData({
        ...ProfileData,
        resumeId: resumeUrl?.data?.result[0]?.id,
        resume: resumeUrl?.data?.result[0]?.actualUrl,
      });
    }
  }, [resumeUrl]);

  useEffect(() => {
    if (profileUrl?.data?.result[0]?.actualUrl?.length > 0) {
      setProfileData({
        ...ProfileData,
        profileImg: profileUrl?.data?.result[0]?.actualUrl,
      });
    }
  }, [profileUrl]);

  useEffect(() => {
    if (backgroundUrl?.data?.result[0]?.actualUrl?.length > 0) {
      setProfileData({
        ...ProfileData,
        backgroundImg: backgroundUrl?.data?.result[0]?.actualUrl,
      });
    }
  }, [backgroundUrl]);

  const handleChange = (e) => {
    e.preventDefault();
    setProfileData({
      ...ProfileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeExperience = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = [...ProfileData.experience]; // Copy the experience array
    updatedExperience[index] = { ...updatedExperience[index], [name]: value }; // Update the specific property
    setProfileData({ ...ProfileData, experience: updatedExperience }); // Update ProfileData with the updated experience array
  };
  const handleChangeCertificate = (index, e) => {
    const { name, value } = e.target;
    const updatedcertificate = [...ProfileData.certificate]; // Copy the experience array
    updatedcertificate[index] = { ...updatedcertificate[index], [name]: value }; // Update the specific property
    setProfileData({ ...ProfileData, certificate: updatedcertificate }); // Update ProfileData with the updated experience array
  };
  const handleDateExperience = (date, dateString, index, field) => {
    const updatedExperience = [...ProfileData.experience];
    updatedExperience[index][field] = dateString; // Update the specific date field
    setProfileData({ ...ProfileData, experience: updatedExperience });
  };

  const handleDate = (dateString) => {
    setProfileData({
      ...ProfileData,
      dob: dateString,
    });
  };

  const handleStartingYear = (dateString) => {
    setProfileData({
      ...ProfileData,
      startingYear: dateString,
    });
  };

  const handlePassingYear = (dateString) => {
    setProfileData({
      ...ProfileData,
      passingYear: dateString,
    });
  };
  const handleSubmit = async () => {
    const res = {
      ...ProfileData,
      skills: ProfileData?.skills.join(', '),
      tags: ProfileData?.tags.join(', '),
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
    if (platform === 'LinkedIn') {
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
    const filter = selected.join(', ')
    console.log("selected", filter);
    setProfileData({
      ...ProfileData,
      tags: selected,
    });
  };

  const handleQualification = (selected) => {
    setProfileData({
      ...ProfileData,
      highestQualification: selected,
    });
  };

  const handleAddExp = () => {
    const exp = ProfileData.experience;
    exp.push({
      id: 0,
      userId: 0,
      company: '',
      designation: '',
      joinedDate: '',
      endDate: '',
      responsibility: '',
    });
    setProfileData({
      ...ProfileData,
      experience: exp,
    });
  };

  const handleAddCerti = () => {
    const exp = ProfileData.certificate;
    exp.push({
      id: 0,
      userId: 0,
      certificateName: '',
    });
    setProfileData({
      ...ProfileData,
      certificate: exp,
    });
  };

  const handleRemoveExp = (index) => {
    const exp = ProfileData.experience;
    exp.splice(index, 1);
    setProfileData({
      ...ProfileData,
      experience: exp,
    });
  };
  const handleRemoveCerti = (index) => {
    const exp = ProfileData.certificate;
    exp.splice(index, 1);
    setProfileData({
      ...ProfileData,
      certificate: exp,
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
                    <img src={require('../../static/images/icon_prevarrow.png')} alt="" />
                  </Link>
                  Profile
                </h2>
                <Link to="/editProfile" className="btn btn-green mr-3" onClick={handleSubmit}>
                  Save
                </Link>
              </div>
              {/* <div className="coverPic">
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
              </div> */}
              <br />
              <br />
              <br />
              <div className="userpersondetails">
                <div className="leftcol">
                  <div className="personaldetails editprofile">
                    <div className='profilepicboxmain'>
                      <div className="profilePicBox">
                        {ProfileData?.profileImg && <img src={ProfileData?.profileImg} alt="" />}
                        {!ProfileData?.profileImg && (
                          <div className="uploadProfilePic">
                            <img src={require('../../static/images/icon_addphoto.png')} alt="" />
                            <Input
                              type="file"
                              id="fileInputProfile"
                              multiple={false}
                              onChange={(e) => handleBinaryChange(e, 'profile')}
                            />
                          </div>
                        )}
                      </div>
                      <div className='btnresumemain'>
                        <Button className='btnuploadresume'>
                          Upload Resume
                          <Form.Item>
                            <Input
                              type="file"
                              id="Resume"
                              multiple={false}
                              onChange={(e) => handleBinaryChange(e, 'resume')}
                            /></Form.Item>
                        </Button>
                      </div>
                    </div>
                    <div className="editprofileForm">
                      <Form name="UpdateProfile" form={form} onFinish={handleSubmit} layout="vertical">

                        <div className="tabspanel">
                          <Tabs defaultActiveKey="1" className="custom-active-tab" >
                            <TabPane tab={data?.loginType === "recruiter" ? "Company Details" : "Basic Details"} key="1" className="tabcntbox">
                              <h2>{data?.loginType === "recruiter" ? "Company Details" : "Basic Details"}</h2>
                              <Row gutter={25}>
                                <Col lg={8} sm={8}>
                                  <Form.Item
                                    label="First Name"
                                    // name="firstName"
                                    rules={[{ required: true, message: 'First Name is mandatory field' }]}
                                  >
                                    <Input
                                      name="firstName"
                                      value={ProfileData?.firstName}
                                      onChange={handleChange}
                                      maxLength={100}
                                    />
                                  </Form.Item>
                                </Col>
                                <Col lg={8} sm={8}>
                                  <Form.Item
                                    label="Last Name"
                                    // name="lastName"
                                    rules={[{ required: true, message: 'Last Name is mandatory field' }]}
                                  >
                                    <Input
                                      name="lastName"
                                      value={ProfileData?.lastName}
                                      onChange={handleChange}
                                      maxLength={100}
                                    />
                                  </Form.Item>
                                </Col>
                                {data?.loginType === "jobSeeker" &&
                                  <>
                                    <Col lg={8} sm={8}>
                                      <Form.Item
                                        label="Date Of Birth"
                                        // name="dob"
                                        rules={[{ required: true, message: 'Date Of Birth is mandatory field' }]}
                                      >
                                        <DatePicker
                                          onChange={handleDate}
                                          style={{ width: '100%' }}
                                          defaultValue={ProfileData?.dob ? moment(`${ProfileData?.dob}`, dateFormat) : null}
                                          format={dateFormat}
                                          disabledDate={disabledDate}
                                        />
                                      </Form.Item>
                                    </Col>
                                    <Col lg={8} sm={8}>
                                      <Form.Item
                                        label="Gender"
                                        // name="gender"
                                        rules={[{ required: true, message: 'Gender is mandatory field' }]}
                                      >
                                        <Select onChange={handleSelectedGender} value={ProfileData?.gender}>
                                          <Option value=""> Select Gender</Option>
                                          <Option value="male">Male </Option>
                                          <Option value="female"> Female</Option>
                                        </Select>
                                      </Form.Item>
                                    </Col></>}
                                <Col lg={8} sm={8}>
                                  <Form.Item label="Phone Number">
                                    <Input
                                      type="number"
                                      name="phoneNumber"
                                      value={ProfileData?.phoneNumber}
                                      onChange={handleChange}
                                    />
                                  </Form.Item>
                                </Col>
                                {data?.loginType === "recruiter" &&
                                <Col lg={16} sm={16}>
                                  <Form.Item label="About">
                                    <TextArea
                                      rows={4}
                                      name="about"
                                      value={ProfileData?.about}
                                      onChange={handleChange}
                                    />
                                  </Form.Item>
                                </Col>}
                                <Col lg={8} sm={8}>
                                  <Form.Item
                                    label="Email"
                                    // name="email"
                                    rules={[{ required: true, message: 'Email is mandatory field' }]}
                                  >
                                    <Input type="email" name="email" value={ProfileData?.email} onChange={handleChange} />
                                  </Form.Item>
                                </Col>

                                {data?.loginType === "jobSeeker" && <>
                                  <Col lg={12} sm={12}>
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
                                  </Row></>}
                                <Col lg={12} sm={12}>
                                  <Form.Item
                                    label={data?.loginType === "recruiter" ? "No Of Employees" : "Total Years of Experience"}
                                    rules={[{ required: true, message: 'Need to define' }]}
                                  >
                                    <Input
                                      type="number"
                                      name="totalExperience"
                                      value={ProfileData?.totalExperience}
                                      onChange={handleChange}
                                      maxLength={100}
                                    />
                                  </Form.Item>
                                </Col>
                              </Row>
                              {/* <Row gutter={25}>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Address Line 1">
                              <Input
                                name="address"
                                value={ProfileData?.address}
                                onChange={handleChange}
                                maxLength={200}
                              />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Address Line 2">
                              <Input
                                name="address2"
                                value={ProfileData?.address2}
                                onChange={handleChange}
                                maxLength={200}
                              />
                            </Form.Item>
                          </Col>
                        </Row> */}
                              {/* <Row gutter={25}> */}
                              {/* <Col lg={24} sm={24}>
                            <Form.Item label="City">
                              <Input name="city" value={ProfileData?.city} onChange={handleChange} maxLength={1000} />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="State">
                              <Input name="state" value={ProfileData?.state} onChange={handleChange} />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Country">
                              <Input name="country" value={ProfileData?.country} onChange={handleChange} />
                            </Form.Item>
                          </Col>
                          <Col lg={24} sm={24}>
                            <Form.Item label="Zip Code">
                              <Input
                                type="number"
                                name="zipCode"
                                value={ProfileData?.zipCode}
                                onChange={handleChange}
                              />
                            </Form.Item>
                          </Col> */}

                              {/* <Col lg={24} sm={24}>
                            <Form.Item label="Resume">
                              <Input type="file" name="resume" value={ProfileData?.resume} onChange={handleChange} />
                            </Form.Item>
                          </Col> */}
                              {/* </Row> */}
                              {/* <Row gutter={25}>
                               
                              </Row> */}

                            </TabPane>
                            {data?.loginType === "jobSeeker" && <>
                              <TabPane tab="Education" key="8" className="tabcntbox">
                                <h2>Education</h2>
                                {/* <Form.Item
                          label="School Name"
                          // name="schoolName"
                          rules={[{ required: true, message: 'School Name is mandatory field' }]}
                        >
                          <Input
                            name="schoolName"
                            value={ProfileData?.education.schoolName}
                            onChange={handleChange}
                            maxLength={100}
                          />
                        </Form.Item>
                        <Form.Item
                          label="Board"
                          // name="board"
                          rules={[{ required: true, message: 'Board is mandatory field' }]}
                        >
                          <Input
                            name="board"
                            value={ProfileData?.education.board}
                            onChange={handleChange}
                            maxLength={100}
                          />
                        </Form.Item>
                        <Form.Item label="Collage Name">
                          <Input
                            name="collageName"
                            value={ProfileData?.education.collageName}
                            onChange={handleChange}
                            maxLength={100}
                          />
                        </Form.Item> */}
                                <Form.Item label="University Name/Collage Name">
                                  <Input
                                    name="university"
                                    value={ProfileData?.university}
                                    onChange={handleChange}
                                    maxLength={100}
                                  />
                                </Form.Item>
                                <Row gutter={25}>
                                  <Col lg={8} sm={8}>
                                    <Form.Item label="Highest Qualification">
                                      <Select
                                        // mode="tags
                                        // showSearch
                                        filterOption={(input, option) =>
                                          option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                        }
                                        value={ProfileData?.highestQualification}
                                        onChange={handleQualification}
                                      >
                                        <Option value="Phd">Doctorate/Phd </Option>
                                        <Option value="Masters">Masters/Post-Graduation </Option>
                                        <Option value="Graduation">Graduation/Diploma</Option>
                                        <Option value="12">12th </Option>
                                        <Option value="10">10th</Option>
                                      </Select>
                                    </Form.Item>
                                  </Col>
                                  <Col lg={8} sm={8}>
                                    <Form.Item
                                      label="Course"
                                      // name="board"
                                      rules={[{ required: true, message: 'Course is mandatory field' }]}
                                    >
                                      <Input
                                        name="course"
                                        value={ProfileData?.course}
                                        onChange={handleChange}
                                        maxLength={100}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col lg={8} sm={8}>
                                    <Form.Item
                                      label="Specialization"
                                      // name="board"
                                      rules={[{ required: true, message: 'Specialization is mandatory field' }]}
                                    >
                                      <Input
                                        name="specialization"
                                        value={ProfileData?.specialization}
                                        onChange={handleChange}
                                        maxLength={100}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col lg={8} sm={8}>
                                    <Form.Item
                                      label="Starting Year"
                                    >
                                      <DatePicker
                                        onChange={handleStartingYear}
                                        style={{ width: '100%' }}
                                        defaultValue={ProfileData?.startingYear ? moment(`${ProfileData?.startingYear}`, dateFormat) : null}
                                        format={dateFormat}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col lg={8} sm={8}>
                                    <Form.Item
                                      label="Passing Year"
                                    >
                                      <DatePicker
                                        onChange={handlePassingYear}
                                        style={{ width: '100%' }}
                                        defaultValue={ProfileData?.passingYear ? moment(`${ProfileData?.passingYear}`, dateFormat) : null}
                                        format={dateFormat}
                                      />
                                    </Form.Item>
                                  </Col>
                                  <Col lg={8} sm={8}>
                                    <Form.Item
                                      label="Grades"
                                      // name="board"
                                      rules={[{ required: true, message: 'Grades is mandatory field' }]}
                                    >
                                      <Input
                                        name="grades"
                                        value={ProfileData?.grades}
                                        onChange={handleChange}
                                        maxLength={100}
                                      />
                                    </Form.Item>
                                  </Col>
                                </Row>
                              </TabPane>
                              <TabPane tab="Experience" key="2" className="tabcntbox">
                                <div className='experiencemainbox'>
                                  <h2>Experience</h2>
                                  {ProfileData.experience?.map((experience, index) => {
                                    return (
                                      <>
                                        <div className='expsubboxmain'>
                                          <div className='expsubboxtitle'>
                                            <h3>{`Experience ${index + 1}`}</h3>
                                            {ProfileData?.experience?.length > 1 && (
                                              <Link to="#" type="button" size="large" onClick={() => handleRemoveExp(index)}>
                                                Remove Experience
                                              </Link>
                                            )}</div>
                                          <Form.Item>

                                            <Row gutter={25}>
                                              <Col lg={8} sm={8}>
                                                <Form.Item label="Company Name">
                                                  <Input
                                                    type='text'
                                                    name="company"
                                                    value={experience.company}
                                                    onChange={(e) => handleChangeExperience(index, e)}
                                                    maxLength={100}
                                                  />
                                                </Form.Item>
                                              </Col>
                                              <Col lg={8} sm={8}>
                                                <Form.Item label="Designation">
                                                  <Input
                                                    name="designation"
                                                    value={experience.designation}
                                                    onChange={(e) => handleChangeExperience(index, e)}
                                                    maxLength={100}
                                                  />
                                                </Form.Item>
                                              </Col>
                                              <Col lg={8} sm={8}>
                                                <Form.Item label="Joining Date">
                                                  <DatePicker
                                                    onChange={(date, dateString) => handleDateExperience(date, dateString, index, 'joinedDate')}
                                                    style={{ width: '100%' }}
                                                    defaultValue={experience.joinedDate ? moment(`${experience.joinedDate}`, dateFormat) : null}
                                                    format={dateFormat}
                                                  />
                                                </Form.Item>
                                              </Col>
                                              <Col lg={8} sm={8}>
                                                <Form.Item label="Date of Leaving">
                                                  <DatePicker
                                                    onChange={(date, dateString) => handleDateExperience(date, dateString, index, 'endDate')}
                                                    style={{ width: '100%' }}
                                                    defaultValue={experience.endDate ? moment(`${experience.endDate}`, dateFormat) : null}
                                                    format={dateFormat}
                                                  />
                                                </Form.Item>
                                              </Col>
                                              <Col lg={8} sm={8}>
                                                <Form.Item label="Responsibility">
                                                  <Input
                                                    name="responsibility"
                                                    value={experience.responsibility}
                                                    onChange={(e) => handleChangeExperience(index, e)}
                                                    maxLength={1000}
                                                  />
                                                </Form.Item>
                                              </Col>
                                            </Row>
                                          </Form.Item>
                                        </div>
                                      </>
                                    );

                                  })}
                                </div>
                                <div className='addexpbtnbox'>
                                  <Link to="#" type="button" size="large" onClick={handleAddExp}>
                                    Add Experience
                                  </Link></div>{' '}

                              </TabPane>
                              <TabPane tab="Certification" key="3" className="tabcntbox">
                                <h2>Certification</h2>
                                <div className='expsubboxmain'>
                                  <div>
                                    {ProfileData.certificate?.map((certi, index) => {
                                      return (
                                        <div key={index}>
                                          <Form.Item className='certificateform'>
                                            <Form.Item >
                                              <div className='expsubboxtitle'>
                                                <h3>{`Certificate ${index + 1}`}</h3>
                                                {ProfileData?.certificate?.length > 1 && (
                                                  <Link to="#" type="button" size="large" onClick={() => handleRemoveCerti(index)}>
                                                    Remove Certificate {/* Change button text here */}
                                                  </Link>
                                                )}</div>
                                              <Input
                                                name="certificateName"
                                                value={certi?.certificateName}
                                                onChange={(e) => handleChangeCertificate(index, e)}
                                                maxLength={100}
                                              />
                                            </Form.Item>


                                          </Form.Item>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                                <div className='addexpbtnbox'>
                                  <Link to="#" type="button" size="large" onClick={handleAddCerti}>
                                    Add Certificate {/* Change button text here */}
                                  </Link></div>{' '}
                              </TabPane> </>}
                          </Tabs>
                        </div>

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
                      </Form >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default EditProfile;
