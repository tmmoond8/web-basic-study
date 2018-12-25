import Article from './Article.html';
import renderUtils from '../../renderUtils';
import Button from '../Button';
require('./Article.scss');

const model = {
  'github_for_teams': {
    summay: 'GitHub for teams',
    keyword: 'A better way to work together',
    contents: 'GitHub brings teams together to work through problems, move ideas forward, and learn form each other along the way.',
    button: {
      contents: 'Sign up your team', modifier: 'blue-outline', link: '/link', arrow: true
    }
  },
  'community': {
    summay: 'Community',
    keyword: 'Welcome home, <br>developers',
    contents: 'GitHub is home to the world’s largest community of developers and their projects...',
  }
}

export default function(props) {
  const element =  document.querySelector('.Article');
  element.innerHTML = renderUtils.template(Article, model[props.key]);
  element.className = "articlep__wrapper";
  if(model[props.key].button) {
    Button(model[props.key].button);
  } else {
    element.querySelector('.Button').remove();
  }
};