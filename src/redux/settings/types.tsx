import { FETCHED_SETTINGS } from "./constants";

export interface SettingsState {
  data: Setting[] | undefined;
}

export interface Setting {
  key: string;
  value: string;
}

export interface SettingsAction {
  type: typeof FETCHED_SETTINGS;
  data: Setting[];
}
