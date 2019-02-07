import { createStore, combineReducers } from "redux";

// initialize session action
export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );


// reducer to catch actions, return new state
const sessionReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};


// name space reducers
const reducer = combineReducers( {
    loggedIn: sessionReducer,
} );

export default ( initialState ) => createStore( reducer, initialState );