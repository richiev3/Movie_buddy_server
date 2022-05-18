import { FETCH_MOVIESWATCHED } from "../actions/actionTypes";

// Define default Initial state
const initialState = {
    user: {},  // Empty object
  };
  
  // REDUCER:
  const moviesWatched = (state=initialState, action) => {  // Use "initialState" as default Initial State
    switch (action.type) {
      case FETCH_MOVIESWATCHED:
        return action.payload;
      default:
        // If the Reducer doesn't recognize the Action Type, returns the previous (current) State unchanged.
        return state;
    }
  };
  
  export default moviesWatched;