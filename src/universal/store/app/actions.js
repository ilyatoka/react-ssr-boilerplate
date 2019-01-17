import { TEST_REQUEST } from "universal/store/app/constants";

export function fetchTest() {
  return {
    type: TEST_REQUEST
  };
}
