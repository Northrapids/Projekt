// phone menu bar function
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// scroll to top function when to top button is pressed
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

// thank you message apperas when send button is pressed
const buttonEl = document.querySelector('.button');
const contactformEl = document.querySelector(".contactform");

function messagetext(e) {
    e.preventDefault();
    document.body.style.fontSize = '4rem'
    document.body.style.fontFamily = 'Lato'

    contactformEl.innerHTML = "Thank You For Your Message!";
}

buttonEl.addEventListener('click', messagetext); 
