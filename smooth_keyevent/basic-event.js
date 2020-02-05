(
  () => {
    const iconEl = document.querySelector('#icon-basic');
    document.addEventListener('keydown', (e) => {
      if (!e.code.includes('Arrow')) {
        return;
      }
      if (e.code.includes('Up')) {
        iconEl.style.top = `${parseInt(iconEl.style.top, 10) - 20}px`;
      }
      if (e.code.includes('Down')) {
        iconEl.style.top = `${parseInt(iconEl.style.top, 10) + 20}px`;
      }
      if (e.code.includes('Left')) {
        iconEl.style.left = `${parseInt(iconEl.style.left, 10) - 20}px`;
      }
      if (e.code.includes('Right')) {
        iconEl.style.left = `${parseInt(iconEl.style.left, 10) + 20}px`;
      }
    })
  }
)();