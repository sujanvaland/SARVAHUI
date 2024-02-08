import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';


const { getAmaRequest, getAmaSuccess, getAmaErr, setNoPost, setPageNo, } = actions;

const askMeAnything = (pageobj) => {

    return async (dispatch, getState) => {
        try {

            const currpage = getState().ama?.pageno
            const nopostflag = getState().ama?.nopost

            if (currpage < pageobj.pageNo && !nopostflag) {

                dispatch(getAmaRequest());

                const res = await DataService.post('Post/GetAllPosts', pageobj)
                if (res.data.message === "Success") {
                    if (res.data.result.length > 0) {
                        dispatch(getAmaSuccess(res.data.result));
                          dispatch(setPageNo(pageobj.pageNo))
                    }
                    else {
                          dispatch(setNoPost(true))
                    }
                }
                else {
                    getAmaErr("Error")
                    message.error("Something went wrong")
                }
            } else {
                dispatch(getAmaErr("No data"));
            }
        } catch (err) {
            dispatch(getAmaErr(err));
        }
    };
}

export default askMeAnything;