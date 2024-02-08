import actions from './actions';

const { BOOK_SUGGEST_REQUEST, BOOK_SUGGEST_SUCCESS, BOOK_SUGGEST_ERR,
  MOVIE_SUGGEST_REQUEST, MOVIE_SUGGEST_SUCCESS, MOVIE_SUGGEST_ERR,
  GURU_SUGGEST_REQUEST, GURU_SUGGEST_SUCCESS, GURU_SUGGEST_ERR,
  PRACTICE_SUGGEST_REQUEST, PRACTICE_SUGGEST_SUCCESS, PRACTICE_SUGGEST_ERR,
  EXPERIENCE_SUGGEST_REQUEST, EXPERIENCE_SUGGEST_SUCCESS, EXPERIENCE_SUGGEST_ERR,
  UPDATE_ISREAD_REQUEST, UPDATE_ISREAD_SUCCESS, UPDATE_ISREAD_ERR,
  DELETE_SUGGEST_REQUEST, DELETE_SUGGEST_SUCCESS, DELETE_SUGGEST_ERR,
  SEARCH_SUGGESTION_REQUEST, SEARCH_SUGGESTION_SUCCESS, SEARCH_SUGGESTION_ERR,
  ADD_SUGGESTION_REQUEST, ADD_SUGGESTION_SUCCESS, ADD_SUGGESTION_ERR,
} = actions;

const initState = {
  loading: false,
  error: null,
};

const SuggestionReducer = (state = initState, action) => {
  const { type, movieSuggest, bookSuggest, guruSuggest, getInsertSuggestion, getSearchSuggestion,
    practiceSuggest, experienceSuggest, getDeleteSuggest, getUpdateRead,  err } = action;
  switch (type) {

   
    case BOOK_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case BOOK_SUGGEST_SUCCESS:
      return {
        ...state,
        bookSuggest,
        loading: false,
      };

    case BOOK_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case MOVIE_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case MOVIE_SUGGEST_SUCCESS:
      return {
        ...state,
        movieSuggest,
        loading: false,
      };

    case MOVIE_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  
         
    case GURU_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case GURU_SUGGEST_SUCCESS:
      return {
        ...state,
        guruSuggest,
        loading: false,
      };

    case GURU_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case PRACTICE_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case PRACTICE_SUGGEST_SUCCESS:
      return {
        ...state,
        practiceSuggest,
        loading: false,
      };

    case PRACTICE_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  

    case EXPERIENCE_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case EXPERIENCE_SUGGEST_SUCCESS:
      return {
        ...state,
        experienceSuggest,
        loading: false,
      };

    case EXPERIENCE_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  
  
    case UPDATE_ISREAD_REQUEST:
      return {
        ...state,
        loading: true
      };

    case UPDATE_ISREAD_SUCCESS:
      return {
        ...state,
        getUpdateRead,
        loading: false,
      };

    case UPDATE_ISREAD_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case DELETE_SUGGEST_REQUEST:
      return {
        ...state,
        loading: true
      };

    case DELETE_SUGGEST_SUCCESS:
      return {
        ...state,
        getDeleteSuggest,
        loading: false,
      };

    case DELETE_SUGGEST_ERR:
      return {
        ...state,
        loading: false,
        error: err
      }; 
    
    case SEARCH_SUGGESTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case SEARCH_SUGGESTION_SUCCESS:
      return {
        ...state,
        getSearchSuggestion,
        loading: false,
      };

    case SEARCH_SUGGESTION_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };

    case ADD_SUGGESTION_REQUEST:
      return {
        ...state,
        loading: true
      };

    case ADD_SUGGESTION_SUCCESS:
      return {
        ...state,
        getInsertSuggestion,
        loading: false,
      };

    case ADD_SUGGESTION_ERR:
      return {
        ...state,
        loading: false,
        error: err
      };  

    default:
      return state;
  }
};
export default SuggestionReducer;
