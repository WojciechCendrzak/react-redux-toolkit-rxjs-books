import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '../../components/layout/layout';
import { bookSlice } from '../../logic/store/book/book.slice';
import { NoteCards } from './components/book-cards/book-cards';
import { SearchForm } from './components/search-form/search-form';

export const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookSlice.actions.fetchBooks({ searchPhrase: 'lem' }));
  }, [dispatch]);

  return (
    <Layout>
      <SearchForm />
      <NoteCards />
    </Layout>
  );
};
