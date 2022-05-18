/*==================================================
/src/store/reducers/index.js

This is a "barrel" file for the Reducers, which combines all the exports of individual Reducers and to be
passed into the Redux Store.
The aliases of Reducers (e.g., allCampuses) in this file will be assigned as the names of the keys in the Redux Store, 
with the values being the respective individual Reducers.

Note: A "barrel" file is a way to rollup exports from other modules into a single convenient module. 
The "barrel" (module) file re-exports the exports of other modules.
================================================== */
export { default as allUsers } from "./users";
export { default as user } from './user';
export { default as allMoviesWatched_2 } from './movieswatched_2';
export { default as moviesWatched } from './moviesWatched';
export { default as allMoviesWatching_2 } from './movieswatching_2';
export { default as moviesWatching } from './moviesWatching';