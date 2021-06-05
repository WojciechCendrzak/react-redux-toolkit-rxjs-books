import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { getBookCards } from '../../../../logic/store/book/book.selector';
import { translate, translationKeys } from '../../../../logic/translations/translation.service';
import { BookCard } from '../book-card/book-card';

export const BookCards: React.FC = () => {
  const bookCards = useSelector(getBookCards);

  return (
    <>
      <Title>{translate(translationKeys.common.searchForm.title)}</Title>
      {bookCards?.map((bookCard, index) => (
        <BookCard key={index} book={bookCard} />
      ))}
    </>
  );
};

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  margin: 2rem;
`;
