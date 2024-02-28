import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RightSideBarComponent from './rightsidebar';
import PostComponent from './post';
import { getBookmarks } from '../../redux/post/actionCreator';

const Explore = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookmarks());
  }, []);

  const { bookmarks } = useSelector((state) => ({
    bookmarks: state?.Post?.bookmarks,
  }));

  return (
    <>
      <div className="cntpagecomponent">
        <div className="centersidebarcontent flexcolumn mt56">
          <div className="userNamedetails headerBox">
            <h2>Explore K</h2>
          </div>

          {bookmarks?.map((item) => {
            const post = JSON.parse(item?.postMessage);

            const obj = {
              ...post,
              userId: item.userId,
              isBookmarked: item.isBookmarked !== 0,
            };

            return <PostComponent connection={null} post={obj} />;
          })}
        </div>
        <RightSideBarComponent />
      </div>
    </>
  );
};

export default Explore;
