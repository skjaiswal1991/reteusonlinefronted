import * as types from "./action.type";
export function logIn(isAuthonticate) {
  return { type: types.LOGIN_ACTION, isAuthonticate };
}
