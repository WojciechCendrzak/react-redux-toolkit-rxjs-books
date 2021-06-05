import { Action } from 'redux';
import { Epic } from 'redux-observable';
import { StoreState } from './app.reducers';

export type RootEpic = Epic<Action, Action, StoreState>;
