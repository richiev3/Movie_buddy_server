import * as at from "../actions/actionTypes";
import moviesWatched from "./moviesWatched";
import moviesWatching from "./moviesWatching";
//reducer:
const allMoviesWatching_2 = (state = [], action) => {
    switch(action.type){
        case at.FETCH_ALL_MOVIESWATCHING:
            return action.payload;
        case at.ADD_MOVIESWATCHING:
            return [...state, action.payload];
        case at.DELETE_MOVIESWATCHING:
            return state.filter(moviesWatching => moviesWatching.id !== action.payload);
        case at.EDIT_MOVIESWATCHING:
            return state.map(moviesWatching => { 
                return (
                    moviesWatching.id === action.payload.id ? action.payload : moviesWatching
                );
            });
        default:
            return state;
    }
};

export default allMoviesWatching_2;