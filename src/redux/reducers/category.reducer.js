import * as types from "../actions/action.type";
import initialState from "./initialState.js";
export default function loadingReducer(state = initialState.isLoading, action) {
  switch (action.type) {
    case types.LOADING_ACTION_START:
      return action.isLoading;
    case types.LOADING_ACTION_END:
      return action.isLoading;
    default:
      return state;
  }
}
