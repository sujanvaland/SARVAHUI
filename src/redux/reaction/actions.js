const actions = {

  INSERT_COMMENT_REQUEST : "INSERT_COMMENT_REQUEST",
  INSERT_COMMENT_SUCCESS : "INSERT_COMMENT_SUCCESS",
  INSERT_COMMENT_ERR : "INSERT_COMMENT_ERR",

  GET_COMMNET_REQ : "GET_COMMNET_REQ",
  GET_COMMNET_SUCCESS : "GET_COMMNET_SUCCESS",
  GET_COMMENT_ERR : "GET_COMMENT_ERR",

  BOOKMARK_REQUEST : "BOOKMARK_REQUEST",
  BOOKMARK_SUCCESS: "BOOKMARK_SUCCESS",
  BOOKMARK_ERR: "BOOKMARK_ERR",

  LIKE_REQ: "LIKE_REQ",
  LIKE_SUCCESS: "LIKE_SUCCESS",
  LIKE_ERR: "LIKE_ERR",

  likeRequest: () => {
    return {
      type: actions.LIKE_REQ,
    };
  },

  likeSuccess: (data) => {
    return {
      type: actions.LIKE_SUCCESS,
      data,
    };
  },

  likeErr: (err) => {
    return {
      type: actions.LIKE_ERR,
      err,
    };
  },

  bookmarkRequest: () => {
    return {
      type: actions.BOOKMARK_REQUEST,
    };
  },

  bookmarkSuccess: (bookmark) => {
    return {
      type: actions.BOOKMARK_SUCCESS,
      bookmark,
    };
  },

  bookmarkErr: (err) => {
    return {
      type: actions.BOOKMARK_ERR,
      err,
    };
  },

  getCommentRequest: () => {
    return {
      type: actions.GET_COMMNET_REQ,
    };
  },

  getCommnetSuccess: (data) => {
    return {
      type: actions.GET_COMMNET_SUCCESS,
      comments:data,
    };
  },

  getCommentErr: (err) => {
    return {
      type: actions.GET_COMMENT_ERR,
      err,
    };
  },

  commentRequest: () => {
    return {
      type: actions.INSERT_COMMENT_REQUEST,
    };
  },

  commnetSuccess: (data) => {
    return {
      type: actions.INSERT_COMMENT_SUCCESS,
      data,
    };
  },

  commentErr: (err) => {
    return {
      type: actions.INSERT_COMMENT_ERR,
      err,
    };
  },

};

export default actions;
