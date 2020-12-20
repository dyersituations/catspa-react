import { Action } from "redux";
import { FETCHED_SETTINGS, FETCH_SETTINGS } from "./constants";
import { Setting, SettingsAction } from "./types";

export const fetchSettings = (): Action => {
  return { type: FETCH_SETTINGS };
};

export const fetchedSettings = (data: Setting[]): SettingsAction => {
  return {
    type: FETCHED_SETTINGS,
    data,
  };
};
