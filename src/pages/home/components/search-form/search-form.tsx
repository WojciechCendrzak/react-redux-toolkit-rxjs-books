import { ChangeEventHandler, KeyboardEventHandler, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Button, ButtonType } from '../../../../components/button/button';
import { getSearchPhrase } from '../../../../logic/store/book/book.selector';
import { bookSlice } from '../../../../logic/store/book/book.slice';
import { colors } from '../../../../styles/colors';
import {
  APP_BORDER_RADIUS,
  APP_MARGIN,
  APP_PADDING,
} from '../../../../styles/layout';

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const searchPhrase = useSelector(getSearchPhrase);

  const handleSearch = useCallback(() => {
    dispatch(bookSlice.actions.fetchBooks());
  }, [dispatch]);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const newSearchPhrase = e.target.value;
      dispatch(
        bookSlice.actions.setSearchPhrase({ searchPhrase: newSearchPhrase })
      );
      dispatch(bookSlice.actions.fetchBooks());
    },
    [dispatch]
  );

  const handleKeyDown: KeyboardEventHandler = useCallback(
    (e) => e.key === 'Enter' && handleSearch(),
    [handleSearch]
  );

  return (
    <Container>
      <Input
        type="text"
        placeholder="Search books by title, author, ISBN or keywords..."
        value={searchPhrase}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      <SearchButton
        title="Search"
        type={ButtonType.Transparent}
        onClick={handleSearch}
      />
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: ${APP_MARGIN};
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  margin-bottom: ${APP_MARGIN};
`;

const Input = styled.input`
  flex: 1;
  padding: ${APP_PADDING};
  border-radius: ${APP_BORDER_RADIUS};
  border: ${colors.secondary} solid thin;
`;

const SearchButton = styled(Button)`
  margin-left: ${APP_MARGIN};
`;
