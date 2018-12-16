require('./components/HeaderLogo');
require('./styles/main.scss');

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Webpack'
  return element;
}

document.body.appendChild(component());