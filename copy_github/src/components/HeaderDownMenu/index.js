import HeaderDownMenu from './HeaderDownMenu.html';
require('./HeaderDownMenu.scss');

document.querySelectorAll('.HeaderDownMenu').forEach(element => {
  element.innerHTML = Object.keys(element.dataset).reduce((accum, key) => {
    return accum.replace('${' + key + '}', element.dataset[key]);
  }, HeaderDownMenu)
});