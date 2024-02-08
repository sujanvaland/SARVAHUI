import actions from './actions';

const initialState = {
    amadata: [],
    pageno: 0,
}

const { GET_AMA_REQUEST, GET_AMA_SUCCESS, GET_AMA_ERR, } = actions;

const amaReducer = (state = initialState, action) => {
    const { type, amadata } = action;

    switch (type) {
        case GET_AMA_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_AMA_SUCCESS:
            return {
                ...state,
                amadata,
                loading: false,
            };
        case GET_AMA_ERR:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default amaReducer;