import Advantages from './Advantages.html';
import renderUtils from '../../renderUtils';
import ArrowCard from '../ArrowCard';
require('./Advantages.scss');

export default function(props) {
  const element =  document.querySelector('.Advantages');
  element.innerHTML = renderUtils.template(Advantages, props);
  element.className = "advantages__wrapper";
  ArrowCard({ key: 'write_better_code'});
  ArrowCard({ key: 'manage_your_chaos'});
  ArrowCard({ key: 'find_the_right_tools'});
};