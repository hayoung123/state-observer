import _ from '../util/dom';
import Component from '../../lib/component/Component';
import { getState } from '../../lib/observer/globalObserver';
import { textState } from '../store';

export default class FirstDepth extends Component {
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
    const text = getState(textState);

    this.$target.innerHTML = `
        <div>천번째 뎁스: ${text}</div>
      `;
  }
  //   unsubscribe() {
  //     console.log('???');
  //   }
}
