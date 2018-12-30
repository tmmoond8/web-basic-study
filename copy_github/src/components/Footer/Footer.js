import Footer from './Footer.html';
import renderUtils from '../../renderUtils';
import FooterList from '../FooterList';
import FooterSiteInfo from '../FooterSiteInfo';
require('./Footer.scss');

export default function(props) {
  const element =  document.querySelector('.Footer');
  element.innerHTML = renderUtils.template(Footer, props);
  FooterList({ key: 'Product' });
  FooterList({ key: 'Platform' });
  FooterList({ key: 'Support' });
  FooterList({ key: 'Company' });
  FooterSiteInfo();
  element.className = "footer__wrapper";
};