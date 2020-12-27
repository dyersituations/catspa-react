import { all, fork } from "redux-saga/effects";
import fetchSettingsSaga from "./settings/fetchSettingsSaga";
import saveSettingsSaga from "./settings/saveSettingsSaga";

export default function* rootSaga() {
  yield all([fork(fetchSettingsSaga), fork(saveSettingsSaga)]);
}
