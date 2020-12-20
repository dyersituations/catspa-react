import { FETCHED_SETTINGS } from "./constants";
import { SettingsAction } from "./types";

const INITIAL_STATE = {
  data: undefined,
};

const settingsReducer = (state = INITIAL_STATE, action: SettingsAction) => {
  switch (action.type) {
    case FETCHED_SETTINGS:
      return {
        data: action.data,
      };
    default:
      return state;
  }
};

export default settingsReducer;
