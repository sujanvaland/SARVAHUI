import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RightSideBarComponent from '../rightsidebar'
import { getBookmarks } from "../../../redux/post/actionCreator";
import PostComponent from "../post";

const Bookmarks = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBookmarks())
    }, [])

    const { bookmarks } = useSelector((state) => ({
        bookmarks: state?.Post?.bookmarks,
    }));


    return (
        <>
            <div className='cntpagecomponent'>
                <div className='centersidebarcontent flexcolumn mt56'>
                    <div className="userNamedetails headerBox">
                        <h2>Bookmarks</h2>
                    </div>

                    {
                        bookmarks?.map(item => {

                            const post = item?.postMessage?.length > 0 ? JSON.parse(item?.postMessage) : {};

                            delete post.isBookMarked
            
                            const obj = {
                              ...post,
                              mainpostId: item.postId,
                              poll: item.poll,
                              isBookmarked: item.isBookmarked,
                              isFollowing: item.isFollowing,
                              isLiked: item.isLiked,
                              userId: item.userId,
                            }
            

                            return (
                                <>
                                    <PostComponent connection={null} post={obj} />
                                    
                                </>
                            )
                        })
                    }
                </div>
                <RightSideBarComponent />
            </div>
        </>
    )
}

export default Bookmarks;