// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';
import { getBookmarks, updateTimeline } from '../post/actionCreator';


const { commentRequest, commnetSuccess, commentErr,
  getCommentRequest, getCommnetSuccess, getCommentErr,
  bookmarkRequest, bookmarkSuccess, bookmarkErr,
likeErr, likeSuccess, likeRequest } = actions;

const toggleBookmark = (req) => {
  return async (dispatch, getState) => {
    try {
      await dispatch(bookmarkRequest());

      const res = await DataService.post("Reaction/ToggleBookmark", req);

      if (res.data.success) {
        dispatch(bookmarkSuccess(res.data.result));
        
        dispatch(getBookmarks())

        const temptimeline = getState().Post.timelinedata;
        let idx = -1;

        idx = temptimeline.findIndex(x => x.id === req.postId)

        if (idx !== -1) {

          if (res.data.result.type === "bookmark") {
            temptimeline[idx].isBookmarked = !temptimeline[idx].isBookmarked
          }
          dispatch(updateTimeline(temptimeline));
        }
      }
      else {
        message.error("Something went wrong")
        await dispatch(bookmarkErr(res.data.message));
      }
    } catch (err) {
      dispatch(bookmarkErr(err));
    }
  };
};


const getAllCommnets = (PostId) => {

  return async (dispatch) => {
    try {
      
      dispatch(getCommentRequest());

        const res = await DataService.post('Reaction/GetAllCommnets',{PostId})

        if (res.data.message === "Success") {

          const commentlist = res.data.result

          dispatch(getCommnetSuccess(commentlist));
          
        }
        else {
          commentErr("Error")
          message.error("Something went wrong")
        }
      }
     catch (err) {
      dispatch(getCommentErr(err));
    }
  };

  // return async (dispatch) => {
  //   try {
  //     await dispatch(getCommentRequest());

  //     const res = await DataService.post("Reaction/GetAllCommnets", req);
  //     if (res.data.success) {

  //       let sortedResult = res.data.result.sort((a, b) => {
  //         // Convert string dates to Date objects for proper comparison
  //         const dateA = new Date(a.createdDate);
  //         const dateB = new Date(b.createdDate);
        
  //         // Compare the dates in descending order
  //         return dateB - dateA;
  //       });

  //       sortedResult = sortedResult.map(item => {
  //         return {
  //           ...item,
  //           message:JSON.parse(res.data.result.message)
  //         }
  //       })

  //       dispatch(getCommnetSuccess(sortedResult));
  //     }
  //     else {
  //       toast.error("Something went wrong")
  //       await dispatch(getCommentErr(res.data.message));
  //     }
  //   } catch (err) {
  //     dispatch(getCommentErr(err));
  //   }
  // };
};

const doComment = (req) => {
  return async (dispatch) => {
    try {
      await dispatch(commentRequest());

      const res = await DataService.post("Reaction/InsertComment", req);
      if (res.data.success) {
        dispatch(commnetSuccess(res.data.result));
        // dispatch(getAllCommnets({ postId: req.postId }))
      }
      else {
        message.error("Something went wrong")
        await dispatch(commentErr(res.data.message));
      }
    } catch (err) {
      dispatch(commentErr(err));
    }
  };
};

const toggleLike = (req) => {
  return async (dispatch, getState) => {
    try {
      await dispatch(likeRequest());

      const res = await DataService.post("Reaction/ToggleLike", req);

      if (res.data.success) {
        dispatch(likeSuccess(res.data.result));
        
        const temptimeline = getState().Post.timelinedata;
        let idx = -1;

        idx = temptimeline.findIndex(x => x.id === req.postId)

        if (idx !== -1) {
          temptimeline[idx].isLiked = !temptimeline[idx].isLiked
          const message = JSON.parse(temptimeline[idx].postMessage);
          if(message){
            if(temptimeline[idx].isLiked){
              message.noOfLikes += 1;
            }else if(message.noOfLikes > 0){
                message.noOfLikes -= 1;
            }
          }
          temptimeline[idx].postMessage = JSON.stringify(message);
          dispatch(updateTimeline(temptimeline));
        }
      }
      else {
        message.error("Something went wrong")
        await dispatch(likeErr(res.data.message));
      }
    } catch (err) {
      dispatch(likeErr(err));
    }
  };
}


export { doComment, getAllCommnets, toggleBookmark, toggleLike };
