/*==================================================
/src/store/thunks.js

It contains all Thunk Creators and Thunks.
================================================== */
import * as ac from './actions/actionCreators';  // Import Action Creators ("ac" keyword Action Creator)
const axios = require('axios');

//All Campuses
// THUNK CREATOR:
export const fetchAllUsersThunk = () => async (dispatch) => {  // The THUNK
  try {
    // API "get" call to get "campuses" data from database
    let res = await axios.get(`/api/users`);  
    // Call Action Creator to return Action object (type + payload with "campuses" data)
    // Then dispatch the Action object to Reducer to update state 
    dispatch(ac.fetchAllUsers(res.data));
  } catch(err) {
    console.error(err);
  }
};
//ADD CAMPUS THUNK CREATOR
export const addUserThunk = (user) => async (dispatch) => {
  try {
    let res = await axios.post(`/api/users`, user);
    dispatch(ac.addUser(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};
//DELETE CAMPUS THUNK CREATOR
export const deleteUserThunk = userId => async dispatch => {
  try {
    await axios.delete(`/api/users/${userId}`);
    //delete succesful so change state with dispatch
    dispatch(ac.deletesUser(campusId));
  } catch(err) {
    console.error(err);
  }
};
//EDIT CAMPUS THUNK CREATOR
export const editUserThunk = (user,id) => async dispatch => {
  try {
    let updatedCampus = await axios.put(`/api/users/${id}`, user);
    dispatch(ac.editUser(updatedCampus));
  } catch(err) {
    console.error(err);
  }
};

// Single Campus
// THUNK CREATOR:
export const fetchUserThunk = (id) => async (dispatch) => {  // The THUNK
  try {
    // API "get" call to get a student data (based on "id")from database
    let res = await axios.get(`/api/users/${id}`);  
    dispatch(ac.fetchUser(res.data));
  } catch(err) {
    console.error(err);
  }
};


// All Students
// THUNK CREATOR:
export const fetchAllMoviesWatched_2Thunk = () => async (dispatch) => {  // The THUNK
  try {
    // API "get" call to get "students" data from database
    let res = await axios.get(`/api/movieswatched_2`);  
    // Call Action Creator to return Action object (type + payload with "students" data)
    // Then dispatch the Action object to Reducer to update state 
    dispatch(ac.fetchAllMoviesWatched_2(res.data));  
  } catch(err) {
    console.error(err);
  }
};

// Add Student
// THUNK CREATOR:
export const addMoviesWatchedThunk = (moviesWatched) => async (dispatch) => {  // The THUNK
  try {
    // API "post" call to add "student" object's data to database
    let res = await axios.post(`/api/movieswatched_2`, moviesWatched);  
    // Call Action Creator to return Action object (type + payload with new students data)
    // Then dispatch the Action object to Reducer to update state 
    dispatch(ac.addMoviesWatched(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Delete Student
// THUNK CREATOR:
export const deleteMoviesWatchedThunk = moviesWatchedId => async dispatch => {  // The THUNK
  try {
    // API "delete" call to delete student (based on "studentID") from database
    await axios.delete(`/api/movieswatched_2/${moviesWatchedId}`);  
    // Delete successful so change state with dispatch
    dispatch(ac.deleteMoviesWatched(moviesWatchedId));
  } catch(err) {
    console.error(err);
  }
};

// Edit Student
// THUNK CREATOR:
export const editMoviesWatchedThunk = moviesWatched => async dispatch => {  // The THUNK
  try {
    // API "put" call to update student (based on "id" and "student" object's data) from database
    let updatedMoviesWatched = await axios.put(`/api/movieswatched_2/${moviesWatched.id}`, moviesWatched); 
    // Update successful so change state with dispatch
    dispatch(ac.editMoviesWatched(updatedMoviesWatched));
  } catch(err) {
    console.error(err);
  }
};

// Single Student
// THUNK CREATOR:
export const fetchMoviesWatchedThunk = id => async dispatch => {  // The THUNK
  try {
    // API "get" call to get a specific student (based on "id") data from database
    let res = await axios.get(`/api/movieswatched_2/${id}`);  
    // Call Action Creator to return Action object (type + payload with student data)
    // Then dispatch the Action object to Reducer to display student data 
    dispatch(ac.fetchAllMoviesWatched(res.data));
  } catch(err) {
    console.error(err);
  }
};
// All Students
// THUNK CREATOR:
export const fetchAllMoviesWatched_2Thunk = () => async (dispatch) => {  // The THUNK
  try {
    // API "get" call to get "students" data from database
    let res = await axios.get(`/api/movieswatched_2`);  
    // Call Action Creator to return Action object (type + payload with "students" data)
    // Then dispatch the Action object to Reducer to update state 
    dispatch(ac.fetchAllMoviesWatched_2(res.data));  
  } catch(err) {
    console.error(err);
  }
};

// Add Student
// THUNK CREATOR:
export const addMoviesWatchedThunk = (moviesWatched) => async (dispatch) => {  // The THUNK
  try {
    // API "post" call to add "student" object's data to database
    let res = await axios.post(`/api/movieswatched_2`, moviesWatched);  
    // Call Action Creator to return Action object (type + payload with new students data)
    // Then dispatch the Action object to Reducer to update state 
    dispatch(ac.addMoviesWatched(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// Delete Student
// THUNK CREATOR:
export const deleteMoviesWatchedThunk = moviesWatchedId => async dispatch => {  // The THUNK
  try {
    // API "delete" call to delete student (based on "studentID") from database
    await axios.delete(`/api/movieswatched_2/${moviesWatchedId}`);  
    // Delete successful so change state with dispatch
    dispatch(ac.deleteMoviesWatched(moviesWatchedId));
  } catch(err) {
    console.error(err);
  }
};

// Edit Student
// THUNK CREATOR:
export const editMoviesWatchedThunk = moviesWatched => async dispatch => {  // The THUNK
  try {
    // API "put" call to update student (based on "id" and "student" object's data) from database
    let updatedMoviesWatched = await axios.put(`/api/movieswatched_2/${moviesWatched.id}`, moviesWatched); 
    // Update successful so change state with dispatch
    dispatch(ac.editMoviesWatched(updatedMoviesWatched));
  } catch(err) {
    console.error(err);
  }
};

// Single Student
// THUNK CREATOR:
export const fetchMoviesWatchedThunk = id => async dispatch => {  // The THUNK
  try {
    // API "get" call to get a specific student (based on "id") data from database
    let res = await axios.get(`/api/movieswatched_2/${id}`);  
    // Call Action Creator to return Action object (type + payload with student data)
    // Then dispatch the Action object to Reducer to display student data 
    dispatch(ac.fetchAllMoviesWatched(res.data));
  } catch(err) {
    console.error(err);
  }
};

// All moviesWatching
// THUNK CREATOR:
export const fetchAllMoviesWatching_2Thunk = () => async (dispatch) => {  // The THUNK
    try {
      // API "get" call to get "students" data from database
      let res = await axios.get(`/api/movieswatching_2`);  
      // Call Action Creator to return Action object (type + payload with "students" data)
      // Then dispatch the Action object to Reducer to update state 
      dispatch(ac.fetchAllMoviesWatching_2(res.data));  
    } catch(err) {
      console.error(err);
    }
  };
  
  // Add Student
  // THUNK CREATOR:
  export const addMoviesWatchingThunk = (moviesWatching) => async (dispatch) => {  // The THUNK
    try {
      // API "post" call to add "student" object's data to database
      let res = await axios.post(`/api/movieswatching_2`, moviesWatching);  
      // Call Action Creator to return Action object (type + payload with new students data)
      // Then dispatch the Action object to Reducer to update state 
      dispatch(ac.addMoviesWatching(res.data));
      return res.data;
    } catch(err) {
      console.error(err);
    }
  };
  
  // Delete Student
  // THUNK CREATOR:
  export const deleteMoviesWatchingThunk = moviesWatchingId => async dispatch => {  // The THUNK
    try {
      // API "delete" call to delete student (based on "studentID") from database
      await axios.delete(`/api/movieswatching_2/${moviesWatchingId}`);  
      // Delete successful so change state with dispatch
      dispatch(ac.deleteMoviesWatching(moviesWatchedId));
    } catch(err) {
      console.error(err);
    }
  };
  
  // Edit Student
  // THUNK CREATOR:
  export const editMoviesWatchingThunk = moviesWatching => async dispatch => {  // The THUNK
    try {
      // API "put" call to update student (based on "id" and "student" object's data) from database
      let updatedMoviesWatching = await axios.put(`/api/movieswatching_2/${moviesWatching.id}`, moviesWatching); 
      // Update successful so change state with dispatch
      dispatch(ac.editMoviesWatching(updatedMoviesWatching));
    } catch(err) {
      console.error(err);
    }
  };
  
  // Single Student
  // THUNK CREATOR:
  export const fetchMoviesWatchingThunk = id => async dispatch => {  // The THUNK
    try {
      // API "get" call to get a specific student (based on "id") data from database
      let res = await axios.get(`/api/movieswatching_2/${id}`);  
      // Call Action Creator to return Action object (type + payload with student data)
      // Then dispatch the Action object to Reducer to display student data 
      dispatch(ac.fetchAllMoviesWatching(res.data));
    } catch(err) {
      console.error(err);
    }
  };
  