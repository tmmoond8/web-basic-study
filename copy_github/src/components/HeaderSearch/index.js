import HeaderSearch from './HeaderSearch.html';
require('./HeaderSearch.scss');

document.querySelectorAll('.HeaderSearch').forEach(element => {
  element.innerHTML = Object.keys(element.dataset).reduce((accum, key) => {
    return accum.replace('${' + key + '}', element.dataset[key]);
  }, HeaderSearch)
});