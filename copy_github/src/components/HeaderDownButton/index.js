import HeaderDownButton from './HeaderDownButton.html';
require('./HeaderDownButton.scss');
document.querySelectorAll('.HeaderDownButton').forEach(element => {
  element.innerHTML = Object.keys(element.dataset).reduce((accum, key) => {
    return accum.replace('${' + key + '}', element.dataset[key]);
  }, HeaderDownButton)
  require('../HeaderDownMenu');
});
