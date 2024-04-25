import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { ShareAltOutlined, LinkOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import { Link, useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import EventDetailsComponent from './eventDetails';
import { DiscoverCommunities, LinkDiv } from '../style';
import { toggleBookmark, getJobDetails } from '../../../redux/postJob/actionCreator';

function ViewJobComponent() {

    const { jobId } = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    const { jobDetails } = useSelector((state) => ({
        jobDetails: state?.postJob?.jobpostdetails,
    }));
    const User = JSON.parse(localStorage.getItem('profile'));

    const scrollRef = useRef(null);

    const handleToggleBookmark = (data) => {
        dispatch(toggleBookmark(data));
    };

    useEffect(() => {
        if (jobId > 0) {
            dispatch(getJobDetails({ jobId }));
        }
    }, [jobId]);

    const shareMenu = (
        <Menu>
            <Menu.Item>
                <LinkOutlined /> Copy Link
            </Menu.Item>
            <Menu.Item>
                <UploadOutlined /> Share post via...
            </Menu.Item>
            <Menu.Item>
                <MailOutlined /> Send via Direct Message
            </Menu.Item>
        </Menu>
    );

    const dropdownClassName = 'reportdropdown';

    return (
        <>
            <div className="cntpagecomponent">
                <div className="centersidebarcontent flexcolumn mt56">
                    <div className='userNamedetails headerBox msgheader'>
                        <h2><Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                            <img src={require('../../../static/images/icon_prevarrow.png')} alt="" />
                        </Link>{jobDetails?.jobTitle}</h2>
                    </div>
                    <div className="wdth100 mdt-50" ref={scrollRef}>
                        <DiscoverCommunities className="communitiesBoxDetails eventDetails">
                            <LinkDiv className="disCommunities" >
                                <div className="rightBox">
                                    <div className="CommunitiesDetails">
                                        {
                                            jobDetails?.dateOfApplication !== undefined && jobDetails?.dateOfApplication !== null && jobDetails?.dateOfApplication !== "" &&
                                            <div className="countMembers"><p>{jobDetails?.dateOfApplication}</p></div>
                                        }
                                        <h4>{jobDetails?.jobTitle}</h4>
                                        <div className="countMembers"><p>{jobDetails?.jobDescription}</p>  </div>
                                    </div>
                                    <div className="eventBottom">
                                        {(User.loginType !== "admin" && User.id !== jobDetails?.postedById) ? <>
                                            <div className="countMembers badgebox">{jobDetails?.applicationReceived} Application Received</div>
                                        </> : <>
                                            <Link to={`/jobApplication/${jobDetails?.id}`} >
                                                <div className="countMembers badgebox"> View Application ({jobDetails?.applicationReceived})
                                                </div>
                                            </Link>
                                        </>}
                                        <div className="eventRight">
                                            <Link to="#" onClick={() => handleToggleBookmark({ PostId: jobDetails?.id })}>
                                                <svg viewBox="0 0 24 24" aria-hidden="true">
                                                    <g>
                                                        {jobDetails?.isBookmarked === 1 ? (
                                                            <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
                                                        ) : (
                                                            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                                                        )}
                                                    </g>
                                                </svg>
                                            </Link>
                                            <Link to="#">
                                                <Dropdown
                                                    overlay={shareMenu}
                                                    trigger={['click']}
                                                    overlayClassName={dropdownClassName}
                                                    placement="bottomRight"
                                                    width={100}
                                                >
                                                    <ShareAltOutlined />
                                                </Dropdown>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </LinkDiv>
                        </DiscoverCommunities>
                    </div>
                </div>
                {jobId > 0 && <EventDetailsComponent />}
            </div>
        </>
    );
}

export default ViewJobComponent;
