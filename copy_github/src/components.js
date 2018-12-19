require('./styles/main.scss');

import HeaderLogo from './components/HeaderLogo';
import HeaderDownButton from './components/HeaderDownButton';
import HeaderSearch from './components/HeaderSearch';
import HeaderSignButton from './components/HeaderSignButton';

HeaderLogo();
HeaderDownButton(({ menuName: 'Why GitHub?'}));
HeaderDownButton(({ menuName: 'Business Explore'}));
HeaderDownButton(({ menuName: 'Marketplace Pricing'}));
HeaderSearch();
HeaderSignButton({ buttonName: 'Sign in', modifier: 'default'});
HeaderSignButton({ buttonName: 'Sign up', modifier: 'outline'});

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());