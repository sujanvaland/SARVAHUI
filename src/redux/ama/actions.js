const actions = {
    GET_AMA_REQUEST: 'GET_AMA_REQUEST',
    GET_AMA_SUCCESS: 'GET_AMA_SUCCESS',
    GET_AMA_ERR: 'GET_AMA_ERR',

    SET_NO_POST: "SET_NO_POST",
    SET_PAGENO: "SET_PAGENO",


    setNoPost: (nopost) => {
        return {
            type: actions.SET_NO_POST,
            nopost
        }
    },
    setPageNo: (pageno) => {
        return {
            type: actions.SET_PAGENO,
            pageno
        }
    },
    getAmaRequest: () => {
        return {
            type: actions.GET_AMA_REQUEST,
        }
    },

    getAmaSuccess: (amadata) => {
        return {
            type: actions.GET_AMA_SUCCESS,
            amadata,
        }
    },

    getAmaErr: () => {
        return {
            type: actions.GET_AMA_ERR,
        }
    },
};

export default actions;