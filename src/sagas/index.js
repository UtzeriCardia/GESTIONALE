import { all, fork } from "redux-saga/effects";

import LoginSaga from "../pages/Login/saga";

export default function* rootSagas() {
  const sagas = [
    yield fork(LoginSaga),
  ];
  yield all(sagas);
}
