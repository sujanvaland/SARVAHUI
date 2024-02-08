import actions from './actions';

const initialState = {
  data: [],
  timelinedata: [],
  metaData:[],
  loading: false,
  error: null,
  progress: 0,
  postdetails:null
};

const { UPLOAD_FILE_REQUEST, UPLOAD_FILE_SUCCESS, UPLOAD_FILE_ERR } = actions;

const UploadFileReducer = (state = initialState, action) => {
  const { type, getUrl, profileImgUrl, shareImg,backgroundImgUrl, GroupImg, err } = action;

  switch (type) {
    
    case UPLOAD_FILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_FILE_SUCCESS:
      return {
        ...state,
        getUrl,
        shareImg,
        profileImgUrl,
        backgroundImgUrl,
        GroupImg,
        loading: false,
      };
    case UPLOAD_FILE_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };
   
    default:
      return state;
  }
};

export default UploadFileReducer;
