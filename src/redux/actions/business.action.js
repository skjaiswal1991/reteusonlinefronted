import * as types from "./action.type";
import bussinessApi from "../../data-laye.js";
import {
  LoadingActionEndCreator,
  LoadingActionStartCreator,
} from "./loading.action";
export function createBussinessSuccess(bussiness) {
  return { type: types.CREATE_BUSSINESS, bussiness };
}

export function loadBusinessSuccess(bussiness) {
  return { type: types.LOAD_BUSSINESS_SUCCESS, bussiness };
}

export function createBussiness(bussiness) {
  console.log(bussiness);
  return function (dispatch) {
    return bussinessApi
      .addBussiness(bussiness)
      .then((bussiness) => {
        console.log(bussiness);
        dispatch(createBussinessSuccess(bussiness));
      })
      .catch((err) => {
        throw err;
      });
  };
}

export function loadBusiness() {
  return function (dispatch) {
    return bussinessApi
      .getBussiness()
      .then((bussiness) => {
        dispatch(loadBusinessSuccess(bussiness.data));
        setTimeout(() => {
          dispatch(LoadingActionEndCreator());
        }, 2000);
      })
      .catch((err) => {
        throw err;
      });
  };
}
