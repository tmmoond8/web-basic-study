import SignUpFormPassword from './SignUpFormPassword.html';
import renderUtils from '../../renderUtils';
require('./SignUpFormPassword.scss');

export default function(props) {
  const element =  document.querySelector('.SignUpFormPassword');
  element.innerHTML = renderUtils.template(SignUpFormPassword, props);
  element.className = "signupform__password__wrapper";
};