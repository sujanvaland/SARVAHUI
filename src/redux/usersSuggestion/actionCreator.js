// import { toast } from 'react-toastify';
import { message } from 'antd';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const { bookSuggestRequest, bookSuggestSuccess, bookSuggestError,
  movieSuggestRequest, movieSuggestSuccess, movieSuggestError,
  guruSuggestRequest, guruSuggestSuccess, guruSuggestError,
  practiceSuggestRequest, practiceSuggestSuccess, practiceSuggestError,
  experienceSuggestRequest, experienceSuggestSuccess, experienceSuggestError,
  getUpdateReadRequest, getUpdateReadSuccess, getUpdateReadError,
  getDeleteSuggestRequest, getDeleteSuggestSuccess, getDeleteSuggestError,
  getSearchSuggestionRequest, getSearchSuggestionSuccess, getSearchSuggestionError,
  getAddSuggestionRequest, getAddSuggestionSuccess, getAddSuggestionError
  } = actions;

const GetBookSuggestion = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(bookSuggestRequest());
      const res = await DataService.get(`Profile/GetBooksSuggestion?userId=${userId}`);

      if (res.data.success) {
        dispatch(bookSuggestSuccess(res.data.result));
      }
      else {
        dispatch(bookSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(bookSuggestError(err));
    }
  };
}


const GetMovieSuggestion = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(movieSuggestRequest());
      const res = await DataService.get(`Profile/GetMoviesSuggestion?userId=${userId}`);

      if (res.data.success) {
        dispatch(movieSuggestSuccess(res.data.result));
      }
      else {
        dispatch(movieSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(movieSuggestError(err));
    }
  };
}


const GetGuruSuggestion = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(guruSuggestRequest());
      const res = await DataService.get(`Profile/GetGurusSuggestion?userId=${userId}`);

      if (res.data.success) {
        dispatch(guruSuggestSuccess(res.data.result));
      }
      else {
        dispatch(guruSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(guruSuggestError(err));
    }
  };
}


const GetPracticeSuggestion = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(practiceSuggestRequest());
      const res = await DataService.get(`Profile/GetPracticesSuggestion?userId=${userId}`);

      if (res.data.success) {
        dispatch(practiceSuggestSuccess(res.data.result));
      }
      else {
        dispatch(practiceSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(practiceSuggestError(err));
    }
  };
}


const GetExperienceSuggestion = (userId) => {
  return async (dispatch) => {
    try {
      await dispatch(experienceSuggestRequest());
      const res = await DataService.get(`Profile/GetExperienceSuggestion?userId=${userId}`);

      if (res.data.success) {
        dispatch(experienceSuggestSuccess(res.data.result));
      }
      else {
        dispatch(experienceSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(experienceSuggestError(err));
    }
  };
}

const GetUpdateReadSuggestion = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(getUpdateReadRequest());
      const res = await DataService.post("Profile/UpdateProfileSuggestion",id);

      if (res.data.success) {
        dispatch(getUpdateReadSuccess(res.data.result));
      }
      else {
        dispatch(getUpdateReadError(res.data.message))
      }
    } catch (err) {
      dispatch(getUpdateReadError(err));
    }
  };
}

const GetDeleteSuggestion = (id) => {
  return async (dispatch) => {
    try {
      await dispatch(getDeleteSuggestRequest());
      const res = await DataService.post("Profile/DeleteProfileSuggestion",id);

      if (res.data.success) {
        dispatch(getDeleteSuggestSuccess(res.data.result));
      }
      else {
        dispatch(getDeleteSuggestError(res.data.message))
      }
    } catch (err) {
      dispatch(getDeleteSuggestError(err));
    }
  };
}

const BookMarkSuggestion = (Data) => {
  return async (dispatch) => {
    try {
      await dispatch(getAddSuggestionRequest());
      const res = await DataService.post("Profile/BookMarkSuggestion",Data);

      if (res.data.success) {
        dispatch(getAddSuggestionSuccess(res.data.result));
        message.success(res.data.message);
      }
      else {
        dispatch(getAddSuggestionError(res.data.message))
      }
    } catch (err) {
      dispatch(getAddSuggestionError(err));
    }
  };
}

const GetSearchSuggestion = (data) => {
  return async (dispatch) => {
    try {

      await dispatch(getSearchSuggestionRequest());
      const res = await DataService.post("Profile/SearchProfileSuggestion",data);

      if (res.data.success) {
        dispatch(getSearchSuggestionSuccess(res.data.result));
      }
      else {
        dispatch(getSearchSuggestionError(res.data.message))
      }
    } catch (err) {
      dispatch(getSearchSuggestionError(err));
    }
  };
}

export { GetBookSuggestion, GetMovieSuggestion, GetGuruSuggestion, 
  GetPracticeSuggestion, GetExperienceSuggestion, GetUpdateReadSuggestion,
  GetDeleteSuggestion, BookMarkSuggestion, GetSearchSuggestion };
