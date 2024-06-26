import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { Dropdown, Menu } from "antd";
import { ShareAltOutlined, LinkOutlined, UploadOutlined, MailOutlined } from '@ant-design/icons';
import { DiscoverCommunities, LinkDiv } from "../style";
import EventDetailsComponent from "../event/eventDetails";
import { getAllJobs, toggleBookmark } from "../../../redux/postJob/actionCreator";
// import PostComponent from "../post";

 
const Bookmarks = () => {

    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const User = JSON.parse(localStorage.getItem('profile'));

    const [isMore, setIsMore] = useState(true);
    const [PageNo, setPageNo] = useState(1);
    const obj = {
        searchText: '',
        skills: null,
        minSalary: 0,
        maxSalary: 0,
        timePeriod: 0,
        pageNo: 1,
        userType: "bookmarked"
    }

    useEffect(() => {
        dispatch(getAllJobs(obj))
    }, [])

    const handlePageNo = () => {
        setPageNo(PageNo + 1);
        dispatch(getAllJobs({ ...obj, pageNo: PageNo + 1 }));
    }

    const handleToggleBookmark = (data) => {
        dispatch(toggleBookmark(data));
    }

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
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    {/* <div className="userNamedetails headerBox">
                        <h2>Bookmarks</h2>
                    </div> */}
                     <div className='userNamedetails headerBox msgheader'>
                        <h2>Bookmarks</h2>                        
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
                                            {User.loginType === "jobSeeker" ? <>
                                                    <div className="countMembers badgebox">{item.applicationReceived} Application Received</div>
                                                </> : <>
                                                    <Link to={`jobApplication/${item?.id}`} >
                                                        <div className="countMembers badgebox"> View Application ({item.applicationReceived})
                                                        </div>
                                                    </Link>
                                                </>}
                                                <div className="eventRight">
                                                    <Link to="#" onClick={() => handleToggleBookmark({ PostId: item.id })}>
                                                        <svg viewBox="0 0 24 24" aria-hidden="true">
                                                            <g>
                                                                {item.isBookmarked === 1 ? (
                                                                    <path d="M2.849,23.55a2.954,2.954,0,0,0,3.266-.644L12,17.053l5.885,5.853a2.956,2.956,0,0,0,2.1.881,3.05,3.05,0,0,0,1.17-.237A2.953,2.953,0,0,0,23,20.779V5a5.006,5.006,0,0,0-5-5H6A5.006,5.006,0,0,0,1,5V20.779A2.953,2.953,0,0,0,2.849,23.55Z" />
                                                                ) : (
                                                                    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z" />
                                                                )}
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
                            {isMore &&
                                <LinkDiv onClick={() => handlePageNo()} className='btnloadMore'>
                                    Load More
                                </LinkDiv>
                            }
                        </DiscoverCommunities>
                    </div>
                </div>
                {jobData && <EventDetailsComponent jobDetails={jobData} />}
            </div>
        </>
    )
}

export default Bookmarks;