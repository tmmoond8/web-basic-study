import Button from './Button.html';
import renderUtils from '../../renderUtils';
require('./Button.scss');

const Arrow = `<span class="button__arrow">→</span>`

export default function(props) {
  const element =  document.querySelector('.Button');
  element.innerHTML = renderUtils.template(Button, props);
  if(props.arrow) element.querySelector('.button__contents').insertAdjacentHTML('beforeend', renderUtils.template(Arrow, null))
  element.className = "button__wrapper";
};