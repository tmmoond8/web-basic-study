const el = (tag, attr = {}) => Object.entries(attr).reduce((accum, v) => {
  typeof accum[v[0]] === 'function' ? accum[v[0]](v[1]) : (accum[v[0]] = v[1]);
  return accum;
}, document.createElement(tag));

const template = (template, model) => {
  if(!model) return template;
  new RegExp("")
  return Object.keys(model).reduce((accum, key) => accum.replace(new RegExp('\\$\{' + key + '\}', 'g'), model[key]), template)
}

export default {
  el, template
}