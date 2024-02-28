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
            } else {
                dispatch(bookmarkJobErr(null));
            }
        } catch (err) {
            dispatch(bookmarkJobErr(err));
        }
    };
};
export { getAllBookmarkJobs };
