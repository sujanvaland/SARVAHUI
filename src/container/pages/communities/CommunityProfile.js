import React, { useState } from 'react';
import { Tabs } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { Link, useHistory } from 'react-router-dom';
import RightSideBarComponent from '../rightsidebar';

// import { GetSearchUserProfile } from '../../redux/SearchUsers/actionCreator';

function CommunityProfile() {
  const history = useHistory();
  const [currentTab,setCurrentTab] = useState("1");

  const onTabChange = (key)=>{
    setCurrentTab(key);
  }

  const showSocialLink = () =>{
    onTabChange("7");
  }

  const { TabPane } = Tabs;

  return (
    <>
      <div className="cntpagecomponent userprofilepage">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className="userNamedetails">
            <h2>
                <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                  <img src={require('../../../static/images/icon_prevarrow.png')} alt="" />
                </Link>
            Community Name
            </h2><Link to="./communitysetting" ><SettingOutlined />
                        </Link>
          
          </div>

          <div className="coverPic grayback">
            <img src={require('../../../static/images/img_blueback.jpg')} alt="" />
          </div>
          <div className="userpersondetails">
            <div className="leftcol">
              <div className="personaldetails">
                <div className="usercol">
                  <div className="usernameMainbox">
                   
                    <div className="locaitonbox followers">
                      <ul>
                        <li>
                         Icon
                        </li>
                        <li>
                          icon
                        </li>
                        <li>
                          <Link to="#" onClick={() => showSocialLink()}>
                            {' '}
                             Join
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tabspanel">
            <Tabs defaultActiveKey="1" activeKey={currentTab} className="custom-active-tab" onChange={onTabChange}>
              <TabPane tab="Top" key="1" className="tabcntbox">
              <div className="tabhead">
                    <div>
                      <h3>Add Movies to Profile</h3>
                      <h4>Add Movies you have read </h4>
                    </div>
                  </div>
              </TabPane>
              <TabPane tab="Latest" key="2" className="tabcntbox">
                  <div className="tabhead">
                    <div>
                      <h3>Add Movies to Profile</h3>
                      <h4>Add Movies you have read </h4>
                    </div>
                  </div>
              </TabPane>
              <TabPane tab="Media" key="3" className="tabcntbox">
                  <div className="tabhead">
                    <div>
                      <h3>Add Gurus to Profile</h3>
                      <h4>Add Gurus you have read </h4>
                    </div>
                  </div>
              </TabPane>
              <TabPane tab="About" key="4" className="tabcntbox">
                  <div className="tabhead">
                    <div>
                      <h3>Add Practices to Profile</h3>
                      <h4>Add Practices you have read </h4>
                    </div>
                  </div>
              </TabPane>
            </Tabs>
          </div>
        </div>

        <RightSideBarComponent />

      </div>
    </>
  );
}

export default CommunityProfile;
