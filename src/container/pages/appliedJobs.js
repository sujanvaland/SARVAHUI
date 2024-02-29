/* eslint-disable import/named */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Dropdown, Menu } from 'antd';
import { ShareAltOutlined, LinkOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import EventDetailsComponent from './event/eventDetails';
import { DiscoverCommunities, LinkDiv } from './style';
import { getAllJobs } from '../../redux/postJob/actionCreator';

function appliedJobs() {
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getAllJobs());
    }, []);

    const { jobDetails } = useSelector((state) => ({
        jobDetails: state?.postJob?.jobDetails,
        isLoader: state?.Post.loading,
    }));

    const scrollRef = useRef(null);

    const [jobData, SetJobData] = useState();

    const handleJobData = (item) => {
        // message.success('I was clicked');
        console.log('item');
        console.log(item);
        SetJobData(item);
    };

    const shareMenu = (
        <Menu>
            <Menu.Item><LinkOutlined /> Copy Link</Menu.Item>
            <Menu.Item><UploadOutlined /> Share post via...</Menu.Item>
            <Menu.Item><MailOutlined /> Send via Direct Message</Menu.Item>
        </Menu>
    );

    const dropdownClassName = 'reportdropdown';

    return (
        <>
            <div className="cntpagecomponent">
                <div className="centersidebarcontent flexcolumn mt56">
                    <div className="userNamedetails headerBox">
                        <h2>Applied Jobs</h2>
                    </div>
                    <div className="wdth100 mdt-50" ref={scrollRef}>
                        <DiscoverCommunities className="communitiesBoxDetails eventDetails">
                            {jobDetails?.map((item) => (
                                <>
                                    <LinkDiv className="disCommunities" onClick={() => handleJobData(item)}>
                                        <div className="rightBox">
                                            <div className="CommunitiesDetails">
                                                <div className="countMembers">{item.dateOfApplication}</div>
                                                <h4>{item.jobTitle}</h4>
                                                <div className="countMembers"> {item.jobDescription} </div>
                                            </div>
                                            <div className="eventBottom">
                                                <div className="countMembers">{item.applicationReceived} Application Received</div>
                                                <div className="eventRight">
                                                    <Link to="#">
                                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                                            <g>
                                                                <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                                                            </g>
                                                        </svg>
                                                    </Link>
                                                    <Link to="#">
                                                        <Dropdown overlay={shareMenu} trigger={['click']}
                                                            overlayClassName={dropdownClassName}
                                                            placement="bottomRight" width={100}>
                                                            <ShareAltOutlined />
                                                        </Dropdown>
                                                    </Link>

                                                </div>
                                            </div>
                                        </div>
                                    </LinkDiv>
                                </>
                            ))}
                        </DiscoverCommunities>
                    </div>
                </div>
                {jobData && <EventDetailsComponent jobDetails={jobData} />}
            </div>
        </>
    );
}

export default appliedJobs;