//area de menu começa
let menu = document.querySelector('.menuMobile');
let nav = document.querySelector('.nav');
let icon = document.querySelector('.bx-menu');

menu.onclick = () => {
    nav.classList.toggle('active');
    icon.classList.toggle('bx-x');
    
}

//area de menu acaba....

function loader () {
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut() {
    setInterval(loader, 3500);
  }
  
  window.onload = fadeOut;