import React, { useEffect, useState } from 'react';
import { Checkbox } from 'antd';
// import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeSetting, GetSetting } from '../../../redux/postJob/actionCreator';

const Notifications = () => {

  const dispatch = useDispatch();
  const [jobAlert, setjobAlert] = useState(false);
  const [newMessage, setNewMessage] = useState(false);
  const [applicationView, setApplicationView] = useState(false);
  const [newApplication, setNewApplication] = useState(false);

  const { loginUser, userattribute, notifyLoading } = useSelector((state) => {
    return {
      loginUser: state.auth.login,
      userattribute: state.postJob?.getSetting,
      notifyLoading: state.postJob?.isnotifyloading,
    };
  });

  useEffect(() => {
    dispatch(GetSetting());
  }, [])

  useEffect(() => {
    const mutejobAlert = userattribute?.filter(x => x.keyName === "jobalert");
    if (mutejobAlert) {
      const stringValue = mutejobAlert[0]?.value;
      const boolValue = stringValue === "true";
      console.log("data", mutejobAlert, stringValue, boolValue);
      setjobAlert(boolValue);
    };

    const mutenewMessage = userattribute?.filter(x => x.keyName === "newmessage");
    if (mutenewMessage) {
      const stringValue = mutenewMessage[0]?.value;
      const boolValue = stringValue === "true";
      console.log("data", mutejobAlert, stringValue, boolValue);

      setNewMessage(boolValue);
    };

    const muteapplicationView = userattribute?.filter(x => x.keyName === "applicationview");
    if (muteapplicationView) {
      const stringValue = muteapplicationView[0]?.value;
      const boolValue = stringValue === "true";
      console.log("data", muteapplicationView, stringValue, boolValue);
      setApplicationView(boolValue);

    };

    const mutenewApplication = userattribute?.filter(x => x.keyName === "newapplication");
    if (mutenewApplication) {
      const stringValue = mutenewApplication[0]?.value;
      const boolValue = stringValue === "true";
      setNewApplication(boolValue);
    };

  }, [userattribute])

  const handleNotifications = (e, value) => {
    const req = {
      userId: loginUser.id,
      keyName: value,
      value: e.target.checked.toString(),
    };
    dispatch(ChangeSetting(req));

    if (value === "jobalert") {
      setjobAlert(e.target.checked);
    }
    if (value === "newmessage") {
      setNewMessage(e.target.checked);
    }
    if (value === "applicationview") {
      setApplicationView(e.target.checked);
    }
    if (value === "newapplication") {
      setNewApplication(e.target.checked);
    }
  }

  return (
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
              {!notifyLoading &&
                <>
                  <ul>
                    <li>
                      <h3 className='flexSpacebetween'>Job Alerts
                        <Checkbox onChange={(e) => handleNotifications(e, "jobalert")} checked={jobAlert} /></h3>
                    </li>
                    <li>
                      <h3 className='flexSpacebetween'>New Message
                        <Checkbox onChange={(e) => handleNotifications(e, "newmessage")} checked={newMessage} /></h3>
                    </li>
                    <li>
                      <h3 className='flexSpacebetween'>Application View
                        <Checkbox onChange={(e) => handleNotifications(e, "applicationview")} checked={applicationView} /></h3>
                    </li>
                    <li>
                      <h3 className='flexSpacebetween'>New Application Received
                        <Checkbox onChange={(e) => handleNotifications(e, "newapplication")} checked={newApplication} /></h3>
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
                </>
              }
            </div>

            <p>Choose to filter out content such as duplicate or automated posts.
              This doesn’t apply to notifications from accounts you follow or have interacted with recently.
              <Link to="#">Learn more</Link>
            </p>
          </div>
        </div>
      </div>

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
