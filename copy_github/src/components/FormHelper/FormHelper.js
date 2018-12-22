import FormHelper from './FormHelper.html';
import renderUtils from '../../renderUtils';
require('./FormHelper.scss');

export default function(props) {
  const element =  document.querySelector('.FormHelper');
  element.innerHTML = renderUtils.template(FormHelper, props);
  element.className = "form__helper__wrapper";
};