import Header from './Header.html';
import renderUtils from '../../renderUtils';
import HeaderLogo from '../HeaderLogo';
import HeaderDownButton from '../HeaderDownButton';
import HeaderSearch from '../HeaderSearch';
import HeaderSignButton from '../HeaderSignButton';
require('./Header.scss');

export default function(props) {
  const element =  document.querySelector('.Header');
  element.innerHTML = renderUtils.template(Header, props);
  HeaderLogo();
  HeaderDownButton(({ menuName: 'Why GitHub?', id: 'why_github' }));
  HeaderDownButton(({ menuName: 'Explore', id: 'explore'}));
  HeaderDownButton(({ menuName: 'Pricing', id: 'pricing'}));
  HeaderSearch();
  HeaderSignButton({ buttonName: 'Sign in', modifier: 'default'});
  HeaderSignButton({ buttonName: 'Sign up', modifier: 'outline'});
  HeaderSignButton({ buttonName: 'Sign up', modifier: 'outline'});
  element.className = "header__wrapper";
};