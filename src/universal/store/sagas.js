import { all } from "redux-saga/effects";
import { fetchTestSaga } from "universal/store/app/sagas";

export function* rootSaga() {
  yield all([fetchTestSaga()]);
}
