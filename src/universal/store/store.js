import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory, createMemoryHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "./reducers";
import { isServer } from "universal/utils/helpers";

export default (preloadedState, url = "/") => {
  const history = isServer
    ? createMemoryHistory({
        initialEntries: [url]
      })
    : createBrowserHistory();

  const rootReducer = createRootReducer(history);
  const middlewares = [routerMiddleware(history)];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  return { store, history };
};
