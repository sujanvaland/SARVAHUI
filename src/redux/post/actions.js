const actions = {
  POST_UPLOAD_REQUEST: 'POST_UPLOAD_REQUEST',
  POST_UPLOAD_SUCCESS: 'POST_UPLOAD_SUCCESS',
  POST_UPLOAD_ERR: 'POST_UPLOAD_ERR',

  TIMELINE_REQUEST: 'TIMELINE_REQUEST',
  TIMELINE_SUCCESS: 'TIMELINE_SUCCESS',
  TIMELINEPOST_SUCCESS: 'TIMELINEPOST_SUCCESS',
  TIMELINE_ERR: 'TIMELINE_ERR',

  GETPOSTBYID_REQUEST: 'GETPOSTBYID_REQUEST',
  GETPOSTBYID_SUCCESS: 'GETPOSTBYID_SUCCESS',
  GETPOSTBYID_ERR: 'GETPOSTBYID_ERR',

  SET_UPLOAD_PROGRESS: 'SET_UPLOAD_PROGRESS',

  DELETE_POST_REQ: 'DELETE_POST_REQ',
  DELETE_POST_SUCCESS: 'DELETE_POST_SUCCESS',
  DELETE_POST_ERR: 'DELETE_POST_ERR',

  POST_DETAILS_START: 'POST_DETAILS_START',
  POST_DETAILS_SUCCESS: 'POST_DETAILS_SUCCESS',
  POST_DETAILS_ERR: 'POST_DETAILS_ERR',

  POST_EXTRACTMETA_REQUEST: 'POST_EXTRACTMETA_REQUEST',
  POST_EXTRACTMETA_SUCCESS: 'POST_EXTRACTMETA_SUCCESS',
  POST_EXTRACTMETA_ERR: 'POST_EXTRACTMETA_ERR',

  CHANGE_BOOKMARK: "CHANGE_BOOKMARK",

  BOOKMARKS_REQUEST: "BOOKMARKS_REQUEST",
  BOOKMARKS_SUCCESS: "BOOKMARKS_SUCCESS",
  BOOKMARKS_ERR: "BOOKMARKS_ERR",

  SET_PAGENO: "SET_PAGENO",
  SET_PROFILEPAGENO: "SET_PROFILEPAGENO",
  UPDATE_NEWPOST_REQUEST: "UPDATE_NEWPOST_REQUEST",

  BLOCK_POST_REQ: "BLOCK_POST_REQ",
  BLOCK_POST_SUCCESS: "BLOCK_POST_SUCCESS",
  BLOCK_POST_ERR: "BLOCK_POST_ERR",

  SET_NO_POST: "SET_NO_POST",

  REPOST_REQ: "REPOST_REQ",
  REPOST_SUCCESS: "REPOST_SUCCESS",
  REPOST_ERR: "REPOST_ERR",

  SAVE_POLLPOST_REQUEST: "SAVE_POLLPOST_REQUEST",
  SAVE_POLLPOST_SUCCESS: "SAVE_POLLPOST_SUCCESS",
  SAVE_POLLPOST_ERR: "SAVE_POLLPOST_ERR",

  SAVE_POLLVOTE_REQUEST: "SAVE_POLLVOTE_REQUEST",
  SAVE_POLLVOTE_SUCCESS: "SAVE_POLLVOTE_SUCCESS",
  SAVE_POLLVOTE_ERR: "SAVE_POLLVOTE_ERR",

  GET_POLLDETAILS_REQUEST: "GET_POLLDETAILS_REQUEST",
  GET_POLLDETAILS_SUCCESS: "GET_POLLDETAILS_SUCCESS",
  GET_POLLDETAILS_ERR: "GET_POLLDETAILS_ERR",

  GET_USERPROFILETIMELINE_REQUEST: "GET_USERPROFILETIMELINE_REQUEST",
  GET_USERPROFILETIMELINE_SUCCESS: "GET_USERPROFILETIMELINE_SUCCESS",
  GET_USERPROFILETIMELINE_ERR: "GET_USERPROFILETIMELINE_ERR",

  CHANGEWHOCANREPLY_REQUEST: "CHANGEWHOCANREPLY_REQUEST",
  CHANGEWHOCANREPLY_SUCCESS: "CHANGEWHOCANREPLY_SUCCESS",
  CHANGEWHOCANREPLY_ERR: "CHANGEWHOCANREPLY_ERR",

  PINUNPINPOST_REQUEST: "PINUNPINPOST_REQUEST",
  PINUNPINPOST_SUCCESS: "PINUNPINPOST_SUCCESS",
  PINUNPINPOST_ERR: "PINUNPINPOST_ERR",

  GET_MENTIONLIST_REQUEST: 'GET_MENTIONLIST_REQUEST',
  GET_MENTIONLIST_SUCCESS: 'GET_MENTIONLIST_SUCCESS',
  GET_MENTIONLIST_ERR: 'GET_MENTIONLIST_ERR',


  setNoPost: (nopost) => {
    return {
      type: actions.SET_NO_POST,
      nopost
    }
  },

  blockPostRequest: () => {
    return {
      type: actions.BLOCK_POST_REQ,
    }
  },

  blockPostSuccess: (data) => {
    return {
      type: actions.BLOCK_POST_SUCCESS,
      data
    }
  },

  blockPostError: (err) => {
    return {
      type: actions.BLOCK_POST_ERR,
      err
    }
  },

  setPageNo: (pageno) => {
    return {
      type: actions.SET_PAGENO,
      pageno
    }
  },

  setProfilePageNo: (profilepageno) => {
    return {
      type: actions.SET_PROFILEPAGENO,
      profilepageno
    }
  },

  updateNewPostCount: (newpostcount) => {
    return {
      type: actions.UPDATE_NEWPOST_REQUEST,
      newpostcount
    }
  },

  bookmarksRequest: () => {
    return {
      type: actions.BOOKMARKS_REQUEST,
    }
  },

  bookmarksSuccess: (bookmarks) => {
    return {
      type: actions.BOOKMARKS_SUCCESS,
      bookmarks
    }
  },

  bookmarksError: (err) => {
    return {
      type: actions.BOOKMARKS_ERR,
      err
    }
  },

  getPostDetailsReq: () => {
    return {
      type: actions.POST_DETAILS_START,
    }
  },

  getPostDetailsSuccess: (postdetails) => {
    return {
      type: actions.POST_DETAILS_SUCCESS,
      postdetails
    }
  },

  getPostDetailsError: (err) => {
    return {
      type: actions.POST_DETAILS_ERR,
      err
    }
  },

  deletePostRequest: () => {
    return {
      type: actions.DELETE_POST_REQ,
    }
  },

  deletePostSuccess: (data) => {
    return {
      type: actions.DELETE_POST_SUCCESS,
      data
    }
  },

  deletePostError: (err) => {
    return {
      type: actions.DELETE_POST_ERR,
      err
    }
  },

  bookmarkchange: (postid) => {
    return {
      type: actions.CHANGE_BOOKMARK,
      postid
    }
  },

  setUploadProgress: (progress) => {
    return {
      type: actions.SET_UPLOAD_PROGRESS,
      progress
    };
  },

  timelineRequest: () => {
    return {
      type: actions.TIMELINE_REQUEST,
    };
  },

  timelineSuccess: (timelinedata) => {
    return {
      type: actions.TIMELINE_SUCCESS,
      timelinedata,
    };
  },

  timelinePostSuccess: (timelinedata) => {
    return {
      type: actions.TIMELINEPOST_SUCCESS,
      timelinedata,
    };
  },

  timelineError: (err) => {
    return {
      type: actions.TIMELINE_ERR,
      err,
    };
  },

  postUploadRequest: () => {
    return {
      type: actions.POST_UPLOAD_REQUEST,
    };
  },

  postUploadSuccess: (data) => {
    return {
      type: actions.POST_UPLOAD_SUCCESS,
      data,
    };
  },

  postUploadErr: (err) => {
    return {
      type: actions.POST_UPLOAD_ERR,
      err,
    };
  },

  extractMetaRequest: () => {
    return {
      type: actions.POST_EXTRACTMETA_REQUEST,
    };
  },

  extractMetaSuccess: (metaData) => {
    return {
      type: actions.POST_EXTRACTMETA_SUCCESS,
      metaData,
    };
  },

  extractMetaErr: (err) => {
    return {
      type: actions.POST_EXTRACTMETA_ERR,
      err,
    };
  },

  repostRequest: () => {
    return {
      type: actions.REPOST_REQ,
    }
  },

  repostSuccess: (data) => {
    return {
      type: actions.REPOST_SUCCESS,
      data
    }
  },

  repostErr: (err) => {
    return {
      type: actions.REPOST_ERR,
      err
    }
  },

  getPostByIdRequest: () => {
    return {
      type: actions.GETPOSTBYID_REQUEST,
    };
  },

  getPostByIdSuccess: (postdetails) => {
    return {
      type: actions.GETPOSTBYID_SUCCESS,
      postdetails,
    };
  },

  getPostByIdError: (postdetails) => {
    return {
      type: actions.GETPOSTBYID_ERR,
      postdetails,
    };
  },


  getMentionListRequest: () => {
    return {
      type: actions.GET_MENTIONLIST_REQUEST,
    };
  },

  getMentionListSuccess: (getMentionList) => {
    return {
      type: actions.GET_MENTIONLIST_SUCCESS,
      getMentionList,
    };
  },

  getMentionListError: () => {
    return {
      type: actions.GET_MENTIONLIST_ERR,
    };
  },



  savePollPostRequest: () => {
    return {
      type: actions.SAVE_POLLPOST_REQUEST,
    };
  },
  savePollPostSuccess: (pollpostsuccess) => {
    return {
      type: actions.SAVE_POLLPOST_SUCCESS,
      pollpostsuccess,
    };
  },
  savePollPostErr: () => {
    return {
      type: actions.SAVE_POLLPOST_ERR,
    };
  },
  savePollVoteRequest: () => {
    return {
      type: actions.SAVE_POLLVOTE_REQUEST,
    };
  },
  savePollVoteSuccess: (pollvotesuccess) => {
    return {
      type: actions.SAVE_POLLVOTE_SUCCESS,
      pollvotesuccess,
    };
  },
  savePollVoteErr: () => {
    return {
      type: actions.SAVE_POLLVOTE_ERR,
    };
  },
  getPollDetailsRequest: () => {
    return {
      type: actions.GET_POLLDETAILS_REQUEST,
    };
  },
  getPollDetailsSuccess: (polldetails) => {
    return {
      type: actions.GET_POLLDETAILS_SUCCESS,
      polldetails,
    };
  },
  getPollDetailsErr: () => {
    return {
      type: actions.GET_POLLDETAILS_ERR,
    };
  },
  getUserProfileTimelineRequest: () => {
    return {
      type: actions.GET_USERPROFILETIMELINE_REQUEST,
    };
  },
  getUserProfileTimelineSuccess: (userprofiletimelinedetails) => {
    return {
      type: actions.GET_USERPROFILETIMELINE_SUCCESS,
      userprofiletimelinedetails,
    };
  },
  getUserProfileTimelineErr: () => {
    return {
      type: actions.GET_USERPROFILETIMELINE_ERR,
    };
  },

  changeWhoCanReplyRequest: () => {
    return {
      type: actions.CHANGEWHOCANREPLY_REQUEST,
    };
  },
  changeWhoCanReplySuccess: () => {
    return {
      type: actions.CHANGEWHOCANREPLY_SUCCESS,
    };
  },
  changeWhoCanReplyErr: () => {
    return {
      type: actions.CHANGEWHOCANREPLY_ERR,
    };
  },
  pinUnpinPostRequest: () => {
    return {
      type: actions.PINUNPINPOST_REQUEST,
    };
  },
  pinUnpinPostSuccess: (pinunpinpost) => {
    return {
      type: actions.PINUNPINPOST_SUCCESS,
      pinunpinpost,
    };
  },
  pinUnpinPostErr: () => {
    return {
      type: actions.PINUNPINPOST_ERR,
    };
  },
};


export default actions;
