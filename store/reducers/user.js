import { FETCH_USER } from "../actions/actionTypes";
//define default initial state
const initialState = {
    movies_ids: [],
};

//reducer:
const user = (state =initialState, action) => {
    switch(action.type){
        case FETCH_USER:
            return action.payload;
        default:
            return state;
    }
};

export default user;