import FooterSiteInfo from './FooterSiteInfo.html';
import renderUtils from '../../renderUtils';
require('./FooterSiteInfo.scss');

const Link = `
  <li class="footer___link__container">
    <a class="footer__siteinfo__link" href="\${link}">
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
  const element =  document.querySelector('.FooterSiteInfo');
  element.innerHTML = renderUtils.template(FooterSiteInfo, props);
  models.forEach(item => element.querySelector('.footer__siteinfo__links').insertAdjacentHTML('beforeend', renderUtils.template(Link, item)));
  element.className = "footer__siteinfo__wrapper";
};