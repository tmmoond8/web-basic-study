import BottomSignUp from './BottomSignUp.html';
import renderUtils from '../../renderUtils';
import SignUpFormInput from '../SignUpFormInput';
import SignUpFormPassword from '../SignUpFormPassword';
import Button from '../Button';
require('./BottomSignUp.scss');

export default function(props) {
  const element =  document.querySelector('.BottomSignUp');
  element.innerHTML = renderUtils.template(BottomSignUp, props);
  SignUpFormInput({ label: '', placeHolder: 'Pick a username'});
  SignUpFormInput({ label: '', placeHolder: 'Your email address'});
  SignUpFormPassword({ label: '', placeHolder: 'Create a password', noHelper: true});
  Button({ contents: 'Sign up for GitHub', link: '/signup', modifier: 'green'});
  element.className = "bottom__signup__wrapper";
};