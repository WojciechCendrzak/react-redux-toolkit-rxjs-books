import { BookDetails, BookSearchResult } from './book.models';

export const bookApi = {
  fetchBooks: async (searchPhrase: string): Promise<BookSearchResult> =>
    (await fetch(`/search/${searchPhrase}`)).json(),

  fetchBook: async (isbn13: string): Promise<BookDetails> =>
    (await fetch(`/books/${isbn13}`)).json(),
};
