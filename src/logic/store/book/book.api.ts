import { getEnv } from '../../environment';
import { BookDetails, BookSearchResult } from './book.models';

const bookUrl = getEnv().REACT_APP_IT_BOOK_STORE_API || '';

export const bookApi = {
  fetchBooks: async (searchPhrase: string): Promise<BookSearchResult> =>
    (await fetch(`${bookUrl}/search/${searchPhrase}`)).json(),

  fetchBook: async (isbn13: string): Promise<BookDetails> =>
    (await fetch(`${bookUrl}/books/${isbn13}`)).json(),
};
