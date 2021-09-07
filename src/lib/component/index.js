import { subscribe, unsubscribe } from '../observer/globalObserver';

export default class Component {
  /**
   *
   * keys: 구독하고 있는 상태의 key값들
   * -> 각 컴포넌트들에서 등록 해놔야 된다.
   *
   * reRender: 구독, 구도 취소할 때 사용하는 렌더링함수를 this에 바인딩한 함수
   */
  constructor(props) {
    this.props = props;
    this.state = this.initState();

    this.keys = [];
    this.components = {};

    this.init();
    this.reRender = this.registerRender.bind(this);
  }

  init() {
    this.render();
    this.addEvent();
  }

  initState() {
    return;
  }

  addEvent() {
    return;
  }

  render() {
    this.components = this.setComponents();
    this.innerHTML = this.setTemplate();
    this.setLayout();
    this.componentDidMount();
  }

  //innerHTML
  setTemplate() {
    throw new Error('템플릿을 생성해주세요.');
  }

  //컴포넌트를 각 위치에 맞게 replace
  setLayout() {
    for (const [key, Comp] of Object.entries(this.components)) {
      const $$ = this.querySelector(`#${key}`);
      $$?.replaceWith(Comp);
    }
  }

  componentDidMount() {
    return;
  }

  setComponents() {
    return {};
  }

  //클래스 추가 메소드
  addClass(...args) {
    this.className = args.join(' ');
  }

  //구독한 상태 변경시 렌더링 되는 함수
  subscribedRender() {
    this.unsubscribe(); //하위 컴포넌트 구독 해제
    this.render(); //하위 컴포넌트 재생성
  }

  //key에 속한 것들 render
  subscribe() {
    this.keys.forEach((key) => subscribe(key, this.reRender));
  }

  unsubscribe(isCurrentComp = true) {
    if (!isCurrentComp && this.keys.length) {
      this.keys.forEach((key) => unsubscribe(key, this.reRender));
    }

    //하위 컴포넌트들도 리렌더링되기 때문에 unsubscribe
    const components = Object.values(this.components);
    components.forEach((component) => {
      component.unsubscribe(false);
    });
  }

  //TODO: 하위 전부다 렌더링 되는 것 해결
  //TODO: throw Error를 에러처리를 따로 해놓지 않는다면 배포 당시에 삭제해야되나??
  setState(newState) {
    if (!this.state) throw Error('변경할 상태가 없습니다!');

    if (typeof newState === 'function') {
      this.state = { ...this.state, ...newState(this.state) };
    } else {
      this.state = { ...this.state, ...newState };
    }
    this.reRender();
  }
}
