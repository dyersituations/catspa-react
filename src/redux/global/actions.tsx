import { SET_LOADING } from "./constants";
import { GlobalReducerAction } from "./types";

export const setLoading = (isLoading: boolean): GlobalReducerAction => {
  return {
    type: SET_LOADING,
    isLoading,
  };
};
