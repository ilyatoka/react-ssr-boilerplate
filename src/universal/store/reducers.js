import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import appReducer from "./app/reducers";

export default history =>
  combineReducers({
    router: connectRouter(history),
    app: appReducer
  });
