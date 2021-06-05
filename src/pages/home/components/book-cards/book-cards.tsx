import { useSelector } from 'react-redux';
import { getBookCards } from '../../../../logic/store/book/book.selector';
import { BookCard } from '../book-card/book-card';

import './book-cards.styles.css';

export const BookCards: React.FC = () => {
  const bookCards = useSelector(getBookCards);

  return (
    <div className="notes-cards">
      <div className="title">Search results</div>
      {bookCards?.map((bookCard, index) => (
        <BookCard key={index} book={bookCard} />
      ))}
    </div>
  );
};
