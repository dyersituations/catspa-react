import { SET_LOADING } from "./constants";

export interface GlobalState {
  isLoading: boolean;
}

export interface GlobalReducerAction {
  type: typeof SET_LOADING;
  isLoading: boolean;
}
