import HeaderDownButton from './HeaderDownButton.html';
import HeaderDownMenu from '../HeaderDownMenu';
import renderUtils from '../../renderUtils';
require('./HeaderDownButton.scss');

const menuModel = {
  'Why GitHub?': {list: [
    { modifier: 'mazor', subName: 'Features', link: "/features"},
    { modifier: 'minor', subName: 'Code review', link: "/code_review"},
    { modifier: 'minor', subName: 'project management', link: "/project_management"},
    { modifier: 'minor', subName: 'Integrations', link: "/integrations"},
    { modifier: 'minor', subName: 'Team management', link: "/team_management"},
    { modifier: 'minor', subName: 'Social coding', link: "/social_coding"},
    { modifier: 'minor', subName: 'Documentation', link: "/documentation"},
    { modifier: 'minor', subName: 'Code hosting', link: "/code_hosting"},
    { modifier: 'line', subName: '&nbsp;', link: "#none"},
    { modifier: 'mazor', subName: 'Case Studies', link: "/case_studies"},
    { modifier: 'mazor', subName: 'Security', link: "/security"},
  ]},
  'Explore': {list: [
    { modifier: 'mazor', subName: 'Explore  GitHub', link: "/explore_github"},
    { modifier: 'line', subName: '&nbsp;', link: "#none"},
    { modifier: 'minor', subName: 'Learn & contribute', link: "/learn_n_contribute"},
    { modifier: 'minor', subName: 'Topics', link: "/topics"},
    { modifier: 'minor', subName: 'Collections', link: "/collections"},
    { modifier: 'minor', subName: 'Trending', link: "/trending"},
    { modifier: 'minor', subName: 'Learning Lab', link: "/learning_lab"},
    { modifier: 'minor', subName: 'Open source guides', link: "/open_source_guides"},
    { modifier: 'line', subName: '&nbsp;', link: "#none"},
    { modifier: 'minor', subName: 'Connect with others', link: "/connect_with_others"},
    { modifier: 'minor', subName: 'Events', link: "/events"},
    { modifier: 'minor', subName: 'Community forum', link: "/community_forum"},
    { modifier: 'minor', subName: 'GitHub Education', link: "/github_education"},
  ]},
  'Pricing': {list: [
    { modifier: 'mazor', subName: 'Plans', link: "/plans"},
    { modifier: 'minor', subName: 'Compare plans', link: "/compare_plans"},
    { modifier: 'minor', subName: 'Contact Sales', link: "/contact_sales"},
    { modifier: 'line', subName: '&nbsp;', link: "#none"},
    { modifier: 'mazor', subName: 'Nonprofit', link: "/nonprofit"},
    { modifier: 'mazor', subName: 'Education', link: "/education"},
  ]}
}

export default function(props) {
  const element =  document.querySelector('.HeaderDownButton');
  element.innerHTML = renderUtils.template(HeaderDownButton, props);
  HeaderDownMenu(menuModel[props.menuName]);
  element.className = "header__downbutton__wrapper";
}