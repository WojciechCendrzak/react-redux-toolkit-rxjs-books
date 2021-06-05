import { Provider } from 'react-redux';
import { store } from './app.store';
import { Router } from 'react-router-dom';
import { history } from './app.route.history';
import { AppRouter } from './app.route';
import '../styles/main.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <AppRouter />
      </Router>
    </Provider>
  );
};
