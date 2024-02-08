import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { getSubcriptionRequest, getSubcriptionSuccess, getSubcriptionError,
  } = actions;

const BuySubcription = (Data) => {
  return async (dispatch) => {
    try {
      await dispatch(getSubcriptionRequest());
      const res = await DataService.post("Subcription/BuySubcription",Data);

      if (res.data.success) {
        dispatch(getSubcriptionSuccess(res.data.result));
      }
      else {
        dispatch(getSubcriptionError(res.data.message))
      }
    } catch (err) {
      dispatch(getSubcriptionError(err));
    }
  };
}


export { BuySubcription };
