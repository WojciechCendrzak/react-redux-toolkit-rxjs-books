import { Header } from '../header/header';

import './layout.styles.css';

export const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <div className="main">
      <div className="content">{children}</div>
    </div>
  </>
);
