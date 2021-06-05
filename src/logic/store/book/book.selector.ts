import { StoreState } from '../../../app/app.reducers';

export const getSearchPhrase = (store: StoreState) =>
  store.book.searchPhrase || '';

export const getBookCards = (store: StoreState) => store.book.books;

export const getBook = (id: string) => (store: StoreState) =>
  store.book.bookById && store.book.bookById[id];
