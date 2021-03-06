import EnterprisePropose from './EnterprisePropose.html';
import renderUtils from '../../renderUtils';
import Button from '../Button';
require('./EnterprisePropose.scss');

export default function(props) {
  const element =  document.querySelector('.EnterprisePropose');
  element.innerHTML = renderUtils.template(EnterprisePropose, props);
  element.className = "enterprise__propose__wrapper";
  Button({ contents: 'Contact Sales', modifier: 'blue', link: '/link'});
  Button({ contents: 'Start a free trial', modifier: 'blue-outline', link: '/link'});
};