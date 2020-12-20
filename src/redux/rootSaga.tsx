import { all, fork } from "redux-saga/effects";
import settingsSaga from "./settings/settingsSaga";

export default function* rootSaga() {
  yield all([fork(settingsSaga)]);
}
