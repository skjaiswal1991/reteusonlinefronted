import { combineReducers } from "redux";
import bussiness from "./bussiness.reducer";
import login from "./login.reducer";
import zomatoReducer from "./zomato.reducer";
import loadingReducer from "./loading.reducer";

const rootReducer = combineReducers({
  bussiness: bussiness,
  isAuthonticate: login,
  bussinessReviews: zomatoReducer,
  isLoading: loadingReducer,
});

export default rootReducer;
