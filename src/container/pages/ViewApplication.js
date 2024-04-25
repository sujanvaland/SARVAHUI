import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { DiscoverCommunities, LinkDiv } from "./style";
import { ApplicationView, GetJobApplication } from "../../redux/postJob/actionCreator";
import { EmptyDMUser, SetDMUser } from "../../redux/chatting/actionCreator";

const JobApplication = () => {

    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const { jobId } = useParams();
    const history = useHistory();
    const User = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        dispatch(GetJobApplication({ jobId }));
        dispatch(EmptyDMUser());
    }, [])

    const { jobApplication } = useSelector((state) => ({
        jobApplication: state?.postJob?.jobApplication,
    }));

    const handleResume = (e, item, id, isview) => {
        console.log("data",isview,id)
        if (!isview && User.loginType === "recruiter") {
            dispatch(ApplicationView({ id }));
        }
        e.preventDefault();
        window.open(item, '_blank');
    };

    const handleDMuser = (id) => {
        dispatch(SetDMUser({ id }))
        history.push('/message');
    }

    return (
        <>
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    <div className="userNamedetails headerBox">
                        <h2>
                            <Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                                <img src={require('../../static/images/icon_prevarrow.png')} alt="" />
                            </Link> Job Application </h2>
                    </div>
                    <div className="wdth100 mdt-50" ref={scrollRef}>
                        <DiscoverCommunities className="communitiesBoxDetails eventDetails">
                            {jobApplication?.map((item) => (
                                <>
                                    <LinkDiv className="disCommunities" >
                                        <div className="rightBox">
                                            <div className="CommunitiesDetails">

                                                <h4><Link to={`/profile/${item?.userName}`}> {`${item.firstName}  ${item.lastName}`}</Link></h4>
                                                <Link to="#" className="btn btn-default mr-3" onClick={(e) => handleResume(e, item.resumeUrl, item.id, item.isViewed)}>
                                                    View Resume
                                                </Link>
                                                <Link to="#" className="btn btn-default mr-3" onClick={() => handleDMuser(item.userId)}>
                                                    Send Message
                                                </Link>
                                            </div>
                                        </div>
                                    </LinkDiv>
                                </>
                            ))}
                        </DiscoverCommunities>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobApplication;