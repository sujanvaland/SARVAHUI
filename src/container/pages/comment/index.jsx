/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal } from 'antd';
import { getAllCommnets } from '../../../redux/reaction/actionCreator';
import PostComponent from '../post';
import UploadPost from '../post/uploadPost';

const CommentComonent = (props) => {
    const {post} = props
    const dispatch = useDispatch();
    const [UploadBoxModel,setUploadBoxModel] = useState(false);
    useEffect(() => {
        if(post){
            dispatch(getAllCommnets(post.id))
        }
      }, [post])

    const { comments } = useSelector((state) => ({
        comments: state?.Reaction?.comments
    }));

    const showUploadBox = (type) =>{
        if(type === "comment"){
            setUploadBoxModel(true);
        }
    }

    return (
        <>
            {
                comments && 
                (
                    comments?.map(comment => {
                        const post = JSON.parse(comment.postMessage)
                        
                        delete post.isBookMarked

                        const obj = {
                        ...post,
                        userId: comment.userId,
                        userName: comment.userName,
                        isBookmarked: comment.isBookmarked,
                        isFollowing: comment.isFollowing,
                        isLiked: comment.isLiked
                        }
                        return (
                            <PostComponent post={obj} createdDate={post.createdOn}
                            showUploadBox={(type)=>showUploadBox(type)}
                            type="detail"/>
                        )
                    })
                )
            }
            {
                UploadBoxModel &&
                <Modal
                    type="primary"
                    title=""
                    visible
                    footer={null}
                    width={600}
                    onCancel={() => setUploadBoxModel(false)}
                    style={{
                    top: 10, // Adjust this value to set the desired top position
                    }}
                    className='postModal'
                >
                    <UploadPost type="comment" replyTo={post.userName} closeModel={() => setUploadBoxModel(false)}/>
                </Modal>
            }
        </>
    );
};

export default CommentComonent;
