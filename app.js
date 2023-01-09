const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


// thank you
const btn = document.querySelector("#my-btn");
const container = document.querySelector("#container");

btn.addEventListener("click", function (e) {
    if (container.style.display === "block") {
        container.style.display = "none";
        e.preventDefault();
    } else {
        container.style.display = "block";
        e.preventDefault();
    }
});


/* TOP BUTTON FUNCTION */
// Get the button:
let myBtn = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myBtn.style.display = "block";
  } else {
    myBtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}