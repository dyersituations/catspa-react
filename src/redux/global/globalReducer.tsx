import { SET_LOADING } from "./constants";
import { GlobalReducerAction } from "./types";
import { GlobalState } from "./types";

const INITIAL_STATE: GlobalState = {
  isLoading: false,
};

const globalReducer = (
  state = INITIAL_STATE,
  action: GlobalReducerAction
) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        isLoading: action.isLoading,
      };
    default:
      return state;
  }
};

export default globalReducer;
