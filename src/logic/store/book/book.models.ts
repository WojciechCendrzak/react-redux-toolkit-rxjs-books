export interface Book {
  title?: string;
  subtitle?: string;
  isbn13?: string;
  price?: string;
  image?: string;
  url?: string;
}

export interface BookSearchResult {
  error?: string;
  total?: string;
  page?: string;
  books: Book[];
}

export interface BookDetails {
  error?: string;
  title?: string;
  subtitle?: string;
  authors?: string;
  publisher?: string;
  isbn10?: string;
  isbn13?: string;
  pages?: string;
  year?: string;
  rating?: string;
  desc: string;
  price?: string;
  image?: string;
  url?: string;
  pdf: {
    [x: string]: string;
  };
}
