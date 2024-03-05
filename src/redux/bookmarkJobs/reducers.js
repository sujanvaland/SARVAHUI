import actions from "./actions";

const initialState = {
    loading: false,
    error: null,
};

const { GET_BOOKMARK_JOB_BEGIN, GET_BOOKMARK_JOB_SUCCESS, GET_BOOKMARK_JOB_ERR } = actions;

const bookmarkJobReducer = (state = initialState, action) => {
    const { type, bookmarkjobs, err } = action;
    switch (type) {
        case GET_BOOKMARK_JOB_BEGIN:
            return {
                ...state,
                postLoading: true,
            };
        case GET_BOOKMARK_JOB_SUCCESS:
            return {
                ...state,
                bookmark: bookmarkjobs,
                postLoading: false,
            };
        case GET_BOOKMARK_JOB_ERR:
            return {
                ...state,
                error: err,
                postLoading: false,
            };
        default:
            return state;
    }
};

export default bookmarkJobReducer;