
require('./components/HeaderLogo');
import HeaderDownButton from './components/HeaderDownButton';
HeaderDownButton(({ menuName: 'Why GitHub?'}));
HeaderDownButton(({ menuName: 'Business Explore'}));
HeaderDownButton(({ menuName: 'Marketplace Pricing'}));
require('./components/HeaderSearch');
require('./styles/main.scss');

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());