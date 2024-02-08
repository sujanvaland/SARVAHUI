const actions = {
  QUESTION_BEGIN: 'QUESTION_BEGIN',
  QUESTION_SUCCESS: 'QUESTION_SUCCESS',
  QUESTION_ERR: 'QUESTION_ERR',

  ANSWER_BEGIN: 'ANSWER_BEGIN',
  ANSWER_SUCCESS: 'ANSWER_SUCCESS',
  ANSWER_ERR: 'ANSWER_ERR',

  questionBegin: () => {
    return {
      type: actions.QUESTION_BEGIN,
    };
  },

  questionSuccess: (data) => {
    return {
      type: actions.QUESTION_SUCCESS,
      Question:data,
    };
  },

  questionErr: (err) => {
    return {
      type: actions.QUESTION_ERR,
      err,
    };

  },
  
  answerBegin: () => {
    return {
      type: actions.ANSWER_BEGIN,
    };
  },

  answerSuccess: (data) => {
    return {
      type: actions.ANSWER_SUCCESS,
      Answer:data,
    };
  },

  answerErr: (err) => {
    return {
      type: actions.ANSWER_ERR,
      err,
    };
  },
};

export default actions;
