import Router from './lib/router/index.js';

import App from './App.js';
import MainPage from './page/MainPage.js';

import { pageState } from './store/pageState.js';
import _ from './util/dom.js';

const root = _.$('#root');

const routes = {
  '/': MainPage,
};

export const router = new Router({ pageState });
router.setRoutes(routes);

const app = new App();

root.appendChild(app.$target);
