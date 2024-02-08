
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { Namedetails, UserinfoBox } from './style';
import { getUserInfoBox } from '../../redux/UserProfile/actionCreator';
import { connection } from "../../redux/connection/actionCreator";

function UserinfoBoxModel(props) {
    // eslint-disable-next-line react/prop-types
    const { username, showinfoBox, hideinfoBox, isFollowing } = props;
    const dispatch = useDispatch();
    const { userinfo, loginUser } = useSelector((state) => ({
        userinfo: state?.userProfile?.userInfoBox,
        loginUser: state.auth.userprofile,

    }));

    useEffect(() => {
        if (isFollowing !== userinfo?.isFollowedByLoginUser || username !== userinfo?.userName || !userinfo) {
            dispatch(getUserInfoBox(username));
        }
    }, []);

    const handleConnection = () => {
        dispatch(connection(userinfo.id))
        dispatch(getUserInfoBox(username));
    }

    return (
        <>
            {
                userinfo &&
                <UserinfoBox className='postUserdettails showbox' onMouseEnter={showinfoBox} onMouseLeave={hideinfoBox}>
                    <div className='headbpx'>
                        <div className='imgmaindiv'>
                            <Link to={`/profile/${userinfo?.userName}`}>
                                <div className='imgdiv'>

                                    <img src={userinfo.profileImg ? userinfo.profileImg : require('../../static/images/img_userpic.jpg')} alt='' />
                                </div>
                                {userinfo.connectionDetail &&
                                    <span className='greentickicon'>
                                        <img src={userinfo.profileImg ? userinfo.profileImg : require('../../static/images/icon_check.png')} alt='' />
                                    </span>
                                }
                            </Link>
                        </div>
                        {userinfo.userName !== loginUser.userName &&
                            <div className='rightbtns'>
                                <Link to="#" onClick={handleConnection} className="btn btnblack btnfollow">
                                    {userinfo.isFollowedByLoginUser > 0 ? "Unfollow" : "Follow"}
                                </Link>
                            </div>
                        }

                    </div>
                    <Namedetails>
                        <Link to={`/profile/${userinfo?.userName}`}>
                            <>
                                <h6 className="profilename">
                                    {`${userinfo?.firstName} ${userinfo?.lastName}`}
                                    <span>@{userinfo?.userName}</span>
                                </h6>
                                <p>{userinfo.about}</p></></Link>
                    </Namedetails>
                    <div className="followersbox">
                        <Link to="/network/Following"><span>{userinfo.noOfFollowing}</span> Following</Link>
                        <Link to="/network/Follower"><span>{userinfo.noOfFollowers}</span> Followers</Link>
                    </div>
                </UserinfoBox>
            }
        </>
    );
}

export default UserinfoBoxModel;