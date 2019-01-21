import Immutable, { fromJS } from "immutable";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory, createMemoryHistory } from "history";
import { routerMiddleware } from "connected-react-router/immutable";
import createSagaMiddleware, { END } from "redux-saga";
import { createRootReducer } from "./reducers";
import { rootSaga } from "./sagas";
import { isServer } from "universal/utils/helpers";

export default (preloadedState, url = "/") => {
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const immutablePreloadedState = fromJS(preloadedState);

  const rootReducer = createRootReducer(history);
  const sagaMiddleware = createSagaMiddleware(rootSaga);
  const connectedRouterMiddleware = routerMiddleware(history);

  const middlewares = [sagaMiddleware, connectedRouterMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers = composeWithDevTools({
    serialize: { immutable: Immutable }
  });

  const store = createStore(
    rootReducer,
    immutablePreloadedState,
    composeEnhancers(...enhancers)
  );

  if (isServer) {
    store.serverRunSaga = () => sagaMiddleware.run(rootSaga);
    store.serverStopSaga = () => store.dispatch(END);
  } else {
    sagaMiddleware.run(rootSaga);
  }

  return { store, history };
};
