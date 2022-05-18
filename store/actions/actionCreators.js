import * as at from './actionTypes';

// ACTION CREATORS;
/** needs to be an action creator
 * for each action type
 */

// All users
export const fetchAllUsers = (users) => {
  return {
    type: at.FETCH_ALL_USERS,
    payload: users,
  };
};
// ADD user
export const addUser = (user) => {
  return {
    type: at.ADD_USER,
    payload: user,
  };
};
//DELETE user
export const deleteUser = (userId) => {
  return {
    type: at.DELETE_USER,
    payload: userId,
  };
};

//EDIT user
export const editUser = (user) => {
  return {
    type: at.EDIT_USER,
    payload: user,
  };
};


//Single user
export const fetchUser = (user) => {
  return {
    type: at.FETCH_ALL_USER,
    payload: user,
  };
};

//All movies watched
export const fetchAllMoviesWatched = (moviesWatched) => {
  return {
    type: at.FETCH_ALL_MOVIESWATCHED,
    payload: moviesWatched,
  };
};

export const addMoviesWatched = (moviesWatched) => {
  return {
    type: at.ADD_MOVIESWATCHED,
    payload: moviesWatched,
  };
};

export const deleteMoviesWatched = (moviesWatchedId) => {
  return {
    type: at.DELETE_MOVIESWATCHED,
    payload: moviesWatchedId,
  };
};


export const editMoviesWatched = (moviesWatched) => {
  return {
    type: at.EDIT_MOVIESWATCHED,
    payload: moviesWatched,
  };
};

//Single movies watched
export const fetchMoviesWatched = (moviesWatched) => {
  return {
    type: at.FETCH_MOVIESWATCHED,
    payload: moviesWatched,
  };
};
//All movies watching
export const fetchAllMoviesWatching = (moviesWatching) => {
    return {
      type: at.FETCH_ALL_MOVIESWATCHING,
      payload: moviesWatching,
    };
  };
  
  export const addMoviesWatching = (moviesWatching) => {
    return {
      type: at.ADD_MOVIESWATCHING,
      payload: moviesWatching,
    };
  };
  
  export const deleteMoviesWatching = (moviesWatchingId) => {
    return {
      type: at.DELETE_MOVIESWATCHING,
      payload: moviesWatchingId,
    };
  };
  
  
  export const editMoviesWatching = (moviesWatching) => {
    return {
      type: at.EDIT_MOVIESWATCHING,
      payload: moviesWatching,
    };
  };
  
  //Single movies watching
  export const fetchMoviesWatching = (moviesWatching) => {
    return {
      type: at.FETCH_MOVIESWATCHING,
      payload: moviesWatching,
    };
  };