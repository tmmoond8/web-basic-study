import WorldWide from './WorldWide.html';
import renderUtils from '../../renderUtils';
import ArrowCard from '../ArrowCard';
require('./WorldWide.scss');

export default function(props) {
  const element =  document.querySelector('.WorldWide');
  element.innerHTML = renderUtils.template(WorldWide, props);
  ArrowCard({ key: 'open_source_community'});
  ArrowCard({ key: 'developers'});
  ArrowCard({ key: 'businesses'});
  element.className = "WorldWide__wrapper";
};