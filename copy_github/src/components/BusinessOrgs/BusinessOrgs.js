import BusinessOrgs from './BusinessOrgs.html';
import renderUtils from '../../renderUtils';
require('./BusinessOrgs.scss');
const Item = `<li class="business__orgs__brands"><i class="\${fa}"></i></li>`;

const brands = [
  { name: 'docker', fa: 'fab fa-docker'},
  { name: 'apple', fa: 'fab fa-apple'},
  { name: 'cc-visa', fa: 'fab fa-cc-visa'},
  { name: 'codepen', fa: 'fab fa-codepen'},
  { name: 'discord', fa: 'fab fa-discord'},
  { name: 'facebook', fa: 'fab fa-facebook'},
  { name: 'fedora', fa: 'fab fa-fedora'},
  { name: 'glide', fa: 'fab fa-glide'},
  { name: 'html5', fa: 'fab fa-html5'},
  { name: 'linux', fa: 'fab fa-linux'},
  { name: 'line', fa: 'fab fa-line'},
  { name: 'nintendo-switch', fa: 'fab fa-nintendo-switch'},
  { name: 'node', fa: 'fab fa-node'},
  { name: 'react', fa: 'fab fa-react'},
  { name: 'raspberry-pi', fa: 'fab fa-raspberry-pi'},
  { name: 'reddit', fa: 'fab fa-reddit'},
  { name: 'sketch', fa: 'fab fa-sketch'},
  { name: 'soundcloud', fa: 'fab fa-soundcloud'},
]

export default function(props) {
  const element =  document.querySelector('.BusinessOrgs');
  element.innerHTML = renderUtils.template(BusinessOrgs, props);
  try {
    brands.forEach(item => element.firstChild.insertAdjacentHTML('beforeend', renderUtils.template(Item, item)))
  } catch(e) {
    console.log('empty list');
  }
  element.className = "business__orgs__wrapper";
};