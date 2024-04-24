import React from 'react';
import { Checkbox } from 'antd';
// import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Notifications = () => {

  // const [showFilters, setShowFilters] = useState(false);
  // const [showMutedNotifications, setShowMutedNotifications] = useState(false);
  // const [showPreference, setShowPreference] = useState(false);
  // const [showPushPreference, setShowPushPreference] = useState(false);
  // const [showEmailPreference, setShowEmailPreference] = useState(false);
  // const [enableEmailNotification, setEnableEmailNotification] = useState(false);
  // const changeStep = (step) => {
  //   setShowFilters(false);
  //   setShowMutedNotifications(false);
  //   setShowPreference(false);
  //   setShowPushPreference(false);
  //   setShowEmailPreference(false);
  //   switch (step) {
  //     case 'filters':
  //       setShowFilters(true);
  //       break;
  //     case 'mutednotify':
  //       setShowMutedNotifications(true);
  //       break;
  //     case 'preference':
  //       setShowPreference(true);
  //       break;
  //     case 'pushpreference':
  //       setShowPushPreference(true);
  //       break;
  //     case 'emailpreference':
  //       setShowEmailPreference(true);
  //       break;
  //     default:
  //       break;
  //   }
  // }


  return (
    <>

        <>
           <div className='settingBox'>
           <div className='settingsheader'>     
            {/* <Link to="#" onClick={() => changeStep('filters')}><ArrowLeftOutlined /> </Link> */}
              <h2>Muted notifications</h2>             
            </div>
            <div className='settingcntbox'> 
            <div className='martop10'>
              <h2>Mute notifications </h2>
              <div className='formMain notificationbox'>
                <ul>
                  <li>
                    <h3 className='flexSpacebetween'>Job Alerts <Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>New Message<Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Application View <Checkbox /></h3>
                  </li>
                  {/* <li>
                    <h3 className='flexSpacebetween'>Who have a default profile photo <Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who haven’t confirmed their email<Checkbox /></h3>
                  </li>
                  <li>
                    <h3 className='flexSpacebetween'>Who haven’t confirmed their phone number<Checkbox /></h3>
                  </li> */}
                   
                </ul>
              </div>
      
              <p>Choose to filter out content such as duplicate or automated posts.
                This doesn’t apply to notifications from accounts you follow or have interacted with recently.
                <Link to="#">Learn more</Link>
              </p>
            </div>
            </div>
          </div>
        </>
      
      {/* {showPreference && !showPushPreference && !showEmailPreference &&
        <>
          <div className='settingBox'>
          <div className='settingsheader'>        
            <Link to="#" onClick={() => setShowPreference(false)}><ArrowLeftOutlined /> </Link>
              <h2>Preferences</h2>             
            </div>
            <div className='settingcntbox'> 
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
          </div>
        </>
      }
      {showPushPreference &&
        <>
           <div className='settingBox'>
           <div className='settingsheader'>      
                <Link to="#" onClick={() => changeStep('preference')}><ArrowLeftOutlined /> </Link>
                  <h2>Push notifications</h2>             
                </div>
           
                <div className='settingcntbox'> 
              <h1>Turn on Notifications?</h1>
            </div>
          </div>
        </>
      }
      {showEmailPreference &&
        <>
          <div className='settingBox'>
          <div className='settingsheader'>      
                <Link to="#" onClick={() => changeStep('preference')}><ArrowLeftOutlined /> </Link>
                  <h2>Email notifications</h2>             
                </div>
          
             
               <div className='settingcntbox'> 
                  <div>
                    <p>Email notifications <Checkbox onChange={(e) => setEnableEmailNotification(e.target.checked)} /></p>
                    <p>Get emails to find out what’s going on when you’re not on K4M2A. You can turn them off anytime.
                      <Link to="#"> Learn more</Link>
                    </p>
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
              </div>
        </>
      } */}
    </>
  )
};

export default Notifications;
