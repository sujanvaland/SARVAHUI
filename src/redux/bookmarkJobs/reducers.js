import actions from "./actions";

const initialState = {
    loading: false,
    error: null,
};

const { BOOKMARK_JOB_BEGIN, BOOKMARK_JOB_SUCCESS, BOOKMARK_JOB_ERR } = actions;

const bookmarkJobReducer = (state = initialState, action) => {
    const { type, bookmarkjobs, err } = action;
    switch (type) {
        case BOOKMARK_JOB_BEGIN:
            return {
                ...state,
                postLoading: true,
            };
        case BOOKMARK_JOB_SUCCESS:
            return {
                ...state,
                bookmark: bookmarkjobs,
                postLoading: false,
            };
        case BOOKMARK_JOB_ERR:
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