import { subscribe, unSubscribe } from '../observer/globalObserver';

export default class Component {
  /**
   *
   * keyInfo: 구독하고 있는 상태의 key값들
   * -> 각 컴포넌트들에서 등록 해놔야 된다.
   *
   * reRender: 구독, 구도 취소할 때 사용하는 렌더링함수를 this에 바인딩한 함수
   */
  constructor() {
    this.components = {};
    this.keyInfo = [];
    this.reRender = this.render.bind(this);
  }

  getComponent(name) {
    return this.components[name];
  }

  setComponent(name, component) {
    this.components[name] = new component();
  }

  render() {}

  subscribe() {
    this.keyInfo.forEach((key) => subscribe(key, this.reRender));
  }
  /**
   * isRoot: 현재 컴포넌트(클래스)가 상위 렌더링에 의해 다시 호출되는지 -> subscribe를 한번더 하는 상황인지
   */
  unsubscribe(isRoot = true) {
    if (!isRoot && this.keyInfo.length) {
      this.keyInfo.forEach((key) => unSubscribe(key, this.reRender));
    }

    //하위 컴포넌트들도 리렌더링되기 때문에 unsubscribe
    const components = Object.values(this.components);
    components.forEach((component) => {
      if (component?.unmount) component.unmount(false);
    });
  }
}
