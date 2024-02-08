// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
// eslint-disable-next-line import/no-cycle
import { DataService } from '../../config/dataService/dataService';

const { fetchContactsRequest, fetchContactsSuccess, fetchContactsErr } = actions;

const storeUserContacts = (userContactsList) => {

  console.log("storeUserContacts", userContactsList)

  return async (dispatch) => {
    try {
      dispatch(fetchContactsRequest());

      // dispatch(fetchContactsSuccess({list: contacts}))
      const res = await DataService.post(`User/StoreUserConnections`,{list: userContactsList});
      if (res.data.message === 'Success') {
        dispatch(fetchContactsSuccess(res.data.result));
      } else {
        message.error('Something went wrong');
        dispatch(fetchContactsErr('Something went wrong'));
      }
    } catch (err) {
      message.error('Something went wrong');
      dispatch(fetchContactsErr(err));
    }
  };
};

export { storeUserContacts };
