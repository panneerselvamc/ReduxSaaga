import { takeEvery, takeLatest } from "redux-saga/effects";

function* conA() {
  yield {};
}
function* conB() {
  yield {};
}
export const FirstPage = [
  takeEvery("conA", conA),
  takeLatest("conB", conB)
];
