import Component from '../lib/component/Component';
import { getState } from '../lib/observer/globalObserver';
import { pageState } from './store';
import _ from './util/dom';

export default class App extends Component {
  constructor() {
    super();
    this.$target = _.createElement({ tagName: 'div', classNames: ['app'] });
    this.keys = [pageState];
    this.init();
  }

  init() {
    this.subscribe();
    this.render();
  }

  render() {
    this.$target.innerHTML = '';
    const { Page } = getState(pageState);
    this.setComponent(Page);

    const page = this.getComponent('page');

    this.$target.appendChild(page.$target);
  }
  setComponent(Page) {
    this.components['page'] = new Page();
  }
}

/**
 * render할 때마다 등록, 삭제를 반복하는 것이 메모리를 위해서는 좋을 텐데
 */
