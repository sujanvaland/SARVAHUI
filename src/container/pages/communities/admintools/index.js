/* eslint-disable import/no-cycle */
import React, { useState } from "react";
import { RightOutlined } from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Rules from "./rules";
import Members from "./members";
import Settings from "./settings";
import CommunityList from "./communitylist";
import SpotlightYourCommunity from "./spotlightYourCommunity";
import { ChatMainBox, MessageMainBox, MessageMainBoxInner } from "../../style";


const CommunitySetting = () => {


    const [showMemberBox, setShowMemberBox] = useState(false);
    const [showRuleBox, setShowRuleBox] = useState(false);
    const [showSettingBox, setShowSettingBox] = useState(false);
    const [showCommunityListBox, setShowCommunityListBox] = useState(false);
    const [showSpotlightModal, setShowSpotlightModal] = useState(false);

    const handleSpotlightModal = () => {
        setShowSpotlightModal(true);
    };

    const handleSpotlightModalClose = () => {
        setShowSpotlightModal(false);
    };


    const changeStep = (step) => {
        setShowMemberBox(false);
        setShowRuleBox(false);
        setShowSettingBox(false);
        setShowCommunityListBox(false);
        switch (step) {
            case 'showMemberBox':
                setShowMemberBox(true);
                break;
            case 'showRuleBox':
                setShowRuleBox(true);
                break;
            case 'showSettingBox':
                setShowSettingBox(true);
                break;
            case 'showCommunityListBox':
                setShowCommunityListBox(true);
                break;
            default:
                break;
        }
    };


    const history = useHistory();

    return (
        <>

            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56 messageBoxDiv hideBox'>
                    <div className='userNamedetails headerBox msgheader'>
                        <h2><Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                            <img src={require('../../../../static/images/icon_back.png')} alt="" />
                        </Link>
                            Admin Tools</h2>

                    </div>
                    <h3>Review needed</h3>
                    <MessageMainBox className="msgUser" >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Reported posts</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    <MessageMainBox className="msgUser" >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Member requests</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    <h3>Community management</h3>
                    <MessageMainBox className="msgUser" onClick={() => changeStep('showMemberBox')} >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Members</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    <MessageMainBox className="msgUser" onClick={() => changeStep('showRuleBox')}>
                        <MessageMainBoxInner >
                            <div className="nameMsgBox">
                                <span className="uname">Rules</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    <MessageMainBox className="msgUser" onClick={() => changeStep('showSettingBox')} >
                        <MessageMainBoxInner>
                            <div className="nameMsgBox">
                                <span className="msgUser">Settings</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    {/* <MessageMainBox className="msgUser" onClick={() => changeStep('showCommunityListBox')} >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Community List</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox> */}
                    <MessageMainBox className="msgUser" onClick={handleSpotlightModal} >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Spotlight your Community</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                    <MessageMainBox className="msgUser"  >
                        <MessageMainBoxInner  >
                            <div className="nameMsgBox">
                                <span className="uname">Support and resources</span>
                            </div>
                            <div className="rightbtnsbox">
                                <RightOutlined />
                            </div>
                        </MessageMainBoxInner>
                    </MessageMainBox>
                </div>
                <div className="rightsidebarcntbox messageChat ">
                    <div className="rightsidecntbox scrollbox">
                        <ChatMainBox className="conversionInfoBox">

                            {showMemberBox &&
                                <Members />
                            }

                            {showRuleBox &&
                                <Rules />
                            }

                            {showSettingBox &&
                                <Settings />
                            }

                            {showCommunityListBox &&
                                <CommunityList />
                            }
                        </ChatMainBox>
                    </div>
                    <SpotlightYourCommunity visible={showSpotlightModal} onClose={handleSpotlightModalClose} />
                </div>
            </div>
        </>
    )
}
export default CommunitySetting;