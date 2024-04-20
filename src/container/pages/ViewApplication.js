import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { DiscoverCommunities, LinkDiv } from "./style";
import { GetJobApplication } from "../../redux/postJob/actionCreator";
import { EmptyDMUser, SetDMUser } from "../../redux/chatting/actionCreator";

const JobApplication = () => {

    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const { jobId } = useParams();
    const history = useHistory();
    
    useEffect(() => {
        dispatch(GetJobApplication({ jobId }));
        dispatch(EmptyDMUser());
    }, [])

    const { jobApplication } = useSelector((state) => ({
        jobApplication: state?.postJob?.jobApplication,
    }));

    const handleResume = (e, item) => {
        e.preventDefault();
        window.open(item, '_blank');
    };

    const handleDMuser = (id) =>
    {
        dispatch(SetDMUser({id}))
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

                                                <h4>{`${item.firstName}  ${item.lastName}`}</h4>
                                                <Link to="#" className="btn btn-default mr-3" onClick={(e) => handleResume(e, item.resumeUrl)}>
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