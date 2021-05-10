import * as types from "../actions/action.type";
import initialState from "./initialState.js";
export default function loginReducer(
  state = initialState.isAuthonticate,
  action
) {
  switch (action.type) {
    case types.LOGIN_ACTION:
      return action.isAuthonticate;
    default:
      return state;
  }
}
