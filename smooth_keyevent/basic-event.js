const iconEl = document.querySelector('#icon');
document.addEventListener('keydown', (e) => {
  if (!e.code.includes('Arrow')) {
    return;
  }
  if (e.code.includes('Up')) {
    iconEl.style.top = `${iconEl.offsetTop - 20}px`;
  }
  if (e.code.includes('Down')) {
    iconEl.style.top = `${iconEl.offsetTop + 20}px`;
  }
  if (e.code.includes('Left')) {
    iconEl.style.left = `${iconEl.offsetLeft - 20}px`;
  }
  if (e.code.includes('Right')) {
    iconEl.style.left = `${iconEl.offsetLeft + 20}px`;
  }
})