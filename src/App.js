import Component from '../lib/component/Component';
import { getState } from '../lib/observer/globalObserver';
import FirstDepth from './components/FirstDepth';
import Form from './components/Form';
import { textState } from './store';
import _ from './util/dom';

export default class App extends Component {
  constructor() {
    super();
    this.$target = _.createElement({ tagName: 'div', classNames: ['app'] });
    this.keys = [textState];
    this.init();
  }

  init() {
    this.subscribe();
    this.render();
  }

  render() {
    this.setComponent();
    const text = getState(textState);

    const form = this.components['form'];
    //vs 위 아래 뭐가 더 좋을지
    const firstDepth = this.getComponent('firstDepth');

    this.$target.innerHTML = `
        <div>root: ${text}<div>
      `;

    this.$target.appendChild(firstDepth.$target);
    this.$target.appendChild(form.$target);
  }
  setComponent() {
    this.components['form'] = new Form();
    this.components['firstDepth'] = new FirstDepth();
  }
}

/**
 * render할 때마다 등록, 삭제를 반복하는 것이 메모리를 위해서는 좋을 텐데
 */
