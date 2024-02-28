import { message } from 'antd';
import actions from './actions';
// import { DataService } from '../../config/dataService/dataService';
import initialState from '../../demoData/bookmarkJobs.json';


const { bookmarkJobBegin, bookmarkJobSuccess, bookmarkJobErr } =
    actions;

const getAllBookmarkJobs = () => {
    return async (dispatch) => {
        try {
            dispatch(bookmarkJobBegin());
            if (initialState) {
                dispatch(bookmarkJobSuccess(initialState));
                message.success('Get Bookmarked Jobs Successfull');
            } else {
                dispatch(bookmarkJobErr(null));
                message.error('Get Bookmarked Jobs Failed');
            }
        } catch (err) {
            dispatch(bookmarkJobErr(err));
        }
    };
};
export { getAllBookmarkJobs };
