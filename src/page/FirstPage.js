import Component from '../../lib/component/Component';
import { getState } from '../../lib/observer/globalObserver';

import SecondPage from './SecondPage';
import FirstDepth from '../components/FirstDepth';
import Form from '../components/Form';
import PageButton from '../components/PageButton';

import _ from '../util/dom';
import { textState } from '../store';

export default class FirstPage extends Component {
  constructor() {
    super();
    this.$target = _.createElement({ tagName: 'div' });
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
    const pageBtn = this.getComponent('pageBtn');

    this.$target.innerHTML = `
            <h1>First page</h1>
            <div>root: ${text}<div>
          `;

    this.$target.appendChild(firstDepth.$target);
    this.$target.appendChild(form.$target);
    this.$target.appendChild(pageBtn.$target);
  }
  setComponent() {
    this.components['form'] = new Form();
    this.components['firstDepth'] = new FirstDepth();
    this.components['pageBtn'] = new PageButton({ movePage: SecondPage });
  }
}
