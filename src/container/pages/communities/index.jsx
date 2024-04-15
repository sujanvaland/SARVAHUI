import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadingOutlined, SearchOutlined,UserAddOutlined } from '@ant-design/icons';
import { Col, Input, Modal, Radio, Spin } from "antd";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import PostComponent from "../post";
import { getTimeline } from "../../../redux/post/actionCreator";
// import { doConnect } from "../../../redux/onlineusers/actionCreator";
import { Communitiesb,DiscoverCommunities} from '../style';


function Communities () {

    const history = useHistory();
    const dispatch = useDispatch();
    // eslint-disable-next-line no-unused-vars
    const scrollRef = useRef(null);
    const [pageNo, setpageno] = useState(1)
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        dispatch(getTimeline({ pageNo,type:"post" }))
    }, [pageNo])

    // useEffect(() => {
    //     dispatch(doConnect())
    // }, [])

    const { timeline, isLoader } = useSelector((state) => ({
        timeline: state?.Post?.timelinedata,
        isLoader: state?.Post.loading,
    }));

    const handleScroll = () => {

        const { scrollHeight } = document.documentElement;
        const { scrollTop } = document.documentElement;
        const { clientHeight } = document.documentElement;

        // eslint-disable-next-line eqeqeq
        if (scrollTop + clientHeight + 500 > scrollHeight && !isLoader) {
            if (!isLoader) {
                setpageno((prevPage) => prevPage + 1);
            }
        }
    };

    useEffect(() => {
        window.removeEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const handleOk = () => {
        setIsModalOpen(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const [isCreateCommunityModalOpen, setIsCreateCommunityModalOpen] = useState(false);

    const addCommunities = () => {
        setIsModalOpen(true);
    }


    const createCommunity = () => {
        setIsCreateCommunityModalOpen(true);
    }
    const handleCreate = () => {
        setIsCreateCommunityModalOpen(false);
    }
    const handleClose = () => {
        setIsCreateCommunityModalOpen(false);
    }

    return (
        <>
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    <div className="userNamedetails headerBox">                        
                        <h2><Link to="#" onClick={() => history.goBack()} className="btnBacklink">
                            <img src={require('../../../static/images/icon_prevarrow.png')} alt="" />
                        </Link>Communities</h2>
                        <div className="communityHeader">
                        <Link to="#"><SearchOutlined /></Link>
                        <Link to="#" onClick={()=>addCommunities()}><UserAddOutlined />
                        </Link>
                        </div>
                        
                    </div>
                    <div className='wdth100 mdt-50' ref={scrollRef}>
                        <Communitiesb>
                            <div className="communitiesbox">
                               <img src={require('../../../static/images/back1.jpg')} alt=""/>
                               <div className="communitiesName" style={{background:'rgb(175, 14, 90)'}}>
                                   K4Team
                               </div>
                            </div>
                            <div className="communitiesbox">
                               <img src={require('../../../static/images/back2.jpg')} alt=""/>
                               <div className="communitiesName" style={{background:'rgb(141, 32, 144)'}}>
                                    Spiritual
                               </div>
                            </div>
                            <div className="communitiesbox">
                               <img src={require('../../../static/images/back3.jpg')} alt=""/>
                               <div className="communitiesName" style={{background:'rgb(174, 20, 37)'}}>
                                   Good Question
                               </div>
                            </div>
                            <div className="communitiesbox">
                               <img src={require('../../../static/images/back1.jpg')} alt=""/>
                               <div className="communitiesName" style={{background:'rgb(175, 14, 90)'}}>
                                   Meaning of Life
                               </div>
                            </div>
                        </Communitiesb>

                        <DiscoverCommunities className="communitiesBoxDetails">
                            <h3> Discover new Communities </h3>
                            <div className="disCommunities">
                                <div className="comminitiesImage">
                                    <img src={require('../../../static/images/back1.jpg')} alt=""/>
                                </div>                               
                                <div className="rightBox">
                                    <div className="CommunitiesDetails">
                                        <h4>K4M2a Team</h4>
                                        <div className="countMembers"><strong>1.8K</strong> Members</div>
                                    </div>
                                    <div className="joinedMembers">
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="disCommunities">
                                <div className="comminitiesImage">
                                    <img src={require('../../../static/images/back1.jpg')} alt=""/>
                                </div>                               
                                <div className="rightBox">
                                    <div className="CommunitiesDetails">
                                        <h4>K4M2a Team</h4>
                                        <div className="countMembers"><strong>1.8K</strong> Members</div>
                                    </div>
                                    <div className="joinedMembers">
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                        <span className="memPhoto">
                                            <img src={require('../../../static/images/user1.jpg')} alt=""/>
                                        </span>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="btnBox">
                                <Link to="">Show More</Link>
                            </div>
                        </DiscoverCommunities>
                        
                        {
                            isLoader && (
                                <Col xs={24}>
                                    <div className="spin scroll">
                                        <Spin indicator={
                                            <LoadingOutlined
                                                style={{
                                                    fontSize: 24,
                                                }}
                                                spin
                                            />
                                        } />
                                    </div>
                                </Col>
                            )
                        }
                        {
                            timeline?.map((item, index) => {

                                const post = item?.postMessage?.length > 0 ? JSON.parse(item?.postMessage) : {};

                                delete post.isBookMarked

                                const obj = {
                                    ...post,
                                    isBookmarked: item.isBookmarked,
                                    isFollowing: item.isFollowing,
                                    isLiked: item.isLiked,
                                }

                                return (
                                    <PostComponent post={obj} createdDate={item.createdDate} key={index} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={650}>
                gj
            </Modal>

            <Modal open={isModalOpen} className="CommunityModal" onOk={handleOk} onCancel={handleCancel} width={650}>
                <div className="modalheader">
                    <h1>Create a new Community</h1>
                    <Link to="/communities/communityProfile" className='btntabsetting' onClick={createCommunity} name="Create">Create</Link>
                </div>
                <div className="modalBody">
                    <p>Tell us a little about your Community. You can always change these details later.</p>
                    <Input type="text" placeholder="Community Name" required />
                    <br/>
                    <p className="smallfnt">Name must be between 3 and 30 characters and can&apos;t include hastags or @usernames.</p>
                    <Input type="text" placeholder="Community Purpose" required />
                    <p className="smallfnt">A strong purpose describes your Community and lets people know what to expect.</p>
                    <br/>
                    <p><h3>Membership</h3></p>
                    <p className="smallfnt">Control who can join Community. Keep in mind all Communities aare visible to everyone on K4M2A.</p>
                    
                    <br/>
                    <Radio.Group>
                        <Radio name="open"><p>Open</p>
                        <p className="smallfnt"> Anyone can join and/or be invited to the Community.</p></Radio>
                        <br/>
                        <Radio name="restricted"><p>Restricted</p>
                        <p className="smallfnt">People must ask to join, and the mod team must approve those requests. People invited by the mod team are automatically approved.</p></Radio>
                    </Radio.Group>

                    <Input type="text" placeholder="Approval Questions" />
                </div>
            </Modal>
            <Modal open={isCreateCommunityModalOpen} onOk={handleCreate} onCancel={handleClose} width={650}>xyz</Modal>

        </>
    )
}

export default Communities;