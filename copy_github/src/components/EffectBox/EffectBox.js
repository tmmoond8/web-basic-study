import EffectBox from './EffectBox.html';
import renderUtils from '../../renderUtils';
require('./EffectBox.scss');

export default function(props) {
  const element =  document.querySelector('.EffectBox');
  element.innerHTML = renderUtils.template(EffectBox, props);
  element.className = "effectbox__wrapper";
};