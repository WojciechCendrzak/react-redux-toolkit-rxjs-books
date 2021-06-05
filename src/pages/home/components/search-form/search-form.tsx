import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Button, ButtonType } from '../../../../components/button/button';
import { bookSlice } from '../../../../logic/store/book/book.slice';
import { APP_MARGIN } from '../../../../styles/layout';

import './book-form.styles.css';

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('');
  const handleOnChange = useCallback((e) => setSearchPhrase(e.target.value), []);
  const handleAddNote = useCallback(() => {
    dispatch(bookSlice.actions.fetchBooks({ searchPhrase }));
  }, [dispatch, searchPhrase]);

  return (
    <Container>
      <input
        className="note-input"
        type="text"
        placeholder="Search books by title, author, ISBN or keywords..."
        value={searchPhrase}
        onChange={handleOnChange}
      />
      <div className="add-button-container">
        <Button title="Search" type={ButtonType.Transparent} onClick={handleAddNote}></Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: ${APP_MARGIN};
  display: flex;
  flex-direction: column;
`;
