import actions from './actions';
import { DataService } from '../../config/dataService/dataService';
// import initialState from '../../demoData/bookmarkJobs.json';


const { getBookmarkJobBegin, getBookmarkJobSuccess, getBookmarkJobErr } =
    actions;

    const getAllBookmarkJobs = () => {
        return async (dispatch) => {
          try {
            dispatch(getBookmarkJobBegin());
            const response = await DataService.get('Job/GetAllBookmarkJobs');
            if (response.data.success) {
              dispatch(getBookmarkJobSuccess(response.data.result));
            } else {
              dispatch(getBookmarkJobErr(response.data.success));
            }
          } catch (err) {
            dispatch(getBookmarkJobErr(err));
          }
        };
      };

export default getAllBookmarkJobs;
