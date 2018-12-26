import Slider from './Slider.html';
import renderUtils from '../../renderUtils';
require('./Slider.scss');
import sj from '../../static/images/sj.jpeg';
import ilyn from '../../static/images/ilyn.jpg';
import daheon from '../../static/images/daheon.jpg';
import iu from '../../static/images/iu.jpg';
import jba from '../../static/images/jba.jpg';
import jcy from '../../static/images/jcy.jpg';
import jenny from '../../static/images/jenny.jpg';
import joy from '../../static/images/joy.jpg';
import nayeon from '../../static/images/nayeon.jpg';

const Profile = `
  <li class="slider__card">
    <a class="slider__card__container" href="https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%A1%B0%EC%9D%B4&oquery=%EC%A0%9C%EB%8B%88&tqi=Uu5fflpySEdssvNp68lssssstVK-467670">
      <div class="slider__image" style="background: \${image}></div>
      <div class="slider__profile__container">
        <div class="slider__profile">
          <h3 class="slider__name">\${name}</h3>
          <p class="slider__belong">\${belong}</p>
        </div>
      </div>
    </a>
  </li>
`

const models = [
  { name: '수지', belong: 'JYP엔터테인먼트', image: `url(${sj}) no-repeat -30px 0; background-size: cover;"`},
  { name: '아이린', belong: 'SM엔터테인먼트', image: `url(${ilyn}) no-repeat; background-size: cover;"`},
  { name: '다현', belong: 'JYP엔터테인먼트', image: `url(${daheon}) no-repeat; background-size: cover;"`},
  { name: '아이유', belong: '카카오M', image: `url(${iu}) no-repeat; background-size: cover;"`},
  { name: '조보아', belong: '싸이더스HQ', image: `url(${jba}) no-repeat; background-size: cover;"`},
  { name: '정채연', belong: 'MBK엔터테인먼트', image: `url(${jcy}) no-repeat; background-size: cover;"`},
  { name: '제니', belong: 'YG엔터테인먼트', image: `url(${jenny}) no-repeat; background-size: cover;"`},
  { name: '조이', belong: 'SM엔터테인먼트', image: `url(${joy}) no-repeat; background-size: cover;"`},
  { name: '나연', belong: 'JYP엔터테인먼트', image: `url(${nayeon}) no-repeat; background-size: cover;"`},
]

export default function(props) {
  const element =  document.querySelector('.Slider');
  element.innerHTML = renderUtils.template(Slider, props);
  models.forEach(model => element.querySelector('.slider').insertAdjacentHTML('beforeend', renderUtils.template(Profile, model)))
  element.className = "slider__wrapper";
};