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

const appStateReducer = ( state = {}, action) => {
    console.log("demo reducer!", action)
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return {
                appState: "initialized"
            }
        default: return state
    }
};


// name space reducers
const reducer = combineReducers( {
    loggedIn: sessionReducer,
    appState: appStateReducer,
} );

export default ( initialState ) => createStore( reducer, initialState );