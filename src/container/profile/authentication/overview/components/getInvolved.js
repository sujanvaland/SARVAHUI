
import React from 'react';
import { Link } from 'react-router-dom';

function GetInvolvedComponent(props){
    // eslint-disable-next-line react/prop-types
    const { changeStep } = props;
    
    return (
        <div className="signUpcntBoxmain scrollMain">
            <div className="signUpcntBox">
                <h4>World’s First</h4>
            <h3>Spiritual Network</h3>
            <p>
            for seekers, believers, mystics, and agnostics with verified spiritual profiles—a space for cosmic discoveries and conversations about the wonders of science and spirituality.
            </p>
            <div className='deviceimg'>
                <img src={require('../../../../../static/images/img_tab.jpg')} alt=""/>
             </div>
             <div className='dewllmode'>
                <img src={require('../../../../../static/images/img_dwell.png')} alt=""/>
                    <h4>Spiritual Immersion </h4>
                    <h3>Dwell Mode</h3>
                    <p>Dive deep into a chosen spiritual topic for a week. Immerse, absorb, and enhance your connection to the chosen theme in a focused exploration of your spiritual journey.</p>
             </div>
             
             <div className='dewllmode'>
                <img src={require('../../../../../static/images/img_spiritualprofile.png')} alt=""/>
                    <h4>Verified and Detailed </h4>
                    <h3>Spiritual Profile</h3>
                    <p>Craft your unique spiritual profile on our platform. Share your beliefs, practices, and reflections with a community of like-minded spiritual seekers.</p>
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