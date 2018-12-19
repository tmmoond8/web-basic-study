import HeaderDownButton from './HeaderDownButton.html';
import HeaderDownMenu from '../HeaderDownMenu';
import renderUtils from '../../renderUtils';
require('./HeaderDownButton.scss');

const menuModel = {
  'Why GitHub?': {list: [
    { modifier: 'mazor', subName: 'Features'},
    { modifier: 'minor', subName: 'Code review'},
    { modifier: 'minor', subName: 'project management'},
    { modifier: 'minor', subName: 'Integrations'},
    { modifier: 'minor', subName: 'Team management'},
    { modifier: 'minor', subName: 'Social coding'},
    { modifier: 'minor', subName: 'Documentation'},
    { modifier: 'minor', subName: 'Code hosting'},
    { modifier: 'line', subName: ''},
    { modifier: 'mazor', subName: 'Case Studies'},
    { modifier: 'mazor', subName: 'Security'},
  ]},
  'Business Explore': {list: [
    { modifier: 'mazor', subName: 'Explore  GitHub'},
    { modifier: 'line', subName: ''},
    { modifier: 'minor', subName: 'Learn & contribute'},
    { modifier: 'minor', subName: 'Topics'},
    { modifier: 'minor', subName: 'Collections'},
    { modifier: 'minor', subName: 'Trending'},
    { modifier: 'minor', subName: 'Learning Lab'},
    { modifier: 'minor', subName: 'Open source guides'},
    { modifier: 'line', subName: ''},
    { modifier: 'minor', subName: 'Connect with others'},
    { modifier: 'minor', subName: 'Events'},
    { modifier: 'minor', subName: 'Community forum'},
    { modifier: 'minor', subName: 'GitHub Education'},
  ]},
  'Marketplace Pricing': {list: [
    { modifier: 'mazor', subName: 'Plans'},
    { modifier: 'minor', subName: 'Compare plans'},
    { modifier: 'minor', subName: 'Contact Sales'},
    { modifier: 'line', subName: ''},
    { modifier: 'mazor', subName: 'Nonprofit'},
    { modifier: 'mazor', subName: 'Education'},
  ]}
}

export default function(props) {
  const element =  document.querySelector('.HeaderDownButton');
  element.innerHTML = renderUtils.template(HeaderDownButton, props);
  HeaderDownMenu(menuModel[props.menuName]);
  element.className = "header__downbutton__wrapper";
}