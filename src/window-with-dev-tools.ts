import { StoreEnhancer } from 'redux';

export interface WindowWithDevTools extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (
    ...middlewares: object[]
  ) => (options: any) => StoreEnhancer;
}
