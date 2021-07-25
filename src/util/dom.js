const _ = {
  $: function (target, root = document) {
    return root.querySelector(target);
  },
  $all: function (target, root = document) {
    return root.querySelectorAll(target);
  },
  onEvent: function (target, eventType, fn) {
    target.addEventListener(eventType, fn);
  },
  createElement: function ({ tagName, classNames = [], value = '' }) {
    const element = document.createElement(tagName);
    element.classList.add(...classNames);
    if (value) element.innerHTML = value;
    return element;
  },
};

export default _;
