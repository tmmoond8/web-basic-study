const iconEl = document.querySelector('#icon-quick');
var keyState = {};
iconEl.style.top = `${iconEl.offsetTop}px`;
iconEl.style.left = `${iconEl.offsetLeft}px`;
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

const timer = 40;

function gameLoop() {
  if (keyState[38]){
    iconEl.style.top = `${parseInt(iconEl.style.top, 10) - 20}px`;
  }
  if (keyState[40]){
    iconEl.style.top = `${parseInt(iconEl.style.top, 10) + 20}px`;
  }
  if (keyState[39]){
    iconEl.style.left = `${parseInt(iconEl.style.left, 10) + 20}px`;
  }
  if (keyState[37]){
    iconEl.style.left = `${parseInt(iconEl.style.left, 10) - 20}px`;
  }
  // redraw/reposition your object here
  // also redraw/animate any objects not controlled by the user
  setTimeout(gameLoop, timer);
}    
gameLoop();

// document.addEventListener('keydown', (e) => {
//   if (!e.code.includes('Arrow')) {
//     return;
//   }
//   if (e.code.includes('Up')) {
//     iconEl.style.top = `${iconEl.offsetTop - 20}px`;
//   }
//   if (e.code.includes('Down')) {
//     iconEl.style.top = `${iconEl.offsetTop + 20}px`;
//   }
//   if (e.code.includes('Left')) {
//     iconEl.style.left = `${iconEl.offsetLeft - 20}px`;
//   }
//   if (e.code.includes('Right')) {
//     iconEl.style.left = `${iconEl.offsetLeft + 20}px`;
//   }
// })