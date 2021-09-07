import Component from '../lib/component/index.js';
import { router } from '../index.js';
import _ from '../util/dom.js';

export default class SubPage extends Component {
  constructor() {
    super();
  }

  addEvent() {
    _.onEvent(this.$target, 'click', this.handleClick.bind(this));
  }

  handleClick(e) {
    if (e.target.tagName !== 'BUTTON') return;
    router.push('/');
  }

  setTemplate() {
    return `
        <h1>서브 페이지</h1>  
        <button>메인페이지로 이동</button>
      `;
  }
}
