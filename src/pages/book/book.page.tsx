import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBook } from '../../logic/store/book/book.selector';
import { bookSlice } from '../../logic/store/book/book.slice';
import { Button, ButtonType } from '../../components/button/button';
import { Layout } from '../../components/layout/layout';
import { navigateBack } from '../../logic/navigation';

import './book.styles.css';

export const BookPage: React.FC = () => {
  const dispatch = useDispatch();
  const { isbn13 } =
    useParams<{
      isbn13: string;
    }>();
  const book = useSelector(getBook(isbn13));

  useEffect(() => {
    dispatch(bookSlice.actions.fetchBook({ isbn13 }));
  }, [dispatch, isbn13]);

  const handleBack = useCallback(() => navigateBack(), []);

  return book ? (
    <Layout>
      <div className="note">
        <div className="note-buttons">
          <Button title="Back" type={ButtonType.Secondary} onClick={handleBack} />
        </div>
        <div className="note-content">{book.title || ''}</div>
      </div>
    </Layout>
  ) : null;
};
