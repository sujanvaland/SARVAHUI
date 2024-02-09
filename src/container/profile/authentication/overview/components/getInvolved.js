
import React from 'react';
import { Link } from 'react-router-dom';

function GetInvolvedComponent(props){
    // eslint-disable-next-line react/prop-types
    const { changeStep } = props;
    
    return (
        <div className="signUpcntBoxmain scrollMain">
            <div className="signUpcntBox">
                <h4>SARVA World’s First</h4>
            <h3>Dedicated Job Portal for CAD Industry</h3>
            <p>
            For Recruiters and Job Seekers, Are you ready to take the next step in your CAD career? Look no further than Your CAD Job Portal. 
            We are your premier destination for finding exciting job opportunities in the CAD industry that align with your skills, 
            passions, and ambitions.
            </p>
            <div className='deviceimg'>
                <img src={require('../../../../../static/images/img_tab.jpg')} alt=""/>
             </div>
             <div className='dewllmode'>
                <img src={require('../../../../../static/images/img_dwell.png')} alt=""/>
                    <h4>Search For Latest Jobs </h4>
                    <h3>Job Seekers</h3>
                    <p>Ready to elevate your CAD career to new heights? Your CAD Job Portal is your go-to destination for finding the perfect opportunities tailored to your CAD expertise. Whether you&apos;re a <span className="highlight">CAD designer</span>, <span className="highlight">draftsperson</span>, or <span className="highlight">engineer</span>, we&apos;ve got you covered.</p>
             </div>
             
             <div className='dewllmode'>
                <img src={require('../../../../../static/images/img_spiritualprofile.png')} alt=""/>
                    <h4>Post Your Jobs</h4>
                    <h3>Compaines</h3>
                    <p>Are you searching for top <span className="highlight">CAD talent</span> to join your team? Look no further than Your CAD Job Portal. We offer a streamlined platform designed to connect you with skilled CAD professionals who are ready to make an impact.</p>
             </div>
            <Link to="" className="btnLearnmore" onClick={() => changeStep('AboutUs')}>
                Claim Username
            </Link>
            <p className='smallnote'>Signup for Priority Access and Join Waitlist</p>
            </div>
        </div>
    )
}

export default GetInvolvedComponent;