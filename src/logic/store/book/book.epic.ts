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
    map((action) => action.payload.searchPhrase),
    managed(switchMap((searchPhrase) => from(bookApi.fetchBooks(searchPhrase)))),
    map((result) => bookSlice.actions.setBooks({ books: result.books }))
  );

const fetchBook$: RootEpic = (action$) =>
  action$.pipe(
    filter(bookSlice.actions.fetchBook.match),
    map(action => action.payload.isbn13),
    managed(switchMap((isbn13) => from(bookApi.fetchBook(isbn13)))),
    map((bookDetails) => bookSlice.actions.setBook({  bookDetails }))
  );

export const bookEpic$ = combineEpics(fetchBooks$, fetchBook$);
