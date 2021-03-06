import { router } from '../index.js';
import Component from '../lib/component/index.js';
import _ from '../util/dom.js';

export default class MainPage extends Component {
  constructor() {
    super();
  }

  addEvent() {
    _.onEvent(this.$target, 'click', this.handleClick.bind(this));
  }

  handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return;
    router.push('/sub');
  }

  setTemplate() {
    return `
        <h1>메인페이지</h1>
        <button>서브페이지로 이동</button>
    `;
  }
}
