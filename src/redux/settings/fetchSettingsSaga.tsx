import { gql } from "@apollo/client";
import { call, put, takeEvery } from "redux-saga/effects";
import { runQuery } from "../../graphql/apolloClient";
import { fetchedSettings } from "./actions";
import { FETCH_SETTINGS } from "./constants";

const FETCH_SETTINGS_QUERY = gql`
  query fetch_settings($id: uuid) {
    settings(where: { app_id: { _eq: $id } }) {
      key
      value
    }
  }
`;

function* fetchSettingsAsync() {
  try {
    const { data } = yield call(runQuery, FETCH_SETTINGS_QUERY, {
      id: process.env.REACT_APP_APP_ID,
    });
    yield put(fetchedSettings(data.settings));
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export default function* fetchSettingsSaga() {
  yield takeEvery(FETCH_SETTINGS, fetchSettingsAsync);
}
