import HeaderDownMenu from './HeaderDownMenu.html';
import renderUtils from '../../renderUtils';
require('./HeaderDownMenu.scss');

const menuItem = `<li class="header__menuitem--\${modifier}">\${subName}</li>`;

export default function(props) {
  const element =  document.querySelector('.HeaderDownMenu');
  element.innerHTML = HeaderDownMenu;
  try {
    props.list.forEach(item => element.firstChild.insertAdjacentHTML('beforeend', renderUtils.template(menuItem, item)))
  } catch(e) {
    console.log('empty list');
  }
  element.className = "header__downmenu__wrapper";
}