import { FETCH_MOVIESWATCHED, FETCH_MOVIESWATCHING } from "../actions/actionTypes";

// Define default Initial state
const initialState = {
    user: {},  // Empty object
  };
  
  // REDUCER:
  const moviesWatching = (state=initialState, action) => {  // Use "initialState" as default Initial State
    switch (action.type) {
      case FETCH_MOVIESWATCHING:
        return action.payload;
      default:
        // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
        return state;
    }
  };
  
  export default moviesWatching;