import { takeEvery, takeLatest } from "redux-saga/effects";
//For API Calls 
//func1, func2 Not used anywhere .
//Just to see the Syntax
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
