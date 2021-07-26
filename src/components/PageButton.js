import Component from '../../lib/component/Component';
import { setState } from '../../lib/observer/globalObserver';
import { pageState } from '../store';
import _ from '../util/dom';

export default class PageButton extends Component {
  constructor({ movePage }) {
    super();
    this.$target = _.createElement({ tagName: 'button', value: '전환' });
    this.movePage = movePage;
    this.addEvent();
  }

  addEvent() {
    _.onEvent(this.$target, 'click', this.handleClick.bind(this));
  }
  handleClick() {
    setState(pageState, { Page: this.movePage });
  }
}
