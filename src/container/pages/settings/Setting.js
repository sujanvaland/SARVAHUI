import React, { useState } from 'react';
import '../../../static/css/settingstyle.scss'; 
import { Button } from 'antd';
import Account from './Account';
import PrivacyAndSafety from './privacy';
import Notifications from './Notifications';
import { ChatMainBox,SettingsBox } from '../style';



function Setting() {
  const [showAccountSetting, setShowAccountSetting] = useState(true);
  const [showPrivacySetting, setShowPrivacySetting] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);



  const changeStep = (step) => {
    setShowAccountSetting(false);
    setShowPrivacySetting(false);
    setShowNotifications(false);
    switch (step) {
      case "account":
        setShowAccountSetting(true);
        break;
      case "privacy":
        setShowPrivacySetting(true);
        break;
      case "notify":
        setShowNotifications(true);
        break;
      default:
        break;
    }
  };


  return (
    <>

      <div className='cntpagecomponent'>
        <div className='centersidebarcontent flexcolumn mt56 messageBoxDiv hideBox'>
          <div className='userNamedetails headerBox msgheader'>
            <h2>Settings</h2>
          </div>
          <SettingsBox>
            <ul>
              <li>
                <Button onClick={() => changeStep('account')}>
                    Your account <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/> </g></svg>
                </Button>
                {/* <MessageMainBox className="msgUser"  >
                  <MessageMainBoxInner  >
                    <div className="nameMsgBox">
                      <span className="uname">Your account</span>
                    </div>
                    <div className="rightbtnsbox">
                      <RightOutlined />
                    </div>
                  </MessageMainBoxInner>
                </MessageMainBox> */}
              </li>
              <li>
              <Button onClick={() => changeStep('account')}>
                  Premium <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/> </g></svg>
                </Button>
                {/* <MessageMainBox className="msgUser" >
                  <MessageMainBoxInner  >
                    <div className="nameMsgBox">
                      <span className="uname"></span>
                    </div>
                    <div className="rightbtnsbox">
                      <RightOutlined />
                    </div>
                  </MessageMainBoxInner>
                </MessageMainBox> */}
              </li>
              <li>
                  <Button onClick={() => changeStep('privacy')}>
                  Privacy and safety <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/> </g></svg>
                </Button>
                {/* <MessageMainBox className="msgUser" onClick={() => changeStep('privacy')}>
                  <MessageMainBoxInner  >
                    <div className="nameMsgBox">
                      <span className="uname">Privacy and safety</span>
                    </div>
                    <div className="rightbtnsbox">
                      <RightOutlined />
                    </div>
                  </MessageMainBoxInner>
                </MessageMainBox> */}
              </li>
              <li>
              <Button onClick={() => changeStep('notify')}>
              Notifications  <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/> </g></svg>
                </Button>

                {/* <MessageMainBox className="msgUser" onClick={() => changeStep('notify')}>
                  <MessageMainBoxInner >
                    <div className="nameMsgBox">
                      <span className="uname">Notifications</span>
                    </div>
                    <div className="rightbtnsbox">
                      <RightOutlined />
                    </div>
                  </MessageMainBoxInner>
                </MessageMainBox> */}
              </li>
              <li>
              <Button  >
                   Help Center <svg viewBox="0 0 24 24" aria-hidden="true" ><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z"/> </g></svg>
                </Button>
{/* 
                <MessageMainBox className="msgUser">
                  <MessageMainBoxInner>
                    <div className="nameMsgBox">
                      <span className="msgUser">Help Center</span>
                    </div>
                    <div className="rightbtnsbox">
                      <RightOutlined />
                    </div>
                  </MessageMainBoxInner>
                </MessageMainBox> */}
              </li>
            </ul>
          </SettingsBox>
        </div>
        <div className="rightsidebarcntbox settingsrightbox">
          <div className="rightsidecntbox scrollbox">
            <ChatMainBox className="conversionInfoBox scrolldisable">
              {showAccountSetting &&
                <Account />
              }
              {showPrivacySetting &&
                <PrivacyAndSafety />
              }
              {showNotifications &&
                <Notifications />
              }
            </ChatMainBox>

          </div>
        </div>
      </div>
    </>
  );
}

export default Setting;
