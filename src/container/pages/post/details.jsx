/* eslint-disable react/prop-types, react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';
import PostComponent from './index';
import UploadPost from "./uploadPost";
// eslint-disable-next-line import/no-cycle
import CommentComonent from '../comment'
import RightSideBarComponent from '../rightsidebar';
import { DataService } from '../../../config/dataService/dataService';

const PostDetails = (props) => {
    const { NotificationPostId } = props;
    const { postId } = useParams();
    const [postObj, setpostObj] = useState(null);
    const history = useHistory();
    const handleViewPost = async (postId) => {
        const res = await DataService.get(`Post/GetPostById?postId=${postId}`)
        if (res.data.message === "Success") 
        {
            setpostObj(res.data.result[0]);
        }
    };

    useEffect(() => {
        if(postId > 0){
        handleViewPost(postId);
        }
    }, [postId])

    useEffect(() => {
        if(NotificationPostId > 0){
        handleViewPost(NotificationPostId);
        }
    }, [NotificationPostId])

    const post = postObj?.postMessage?.length > 0 ? JSON.parse(postObj?.postMessage) : {};
    return (
        postObj &&
        <>
            <div className={postId > 0 ? 'cntpagecomponent' : ''}>
                <div className={postId > 0 ? 'centersidebarcontent flexcolumn mt56' : ''}>
                {postId > 0 && 
                    <div className="userNamedetails headerBox">
                        <h2>
                            <Button className='btn-primary btnback'  onClick={() => history.goBack()}>
                                <img src={require('../../../static/images/icon_back.png')} alt="" />
                            </Button>

                        </h2>
                    </div>}
                    {post &&
                        <>
                             <PostComponent post={post} NotificationId={NotificationPostId}
                                createdDate={postObj.createdDate}
                                type="detail" className="notificat" />
                            {postId > 0 && 
                            <>
                            <UploadPost placeholder={`Reply to @${post.userName}`} type="comment" parentid={postObj.id} />
                            <CommentComonent post={postObj} />
                            </>}
                        </>
                    }
                    
                </div>
                {postId > 0 && <RightSideBarComponent />}
            </div>
        </>
    )
}

export default PostDetails;