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
import Article from './components/Article';
import ArrowCard from './components/ArrowCard';
import Advantages from './components/Advantages';
import Security from './components/Security';
import EffectBox from './components/EffectBox';
import Badges from './components/Badges';
import Marketplace from './components/Marketplace';
import Slider from './components/Slider';

Article({key: 'community'});
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
Article({key: 'github_for_teams'});
ArrowCard({ key: 'write_better_code'});
Advantages();
Security();
EffectBox();
Badges();
Marketplace();
Slider();

function component() {
  let element = document.createElement('div');
  element.innerHTML = 'Components'
  return element;
}

document.body.appendChild(component());