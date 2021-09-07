import Component from '../lib/component/index.js';

export default class MainPage extends Component {
  constructor() {
    super();
  }
  setTemplate() {
    return `
        <h1>메인페이지</h1>
    `;
  }
}
