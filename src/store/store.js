import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { dashboardData } from './dashboard/dashboardReducer'
import { composeWithDevTools } from "redux-devtools-extension";


const store = createStore(
  dashboardData,
  composeWithDevTools(applyMiddleware(thunk))
);

export {store}