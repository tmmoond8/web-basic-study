import Security from './Security.html';
import renderUtils from '../../renderUtils';
import ArrowCard from '../ArrowCard';
require('./Security.scss');

export default function(props) {
  const element =  document.querySelector('.Security');
  element.innerHTML = renderUtils.template(Security, props);
  element.className = "security__wrapper";
};