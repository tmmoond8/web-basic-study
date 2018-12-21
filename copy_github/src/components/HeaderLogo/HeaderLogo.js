import HeaderLogo from './HeaderLogo.html';
import renderUtils from '../../renderUtils';
require('./HeaderLogo.scss');

export default function(props) {
  const element =  document.querySelector('.HeaderLogo');
  element.innerHTML = renderUtils.template(HeaderLogo, props);
  element.className = "header__logo__wrapper";
}