import { combineEpics } from 'redux-observable';
import { from } from 'rxjs';
import { filter, map, switchMap, throttleTime } from 'rxjs/operators';
import { RootEpic } from '../../../app/app.epics.type';
import { AVOID_QUICK_MULTIPLY_API_CALLS_TIMEOUT_MS } from '../../const';
import { managed } from '../../operators/managed.operator';
import { bookApi } from './book.api';
import { bookSlice } from './book.slice';

const fetchBooks$: RootEpic = (action$) =>
  action$.pipe(
    filter(bookSlice.actions.fetchBooks.match),
    throttleTime(AVOID_QUICK_MULTIPLY_API_CALLS_TIMEOUT_MS),
    managed(switchMap(() => from(bookApi.fetchBooks()))),
    map((books) => bookSlice.actions.setBooks({ books }))
  );

const fetchNote$: RootEpic = (action$) =>
  action$.pipe(
    filter(bookSlice.actions.fetchBook.match),
    managed(switchMap((action) => from(bookApi.fetchBook(action.payload.id)))),
    map((book) => bookSlice.actions.setBook({ book }))
  );

export const bookEpic$ = combineEpics(fetchBooks$, fetchNote$);
