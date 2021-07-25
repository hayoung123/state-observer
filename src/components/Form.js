import Component from '../../lib/component/Component';
import { setState } from '../../lib/observer/globalObserver';
import { textState } from '../store';
import _ from '../util/dom';

export default class Form extends Component {
  constructor() {
    super();
    this.$target = _.createElement({ tagName: 'form', classNames: ['form'] });
    this.init();
  }
  init() {
    this.render();
    this.addEvent();
  }
  addEvent() {
    _.onEvent(this.$target, 'submit', this.handleSubmit.bind(this));
  }
  render() {
    this.$target.innerHTML = `
        <input>
        <button>변환</button>
      `;
  }
  handleSubmit(e) {
    const input = _.$('input', this.$target);
    e.preventDefault();
    setState(textState, input.value);
    input.value = '';
    input.focus();
  }
}
