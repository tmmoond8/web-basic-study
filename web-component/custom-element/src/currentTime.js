class CurrentTime extends HTMLElement {
  constructor() {
    // 클래스 초기화. 속성이나 하위 노드는 접근할 수 없다.
    super();
  }

  static get observedAttributes() {
    // 모니링 할 속성 이름
    console.log("called observedAttributes");
    return ["locale"];
  }

  connectedCallback() {
    // DOM에 추가되었다. 렌더링 등의 처리를 하자.
    this.start();
  }

  disconnectedCallback() {
    // DOM에서 제거되었다. 엘리먼트를 정리하는 일을 하자.
    this.stop();
  }

  attributeChangeCallback(attrName, oldVal, newVal) {
    // 속성이 추가/제거/변경되었다.
    console.log("called attributeChangeCallback", `attrName : ${attrName}`);
    this[attrName] = newVal;
  }

  adoptedCallback(oldDoc, newDoc) {
    // 다른 Document에서 옮겨져 왔음
    // 자주 쓸 일은 없을 것.
  }

  start() {
    // 필요에 따라 메서드를 추가할 수 있다.
    // 이 클래스 인스턴스는 HTMLElement이다.
    // 따라서 `document.querySelector('current-time').start()`로 호출할 수 있다.
    this.stop();
    this._timer = window.setInterval(() => {
      this.innerText = new Date().toLocaleString(this.locale);
    });
  }

  stop() {
    // 이 메서드 역시 CurrentTime클래스의 필요에 의해 추했다.
    if (this._timer) {
      window.clearInterval(this._timer);
      this._timer = null;
    }
  }
}

// <current-time> 태그가 CurrentTime 클래스를 사용하도록 한다.
customElements.define("current-time", CurrentTime);
