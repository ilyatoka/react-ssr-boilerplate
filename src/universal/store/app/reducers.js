import { fromJS } from "immutable";
import { TEST_SUCCESS, TEST_FAILURE } from "./constants";

const initialState = fromJS({
  test: null
});

export default function(state = initialState, action) {
  const { type, payload, error } = action;
  switch (type) {
    case TEST_SUCCESS:
      return state.set("test", payload);
    case TEST_FAILURE:
      return state.set("test", error);
    default:
      return state;
  }
}
