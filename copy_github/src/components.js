require('./styles/main.scss');
require('./components.scss');

import HeaderLogo from './components/HeaderLogo';
import HeaderDownButton from './components/HeaderDownButton';
import HeaderSearch from './components/HeaderSearch';
import HeaderSignButton from './components/HeaderSignButton';
import SignUpFormInput from './components/SignUpFormInput/SignUpFormInput';
import SignUpFormPassword from './components/SignUpFormPassword';
import Button from './components/Button';
import FormHelper from './components/FormHelper';
import IntroPhrase from './components/IntroPhrase';
import EnterprisePropose from './components/EnterprisePropose';
import BusinessOrgs from './components/BusinessOrgs';
import TeamSignUp from './components/TeamSignUp';

HeaderLogo();
HeaderDownButton(({ menuName: 'Why GitHub?'}));
HeaderDownButton(({ menuName: 'Business Explore'}));
HeaderDownButton(({ menuName: 'Marketplace Pricing'}));
HeaderSearch();
HeaderSignButton({ buttonName: 'Sign in', modifier: 'default'});
HeaderSignButton({ buttonName: 'Sign up', modifier: 'outline'});
SignUpFormInput({ label: 'Username', placeHolder: 'Pick username'});
SignUpFormPassword({ label: 'Password', placeHolder: 'Create a password'});
Button({ contents: 'Sign up for GitHub', modifier: 'green', link: '/link'});
FormHelper();
IntroPhrase();
EnterprisePropose();
BusinessOrgs();
TeamSignUp();

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());