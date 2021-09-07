import Component from './lib/component/index.js';
import { getState } from './lib/observer/index.js';

import { pageState } from './store/pageState.js';
import _ from './util/dom.js';

export default class App extends Component {
  constructor() {
    super();
    this.addClass(['app']);

    this.keys = [pageState];
    this.subscribe();
  }

  setTemplate() {
    return `<div id='page'></div>`;
  }

  setComponents() {
    const page = getState(pageState);

    if (!page) return {};
    return {
      page: new page.Page(),
    };
  }
}

/**
 * render할 때마다 등록, 삭제를 반복하는 것이 메모리를 위해서는 좋을 텐데
 */
