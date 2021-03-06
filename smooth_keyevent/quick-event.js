const iconEl = document.querySelector('#icon-quick');
var keyState = {};
window.addEventListener('keydown',function(e){
    keyState[e.keyCode || e.which] = true;
},true);
window.addEventListener('keyup',function(e){
    keyState[e.keyCode || e.which] = false;
},true);

const timer = 40;

function keysLoop() {
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
  setTimeout(keysLoop, timer);
}    
keysLoop();