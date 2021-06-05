import { Book } from '../../../../logic/store/book/book.models';
import { Button, ButtonType } from '../../../../components/button/button';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../../../app/app.route.const';
import { useCallback } from 'react';
import { navigateTo } from '../../../../logic/navigation';

import './book-card.styles.css';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { isbn13 } = book;

  const notePath = isbn13 && generatePath(AppRoute.Book, { isbn13 });

  const handleSeeDetails = useCallback(() => notePath && navigateTo(notePath), [notePath]);

  return (
    <div className="note-card">
      <div>
        <div className="note-card-content">{book.title}</div>
      </div>
      <div className="note-card-button-container">
        <Button title="See details" type={ButtonType.Primary} onClick={handleSeeDetails} />
      </div>
    </div>
  );
};
