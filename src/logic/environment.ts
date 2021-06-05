export const isProduction = () => process.env.NODE_ENV === 'production';

export const getEnv = () => ({
  NODE_ENV: process.env.NODE_ENV,
});
