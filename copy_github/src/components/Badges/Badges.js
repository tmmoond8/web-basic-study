import Badges from './Badges.html';
import renderUtils from '../../renderUtils';
import iconSlack from '../../static/images/icon_slack.png';
import iconZenHub from '../../static/images/icon_zenhub.png';
import iconTravis from '../../static/images/icon_travis.png';
import iconAtom from '../../static/images/icon_atom.png';
import iconCircle from '../../static/images/icon_circle.png';
import iconGoogle from '../../static/images/icon_google.png';
import iconCodeClimate from '../../static/images/icon_codeclimate.jpg';
require('./Badges.scss');

const Badge = 
  `<li class="badges__item" style="background: \${backgroundColor};">
    <i class="badges__image" style="background: url(\${image}); background-size: contain;"></i>
  </li>`;
const models = [
  { name: 'slack', image: iconSlack, backgroundColor: 'RGBA(75, 50, 78, 1.00)'},
  { name: 'zenHub', image: iconZenHub, backgroundColor: 'RGBA(55, 81, 145, 1.00)'},
  { name: 'travis', image: iconTravis, backgroundColor: 'RGBA(237, 248, 248, 1.00)'},
  { name: 'atom', image: iconAtom, backgroundColor: 'RGBA(25, 173, 83, 1.00)'},
  { name: 'circle', image: iconCircle, backgroundColor: 'RGBA(46, 50, 45, 1.00)'},
  { name: 'google', image: iconGoogle, backgroundColor: 'RGBA(241, 241, 241, 1.00)'},
  { name: 'code climate', image: iconCodeClimate, backgroundColor: 'RGBA(44, 50, 44, 1.00)'},
]

export default function(props) {
  const element =  document.querySelector('.Badges');
  element.innerHTML = renderUtils.template(Badges, props);
  models.forEach(model => element.querySelector('.badges').insertAdjacentHTML('beforeend', renderUtils.template(Badge, model)));
  element.className = "badges__wrapper";
};