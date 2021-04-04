import { DECREMENT, INCREMENT} from "../types";

const INITIAL_STATE = {
    counter: 0,
    isLoggedIn: false
}

const reducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case INCREMENT:
            return{
                ...state,
                counter:state.counter+1
            };
        case DECREMENT: 
            return{
                ...state,
                counter:state.counter-1
            };
        default:
            return state;
    }
};

export default reducer;
