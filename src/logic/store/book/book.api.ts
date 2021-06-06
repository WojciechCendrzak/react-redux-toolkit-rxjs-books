import { BookDetails, BookSearchResult } from './book.models';

const bookUrl = '/1.0';

export const bookApi = {
  fetchBooks: async (searchPhrase: string): Promise<BookSearchResult> =>
    (await fetch(`${bookUrl}/search/${searchPhrase}`)).json(),

  fetchBook: async (isbn13: string): Promise<BookDetails> =>
    (await fetch(`${bookUrl}/books/${isbn13}`)).json(),
};
