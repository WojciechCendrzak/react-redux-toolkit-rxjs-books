import { bookSlice, BookState } from '../logic/store/book/book.slice';

export interface StoreState {
  book: BookState;
}

export const reducers = {
  book: bookSlice.reducer,
};
