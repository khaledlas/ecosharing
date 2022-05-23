import { combineReducers } from "redux";
import userReducer from "./userReducer";
import qpqReducer from "./qpqReducer";

const rootReducer = combineReducers({ userReducer, qpqReducer });
export default rootReducer;
