const actions = {
    BOOKMARK_JOB_BEGIN: 'BOOKMARK_JOB_BEGIN',
    BOOKMARK_JOB_SUCCESS: 'BOOKMARK_JOB_SUCCESS',
    BOOKMARK_JOB_ERR: 'BOOKMARK_JOB_ERR',

    bookmarkJobBegin: () => {
        return {
            type: actions.BOOKMARK_JOB_BEGIN,
        };
    },

    bookmarkJobSuccess: (bookmarkjobs) => {
        return {
            type: actions.BOOKMARK_JOB_SUCCESS,
            bookmarkjobs,
        };
    },

    bookmarkJobErr: (err) => {
        return {
            type: actions.BOOKMARK_JOB_ERR,
            err,
        };
    },
};

export default actions;