require('./components/HeaderLogo');
require('./components/HeaderDownButton');
require('./styles/main.scss');

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());