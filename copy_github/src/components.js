require('./styles/main.scss');

import HeaderLogo from './components/HeaderLogo';
import HeaderDownButton from './components/HeaderDownButton';
import HeaderSearch from './components/HeaderSearch';
import HeaderSignButton from './components/HeaderSignButton';
import SignUpFormInput from './components/SignUpFormInput/SignUpFormInput';
import SignUpFormPassword from './components/SignUpFormPassword';
import Button from './components/Button';
import FormHelper from './components/FormHelper';

HeaderLogo();
HeaderDownButton(({ menuName: 'Why GitHub?'}));
HeaderDownButton(({ menuName: 'Business Explore'}));
HeaderDownButton(({ menuName: 'Marketplace Pricing'}));
HeaderSearch();
HeaderSignButton({ buttonName: 'Sign in', modifier: 'default'});
HeaderSignButton({ buttonName: 'Sign up', modifier: 'outline'});
SignUpFormInput({ label: 'Username', placeHolder: 'Pick username'});
SignUpFormPassword({ label: 'Password', placeHolder: 'Create a password'});
Button({ content: 'Sign up for GitHub', background: 'green',  color: 'white'});
FormHelper();

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());