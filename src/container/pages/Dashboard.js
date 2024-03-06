import { Form, Input, Row, Col, DatePicker, Button } from 'antd';
import { useState } from 'react';

const { TextArea } = Input;

function Dashboard() {
  const [summeryDetails, SetSummeryDetails] = useState({
    noOfRecruiters: '',
    companyInfo: '',
    jobDescription: '',
    requiredQualification: '',
    numberOfVacancies: '',
    dateOfApplicationDeadline: '',
    skillsRequired: '',
    minSalary: '',
    maxSalary: '',
  });
  SetSummeryDetails({
    ...summeryDetails,
    noOfRecruiters: 50,
  });
  // const handleJobDetailsChange = (e, isDate = false) => {
  //   if (isDate) {
  //     SetJobDetails({
  //       ...summeryDetails,
  //       dateOfApplicationDeadline: e.toDate(),
  //     });
  //   } else {
  //     e.preventDefault();
  //     SetJobDetails({
  //       ...summeryDetails,
  //       [e.target.name]: e.target.value.trim(),
  //     });
  //   }
  // };

  return (
    <>
      <div className="cntpagecomponent userprofilepage">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className="userpersondetails">
            <div className="leftcol">
              <div className="personaldetails editprofile widht100">
                <div>
                  <h2>DASHBOARD</h2>
                </div>
                <div className="dashboardForm widht100">
                  <Form
                    name="dashboardForm"
                    // onFinish={handleJobInfoSubmit}
                    layout="vertical"
                  >
                    <Row gutter={25}>
                      <Col lg={12} sm={12}>
                        <Form.Item
                          label="Number of company/recruiters connected."
                          name="noOfRecruiters"
                          // rules={[{ required: true, message: 'Job Title required' }]}
                        >
                          <Input
                            name="noOfRecruiters"
                            maxLength={1000}
                            value={summeryDetails.noOfRecruiters}
                            // onChange={handleJobDetailsChange}
                          />
                        </Form.Item>
                      </Col>
                    </Row>
                    <Form.Item
                      label="Company Info"
                      name="companyInfo"
                      // rules={[{ required: true, message: 'Company Info required' }]}
                    >
                      <TextArea
                        rows={4}
                        name="companyInfo"
                        value={summeryDetails.companyInfo}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Job Description"
                      name="jobDescription"
                      // rules={[{ required: true, message: 'Job Description required' }]}
                    >
                      <TextArea
                        rows={4}
                        name="jobDescription"
                        value={summeryDetails.jobDescription}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Required Qualification"
                      name="requiredQualification"
                      // rules={[{ required: true, message: 'Required Qualification required' }]}
                    >
                      <TextArea
                        rows={4}
                        name="requiredQualification"
                        value={summeryDetails.requiredQualification}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Number Of Vacancies"
                      name="numberOfVacancies"
                      // rules={[{ required: true, message: 'Number Of Vacancies required' }]}
                    >
                      <Input
                        type="number"
                        name="numberOfVacancies"
                        value={summeryDetails.numberOfVacancies}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Date Of Application Deadline"
                      name="dateOfApplicationDeadline"
                      // rules={[{ required: true, message: 'Date Of Application Deadline is Required' }]}
                    >
                      <DatePicker
                        style={{ width: '100%' }}
                        name="dateOfApplicationDeadline"
                        value={summeryDetails.dateOfApplicationDeadline}
                        // onChange={(e) => handleJobDetailsChange(e, true)}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Skills Required"
                      name="skillsRequired"
                      // rules={[{ required: true, message: 'Skills Required is mandatory field' }]}
                    >
                      <TextArea
                        rows={4}
                        name="skillsRequired"
                        value={summeryDetails.skillsRequired}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Minimum Salary"
                      name="minSalary"
                      // rules={[{ required: true, message: 'Minimum Salary' }]}
                    >
                      <Input
                        type="number"
                        name="minSalary"
                        value={summeryDetails.minSalary}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Form.Item
                      label="Maximum Salary"
                      name="maxSalary"
                      // rules={[{ required: true, message: 'Maximum Salary' }]}
                    >
                      <Input
                        type="number"
                        name="maxSalary"
                        value={summeryDetails.maxSalary}
                        // onChange={handleJobDetailsChange}
                      />
                    </Form.Item>
                    <Button
                      className="btn-joinus"
                      htmlType="submit"
                      type="primary"
                      size="large"
                      // rules={[{ required: true, message: 'Password required' }]}
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

export default Dashboard;
