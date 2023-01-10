// phone menu bar function
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// thank you message apperas when send button is pressed
// const btn = document.querySelector("#mybtn");
// const container = document.querySelector("#container");

// btn.addEventListener("click", function (e) {
//     if (container.style.display === "block") {
//         container.style.display = "none";
//         e.preventDefault();
//     } else {
//         container.style.display = "block";
//         e.preventDefault();
//     }
// });

// scroll to top function when to top button is pressed
function topFunction() {
  document.body.scrollTop = 0; // Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}


// const textEl = document.getElementById("colorMe");
// const colorButtonEl = document.getElementById("colorButton");

// function addClass(Event) {
//     Event.preventDefault();
//     e.stopImmediatePropagation()
//     textEl.classList.toggle("changeColor");
// }

// colorButtonEl.addEventListener('click', addClass);


// const buttonEl = document.querySelector('.button')

// const contactformEl = document.querySelector(".contactform")

// function messagetext(e) {
//     e.preventDefault()
//     contactformEl.innerHTML = "Your Message Successfully Sent!"
// }

// buttonEl.addEventListener('click', messagetext) 


// test

// document.getElementById("demo").innerHTML = "<font></font>;

/* SEND A MESSAGE WHEN CLICK ON SUBMIT */ 

const buttonEl = document.querySelector('.button');

const contactformEl = document.querySelector(".contactform");
// const hide2El = document.querySelector("hide2")

function messagetext(e) {
    e.preventDefault();
    document.body.style.fontSize = '4rem'
    document.body.style.fontFamily = 'Lato'

    contactformEl.innerHTML = "Thank You For Your Message!";
    // fontsize.innerHTML = 5rem;
    // contactformEl.innerHTML = (".hide2");
}

buttonEl.addEventListener('click', messagetext); 
