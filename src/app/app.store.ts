import { Action, combineReducers } from '@reduxjs/toolkit';
import { applyMiddleware, compose, createStore, Middleware, Store, StoreEnhancer } from 'redux';
import * as reduxLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { isProduction } from '../logic/environment';
import { WindowWithDevTools } from '../window-with-dev-tools';
import { reducers, StoreState } from './app.reducers';
import { rootEpic } from './app.epics';

const epicMiddleware = createEpicMiddleware<Action, Action, StoreState>();

const middlewares: Middleware[] = [epicMiddleware];
let enhancer: StoreEnhancer;

if (isProduction()) {
  enhancer = compose(applyMiddleware(...middlewares));
} else {
  const logger: Middleware = reduxLogger.createLogger({ collapsed: true });
  middlewares.push(logger);
  const reduxDevToolsExtensionCompose = (window as unknown as WindowWithDevTools).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  const composeEnhancers = reduxDevToolsExtensionCompose ? reduxDevToolsExtensionCompose({}) : compose;
  enhancer = composeEnhancers(applyMiddleware(...middlewares));
}

const reducer = combineReducers(reducers);

export const configureStore = () => {
  const store: Store = createStore(reducer, enhancer);
  epicMiddleware.run(rootEpic);

  return {
    store,
  };
};

export const { store } = configureStore();
