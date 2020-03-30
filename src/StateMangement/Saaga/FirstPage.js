import { takeEvery, takeLatest } from "redux-saga/effects";

function* func1() {
  yield {};
}
function* func2() {
  yield {};
}
export const FirstPage = [
  takeEvery("conA", func1),
  takeLatest("conB", func2)
];
