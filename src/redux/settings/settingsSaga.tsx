import { gql } from "@apollo/client";
import { Action } from "redux";
import { call, put, takeEvery } from "redux-saga/effects";
import { runQuery } from "../../graphql/apolloClient";
import { fetchedSettings } from "./actions";
import { FETCH_SETTINGS } from "./constants";

const GET_SETTINGS = gql`
  query getSettings($id: uuid) {
    settings(where: { app_id: { _eq: $id } }) {
      key
      value
    }
  }
`;

function* fetchSettingsAsync(action: Action) {
  try {
    const { data } = yield call(runQuery, GET_SETTINGS, {
      id: process.env.REACT_APP_APP_ID,
    });
    yield put(fetchedSettings(data.settings));
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error });
  }
}

export default function* settingsSaga() {
  yield takeEvery(FETCH_SETTINGS, fetchSettingsAsync);
}
