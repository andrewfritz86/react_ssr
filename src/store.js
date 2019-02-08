import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchStores } from "./api";

// initialize session action
export const initializeSession = () => ({
  type: "INITIALIZE_SESSION"
});

// store data action? action type?
const storeData = data => ({
  type: "STORE_DATA",
  data
});

export const toggleLogin = () => ({
  type: "TOGGLE_LOGIN"
});

export const fetchData = () => dispatch =>
  fetchStores().then(res => dispatch(storeData(res)));

const appStateReducer = (state = {}, action) => {
  switch (action.type) {
    case "INITIALIZE_SESSION":
      return {
        appState: "initialized"
      };
    default:
      return state;
  }
};

const prefetchReducer = (state = [], action) => {
  switch (action.type) {
    case "STORE_DATA":
      return action.data;
    default:
      return state;
  }
};

const accountReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_LOGIN":
      return !state;
    default:
      return state;
  }
};

// namespace reducers
const reducer = combineReducers({
  appState: appStateReducer,
  prefetched: prefetchReducer,
  account: accountReducer
});

export default initialState =>
  createStore(reducer, initialState, applyMiddleware(thunkMiddleware));
