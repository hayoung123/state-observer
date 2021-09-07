import setState from '../observer/index.js';

export default class Router {
  constructor({ routes, pageState }) {
    this.routes = routes;
    this.setPage = setState(pageState);
    this.currIndex = 0;

    this.init();
  }

  init() {
    history.replaceState({ index: 0 }, '');
    window.addEventListener('popstate', this.handlePopstate.bind(this));
  }

  setRoutes(routes) {
    this.routes = routes;
    this.handlePopstate();
  }

  // 브라우저 뒤로, 앞으로가기
  handlePopstate() {
    const path = location.pathname;

    //TODO: 클래스의 타입이 뭔지 알아보고 적용해봐야된다.
    let Page;
    let params;

    for (const [routePath, component] of Object.entries(this.routes)) {
      if (this.match(routePath, path)) {
        Page = component;
        params = this.parseParams(routePath, path);
        break;
      }
    }

    if (!Page) {
      this.replace('/');
      return;
    }

    this.setPage({ Page, params });
    this.currIndex = history.state.index;
  }

  // 화면 앞으로가기
  push(pathname) {
    history.pushState({ index: this.currIndex + 1 }, '', pathname);
    this.handlePopstate();
  }

  replace(pathname) {
    history.replaceState({ index: this.currIndex }, '', pathname);
    this.handlePopstate();
  }

  // 화면 뒤로가기
  pop() {
    if (!this.currIndex) {
      history.pushState({ index: this.currIndex - 1 }, '', '/');
      this.handlePopstate();
      return;
    }
    history.back();
  }

  //
  match(routePath, path) {
    const routeChunks = routePath.split('/');
    const chunks = path.split('/');

    if (routeChunks.length !== chunks.length) {
      return false;
    }

    for (let i = 0; i < chunks.length; i++) {
      if (routeChunks[i][0] === ':' || routeChunks[i] === chunks[i]) {
        continue;
      }
      return false;
    }
    return true;
  }

  parseParams(routePath, path) {
    const params = {};

    const routeChunks = routePath.split('/');
    const chunks = path.split('/');

    for (let i = 0; i < chunks.length; i++) {
      if (routeChunks[i][0] !== ':') {
        continue;
      }

      params[routeChunks[i].slice(1)] = chunks[i];
    }

    return params;
  }

  isBack(index) {
    return index < this.currIndex;
  }
}
