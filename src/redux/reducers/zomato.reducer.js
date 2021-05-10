import * as types from "../actions/action.type";
import initialState from "./initialState.js";
export default function zomatoReducer(
  state = initialState.bussinessReview,
  action
) {
  switch (action.type) {
    case types.GET_REVIEWS_AND_RATING:
      return action.bussiness;
    case types.LOADING_ACTION_START:
      return action.isLoading;
    case types.CHANGE_LOADING_STATE:
      return { ...state, isLoaded: false };
    default:
      return state;
  }
}
