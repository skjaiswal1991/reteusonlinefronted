import * as types from "./action.type";
export function LoadingActionEndCreator() {
  return { type: types.LOADING_ACTION_END, isLoading: false };
}

export function LoadingActionStartCreator() {
  return { type: types.LOADING_ACTION_START, isLoading: true };
}
