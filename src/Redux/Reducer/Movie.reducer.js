const initialState = {
    movies:[],
    moviesDetails:[],
   };
   const MovieReducer = (state = initialState, action) => {
     switch (action.type) {
       case "MOVIE_STATE_CHANGE":
         return {
           ...state,
           ...action.payload,
         };
       case "SET_LOADER":
         return {
           ...state,
           isDataLoading: action.payload,
         };
       default:
         return state;
     }
   };
   
   export default MovieReducer;