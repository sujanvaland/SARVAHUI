const actions = {
    GET_BOOKMARK_JOB_BEGIN: 'GET_BOOKMARK_JOB_BEGIN',
    GET_BOOKMARK_JOB_SUCCESS: 'GET_BOOKMARK_JOB_SUCCESS',
    GET_BOOKMARK_JOB_ERR: 'GET_BOOKMARK_JOB_ERR',

    getBookmarkJobBegin: () => {
        return {
            type: actions.GET_BOOKMARK_JOB_BEGIN,
        };
    },

    getBookmarkJobSuccess: (bookmarkjobs) => {
        return {
            type: actions.GET_BOOKMARK_JOB_SUCCESS,
            bookmarkjobs,
        };
    },

    getBookmarkJobErr: (err) => {
        return {
            type: actions.GET_BOOKMARK_JOB_ERR,
            err,
        };
    },
};

export default actions;