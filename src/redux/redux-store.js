import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import dialogsReducer from "./dialogsReducer";
import messagesReducer from "./messagesReducer";
import supportReducer from "./supportReducer";

let reducers = combineReducers({
  usersReducer,
  dialogsReducer,
  messagesReducer,
  supportReducer,
});

let store = createStore(reducers, applyMiddleware());

window.store = store;

export default store;
