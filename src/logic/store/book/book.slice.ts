import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './book.models';
import { ObjectByKey } from '../../object';

export interface BookState {
  books?: Book[];
  bookById?: ObjectByKey<Book>;
}

const initialState: BookState = {};

export const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    fetchBooks: (_state, _action: PayloadAction<{ searchPhrase: string }>) => undefined,
    fetchBook: (_state, _action: PayloadAction<{ isbn13: string }>) => undefined,
    setBooks: (state, action: PayloadAction<{ books: Book[] }>) => {
      state.books = action.payload.books;
    },
    setBook: (state, action: PayloadAction<{ book: Book }>) => {
      const { book } = action.payload;
      if (!state.bookById) state.bookById = {};
      if (book.isbn13) {
        state.bookById[book.isbn13] = book;
      }
    },
  },
});
