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
  const { id } =
    useParams<{
      id: string;
    }>();
  const book = useSelector(getBook(id));

  useEffect(() => {
    dispatch(bookSlice.actions.fetchBook({ id }));
  }, [dispatch, id]);

  const handleBack = useCallback(() => navigateBack(), []);

  return book ? (
    <Layout>
      <div className="note">
        <div className="note-buttons">
          <Button title="Back" type={ButtonType.Secondary} onClick={handleBack} />
        </div>
        <div className="note-content">{book.content || ''}</div>
      </div>
    </Layout>
  ) : null;
};
