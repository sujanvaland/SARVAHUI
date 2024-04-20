import { Form, Input, Row, Col, DatePicker, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { submitPost } from '../../redux/postJob/actionCreator';

const { TextArea } = Input;

function PostJob() {
  const dispatch = useDispatch();
  const [JobDetails, SetJobDetails] = useState({
    jobTitle: '',
    companyInfo: '',
    jobDescription: '',
    requiredQualification: '',
    numberOfVacancies: '',
    dateOfApplicationDeadline: '',
    skillsRequired: '',
    minSalary: '',
    maxSalary: '',
  });

  const handleJobDetailsChange = (e, isDate = false) => {
    if (isDate) {
      SetJobDetails({
        ...JobDetails,
        dateOfApplicationDeadline: e.toDate(),
      });
    } else {
      e.preventDefault();
      SetJobDetails({
        ...JobDetails,
        [e.target.name]: e.target.value.trim(),
      });
    }
  };

  const handleJobInfoSubmit = () => {
    console.log(JobDetails);
    dispatch(submitPost(JobDetails));
  };

  return (
    <>
      <div className="cntpagecomponent userprofilepage">
        <div className="centersidebarcontent flexcolumn postjobsmain">
        <div className="userNamedetails">
                <h2>
                  Post New Job
                </h2>
               
              </div>

          <div className="userpersondetails martop50">
            <div className="leftcol">
              <div className="personaldetails editprofile widht100">
              
                <div className="editprofileForm widht100 padd30">
                  <Form name="updateJobPost" onFinish={handleJobInfoSubmit} layout="vertical">
                    <Row gutter={25}>
                      <Col lg={12} sm={12}>
                        <Form.Item
                          label="Job Title"
                          name="jobTitle"
                          rules={[{ required: true, message: 'Job Title required' }]}
                        >
                          <Input
                            name="jobTitle"
                            maxLength={1000}
                            value={JobDetails.jobTitle}
                            onChange={handleJobDetailsChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Row gutter={25}>
                    <Col lg={12} sm={12}>
                      <Form.Item
                        label="Company Info"
                        name="companyInfo"
                        rules={[{ required: true, message: 'Company Info required' }]}
                      >
                        <TextArea
                          rows={4}
                          name="companyInfo"
                          value={JobDetails.companyInfo}
                          onChange={handleJobDetailsChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                      <Form.Item
                        label="Job Description"
                        name="jobDescription"
                        rules={[{ required: true, message: 'Job Description required' }]}
                      >
                        <TextArea
                          rows={4}
                          name="jobDescription"
                          value={JobDetails.jobDescription}
                          onChange={handleJobDetailsChange}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Required Qualification"
                      name="requiredQualification"
                      rules={[{ required: true, message: 'Required Qualification required' }]}
                    >
                      <TextArea
                        rows={4}
                        name="requiredQualification"
                        value={JobDetails.requiredQualification}
                        onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Skills Required"
                      name="skillsRequired"
                      rules={[{ required: true, message: 'Skills Required is mandatory field' }]}
                    >
                      <TextArea
                        rows={4}
                        name="skillsRequired"
                        value={JobDetails.skillsRequired}
                        onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Number Of Vacancies"
                      name="numberOfVacancies"
                      rules={[{ required: true, message: 'Number Of Vacancies required' }]}
                    >
                      <Input
                        type="number"
                        name="numberOfVacancies"
                        value={JobDetails.numberOfVacancies}
                        onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Date Of Application Deadline"
                      name="dateOfApplicationDeadline"
                      rules={[{ required: true, message: 'Date Of Application Deadline is Required' }]}
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        name="dateOfApplicationDeadline"
                        value={JobDetails.dateOfApplicationDeadline}
                        onChange={(e) => handleJobDetailsChange(e, true)}
                      />
                    </Form.Item>
                    </Col>
                    
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Minimum Salary"
                      name="minSalary"
                      rules={[{ required: true, message: 'Minimum Salary' }]}
                    >
                      <Input
                        type="number"
                        name="minSalary"
                        value={JobDetails.minSalary}
                        onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    </Col>
                    <Col lg={12} sm={12}> 
                    <Form.Item
                      label="Maximum Salary"
                      name="maxSalary"
                      rules={[{ required: true, message: 'Maximum Salary' }]}
                    >
                      <Input
                        type="number"
                        name="maxSalary"
                        value={JobDetails.maxSalary}
                        onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    </Col>
                    </Row>
                    <Button
                      className="btnblack btnsaveprofile"
                      htmlType="submit"
                      type="primary"
                      size="large"
                      rules={[{ required: true, message: 'Password required' }]}
                    >
                      Post Job
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostJob;
