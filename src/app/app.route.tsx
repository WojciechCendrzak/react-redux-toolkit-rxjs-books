import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/home/home.page';
import { NotFoundPage } from '../pages/not-found/not-found.page';
import { BookPage } from '../pages/book/book.page';
import { AppRoute } from './app.route.const';

export const AppRouter = () => (
  <Switch>
    <Route exact path={AppRoute.Home} component={HomePage} />
    <Route exact path={AppRoute.Book} component={BookPage} />
    <Route exact path={AppRoute.NotFound} component={NotFoundPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
