import Button from './Button.html';
import renderUtils from '../../renderUtils';
require('./Button.scss');

export default function(props) {
  const element =  document.querySelector('.Button');
  element.innerHTML = renderUtils.template(Button, props);
  element.className = "signupform__password__wrapper";
};