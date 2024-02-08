import actions from './actions';
import { DataService } from '../../config/dataService/dataService';


const { questionBegin, questionSuccess, questionErr,
      answerBegin, answerSuccess, answerErr } = actions;

const questionFilter = () => {
  return async (dispatch) => {
    try {
      await dispatch(questionBegin());

      const res = await DataService.get("Question/GetOnBoardingQuestion");
      if(res.data.success)
      {
      dispatch(questionSuccess(res.data.result));
      }
      else
      {
        await dispatch(questionErr(res.data.message));
      }
    } catch (err) {
      dispatch(questionErr(err));
    }
  };
};

const AnswerResponse = (data) => {
  return async (dispatch) => {
    try {
      await dispatch(answerBegin());
      const res = await DataService.post("Question/InsertAnswer",data);
     
      if(res.data.success)
      {
      dispatch(answerSuccess(res.data.result));
      }
      else
      {
        await dispatch(answerErr(res.data.message));
      }
    } catch (err) {
      dispatch(answerErr(err));
    }
  };
};

export { questionFilter, AnswerResponse };
