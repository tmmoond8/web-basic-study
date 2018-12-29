import FooterList from './FooterList.html';
import renderUtils from '../../renderUtils';
require('./FooterList.scss');
const Item = `
  <li>
    <a class="footer__list__item" href="\${link}">\${contents}</a>
  </li>
`
const models = {
  Product: ['Features', 'Security', 'Business', 'Case studies', 'Pricing', 'Resources'],
  Platform: ['Developer API', 'Partners', 'Atom', 'Electron', 'GitHub Desktop'],
  Support: ['Help', 'Community Forum', 'Training', 'Status', 'Contact GitHub'],
  Company: ['About', 'Blog', 'Careers', 'Press', 'Shop']
}

export default function(props) {
  const element =  document.querySelector('.FooterList');
  element.innerHTML = renderUtils.template(FooterList, props);
  models[props.key].forEach(item => {
    element.querySelector('.footer__list').insertAdjacentHTML('beforeend', renderUtils.template(Item, { contents: item, link: `/${item.toLowerCase()}`}))
  })
  element.className = "footer__list__wrapper";
};