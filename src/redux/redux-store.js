import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import messagesReducer from "./messagesReducer";

let reducers = combineReducers({
  usersReducer,
  dialogsReducer,
  messagesReducer,
});

let store = createStore(reducers, applyMiddleware());

window.store = store;

export default store;
