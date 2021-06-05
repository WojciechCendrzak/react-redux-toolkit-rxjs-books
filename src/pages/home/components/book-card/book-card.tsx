import { Book } from '../../../../logic/store/book/book.models';
import { Button, ButtonType } from '../../../../components/button/button';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../../../app/app.route.const';

import './book-card.styles.css';
import { useCallback } from 'react';
import { navigateTo } from '../../../../logic/navigation';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const id = book.id;

  const notePath = id && generatePath(AppRoute.Book, { id });

  const handleSeeDetails = useCallback(() => notePath && navigateTo(notePath), [notePath]);

  return (
    <div className="note-card">
      <div>
        <div className="note-card-content">{book.content || ''}</div>
      </div>
      <div className="note-card-button-container">
        <Button title="See details" type={ButtonType.Primary} onClick={handleSeeDetails} />
      </div>
    </div>
  );
};
