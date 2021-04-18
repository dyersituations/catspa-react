import { deepCopy } from "../../util";
import { FETCHED_SETTINGS, SAVED_SETTINGS } from "./constants";
import { Setting, SettingsReducerAction, SettingsState } from "./types";

const INITIAL_STATE: SettingsState = {
  data: undefined,
};

const settingsReducer = (
  state = INITIAL_STATE,
  action: SettingsReducerAction
) => {
  switch (action.type) {
    case FETCHED_SETTINGS:
      return {
        data: action.data,
      };
    case SAVED_SETTINGS:
      const updated = deepCopy(state.data);
      if (action.data) {
        for (let i = 0; i < action.data.length; ++i) {
          const setting = action.data[i];
          const stateValue = updated.find(
            (d: Setting) => d.key === setting.key
          );
          if (stateValue) {
            stateValue.value = setting.value;
          } else {
            updated.push({ ...setting });
          }
        }
      }
      return {
        data: updated,
      };
    default:
      return state;
  }
};

export default settingsReducer;
