import { combineReducers, createStore } from "redux";

import { expenseReducer } from "../reducers/expenses";
const reducer = combineReducers({
  expenseReducer,
});
const initialstate = {};
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
