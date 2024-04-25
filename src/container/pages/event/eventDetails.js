import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { FieldTimeOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ApplyJobs } from '../../../redux/postJob/actionCreator';
// import { getJobDetails } from '../../../redux/postJob/actionCreator';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function EventDetailsComponent() {
  
  const [JobPostDetails, setjob] = useState(null);
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem('profile'));

  const { job } = useSelector((state) => ({
    job: state?.postJob?.jobpostdetails,
  }))

  useEffect(() => {
    setjob(job);
  }, [job]);

  const handleApplyJob = (data) => {
    dispatch(ApplyJobs(data))
  }

  return (
    <div className="rightsidebarcntbox ">
      <div className="rightsidecntbox scrollbox eventDetailsbox">
        <div className="header">
          <h2>
            <span>Posted by</span> <Link to={`/profile/${JobPostDetails?.userName}`}> {JobPostDetails?.postedBy}</Link>
            <img src={require('../../../static/images/blue_tick.png')} alt="" />
          </h2>
          {User.loginType === "jobSeeker" &&
            <div>
              {JobPostDetails?.isApplied === 1 ?
                <Button className="btnBlack">Applied</Button>
                :
                <Button className="btnBlack" onClick={() => handleApplyJob({ jobId: JobPostDetails?.id })}> Apply </Button>}
            </div>}
          {/* {User.loginType === "recruiter" &&
            <div>
              <Link to={`jobApplication/${JobPostDetails?.id}`} className="btn btn-default mr-3">
                View Application
              </Link>
            </div>} */}
        </div>
        <div className="analyticsBox subscribe whitebox">
          <div className="boxOne">
            <div className="iconBox">
              <FieldTimeOutlined />
            </div>
            <p><strong>Role:</strong> {JobPostDetails?.jobTitle}</p>
          </div>
          <div className="boxOne">
            <div className="iconBox">
              <VideoCameraOutlined />
            </div>
            <p><strong>Company Name:</strong>{JobPostDetails?.companyName}</p>
          </div>
          <div className="boxOne">
            <p>
            <strong>Salary Range:</strong> {JobPostDetails?.minSalary}-{JobPostDetails?.maxSalary}
            </p>
          </div>
        </div>
        <div className="detailsBox">
          <h4>Details:</h4>
          <p>{JobPostDetails?.jobDescription}</p>
          <h4>Required Qualification: </h4>
          <p>{JobPostDetails?.requiredQualification}</p>
          <h4>Skills Required: </h4>
          {/* {JobPostDetails?.skillsRequired?.map((item, index) => (
            <p>
              {item}
              {index < JobPostDetails.skillsRequired.length - 1 && <>,</>}{' '}
            </p>
          ))} */}

          <h4>Application Deadline: </h4>
          <p>{JobPostDetails?.applicationDeadline}</p>
          <h4>Number Of Vacancies: </h4>
          <p>{JobPostDetails?.numberOfVacancies}</p>
          <h4>Applications Received: </h4>
          <p>{JobPostDetails?.applicationReceived}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsComponent;
