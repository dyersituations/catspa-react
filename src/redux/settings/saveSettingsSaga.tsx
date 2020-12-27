import { gql } from "@apollo/client";
import { call, put, takeEvery } from "redux-saga/effects";
import { runMutation } from "../../graphql/apolloClient";
import { savedSettings } from "./actions";
import { SAVE_SETTINGS } from "./constants";
import { SaveSettingAction } from "./types";

const SAVE_SETTINGS_MUTATION = gql`
  mutation insert_multiple_settings($objects: [settings_insert_input!]!) {
    insert_settings(
      objects: $objects
      on_conflict: { constraint: settings_pkey, update_columns: [value] }
    ) {
      returning {
        key
        value
      }
    }
  }
`;

function* saveSettingsAsync(action: SaveSettingAction) {
  try {
    const variables = {
      objects: action.data.map((d) => {
        return { ...d, app_id: process.env.REACT_APP_APP_ID };
      }),
    };
    const { data } = yield call(runMutation, SAVE_SETTINGS_MUTATION, variables);
    yield put(savedSettings(data.insert_settings.returning));
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export default function* saveSettingsSaga() {
  yield takeEvery(SAVE_SETTINGS, saveSettingsAsync);
}
