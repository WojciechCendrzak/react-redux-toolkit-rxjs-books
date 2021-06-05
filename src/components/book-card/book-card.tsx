import { Book, BookDetails } from '../../logic/store/book/book.models';
import { Button, ButtonType } from '../button/button';
import { generatePath } from 'react-router-dom';
import { AppRoute } from '../../app/app.route.const';
import { useCallback } from 'react';
import { navigateTo } from '../../logic/navigation';
import styled from 'styled-components';
import { BookField } from '../../pages/home/components/book-field/book-field';
import { translate, translationKeys } from '../../logic/translations/translation.service';

interface BookCardProps {
  book: Book;
  bookDetails?: BookDetails;
  bigImage?: boolean;
  navigateToDetailsButton?: boolean;
}

export const BookCard: React.FC<BookCardProps> = ({
  book,
  bigImage = false,
  navigateToDetailsButton = false,
  bookDetails,
}) => {
  const { isbn13 } = book;

  const bookPath = isbn13 && generatePath(AppRoute.Book, { isbn13 });

  const handleSeeDetails = useCallback(() => bookPath && navigateTo(bookPath), [bookPath]);

  return (
    <Container>
      <Image src={book.image} bigImage={bigImage} width={bigImage ? 300 : 150} height={bigImage ? 350 : 175} />
      <Description>
        <div>
          <BookField field={translate(translationKeys.common.book.title)} value={book.title} />
          <BookField field={translate(translationKeys.common.book.subtitle)} value={book.subtitle} />
          <BookField field={translate(translationKeys.common.book.isbn13)} value={book.isbn13} />
          <BookField field={translate(translationKeys.common.book.price)} value={book.price} />
          {bookDetails && (
            <>
              <BookField field={translate(translationKeys.common.book.year)} value={bookDetails.year} />
              <BookField field={translate(translationKeys.common.book.publisher)} value={bookDetails.publisher} />
              <BookField field={translate(translationKeys.common.book.rating)} value={bookDetails.rating} />
              <BookField field={translate(translationKeys.common.book.pages)} value={bookDetails.pages} />
              <BookField field={translate(translationKeys.common.book.description)} value={bookDetails.desc} />
            </>
          )}
        </div>
        {navigateToDetailsButton && <Button title="See details" type={ButtonType.Primary} onClick={handleSeeDetails} />}
      </Description>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
`;

const Image = styled.img<{ bigImage: boolean }>`
  margin: -25px;
  margin: ${({ bigImage }) => (bigImage ? -50 : -25)}px;
`;

const Description = styled.div`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
