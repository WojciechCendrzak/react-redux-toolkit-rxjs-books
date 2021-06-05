import styled from 'styled-components';

export const BookField: React.FC<{ field: string; value: string | undefined }> = ({ field, value = '' }) => (
  <Container>
    <Field>{`${field}:`}</Field>
    <Value>{value}</Value>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 0.25rem;
`;

const Field = styled.strong`
  min-width: 80px;
`;

const Value = styled.div``;
