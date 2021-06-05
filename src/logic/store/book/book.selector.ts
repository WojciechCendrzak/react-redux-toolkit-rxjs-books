import { StoreState } from '../../../app/app.reducers';

export const getBooks = (store: StoreState) => store.book.books;

export const getBook = (id: string) => (store: StoreState) => store.book.bookById[id];
