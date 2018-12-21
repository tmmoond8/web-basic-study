import SignUpFormInput from './SignUpFormInput.html';
import renderUtils from '../../renderUtils';
require('./SignUpFormInput.scss');

export default function(props) {
  const element =  document.querySelector('.SignUpFormInput');
  element.innerHTML = renderUtils.template(SignUpFormInput, props);
  element.className = "signupform__input__wrapper";
};