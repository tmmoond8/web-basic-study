import HeaderDownMenu from './HeaderDownMenu.html';
import renderUtils from '../../renderUtils';
require('./HeaderDownMenu.scss');
export default function(props) {
  const element =  document.querySelector('.HeaderDownMenu');
  element.innerHTML = HeaderDownMenu;
  props.list.forEach(item => {
    element.firstChild.appendChild(renderUtils.el('li', {
      className: `header__menuitem--${item.modifier}`,
      innerHTML: item.subName
    }))
  })
  element.className = "header__downmenu__wrapper";
}