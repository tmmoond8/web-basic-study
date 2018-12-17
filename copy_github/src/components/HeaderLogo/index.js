import HeaderLogo from './HeaderLogo.html';
require('./HeaderLogo.scss');

document.querySelectorAll('.HeaderLogo').forEach(element => {
  element.innerHTML = Object.keys(element.dataset).reduce((accum, key) => {
    return accum.replace('${' + key + '}', element.dataset[key]);
  }, HeaderLogo)
});