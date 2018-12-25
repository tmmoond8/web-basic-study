import Marketplace from './Marketplace.html';
import renderUtils from '../../renderUtils';
require('./Marketplace.scss');

export default function(props) {
  const element =  document.querySelector('.Marketplace');
  element.innerHTML = renderUtils.template(Marketplace, props);
  element.className = "marketplace__wrapper";
};