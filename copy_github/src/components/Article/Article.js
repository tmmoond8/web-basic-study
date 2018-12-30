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
  },
  'security': {
    summay: 'Security and administration',
    keyword: 'Boxes? Check.',
    contents: 'We worry about your administrative and security needs so you don’t have to. From flexible hosting to authentication options, GitHub can help you meet your team’s requirements.',
    button: {
      contents: 'See how GitHub works for businesses', modifier: 'blue-outline', link: '/security', arrow: true
    }
  },
  'integrations': {
    summay: 'Integrations',
    keyword: 'Build on GitHub',
    contents: 'Customize your process with GitHub apps and an intuitive API. Integrate the tools you already use or discover new favorites to create a happier, more efficient way of working.',
    button: {
      contents: 'Learn about integrations', modifier: 'blue-outline', link: '/integrations', arrow: true
    }
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