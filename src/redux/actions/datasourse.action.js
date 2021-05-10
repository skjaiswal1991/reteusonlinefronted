import * as types from "./action.type";
import bussinessApi from "../../data-laye.js";
export function loadReviewSuccess({ data }) {
  //debugger;
  const businessObject = { ...data, isLoaded: true };
  return { type: types.GET_REVIEWS_AND_RATING, bussiness: businessObject };
}

export function LoaddingAction(data) {
  return { type: types.CHANGE_LOADING_STATE, isLoaded: data };
}

export function loadReview(bussiness) {
  return function (dispatch) {
    return bussinessApi
      .getBussienessReviewData(bussiness)
      .then((bussiness) => {
        // debugger;
        dispatch(loadReviewSuccess(bussiness));
      })
      .catch((err) => {
        throw err;
      });
  };
}
