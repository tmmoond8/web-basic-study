import TeamSignUp from './TeamSignUp.html';
import renderUtils from '../../renderUtils';
import Button from '../Button';
require('./TeamSignUp.scss');

export default function(props) {
  const element =  document.querySelector('.TeamSignUp');
  element.innerHTML = renderUtils.template(TeamSignUp, props);
  element.className = "team__signup__wrapper";
  Button({ contents: 'Sign up your team', modifier: 'blue-outline', link: '/link', arrow: true});
};