import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { uploadFileRequest, uploadFileSuccess, uploadFileErr } = actions;

const FileUploading = (files, path,type) => {

  return async (dispatch) => {
    try {
      dispatch(uploadFileRequest());
      const formData = new FormData();
      formData.append("path", path);
      // files.forEach((element, i) => {
        formData.append("0", files);
      // });

      const res = await DataService.binaryPost('File/UploadFile', formData, { 'Content-Type': 'multipart/form-data' }, dispatch)

      if (res.data.success) {

        dispatch(uploadFileSuccess(res,type));
      }
      else {
        dispatch(uploadFileErr(res))
      }
    } catch (err) {
      dispatch(uploadFileErr(err));
    }
  };
};

const ClearFileUploadState = (type) => {
  return async (dispatch) => {
    dispatch(uploadFileSuccess(null,type));
  }
};


export { FileUploading, ClearFileUploadState };
