const actions = {

  BOOK_SUGGEST_REQUEST: 'BOOK_SUGGEST_REQUEST',
  BOOK_SUGGEST_SUCCESS:'BOOK_SUGGEST_SUCCESS',
  BOOK_SUGGEST_ERR:'BOOK_SUGGEST_ERR',

  MOVIE_SUGGEST_REQUEST: 'MOVIE_SUGGEST_REQUEST',
  MOVIE_SUGGEST_SUCCESS:'MOVIE_SUGGEST_SUCCESS',
  MOVIE_SUGGEST_ERR:'MOVIE_SUGGEST_ERR',

  GURU_SUGGEST_REQUEST: 'GURU_SUGGEST_REQUEST',
  GURU_SUGGEST_SUCCESS:'GURU_SUGGEST_SUCCESS',
  GURU_SUGGEST_ERR:'GURU_SUGGEST_ERR',

  PRACTICE_SUGGEST_REQUEST: 'PRACTICE_SUGGEST_REQUEST',
  PRACTICE_SUGGEST_SUCCESS:'PRACTICE_SUGGEST_SUCCESS',
  PRACTICE_SUGGEST_ERR:'PRACTICE_SUGGEST_ERR',

  EXPERIENCE_SUGGEST_REQUEST: 'EXPERIENCE_SUGGEST_REQUEST',
  EXPERIENCE_SUGGEST_SUCCESS:'EXPERIENCE_SUGGEST_SUCCESS',
  EXPERIENCE_SUGGEST_ERR:'EXPERIENCE_SUGGEST_ERR',

  UPDATE_ISREAD_REQUEST: 'UPDATE_ISREAD_REQUEST',
  UPDATE_ISREAD_SUCCESS:'UPDATE_ISREAD_SUCCESS',
  UPDATE_ISREAD_ERR:'UPDATE_ISREAD_ERR',

  DELETE_SUGGEST_REQUEST: 'DELETE_SUGGEST_REQUEST',
  DELETE_SUGGEST_SUCCESS:'DELETE_SUGGEST_SUCCESS',
  DELETE_SUGGEST_ERR:'DELETE_SUGGEST_ERR',

  SEARCH_SUGGESTION_REQUEST: 'SEARCH_SUGGESTION_REQUEST',
  SEARCH_SUGGESTION_SUCCESS:'SEARCH_SUGGESTION_SUCCESS',
  SEARCH_SUGGESTION_ERR:'SEARCH_SUGGESTION_ERR',

  ADD_SUGGESTION_REQUEST: 'ADD_SUGGESTION_REQUEST',
  ADD_SUGGESTION_SUCCESS:'ADD_SUGGESTION_SUCCESS',
  ADD_SUGGESTION_ERR:'ADD_SUGGESTION_ERR',
 
  getUpdateReadRequest:()=>{
    return {
      type: actions.UPDATE_ISREAD_REQUEST
    }
  },

  getUpdateReadSuccess:(data)=>{
    return {
      type: actions.UPDATE_ISREAD_SUCCESS,
      getUpdateRead:data
    };
  },

  getUpdateReadError:(err)=>{
    return {
      type: actions.UPDATE_ISREAD_ERR,
      err
    }
  },

  getDeleteSuggestRequest:()=>{
    return {
      type: actions.DELETE_SUGGEST_REQUEST
    }
  },

  getDeleteSuggestSuccess:(data)=>{
    return {
      type: actions.DELETE_SUGGEST_SUCCESS,
      getDeleteSuggest:data
    };
  },

  getDeleteSuggestError:(err)=>{
    return {
      type: actions.DELETE_SUGGEST_ERR,
      err
    }
  },
 
  bookSuggestRequest:()=>{
    return {
      type: actions.BOOK_SUGGEST_REQUEST
    }
  },

  bookSuggestSuccess:(data)=>{
    return {
      type: actions.BOOK_SUGGEST_SUCCESS,
      bookSuggest:data
    };
  },

  bookSuggestError:(err)=>{
    return {
      type: actions.BOOK_SUGGEST_ERR,
      err
    }
  },

  movieSuggestRequest:()=>{
    return {
      type: actions.MOVIE_SUGGEST_REQUEST
    }
  },

  movieSuggestSuccess:(data)=>{
    return {
      type: actions.MOVIE_SUGGEST_SUCCESS,
      movieSuggest:data
    };
  },

  movieSuggestError:(err)=>{
    return {
      type: actions.MOVIE_SUGGEST_ERR,
      err
    }
  },
  
  guruSuggestRequest:()=>{
    return {
      type: actions.GURU_SUGGEST_REQUEST
    }
  },

  guruSuggestSuccess:(data)=>{
    return {
      type: actions.GURU_SUGGEST_SUCCESS,
      guruSuggest:data
    };
  },

  guruSuggestError:(err)=>{
    return {
      type: actions.GURU_SUGGEST_ERR,
      err
    }
  },

  practiceSuggestRequest:()=>{
    return {
      type: actions.PRACTICE_SUGGEST_REQUEST
    }
  },

  practiceSuggestSuccess:(data)=>{
    return {
      type: actions.PRACTICE_SUGGEST_SUCCESS,
      practiceSuggest:data
    };
  },

  practiceSuggestError:(err)=>{
    return {
      type: actions.PRACTICE_SUGGEST_ERR,
      err
    }
  },



  experienceSuggestRequest:()=>{
    return {
      type: actions.EXPERIENCE_SUGGEST_REQUEST
    }
  },

  experienceSuggestSuccess:(data)=>{
    return {
      type: actions.EXPERIENCE_SUGGEST_SUCCESS,
      experienceSuggest:data
    };
  },

  experienceSuggestError:(err)=>{
    return {
      type: actions.EXPERIENCE_SUGGEST_ERR,
      err
    }
  },

  getSearchSuggestionRequest:()=>{
    return {
      type: actions.SEARCH_SUGGESTION_REQUEST
    }
  },

  getSearchSuggestionSuccess:(data)=>{
    return {
      type: actions.SEARCH_SUGGESTION_SUCCESS,
      getSearchSuggestion:data
    };
  },

  getSearchSuggestionError:(err)=>{
    return {
      type: actions.SEARCH_SUGGESTION_ERR,
      err
    }
  },

  getAddSuggestionRequest:()=>{
    return {
      type: actions.ADD_SUGGESTION_REQUEST
    }
  },

  getAddSuggestionSuccess:(data)=>{
    return {
      type: actions.ADD_SUGGESTION_SUCCESS,
      getInsertSuggestion:data
    };
  },

  getAddSuggestionError:(err)=>{
    return {
      type: actions.ADD_SUGGESTION_ERR,
      err
    }
  },

};

export default actions;
