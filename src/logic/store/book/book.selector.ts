import { StoreState } from '../../../app/app.reducers';

export const getBookCards = (store: StoreState) => store.book.books;

export const getBook = (id: string) => (store: StoreState) => store.book.bookById && store.book.bookById[id];
