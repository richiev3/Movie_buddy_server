import { user } from "pg/lib/defaults";
import * as at from "../actions/actionTypes";
//reducer:
const allUsers = (state = [], action) => {
    switch(action.type){
        case at.FETCH_ALL_USERS:
            return action.payload;
        case at.ADD_USER:
            return [...state, action.payload];
        case at.DELETE_USER:
            return state.filter(user => user.id !== action.payload);
        case at.EDIT_USER:
            return state.map(user => { 
                return (
                    user.id === action.payload.id ? action.payload : user
                );
            });
        default:
            return state;
    }
};

export default allUsers;