class Missile {
  constructor() {
    this.start = [0, 0];
    this.end = [1000, 1000];
    this.el = this.createEl();
  }

  createEl() {
    const div = document.createElement('div');
    div.style.backgroundColor = 'red';
    div.style.position = 'absolute';
    div.style.height = '15px';
    div.style.width = '15px';
    div.style.left = `${this.start[0]}`;
    div.style.top = `${this.start[1]}`;
    div.style.transition = 'all 4s';
    return div;
  }

  render(parent) {
    parent.appendChild(this.el);
  }

  move() {
    this.el.style.left = `${this.end[0]}px`;
    this.el.style.top = `${this.end[1]}px`;
  }
}