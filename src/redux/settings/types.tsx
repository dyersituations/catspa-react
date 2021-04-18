import {
  FETCHED_SETTINGS,
  FETCH_SETTINGS,
  SAVED_SETTINGS,
  SAVE_SETTINGS,
} from "./constants";

export interface SettingsState {
  data?: Setting[];
}

export interface Setting {
  key: string;
  value: string;
}

export interface SettingsReducerAction {
  type:
    | typeof FETCH_SETTINGS
    | typeof FETCHED_SETTINGS
    | typeof SAVE_SETTINGS
    | typeof SAVED_SETTINGS;
  data?: Setting[];
}

export interface SaveSettingAction {
  type: typeof SAVE_SETTINGS;
  data: Setting[];
}
