import { history } from '../app/app.route.history';

export const navigateTo = (path: string) => history.push(path);

export const navigateBack = () => window.history.back();
