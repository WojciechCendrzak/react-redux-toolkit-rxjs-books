import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, ButtonType } from '../../../../components/button/button';
import { bookSlice } from '../../../../logic/store/book/book.slice';

import './book-form.styles.css';

export const BookForm: React.FC = () => {
  const dispatch = useDispatch();
  const [searchPhrase, setSearchPhrase] = useState('');
  const handleOnChange = useCallback((e) => setSearchPhrase(e.target.value), []);
  const handleAddNote = useCallback(() => {
    dispatch(bookSlice.actions.fetchBooks({ searchPhrase }));
  }, [dispatch, searchPhrase]);

  return (
    <div className="notes-container">
      <input
        className="note-input"
        type="text"
        placeholder="type search phrase..."
        value={searchPhrase}
        onChange={handleOnChange}
      />
      <div className="add-button-container">
        <Button title="Search" type={ButtonType.Transparent} onClick={handleAddNote}></Button>
      </div>
    </div>
  );
};
