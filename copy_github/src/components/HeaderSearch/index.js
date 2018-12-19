import HeaderSearch from './HeaderSearch.html';
import renderUtils from '../../renderUtils';
require('./HeaderSearch.scss');

export default function(props) {
  const element =  document.querySelector('.HeaderSearch');
  element.innerHTML = renderUtils.template(HeaderSearch, props);
  element.className = "header__search__wrapper";
}