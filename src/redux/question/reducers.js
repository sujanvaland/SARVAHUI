import actions from './actions';

const initialState = {
  loading: false,
  error: null,
};

const { QUESTION_BEGIN, QUESTION_SUCCESS, QUESTION_ERR,
  ANSWER_BEGIN, ANSWER_SUCCESS, ANSWER_ERR } = actions;

const questionReducer = (state = initialState, action) => {
  const { type, Question, Answer, err } = action;
  switch (type) {
    case QUESTION_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case QUESTION_SUCCESS:
      return {
        ...state,
        Question,
        loading: false,
      };
    case QUESTION_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    case ANSWER_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case ANSWER_SUCCESS:
      return {
        ...state,
        Answer,
        loading: false,
      };
    case ANSWER_ERR:
      return {
        ...state,
        error: err,
        loading: false,
      };

    default:
      return state;
  }
};

export default questionReducer;
