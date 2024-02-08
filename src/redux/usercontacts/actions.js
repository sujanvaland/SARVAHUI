const actions = {
  FETCH_STORE_CONTACTS_REQ: 'FETCH_STORE_CONTACTS',
  FETCH_STORE_CONTACTS_SUCCESS: 'FETCH_STORE_CONTACTS_SUCCESS',
  FETCH_STORE_CONTACTS_ERR: 'FETCH_STORE_CONTACTS_ERR',

  fetchContactsRequest: () => {
    return {
      type:actions.FETCH_STORE_CONTACTS_REQ,
    }
  },

  fetchContactsSuccess: (data) => {
    return {
      type:actions.FETCH_STORE_CONTACTS_SUCCESS,
      data
    }
  },

  fetchContactsErr: (err) => {
    return {
      type:actions.FETCH_STORE_CONTACTS_ERR,
      err
    }
  },
  
};

export default actions;
