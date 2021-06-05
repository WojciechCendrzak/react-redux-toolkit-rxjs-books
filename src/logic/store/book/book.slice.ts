import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book, BookDetails } from './book.models';
import { ObjectByKey } from '../../object';

export interface BookState {
  books?: Book[];
  bookById?: ObjectByKey<BookDetails>;
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
    setBook: (state, action: PayloadAction<{ bookDetails: BookDetails }>) => {
      const { bookDetails } = action.payload;
      if (!state.bookById) state.bookById = {};
      if (bookDetails.isbn13) {
        state.bookById[bookDetails.isbn13] = bookDetails;
      }
    },
  },
});
