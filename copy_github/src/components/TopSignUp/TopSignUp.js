import TopSignUp from './TopSignUp.html';
import renderUtils from '../../renderUtils';
import SignupFormInput from '../SignUpFormInput';
import SignUpFormPassword from '../SignUpFormPassword';
import Button from '../Button';

require('./TopSignUp.scss');

export default function(props) {
  const element =  document.querySelector('.TopSignUp');
  element.innerHTML = renderUtils.template(TopSignUp, props);
  SignupFormInput({ label: 'Username', placeHolder: 'Pick username'});
  SignupFormInput({ label: 'Email', placeHolder: 'you@example.com'});
  SignUpFormPassword({ label: 'Password', placeHolder: 'Create a password'});
  Button({ contents: 'Sign up for GitHub', modifier: 'green', link: '/link'});
  element.className = "top__signup__wrapper";
};