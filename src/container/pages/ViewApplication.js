import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { DiscoverCommunities, LinkDiv } from "./style";
import { GetJobApplication } from "../../redux/postJob/actionCreator";

const JobApplication = () => {

    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const { jobId } = useParams();

    useEffect(() => {
        dispatch(GetJobApplication({ jobId }))
    }, [])

    const { jobApplication } = useSelector((state) => ({
        jobApplication: state?.postJob?.jobApplication,
    }));


    const handleResume = (e, item) => {
        e.preventDefault();
        window.open(item, '_blank');
    };

    return (
        <>
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    <div className="userNamedetails headerBox">
                        <h2>Job Application </h2>
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