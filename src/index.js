import Router from './lib/router/index.js';

import App from './App.js';
import MainPage from './page/MainPage.js';
import SubPage from './page/SubPage.js';

import { pageState } from './store/pageState.js';
import _ from './util/dom.js';

const root = _.$('#root');

const routes = {
  '/': MainPage,
  '/sub': SubPage,
};

export const router = new Router({ pageState });
router.setRoutes(routes);

const app = new App();

root.appendChild(app.$target);
