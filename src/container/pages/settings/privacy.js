import React, { useEffect, useState } from "react";
import { RightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Checkbox, Input, Modal, Radio } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { blockedUserlist } from "../../../redux/profile/actionCreator";

const PrivacyAndSafety = () => {

    const dispatch  = useDispatch();
    const [showTagging, setShowTagging] = useState(false);
    const [showPhotoTagging, setShowPhotoTagging] = useState(false);
    const [enablePhotoTagging, setEnablePhotoTagging] = useState(false);
    const [showYourPost, setShowYourPost] = useState(false);
    const [showLocationOnPost, setShowLocationOnPost] = useState(false);
    const [showProtectModal, setShowProtectModal] = useState(false);
    const [protectCheckboxChecked, setProtectCheckboxChecked] = useState(false);
    const [showBlock, setShowBlock] = useState(false);
    const [showDirectMsg, setShowDirectMsg] = useState(false);
    const [showDiscoverability, setShowDiscoverability] = useState(false);
    const [showManageContacts, setShowManageContacts] = useState(false);

    const { blockedUser } = useSelector((state) => {
        return {
            blockedUser: state.Profile.blockedUser,
        };
    });
    console.log("blockedUser",blockedUser);
    
    useEffect(() => {
        dispatch(blockedUserlist());
    }, [])

    const changeStep = (step) => {
        setShowTagging(false);
        setShowPhotoTagging(false);
        setShowYourPost(false);
        setShowLocationOnPost(false);
        setProtectCheckboxChecked(false);
        setShowBlock(false);
        setShowDirectMsg(false);
        setShowDiscoverability(false);
        setShowManageContacts(false);
        switch (step) {
            case 'tagging':
                setShowTagging(true);
                break;
            case 'phototagging':
                setShowPhotoTagging(true);
                break;
            case 'yourpost':
                setShowYourPost(true);
                break;
            case 'locationonpost':
                setShowLocationOnPost(true);
                break;
            case 'block':
                setShowBlock(true);
                break;
            case 'dm':
                setShowDirectMsg(true);
                break;
            case 'discover':
                setShowDiscoverability(true);
                break;
            case 'contacts':
                setShowManageContacts(true);
                break;
            default:
                break;
        }
    }

    const handleProtectCheckboxChange = () => {
        if (!protectCheckboxChecked) {
            setShowProtectModal(true);
        } else {
            setProtectCheckboxChecked(false);
            setShowProtectModal(false);
        }
    }

    const handleProtectButtonClick = () => {
        setShowProtectModal(false);
        setProtectCheckboxChecked(true);
    }
    return (  
        <>
            {!showTagging && !showPhotoTagging && !showYourPost && !showLocationOnPost &&
                !showBlock && !showDirectMsg && !showDiscoverability && !showManageContacts &&
                <div className='settingBox'>
                     <div className='settingsheader'>
                        <h2>Privacy and safety</h2>
                       
                    </div>
                    <div className='settingcntbox'> 
                        <div>
                        <p>Manage what information you see and share on SARVAH.</p>
                            <h2>Your K4M2A activity</h2>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <Link to="#" onClick={() => changeStep('tagging')}>Audience, media and tagging <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /> </g></svg></Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => changeStep('yourpost')}>Your posts <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /></g></svg></Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => changeStep('block')}>Blocked accounts <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /></g></svg></Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => changeStep('dm')}>Direct Messages <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /></g></svg></Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={() => changeStep('discover')}>Discoverability and contacts <svg viewBox="0 0 24 24" aria-hidden="true"><g><path d="M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" /></g></svg></Link>
                                </li>
                            </ul>
                        </div>
                        <div className="dividerBox">
                            <h2>Learn more about privacy on K4M2A</h2>
                            <ul>
                                <li><Link to="#">Privacy center</Link></li>
                                <li><Link to="#">Privacy policy</Link> </li>
                                <li><Link to="#">Contact us</Link></li>
                            </ul>

                        </div>
                </div>
                </div>
            }
            {showTagging && !showPhotoTagging &&
                <>
                    <div className="settingBox">
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => setShowTagging(false)}><ArrowLeftOutlined /> </Link>
                            <h2>Audience, media and tagging</h2>
                        </div>
                        <div className='settingcntbox'> 
                            <div>
                                <p>Manage what information you allow other people on K4M2A to see.</p>
                            </div>
                            <div>
                                <h3 className="flexSpacebetween">Protect your posts <Checkbox checked={protectCheckboxChecked} onChange={handleProtectCheckboxChange} /> </h3>
                                <p>When selected, your posts and other account information are only visible to people who follow you.
                                    <Link to="#">Learn more</Link></p>
                            </div>
                            <Modal
                                type="primary"
                                title="Are you sure?"
                                visible={showProtectModal}
                                footer={[
                                    <Button type="primary" onClick={handleProtectButtonClick}>Protect my account</Button>,
                                    <Button type="secondary" onClick={() => setShowProtectModal(false)}>Cancel</Button>
                                ]}
                                width={400}
                                top={200}
                                className="reportPost deletePostModal"
                                onCancel={() => setShowProtectModal(false)}
                            >
                                <p>Communities are public, so protecting your account will hide your previous posts. 
                                    You also won’t be able to post in the Community until your account is public again. </p>
                            </Modal>

                            <ul>
                                <li><Link to="#" onClick={() => changeStep('phototagging')}>Photo tagging<RightOutlined /></Link></li>
                            </ul>

                    </div></div>
                </>
            }
            {showPhotoTagging &&
                <>
                    <div className="settingBox">
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => changeStep('tagging')}><ArrowLeftOutlined /> </Link>
                            <h2>Photo tagging</h2>
                        </div>
                        <div className='settingcntbox'> 
                        <div className="formMain">
                            <ul className="martop10">
                                <li>
                                    <div>
                                        <h3 className="flexSpacebetween"><strong>Photo tagging </strong><Checkbox onChange={(e) => setEnablePhotoTagging(e.target.checked)} /></h3>
                                        <p>Allow people to tag you in their photos and receive notifications when they do so.</p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <Radio.Group disabled={!enablePhotoTagging}>
                                            <Radio>Anyone can tag you</Radio>
                                            <Radio>Only people you follow can tag you</Radio>
                                        </Radio.Group>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </>
            }
            {showYourPost && !showLocationOnPost &&
                <>
                    <div className="settingBox">
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => setShowYourPost(false)}><ArrowLeftOutlined /> </Link>
                            <h2>Your posts</h2>
                        </div>
                        <div className='settingcntbox'> 
                            <p>Manage the information associated with your posts.</p>
                            <div>
                                <h3 className="flexSpacebetween">Mark media you post as having material that may be sensitive <Checkbox /></h3>
                                <p>When enabled, pictures and videos you post will be marked as sensitive for people who don’t want to see sensitive content.
                                    <Link to="#">Learn more</Link></p>
                            </div>

                            <ul className="martop10">
                                <li>
                                    <Link to="#" onClick={() => changeStep('locationonpost')}>Add location information to your posts<RightOutlined /></Link>
                                </li>
                            </ul>
                            </div>
                    </div>
                </>
            }
            {showLocationOnPost &&
                <>
                    <div className="settingBox">
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => changeStep('yourpost')}><ArrowLeftOutlined /> </Link>
                            <h2>Add location information to your posts</h2>
                        </div>
                        <div className='settingcntbox'> 
                            <div>
                                <p>If enabled, you will be able to attach location information to your posts.
                                    <Link to="#">Learn more</Link></p>
                            </div>
                            <div>
                                <h3 className="flexSpacebetween">Add location information to your posts <Checkbox /></h3>
                            </div>
                            <div className="btnRedbox deactivatelink martop15">
                                <Link to="#">Remove all location information attached to your post</Link>
                            </div>
                            </div>
                    </div>
                </>
            }
            {showBlock &&
                <>
                    <div className='settingBox'>
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => setShowBlock(false)} ><ArrowLeftOutlined /> </Link>
                            <h2>Block accounts</h2>
                        </div>
                        <div className='settingcntbox'> 
                        <div>
                            <p>Manage the accounts that you’ve blocked.</p>
                        </div>
                        </div>
                    </div>
                </>
            }
            {showDirectMsg &&
                <>
                    <div className='settingBox'>
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => setShowDirectMsg(false)}><ArrowLeftOutlined /> </Link>
                            <h2>Direct Messages</h2>
                        </div>
                        <div className='settingcntbox'> 
                        <div className="formMain">
                            <ul>
                                <li>
                                    <div>
                                        <h4>Allow message requests from:</h4>
                                        <p>People you follow will always be able to message you.
                                            <Link to="#">Learn more</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <Radio.Group>
                                        <Radio>No one </Radio>
                                        <Radio>Verified users </Radio>
                                        <Radio>Everyone </Radio>
                                    </Radio.Group>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="flexSpacebetween">Filter low-quality messages <Checkbox /></h3>
                                        <p>Hide message requests that have been detected as being potentially spam or low-quality.
                                            These will be sent to a separate inbox at the bottom of your message requests.
                                            You can still access them if you want.
                                            <Link to="#">Learn more</Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <h3 className="flexSpacebetween">Show read receipts <Checkbox /></h3>
                                        <p>Let people you’re messaging with know when you’ve seen their messages.
                                            Read receipts are not shown on message requests.
                                            <Link to="#">Learn more</Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </>
            }
            {showDiscoverability && !showManageContacts &&
                <>
                    <div className='settingBox'>
                        <div className='settingsheader'>
                            <Link to="#" onClick={() => setShowDiscoverability(false)}><ArrowLeftOutlined /> </Link>
                            <h2>Discoverability and contacts</h2>
                        </div>
                        <div className='settingcntbox'> 
                            <div>
                                <p>Control your discoverability settings and manage contacts you’ve imported.</p>
                            </div>
                            <div>
                                <div className="formMain">
                                    <ul>
                                        <li>
                                            <div>
                                                <h2>Discoverability</h2>
                                                <p className="padtop">Decide whether people who have your email address or phone number can find and connect with you on K4M2A.</p>
                                            </div>
                                            <div>
                                                <h3 className="flexSpacebetween">Let people who have your email address find you on K4M2A <Checkbox /></h3>
                                                <p>Let people who have your email address find and connect with you on K4M2A.
                                                    <Link to="#">Learn more</Link>
                                                </p>
                                            </div>
                                            <div>
                                                <h3 className="flexSpacebetween">Let people who have your phone number find you on K4M2A <Checkbox /></h3>
                                                <p>Let people who have your phone number find and connect with you on K4M2A.
                                                    <Link to="#">Learn more</Link>
                                                </p>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                                <div>
                                    <h2 className="martop10">Contacts</h2>
                                    <p>Let people who have your phone number find and connect with you on K4M2A.
                                        <Link to="#">Learn more</Link></p>
                                    <ul>

                                        <li>
                                            <Link to="#" onClick={() => changeStep('contacts')}>Manage contacts<RightOutlined /></Link>
                                        </li>

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            }
            {showManageContacts &&
                <>
                    <div className='settingBox'>
                    <div className='settingsheader'>
                            <Link to="#" onClick={() => changeStep('discover')}><ArrowLeftOutlined /> </Link>
                            <h2>Manage Contacts</h2>
                        </div>
                        <div className='settingcntbox'> 
                                <div>
                                    <div className="btnRedbox deactivatelink martop15">
                                        <Link to="#" on>Remove all contacts</Link>
                                    </div>

                                    <div>
                                        <p>These are the contacts that you have imported from your mobile devices.
                                            This information is used to personalize your experience on K4M2A,
                                            such as suggesting accounts to follow.
                                            You can remove any contacts you’ve previously uploaded and turn off syncing with K4M2A on all devices.
                                            Please be aware that this takes a little time.  <Link to="#">Learn more</Link></p>

                                    </div>
                                </div>
                                <div className="dividerBox">
                                    <h2>Confirm your password</h2>
                                    <p>Please enter your password in order to get this.</p>
                                </div>
                                <div className="formMain ">
                                    <ul>
                                        <li>
                                            <Input type="password" placeholder="Password" />
                                            <Link to="#">Forgot password?</Link>
                                        </li>
                                        <li className='flexend'>
                                            <Button className="btnBlack btnrounded">Confirm</Button>
                                        </li>
                                    </ul>
                                </div>
                                </div>
                    </div>
                </>
            }
        </>
    );
}

export default PrivacyAndSafety;