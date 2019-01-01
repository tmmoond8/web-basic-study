import ArrowCard from './ArrowCard.html';
import renderUtils from '../../renderUtils';
require('./ArrowCard.scss');

const cards = {
  'write_better_code': `
    <h3 class="arrow__card__subject">Write better code</h3>
    <p class="arrow__card__contents">Collaboration makes perfect. The conversations and code reviews that happen in
      Pull Requests help your team share
      the weight of your work and improve the software you build.
      <span class="arrow__card__link">Learn about code reivew.</span>
      <span class="arrow__card__arrow">▶</span>
    </p>
  `,
  'manage_your_chaos': `
    <h3 class="arrow__card__subject">Manage your chaos</h3>
    <p class="arrow__card__contents">Take a deep breath. On GitHub, project management happens in issues and Projects, right alongiside your code. All you have to do is mention a teammate to get them involved. 
      <span class="arrow__card__link">Learn about project management.</span>
      <span class="arrow__card__arrow">▶</span>
    </p>
  `,
  'find_the_right_tools': `
    <h3 class="arrow__card__subject">Find the right tools</h3>
    <p class="arrow__card__contents">Browse and buy apps from GitHub Marketplace with your GitHub account. Find the tools you like or discover new favorites--than start using them in minutes. 
      <span class="arrow__card__link">Learn about integrations.</span>
      <span class="arrow__card__arrow">▶</span>
    </p>
  `,
  'open_source_community': `
    <p class="arrow__card__contents">GitHub's users create and maintain influential technologies alongside the world's largest 
      <span class="arrow__card__repositories">open source community</span>.
      <span class="arrow__card__arrow">▶</span>
    </p>
  `,
  'developers': `
    <p class="arrow__card__contents">
      <span class="arrow__card__developers">Developers</span>
      <span class="arrow__card__arrow">▶</span> user GitHub for personal projects, from experimenting with new programming languages to hosting their life's work.
    </p>
  `,
  'businesses': `
    <p class="arrow__card__contents">
      <span class="arrow__card__businesses">Businesses</span>
      <span class="arrow__card__arrow">▶</span> of all sizes use GitHub to support their development process and to securely build software.
    </p>
  `,
}

export default function(props) {
  const element =  document.querySelector('.ArrowCard');
  element.innerHTML = renderUtils.template(ArrowCard, props);
  element.querySelector('.arrow__card__container').insertAdjacentHTML('beforeend', cards[props.key]);
  element.className = "arrow__card__wrapper";
};