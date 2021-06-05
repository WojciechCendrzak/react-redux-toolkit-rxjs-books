import styled from 'styled-components';
import { APP_MARGIN } from '../../styles/layout';

export const Layout: React.FC = ({ children }) => (
  <Main>
    <Content>{children}</Content>
  </Main>
);

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${APP_MARGIN};
`;

const Content = styled.div`
  width: 600px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;
