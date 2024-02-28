import React from 'react';
import { Button } from 'antd';
import { FieldTimeOutlined, VideoCameraOutlined } from '@ant-design/icons';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function EventDetailsComponent(props) {
  // eslint-disable-next-line react/prop-types
  const { jobDetails } = props;
  //   const [job, setjob] = useState(null);
  //   console.log(jobDetails, 'values');
  //   useEffect(() => {
  //     setjob(jobDetails);
  //   }, []);

  return (
    <div className="rightsidebarcntbox ">
      <div className="rightsidecntbox scrollbox eventDetailsbox">
        <div className="header">
          <h2>
            <span>Posted by</span> {jobDetails?.postedBy}
            <img src={require('../../../static/images/blue_tick.png')} alt="" />
          </h2>
          <div>
            {/* <Button> free</Button> */}
            <Button className="btnBlack"> Apply </Button>
          </div>
        </div>
        <div className="analyticsBox subscribe whitebox">
          <div className="boxOne">
            <div className="iconBox">
              <FieldTimeOutlined />
            </div>
            <p>Role: {jobDetails?.jobTitle}</p>
          </div>
          <div className="boxOne">
            <div className="iconBox">
              <VideoCameraOutlined />
            </div>
            <p>Company Name:{jobDetails?.companyName}</p>
          </div>
          <div>
            <p>Salary: {jobDetails?.salary}</p>
          </div>
        </div>
        <div className="detailsBox">
          <h4>Details:</h4>
          <p>{jobDetails?.jobDescription}</p>
          <h4>Required Qualification: </h4>
          <p>{jobDetails?.requiredQualification}</p>
          <h4>Skills Required: </h4>
          {jobDetails?.skillsRequired?.map((item, index) => (
            <p>
              {item}
              {index < jobDetails.skillsRequired.length - 1 && <>,</>}{' '}
            </p>
          ))}

          <h4>Application Deadline: </h4>
          <p>{jobDetails?.applicationDeadline}</p>
          <h4>Number Of Vacancies: </h4>
          <p>{jobDetails?.numberOfVacancies}</p>
          <h4>Applications Received: </h4>
          <p>{jobDetails?.applicationReceived}</p>
        </div>
      </div>
    </div>
  );
}

export default EventDetailsComponent;
