import HeaderSignButton from './HeaderSignButton.html';
import renderUtils from '../../renderUtils';
require('./HeaderSignButton.scss');

export default function(props) {
  const element =  document.querySelector('.HeaderSignButton');
  element.innerHTML = renderUtils.template(HeaderSignButton, props);
  element.className = "header__signbutton__wrapper";
};