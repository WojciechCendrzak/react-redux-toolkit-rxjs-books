import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBook } from '../../logic/store/book/book.selector';
import { bookSlice } from '../../logic/store/book/book.slice';
import { Button, ButtonType } from '../../components/button/button';
import { Layout } from '../../components/layout/layout';
import { navigateBack } from '../../logic/navigation';
import { BookCard } from '../../components/book-card/book-card';
import {
  translate,
  translationKeys,
} from '../../logic/translations/translation.service';
import styled from 'styled-components';

export const BookPage: React.FC = () => {
  const dispatch = useDispatch();

  const { isbn13 } =
    useParams<{
      isbn13: string;
    }>();
  const bookDetails = useSelector(getBook(isbn13));

  useEffect(() => {
    dispatch(bookSlice.actions.fetchBook({ isbn13 }));
  }, [dispatch, isbn13]);

  const handleBack = useCallback(() => navigateBack(), []);

  return bookDetails ? (
    <Layout>
      <Buttons>
        <Button
          title={translate(translationKeys.common.buttons.back)}
          type={ButtonType.Secondary}
          onClick={handleBack}
        />
      </Buttons>
      <BookCard book={bookDetails} bigImage bookDetails={bookDetails} />
    </Layout>
  ) : null;
};

const Buttons = styled.div`
  justify-content: space-between;
  display: flex;
  margin-bottom: 4rem;
`;
