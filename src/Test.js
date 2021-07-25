import { subscribe, getState, setState } from '../lib/observer';
import { textState } from './store.js';

export default class Test {
  constructor() {
    this.$target = document.createElement('div');
    this.init();
    [this.test, this.setTest] = useState(textState);
  }

  init() {
    subscribe(textState, this.render.bind(this));
    this.render();
    this.$target.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick({ target: { tagName } }) {
    if (tagName !== 'BUTTON') return;
    const input = document.querySelector('#text_input');
    tthis.setTest(input.value);
  }

  render() {
    const text = this.test._state;

    this.$target.innerHTML = `
                        <div>${text}</div>
                        <input type="text" id='text_input'/>
                        <button>변환</button>
                        `;
  }
}

// const Test = () => {
//   const [text, setText] = useState(textState);

//   const $target = document.createElement('div');

//     const handleClick = ({target}) => {
//         target
//     }

//     $target.addEventListener('click',handleClick);

//   $target.innerHTML = `
//    <div></div>
//    <input type="text" />
//    <button>변환</button>
// `;
//   return $target;
// };
