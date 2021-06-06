export const isProduction = () => process.env.NODE_ENV === 'production';

export const getEnv = () => ({
  NODE_ENV: process.env.NODE_ENV,
  REACT_APP_IT_BOOK_STORE_API: process.env.REACT_APP_IT_BOOK_STORE_API,
});
