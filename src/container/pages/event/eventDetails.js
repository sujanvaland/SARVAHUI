import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { FieldTimeOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { ApplyJobs } from '../../../redux/postJob/actionCreator';
// import { getJobDetails } from '../../../redux/postJob/actionCreator';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function EventDetailsComponent() {
  // eslint-disable-next-line react/prop-types
  // const { jobDetails } = props;
    const [JobPostDetails, setjob] = useState(null);
  //   console.log(jobDetails, 'values');
  const dispatch = useDispatch();
  const User = JSON.parse(localStorage.getItem('profile'));

  const { job } = useSelector((state) => ({
    job: state?.postJob?.jobpostdetails,
  }))

  useEffect(() => {
        setjob(job);
      }, [job]);

  const handleApplyJob = (data) =>{
    dispatch(ApplyJobs(data))
  }

  return (
    <div className="rightsidebarcntbox ">
      <div className="rightsidecntbox scrollbox eventDetailsbox">
        <div className="header">
          <h2>
            <span>Posted by</span> {JobPostDetails?.postedBy}
            <img src={require('../../../static/images/blue_tick.png')} alt="" />
          </h2>
          {User.loginType === "jobSeeker" && 
          <div>
            {/* <Button> free</Button> */}
            {JobPostDetails?.isApplied === 1 ?  
            <Button className="btnBlack">Applied</Button>
            :
            <Button className="btnBlack" onClick={()=>handleApplyJob({jobId:JobPostDetails?.id})}> Apply </Button>}
          </div>}
        </div>
        <div className="analyticsBox subscribe whitebox">
          <div className="boxOne">
            <div className="iconBox">
              <FieldTimeOutlined />
            </div>
            <p>Role: {JobPostDetails?.jobTitle}</p>
          </div>
          <div className="boxOne">
            <div className="iconBox">
              <VideoCameraOutlined />
            </div>
            <p>Company Name:{JobPostDetails?.companyName}</p>
          </div>
          <div>
            <p>
              Salary Range: {JobPostDetails?.minSalary}-{JobPostDetails?.maxSalary}
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
