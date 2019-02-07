import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchComments } from "./api";

// initialize session action
export const initializeSession = ( ) => ( {
    type: "INITIALIZE_SESSION",
} );

// store data action? action type?
const storeData = (data) => ({
    type: "STORE_DATA",
    data,
})

// fetch data action, takes dispatch?
// fetch the comments, then dispath a store data action (above)
// Thunk middleware action ...not working on serve??
export const fetchData = ( ) => ( dispatch ) =>
    fetchComments( ).then( res => dispatch( storeData( res ) ) );
// reducer to catch actions, return new state
const sessionReducer = ( state = false, action ) => {
    switch ( action.type ) {
        case "INITIALIZE_SESSION":
            return true;
        default: return state;
    }
};

const appStateReducer = ( state = {}, action) => {
    switch (action.type) {
        case "INITIALIZE_SESSION":
            return {
                appState: "initialized"
            }
        default: return state
    }
};

const dataReducer = (state = [], action) => {
    switch (action.type) {
        case "STORE_DATA":
            return action.data;
        default: return state;
    }
};


// name space reducers
const reducer = combineReducers( {
    loggedIn: sessionReducer,
    appState: appStateReducer,
    data: dataReducer,
} );

export default ( initialState ) => createStore( reducer, initialState, applyMiddleware(thunkMiddleware) );