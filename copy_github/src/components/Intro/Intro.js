import Intro from './Intro.html';
import renderUtils from '../../renderUtils';
import IntroPhrase from '../IntroPhrase';
import TopSignUp from '../TopSignUp';
require('./Intro.scss');

export default function(props) {
  const element =  document.querySelector('.Intro');
  element.innerHTML = renderUtils.template(Intro, props);
  IntroPhrase();
  TopSignUp();
  element.className = "intro__wrapper";
};