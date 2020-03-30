import rootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import { logger } from "redux-logger";
import rootSaga from "./RootSaaga";
import { createStore, applyMiddleware } from "redux";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

export default store;
