import App from './App.js';
import Router from './lib/router/index.js';
import { pageState } from './store/pageState.js';

const root = document.querySelector('#root');

const routes = {
  '/': MainPage,
};

export const router = new Router(routes, pageState);

root.appendChild(new App().$target);
