import { put, takeEvery, takeLatest, call } from "redux-saga/effects";
import axios from "axios";
function* func1(props) {
  // yield put({ type: "apiBegun" });
  const payload = JSON.parse(JSON.stringify(props.data));

  payload.msisdn = `+91${payload.msisdn}`;

  try {
    const data = axios
      .post("https://tchyon.com/api/v1/auth/signup", payload)
      .then((response) => {
        props.data.callBack("otp");
      });
  } catch {
    // yield put({ type: "apiReset" });
  }
}
function* func2() {
  yield {};
}
export const AuthSaga = [
  takeEvery("signupSaga", func1),
  takeLatest("conB", func2),
];
