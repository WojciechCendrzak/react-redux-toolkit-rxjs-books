import { Action } from '@reduxjs/toolkit';
import * as reduxLogger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { reducers, StoreState } from './app.reducers';
import { rootEpic } from './app.epics';
import { configureStore } from '@reduxjs/toolkit';

const epicMiddleware = createEpicMiddleware<Action, Action, StoreState>();
const loggerMiddleware = reduxLogger.createLogger({ collapsed: true });

export const store = configureStore({
  reducer: reducers,
  middleware: [epicMiddleware, loggerMiddleware],
});

epicMiddleware.run(rootEpic);
