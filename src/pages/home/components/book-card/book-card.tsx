import { Book } from '../../../../logic/store/book/book.models';
import { Button, ButtonType } from '../../../../components/button/button';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../../../app/app.route.const';
import { useCallback } from 'react';
import { navigateTo } from '../../../../logic/navigation';
import styled from 'styled-components';
import { BookField } from '../book-field/book-field';
import { translate, translationKeys } from '../../../../logic/translations/translation.service';

interface BookCardProps {
  book: Book;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const { isbn13 } = book;

  const notePath = isbn13 && generatePath(AppRoute.Book, { isbn13 });

  const handleSeeDetails = useCallback(() => notePath && navigateTo(notePath), [notePath]);

  return (
    <Container>
      <Image src={book.image} width={150} height={175} />
      <Description>
        <div>
          <BookField field={translate(translationKeys.common.book.title)} value={book.title} />
          <BookField field={translate(translationKeys.common.book.subtitle)} value={book.subtitle} />
          <BookField field={translate(translationKeys.common.book.isbn13)} value={book.isbn13} />
          <BookField field={translate(translationKeys.common.book.price)} value={book.price} />
        </div>
        <Button title="See details" type={ButtonType.Primary} onClick={handleSeeDetails} />
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

const Image = styled.img`
  margin: -25px;
`;

const Description = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
