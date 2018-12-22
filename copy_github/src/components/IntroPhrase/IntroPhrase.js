import IntroPhrase from './IntroPhrase.html';
import renderUtils from '../../renderUtils';
require('./IntroPhrase.scss');

export default function(props) {
  const element =  document.querySelector('.IntroPhrase');
  element.innerHTML = renderUtils.template(IntroPhrase, props);
  element.className = "IntroPhrase__wrapper";
};