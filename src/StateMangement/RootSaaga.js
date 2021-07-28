import {FirstPage} from './Saaga/FirstPage';
import  {AuthSaga} from './Saaga/AuthSaga';
import { all } from "redux-saga/effects";
export default function* rootSaga() {
    yield all([
        ...FirstPage,
        ...AuthSaga
    ]);
  }
  