import SiteInfo from './SiteInfo.html';
import renderUtils from '../../renderUtils';
require('./SiteInfo.scss');

const Link = `
  <li class="siteinfo__link__container">
    <a class="siteinfo__link" href="\${link}">
      <i class="\${iconAF}"></i>
    </a>
  </li>
`

const models = [
  { name: 'twitter', link: '/twitter', iconAF: 'fab fa-twitter' },
  { name: 'facebook', link: '/facebook', iconAF: 'fab fa-facebook' },
  { name: 'youtube', link: '/youtube', iconAF: 'fab fa-youtube' },
  { name: 'linkedin-in', link: '/linkedinin', iconAF: 'fab fa-linkedin-in' },
  { name: 'github', link: '/github', iconAF: 'fab fa-github' },
]

export default function(props) {
  const element =  document.querySelector('.SiteInfo');
  element.innerHTML = renderUtils.template(SiteInfo, props);
  models.forEach(item => element.querySelector('.siteinfo__links').insertAdjacentHTML('beforeend', renderUtils.template(Link, item)));
  element.className = "siteinfo__wrapper";
};