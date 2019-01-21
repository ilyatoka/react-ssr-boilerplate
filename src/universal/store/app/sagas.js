import { call, put } from "redux-saga/effects";
import { TEST_REQUEST, TEST_SUCCESS, TEST_FAILURE } from "./constants";
import { apiGet } from "universal/utils/api";

export function* fetchTestSaga() {
  yield put({ type: TEST_REQUEST });

  try {
    const result = yield call(() => apiGet("/test/"));
    if (result.ok) {
      yield put({
        type: TEST_SUCCESS,
        payload: result.data,
        headers: result.headers
      });
    } else {
      throw result.data;
    }
  } catch (error) {
    yield put({
      type: TEST_FAILURE,
      error
    });
  }
}
