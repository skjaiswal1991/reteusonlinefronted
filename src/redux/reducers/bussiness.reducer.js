import * as types from "../actions/action.type";
import initialState from "./initialState.js";
export default function bussinessReducer(
  state = initialState.bussiness,
  action
) {
  switch (action.type) {
    case types.CREATE_BUSSINESS:
      return [...state, { ...action.bussiness }];
    case types.LOAD_BUSSINESS_SUCCESS:
      // debugger;
      return action.bussiness;
    default:
      return state;
  }
}
