/* eslint-disable no-undef */
import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { WhatsappShareButton, WhatsappIcon, FacebookShareButton, FacebookIcon,
//     TwitterShareButton, TwitterIcon } from 'react-share';
import { Dropdown, Menu, } from 'antd';
import { ShareAltOutlined, LinkOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import { Link , useParams, useHistory} from 'react-router-dom/cjs/react-router-dom.min';
import EventDetailsComponent from '../event/eventDetails';
import { DiscoverCommunities, LinkDiv } from '../style';
// import FindUser from './chatting/findUser';
import { getAllJobs, getJobDetails } from '../../../redux/postJob/actionCreator';


function CandidateAppliedJobs() {

    const dispatch = useDispatch();
    const { userId,userType,userName } = useParams();
    const history = useHistory();

    console.log("data",userType,userName);
    const [isMore, setIsMore] = useState(true);
    const [PageNo, setPageNo] = useState(1);
    const User = JSON.parse(localStorage.getItem('profile'));

    const obj = {
        searchText: '',
        skills: null,
        minSalary: 0,
        maxSalary: 0,
        timePeriod: 0,
        pageNo: 1,
        userType,
        userId,
    }

    useEffect(() => {
        dispatch(getAllJobs(obj));
    }, []);

    const { jobDetails, totalCount, totalSize } = useSelector((state) => ({
        jobDetails: state?.postJob?.jobDetails,
        totalCount: state?.postJob?.totalCount,
        totalSize: state?.postJob?.totalSize,
        isLoader: state?.Post.loading,
    }));

    useEffect(() => {
        const totalPages = Math.ceil(totalCount / totalSize);
        if (PageNo >= totalPages || !totalPages) {
            setIsMore(false);
        } else {
            setIsMore(true);
        }
    }, [jobDetails]);
    const scrollRef = useRef(null);

    const [jobData, SetJobData] = useState(false);

    const handleJobData = (data) => {
        SetJobData(true);
        dispatch(getJobDetails(data));
    };

    const handlePageNo = () => {
        setPageNo(PageNo + 1);
        dispatch(getAllJobs({ ...obj, pageNo: PageNo + 1 }));
    }

    // const copyJobLink = (id) => {
    //     const tempInput = document.createElement('input');
    //     tempInput.value = `${process.env.REACT_APP_BASE_URL}/events/${id}`;
    //     document.body.appendChild(tempInput);
    //     tempInput.select();
    //     document.execCommand('copy');
    //     document.body.removeChild(tempInput);

    //     message.success('Copied to clipboard');
    // };

    // const [shareModalVisible, setShareModalVisible] = useState(false);

    // const showShareModal = () => {
    //     setShareModalVisible(true);
    // }
    // const hideShareModal = () => {
    //     setShareModalVisible(false);
    // };

    // const shareJobLink = `${process.env.REACT_APP_BASE_URL}/events/${id}`;

    // const [directMessage, setDirectMessage] = useState(false);
    // const [ForwardLink, setForwardLink] = useState(null);

    // const handleDirectMessage = (id) => {
    //     const jobLink = `${process.env.REACT_APP_BASE_URL}/event/${id}`;
    //     setForwardLink(jobLink);
    //     setDirectMessage(true);
    // }
    // const handleCloseDirectMessage = () => {
    //     setDirectMessage(false);
    // }

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
                    <h2> <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                                <img src={require('../../../static/images/icon_prevarrow.png')} alt="" />
                            </Link>
                        {userType === "applied" ?
                         `${userName}'s Applied Job`
                        :`${userName}'s Posted Job`
                    }</h2>
                    </div>
                    <div className="wdth100 mdt-50" ref={scrollRef}>
                        <DiscoverCommunities className="communitiesBoxDetails eventDetails">
                            {jobDetails?.map((item) => (
                                <>
                                    <LinkDiv className="disCommunities" onClick={() => handleJobData({ jobId: item.id })}>
                                        <div className="rightBox">
                                            <div className="CommunitiesDetails">
                                                <div className="countMembers">{item.dateOfApplication}</div>
                                                <h4>{item.jobTitle}</h4>
                                                <div className="countMembers"> {item.jobDescription} </div>
                                            </div>
                                            <div className="eventBottom">
                                                {User.loginType === "jobSeeker" ? <>
                                                    <div className="countMembers badgebox">{item.applicationReceived} Application Received</div>
                                                </> : <>
                                                    <Link to={`/jobApplication/${item?.id}`} >
                                                        <div className="countMembers badgebox"> View Application ({item.applicationReceived})
                                                        </div>
                                                    </Link>
                                                </>}
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
                                                    {/* <Modal visible={shareModalVisible} onCancel={hideShareModal} onOk={hideShareModal}>
                                                        <div>
                                                            <WhatsappShareButton url={shareJobLink}>
                                                                <WhatsappIcon size={32} round />
                                                            </WhatsappShareButton>
                                                        </div>
                                                        <div>
                                                            <FacebookShareButton url={shareJobLink}>
                                                                <FacebookIcon size={32} round />
                                                            </FacebookShareButton>
                                                        </div>
                                                        <div>
                                                            <TwitterShareButton url={shareJobLink}>
                                                                <TwitterIcon size={32} round />
                                                            </TwitterShareButton>
                                                        </div>
                                                    </Modal>
                                                    {
                                                        directMessage &&
                                                        <FindUser onClose={handleCloseDirectMessage} ForwardMessage={ForwardLink} IsForward />
                                                    } */}
                                                </div>
                                            </div>
                                        </div>
                                    </LinkDiv>
                                </>
                            ))}
                            {isMore &&
                                <LinkDiv onClick={() => handlePageNo()} className='btnloadMore'>
                                    Load More
                                </LinkDiv>
                            }
                        </DiscoverCommunities>
                    </div>
                </div>
                {jobData && <EventDetailsComponent />}
            </div>
        </>
    );
}

export default CandidateAppliedJobs;