import { useSelector } from 'react-redux';
import { getBooks } from '../../../../logic/store/book/book.selector';
import { BookCard } from '../book-card/book-card';

import './book-cards.styles.css';

export const NoteCards: React.FC = () => {
  const books = useSelector(getBooks);

  return (
    <div className="notes-cards">
      <div className="title">Search results</div>
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};
