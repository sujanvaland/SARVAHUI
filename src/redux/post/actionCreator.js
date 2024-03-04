// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { getAllCommnets } from '../reaction/actionCreator';

// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';

const { postUploadRequest, postUploadSuccess, postUploadErr, timelineRequest,
  timelineSuccess, timelinePostSuccess, timelineError, setUploadProgress,
  deletePostRequest, deletePostSuccess, deletePostError,
  getPostDetailsReq, getPostDetailsSuccess, getPostDetailsError,
  extractMetaRequest, extractMetaSuccess, extractMetaErr,
  bookmarksRequest, bookmarksSuccess, bookmarksError, setPageNo, setProfilePageNo,
  blockPostRequest, blockPostSuccess, blockPostError, setNoPost,
  repostRequest, repostSuccess, repostErr, getPostByIdRequest, getPostByIdSuccess, getPostByIdError,
  savePollPostRequest, savePollPostSuccess, savePollPostErr,
  savePollVoteRequest, savePollVoteSuccess, savePollVoteErr,
  getPollDetailsRequest,getPollDetailsSuccess, getPollDetailsErr, getUserProfileTimelineRequest,
  getUserProfileTimelineSuccess, getUserProfileTimelineErr, updateNewPostCount,
  changeWhoCanReplyRequest, changeWhoCanReplySuccess, changeWhoCanReplyErr,
  pinUnpinPostRequest, pinUnpinPostSuccess, pinUnpinPostErr,
  getMentionListRequest, getMentionListSuccess, getMentionListError } = actions;


const updateNewPostCountReq = (newpostcount) => {
  return async (dispatch) => {
    dispatch(updateNewPostCount(newpostcount))
  }
}

const savePoll = (poll) => {
  return async (dispatch) => {

    try {
      dispatch(savePollPostRequest());
      const res = await DataService.post('Poll/SavePoll', poll)

      if (res.data.message === "Success") {
        dispatch(savePollPostSuccess(res.data.result))
      }
      else {
        dispatch(savePollPostErr(res))
        message.error("Something Went Wrong")
      }
    }
    catch (err) {
      dispatch(savePollPostErr(err))
      message.error("Something Went Wrong")
    }
  };
}

const getPollDetails = (pollId) => {
  return async (dispatch) => {

    try {
      dispatch(getPollDetailsRequest());
      const res = await DataService.get(`Poll/GetPollDetails?PollId=${pollId}`)
      if (res.data.message === "Success") {
        dispatch(getPollDetailsSuccess(res.data.result))
        // const { timelinedata, userprofiletimelinedetails,bookmarks } = getState().Post;
        // if (timelinedata) {
        //   const indexToUpdate = timelinedata.findIndex(x => x.id === postid);
        //   if (indexToUpdate !== -1) {
        //     const updatedItem = { ...timelinedata[indexToUpdate], poll: res.data.result };
        //     const temptimeline = [...timelinedata.slice(0, indexToUpdate), updatedItem, ...timelinedata.slice(indexToUpdate + 1)];
        //     // Now, updatedTimeline contains the modified array
        //     if (temptimeline) {
        //       dispatch(timelinePostSuccess(temptimeline))
        //     }
        //   }
        // }

        // if (userprofiletimelinedetails) {
        //   const indexToUpdate1 = userprofiletimelinedetails.findIndex(x => x.id === postid);

        //   if (indexToUpdate1 !== -1) {
        //     const updatedItem = { ...userprofiletimelinedetails[indexToUpdate1], poll: res.data.result };
        //     const temptimeline = [...userprofiletimelinedetails.slice(0, indexToUpdate1), updatedItem, ...userprofiletimelinedetails.slice(indexToUpdate1 + 1)];
        //     // Now, updatedTimeline contains the modified array
        //     if (userprofiletimelinedetails) {
        //       dispatch(getUserProfileTimelineSuccess(temptimeline))
        //     }
        //   }
        // }

        // if (bookmarks) {
        //   const indexToUpdate1 = bookmarks.findIndex(x => x.postId === postid);

        //   if (indexToUpdate1 !== -1) {
        //     const updatedItem = { ...bookmarks[indexToUpdate1], poll: res.data.result };
        //     const temptimeline = [...bookmarks.slice(0, indexToUpdate1), updatedItem, ...bookmarks.slice(indexToUpdate1 + 1)];
        //     // Now, updatedTimeline contains the modified array
        //     if (bookmarks) {
        //       dispatch(bookmarksSuccess(temptimeline))
        //     }
        //   }
        // }
      }
      else {
        dispatch(getPollDetailsErr(res))
        message.error("Something Went Wrong")
      }
    }
    catch (err) {
      dispatch(getPollDetailsErr(err))
      message.error("Something Went Wrong")
    }
  };
}

const savePollVote = (data, id) => {
  return async (dispatch) => {

    try {
      dispatch(savePollVoteRequest());
      const res = await DataService.post("Poll/SavePollVote", data)

      if (res.data.message === "Success") {
        dispatch(savePollVoteSuccess(res.data.result))
        dispatch(getPollDetails(data?.pollId, id));
      }
      else {
        dispatch(savePollPostErr(res))
        message.error("Something Went Wrong")
      }
    }
    catch (err) {
      dispatch(savePollVoteErr(err))
      message.error("Something Went Wrong")
    }
  };
}


const getBookmarks = () => {
  return async (dispatch) => {

    try {
      dispatch(bookmarksRequest())
      const res = await DataService.get('Reaction/GetBookmarks')

      if (res.data.message === "Success") {
        dispatch(bookmarksSuccess(res.data.result))
      }
      else {
        dispatch(bookmarksError(res))
        message.error("Something went wrong")
      }
    }
    catch (err) {
      dispatch(bookmarksError(err))
      message.error("Something went wrong")
    }
  };
}

const updateBookmark = (postid) => {
  return async (dispatch) => {
    dispatch(timelineSuccess(postid))
  };
}

const updateTimeline = (updatedtimeline) => {
  return async (dispatch) => {
    dispatch(timelinePostSuccess(updatedtimeline))
  }
}

const updateTimelineSocket = (postid, type) => {
  return async (dispatch, getState) => {

    const { timelinedata } = getState().Post;
    // eslint-disable-next-line eqeqeq
    const temptimeline = timelinedata.map(x => {

      const post = JSON.parse(x.postMessage)

      if (post.id === postid && type === "like") {
        if (post.noOfLikes > 0) {
          post.noOfLikes += 1
        }
        else {
          post.noOfLikes = 1
        }
      }
      else if (post.id === postid && type === "dislike") {
        if (post.noOfLikes) {
          post.noOfLikes -= 1
        }
        else {
          post.noOfLikes = 0
        }
      }
      x.postMessage = JSON.stringify(post)
      return x;
    })

    if (temptimeline) {
      dispatch(timelinePostSuccess(temptimeline))
    }
  }
}

const getPostDetails = (postid) => {
  return async (dispatch, getState) => {
    try {
      dispatch(getPostDetailsReq());

      const { timelinedata } = getState().Post;


      // eslint-disable-next-line eqeqeq
      const temptimeline = timelinedata.filter(x => x.id == postid)[0]

      if (timelinedata) {
        dispatch(getPostDetailsSuccess(temptimeline));
      } else {
        throw new Error('Post not found'); // Or dispatch a specific error action
      }
    } catch (err) {
      dispatch(getPostDetailsError(err));
    }
  };
};



const deletePost = (postid) => {
  return async (dispatch, getState) => {
    try {
      dispatch(deletePostRequest())

      const res = await DataService.post('Post/DeletePost', { id: postid })

      if (res.data.message === "Success") {
        dispatch(deletePostSuccess(postid))
        const newtimeline = getState().Post.timelinedata.filter(x => x.id !== postid)
        dispatch(timelinePostSuccess(newtimeline))
      }
      else {
        dispatch(deletePostError("Something went wrong"))
        message.error("Something went wrong")
      }

    }
    catch (err) {
      deletePostError(err)
      message.error("Something wentwrong")
    }
  }
}


const setProgressBar = (progress) => {
  return async (dispatch) => {
    dispatch(setUploadProgress(progress));
  };
};

const getPostById = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(getPostByIdRequest());
      const res = await DataService.get(`Post/GetPostById?postId=${postId}`)
      if (res.data.message === "Success") {
        dispatch(getPostByIdSuccess(res.data.result));
      }
      else {
        getPostByIdError("Error")
      }
    } catch (err) {
      dispatch(getPostByIdError(err));
    }
  };
}

const GetMentionList = (data) => {
  return async (dispatch) => {
    try {
      dispatch(getMentionListRequest());
      const res = await DataService.post("Post/PostMentionList", { userName: data })
      if (res.data.message === "Success") {
        dispatch(getMentionListSuccess(res.data.result));
      }
      else {
        dispatch(getMentionListError("Error"));
      }
    } catch (err) {
      dispatch(getMentionListError(err));
    }
  };
}


const getTimeline = (pageobj) => {

  return async (dispatch, getState) => {
    try {

      const currpage = getState().Post?.pageno
      const nopostflag = getState().Post?.nopost

      if (currpage < pageobj.pageNo && !nopostflag) {

        dispatch(timelineRequest());

        const res = await DataService.post('Post/GetAllPosts', pageobj)
        if (res.data.message === "Success") {
          if (res.data.result.length > 0) {
            dispatch(timelineSuccess(res.data.result));
            dispatch(setPageNo(pageobj.pageNo))
          }
          else {
            dispatch(setNoPost(true))
          }
        }
        else {
          timelineError("Error")
          message.error("Something went wrong")
        }
      } else {
        dispatch(timelineError("No data"));
      }
    } catch (err) {
      dispatch(timelineError(err));
    }
  };
}

const getUserProfileTimeline = (pageobj) => {

  return async (dispatch, getState) => {
    try {

      const currpage = getState().Post?.profilepageno
      const nopostflag = getState().Post?.nopost

      if (currpage < pageobj.pageNo && !nopostflag) {

        dispatch(getUserProfileTimelineRequest());

        const res = await DataService.post('Post/GetAllPosts', pageobj)
        if (res.data.message === "Success") {
          if (res.data.result.length > 0) {
            dispatch(getUserProfileTimelineSuccess(res.data.result));
            dispatch(setProfilePageNo(pageobj.pageNo))
          }
          else {
            dispatch(setNoPost(true))
            dispatch(getUserProfileTimelineSuccess([]));
          }
        }
        else {
          getUserProfileTimelineErr("Error")
          message.error("Something went wrong")
        }
      } else {
        dispatch(getUserProfileTimelineErr("No data"));
      }
    } catch (err) {
      dispatch(getUserProfileTimelineErr(err));
    }
  };
}

const postUpload = (postfiles, postdata, clearStates) => {

  return async (dispatch, getState) => {
    try {
      dispatch(postUploadRequest());
      const formData = new FormData();
      formData.append("text", JSON.stringify(postdata));
      
      postfiles.forEach((element, i) => {
        formData.append(i.toString(), element)
      });

      const res = await DataService.binaryPost('Post/PostUpload', formData, { 'Content-Type': 'multipart/form-data' }, dispatch)

      if (res.data.message === "Success") {

        clearStates()

        dispatch(postUploadSuccess(res));
        const profile = JSON.parse(localStorage.getItem("profile"))

        const obj = {
          ...res.data.result.post,
          files: res.data.result.files,
          isBookmarked: 0,
          username: profile?.userName,
          profileImg: profile?.profileImg
        }

        if (postdata?.parentId?.toString() === "0") {
          const temptimeline = [obj, ...getState().Post.timelinedata]
          dispatch(timelinePostSuccess(temptimeline))
        }
        else {
          dispatch(getAllCommnets(postdata?.parentId))
        }
      }
      else {
        dispatch(postUploadErr(res))
        message.error("Something went wrong")
      }
    } catch (err) {
      dispatch(postUploadErr(err));
    }
  };
};

const extractMetaFromUrl = (url) => {
  return async (dispatch) => {
    try {
      dispatch(extractMetaRequest());
      const res = await DataService.post('Post/ExtractMetaTags', { url })
      if (res.data.success) {
        dispatch(extractMetaSuccess(res.data.result));
      } else {
        throw new Error('Post not found'); // Or dispatch a specific error action
      }
    } catch (err) {
      dispatch(extractMetaErr(err));
    }
  };
};

const blockUnBlockPost = (postId) => {
  return async (dispatch) => {
    try {
      dispatch(blockPostRequest());
      const res = await DataService.post('Post/BlockUnBlockPost', { postId })

      if (res.data.success) {
        dispatch(blockPostSuccess(res.data.result));
        // const temptimeline = getState().Post.timelinedata.filter(post => post.id !== postId)
        // dispatch(timelinePostSuccess(temptimeline))

      } else {
        throw new Error('Post not found'); // Or dispatch a specific error action
      }
    } catch (err) {
      dispatch(blockPostError(err));
    }
  };
};

const repost = (req) => {
  return async (dispatch, getState) => {
    try {
      await dispatch(repostRequest());
      req = {
        "comment": "",
        "postId": req.postId,
        "parentId": 0
      }
      const res = await DataService.post("Post/RePost", req);

      if (res.data.success) {
        dispatch(repostSuccess(res.data.result));
        const temptimeline = getState().Post.timelinedata;
        let idx = -1;

        idx = temptimeline.findIndex(x => x.id === req.postId)

        if (idx !== -1) {
          const message = JSON.parse(temptimeline[idx].postMessage);
          if (message) {
            message.noOfRepost += 1;
          }
          temptimeline[idx].postMessage = JSON.stringify(message);
          dispatch(updateTimeline(temptimeline));
        }
      }
      else {
        message.error("Something went wrong")
        await dispatch(repostErr(res.data.message));
      }
    } catch (err) {
      dispatch(repostErr(err));
    }
  };
};

const changeWhoCanReply = (postId, whoCanReply) => {
  return async (dispatch, getState) => {

    try {
      dispatch(changeWhoCanReplyRequest())
      const res = await DataService.get(`Post/changeWhoCanReply?postId=${postId}&whoCanReply=${whoCanReply}`);
      if (res.data.message === "Success") {
        const { timelinedata } = getState().Post;
        const indexToUpdate = timelinedata.findIndex(x => x.id === postId);
        if (indexToUpdate !== -1) {
          const updatedItem = res.data.result;
          const temptimeline = [...timelinedata.slice(0, indexToUpdate), updatedItem, ...timelinedata.slice(indexToUpdate + 1)];
          // Now, updatedTimeline contains the modified array
          if (temptimeline) {
            dispatch(timelinePostSuccess(temptimeline))
          }
        }
        dispatch(changeWhoCanReplySuccess(res.data?.result))
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(changeWhoCanReplyErr())
    }

  };
};

const pinUnpinPost = (postId) => {
  return async (dispatch,getState) => {

    try {
      dispatch(pinUnpinPostRequest())
      const res = await DataService.get(`Post/PinUnpinPost?postId=${postId}`);
      if (res.data.message === "Success") {
        const { timelinedata } = getState().Post;
        const indexToUpdate = timelinedata.findIndex(x => x.id === postId);
        if (indexToUpdate !== -1) {
          const updatedItem = res.data.result;
          const temptimeline = [...timelinedata.slice(0, indexToUpdate), updatedItem, ...timelinedata.slice(indexToUpdate + 1)];
          // Now, updatedTimeline contains the modified array
          if (temptimeline) {
            dispatch(timelinePostSuccess(temptimeline))
          }
        }
        dispatch(pinUnpinPostSuccess(res.data?.result))
      }
    }
    catch (err) {
      message.error("Something went wrong")
      dispatch(pinUnpinPostErr())
    }
  };
};

export {
  postUpload, getTimeline, getUserProfileTimeline, setProgressBar, updateBookmark,
  updateTimeline, deletePost, getPostDetails, extractMetaFromUrl, updateTimelineSocket,
  getBookmarks, blockUnBlockPost, repost, getPostById, savePoll, savePollVote, getPollDetails,
  updateNewPostCountReq, changeWhoCanReply, pinUnpinPost, GetMentionList
};
