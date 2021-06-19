import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../redux/reducer";
import rootSaga from "../sagas";

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware, logger), composeWithDevTools())
  );
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
