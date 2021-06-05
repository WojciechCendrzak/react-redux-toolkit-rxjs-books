export const validateNote = (searchPhrase: string | undefined) => {
  const isValid = (searchPhrase?.length || 0) > 0;

  if (!isValid) {
    throw new Error('Type a search phrase first');
  }
};
