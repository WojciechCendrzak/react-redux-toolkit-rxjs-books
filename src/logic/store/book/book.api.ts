import { Book } from './book.models';

export const bookApi = {
  fetchBooks: async () => {
    return [] as Book[];
  },
  fetchBook: async (id: string) => {
    return {} as Book;
  },
};
