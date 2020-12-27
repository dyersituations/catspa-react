import {
  FETCHED_SETTINGS,
  FETCH_SETTINGS,
  SAVED_SETTINGS,
  SAVE_SETTINGS,
} from "./constants";
import { Setting, SettingsReducerAction } from "./types";

export const fetchSettings = (): SettingsReducerAction => {
  return { type: FETCH_SETTINGS };
};

export const fetchedSettings = (data: Setting[]): SettingsReducerAction => {
  return {
    type: FETCHED_SETTINGS,
    data,
  };
};

export const saveSettings = (data: Setting[]): SettingsReducerAction => {
  return {
    type: SAVE_SETTINGS,
    data,
  };
};

export const savedSettings = (data: Setting[]): SettingsReducerAction => {
  return {
    type: SAVED_SETTINGS,
    data,
  };
};
