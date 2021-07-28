import { combineReducers } from "redux";
import FirstPage from "./Reducer/FirstPage";
import AuthReducer from "./Reducer/AuthReducer";
export default combineReducers({
  FirstPage,
  AuthReducer
});
