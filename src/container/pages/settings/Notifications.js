import React, { useState } from 'react';
import { Checkbox, Radio } from 'antd';
import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Notifications = () => {

  const [showFilters, setShowFilters] = useState(false);
  const [showMutedNotifications, setShowMutedNotifications] = useState(false);
  const [showPreference, setShowPreference] = useState(false);
  const [showPushPreference, setShowPushPreference] = useState(false);
  const [showEmailPreference, setShowEmailPreference] = useState(false);
  const [enableEmailNotification, setEnableEmailNotification] = useState(false);


  const changeStep = (step) => {
    setShowFilters(false);
    setShowMutedNotifications(false);
    setShowPreference(false);
    setShowPushPreference(false);
    setShowEmailPreference(false);
    switch (step) {
      case 'filters':
        setShowFilters(true);
        break;
      case 'mutednotify':
        setShowMutedNotifications(true);
        break;
      case 'preference':
        setShowPreference(true);
        break;
      case 'pushpreference':
        setShowPushPreference(true);
        break;
      case 'emailpreference':
        setShowEmailPreference(true);
        break;
      default:
        break;
    }
  }


  return (
    <>
      {!showFilters && !showMutedNotifications && !showPreference &&
        !showPushPreference && !showEmailPreference &&
        <div className='settingBox'>
           <div className='header'>              
                <h2>Notifications</h2>
              </div>
              <p>Select the kinds of notifications you get about your activities, interests, and recommendations.</p>
          
          <div>
            <ul>
              <li>
                <Link to="#" onClick={() => changeStep('filters')}>Filters <RightOutlined /></Link>
              </li>
              <li>
                <Link to="#" onClick={() => changeStep('preference')}>Preferences <RightOutlined /></Link>
              </li>
            </ul>
          </div>
        </div>
      }
      {showFilters && !showMutedNotifications &&
        <>
         <div className='settingBox'>
          <div className='header'>        
            <Link to="#" onClick={() => setShowFilters(false)}><ArrowLeftOutlined /> </Link>
              <h2>Filters</h2>
             
            </div>
            <p>Choose the notifications you’d like to see — and those you don’t.</p>
            <div>
              <h3 className='flexSpacebetween'>Quality filter <Checkbox /> </h3> 
              <p>Choose to filter out content such as duplicate or automated posts.
                This doesn’t apply to notifications from accounts you follow or have interacted with recently.
                <Link to="#">Learn more</Link>
              </p>
            </div>
             <ul>
              <li> <Link to="#" onClick={() => changeStep('mutednotify')}>Muted notifications <RightOutlined /></Link></li>
             </ul>
          </div>
        </>
      }
      {showMutedNotifications &&
        <>
           <div className='settingBox'>
          <div className='header'>        
            <Link to="#" onClick={() => changeStep('filters')}><ArrowLeftOutlined /> </Link>
              <h2>Muted notifications</h2>             
            </div>
            
            <div className='martop10'>
              <h2>Mute notifications from people:</h2>
              <div className='formMain notificationbox'>
                <ul>
                  <li>
                    <h3 className='flexSpacebetween'>You don’t follow <Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who don’t follow you<Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>With a new account <Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who have a default profile photo <Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who haven’t confirmed their email<Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who haven’t confirmed their phone number<Checkbox /></h3>
                  </li>
                   
                </ul>
              </div>
      
              <p>Choose to filter out content such as duplicate or automated posts.
                This doesn’t apply to notifications from accounts you follow or have interacted with recently.
                <Link to="#">Learn more</Link>
              </p>
            </div>
          </div>
        </>
      }
      {showPreference && !showPushPreference && !showEmailPreference &&
        <>
          <div className='settingBox'>
          <div className='header'>        
            <Link to="#" onClick={() => setShowPreference(false)}><ArrowLeftOutlined /> </Link>
              <h2>Preferences</h2>             
            </div>
            <p>Select your preferences by notification type.
                <Link to="#"> Learn more</Link>
              </p>
            
            <div>
              <ul>
                <li>
                  <Link to="#" onClick={() => changeStep('pushpreference')}>Push notifications <RightOutlined /></Link>
                </li>
                <li>
                  <Link to="#" onClick={() => changeStep('emailpreference')}>Email notifications <RightOutlined /></Link>
                </li>
              </ul>
            </div>
          </div>
        </>
      }
      {showPushPreference &&
        <>
           <div className='settingBox'>
              <div className='header'>        
                <Link to="#" onClick={() => changeStep('preference')}><ArrowLeftOutlined /> </Link>
                  <h2>Push notifications</h2>             
                </div>
           
            <div>
              <h1>Turn on Notifications?</h1>
            </div>
          </div>
        </>
      }
      {showEmailPreference &&
        <>
          <div className='settingBox'>
              <div className='header'>        
                <Link to="#" onClick={() => changeStep('preference')}><ArrowLeftOutlined /> </Link>
                  <h2>Email notifications</h2>             
                </div>
            <div>
              <div className='header'>
                <Link to="#" onClick={() => changeStep('preference')}><ArrowLeftOutlined /> </Link>
                <h2>Email notifications</h2>
              </div>
              <div>
                <p>Email notifications <Checkbox onChange={(e) => setEnableEmailNotification(e.target.checked)} /></p>
                <p>Get emails to find out what’s going on when you’re not on K4M2A. You can turn them off anytime.
                  <Link to="#"> Learn more</Link>
                </p>
              </div>
            </div>
            <div>
              <div>
                <h3>Related to you and your posts</h3>
                <p>New notifications <Checkbox disabled={!enableEmailNotification} /></p>
                <p>Direct messages <Checkbox disabled={!enableEmailNotification} /></p>
                <p>Posts emailed to you <Checkbox disabled={!enableEmailNotification} /></p>
              </div>
              <div>
                <Radio.Group disabled={!enableEmailNotification} >
                  <p>Top posts and Stories</p>
                  <Radio>Daily</Radio>
                  <Radio>Weekly</Radio>
                  <Radio>Periodically</Radio>
                  <Radio>Off</Radio>
                </Radio.Group>
              </div>
              <div>
                <p>Updates about the performance of your posts <Checkbox disabled={!enableEmailNotification} /></p>
              </div>
            </div>
            <div>
              <h3>From K4M2A</h3>
              <p>News about K4M2A product and feature updates <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Tips on getting more out of K4M2A <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Things you missed since you last logged into K4M2A <Checkbox disabled={!enableEmailNotification} /></p>
              <p>News about K4M2A on partner products and other third party services <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Participation in K4M2A research surveys <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Suggestions for recommended accounts <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Suggestions based on your recent follows <Checkbox disabled={!enableEmailNotification} /></p>
              <p>Tips on K4M2A business products <Checkbox disabled={!enableEmailNotification} /></p>
            </div>
          </div>
        </>
      }
    </>
  )
};

export default Notifications;
