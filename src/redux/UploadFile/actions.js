const actions = {
  UPLOAD_FILE_REQUEST: 'UPLOAD_FILE_REQUEST',
  UPLOAD_FILE_SUCCESS: 'UPLOAD_FILE_SUCCESS',
  UPLOAD_FILE_ERR: 'UPLOAD_FILE_ERR',


  uploadFileRequest: () => {
    return {
      type: actions.UPLOAD_FILE_REQUEST,
    };
  },

  uploadFileSuccess: (data,type) => {
    return {
      type: actions.UPLOAD_FILE_SUCCESS,
      getUrl: data,
      shareImg : type === "chatting" ? data : null,
      profileImgUrl: type === "profile" ? data : null,
      backgroundImgUrl: type === "background" ? data : null,
      GroupImg : type === "groupImg" ? data : null,
      resumeUrl: type === "resume" ? data : null,

    };
  },

  uploadFileErr: (err) => {
    return {
      type: actions.UPLOAD_FILE_ERR,
      err,
    };
  },

};

export default actions;
