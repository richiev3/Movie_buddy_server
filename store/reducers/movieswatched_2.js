import * as at from "../actions/actionTypes";
import moviesWatched from "./moviesWatched";
//reducer:
const allMoviesWatched_2 = (state = [], action) => {
    switch(action.type){
        case at.FETCH_ALL_MOVIESWATCHED:
            return action.payload;
        case at.ADD_MOVIESWATCHED:
            return [...state, action.payload];
        case at.DELETE_MOVIESWATCHED:
            return state.filter(moviesWatched => moviesWatched.id !== action.payload);
        case at.EDIT_MOVIESWATCHED:
            return state.map(moviesWatched => { 
                return (
                    moviesWatched.id === action.payload.id ? action.payload : moviesWatched
                );
            });
        default:
            return state;
    }
};

export default allMoviesWatched_2;