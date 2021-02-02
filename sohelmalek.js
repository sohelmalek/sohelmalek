/* ------NAVBAR fix animated---------------------------------------------------------------------------- */

var navbar = $(".navbar");
$(document).ready(function() {

    $(function() {
        navbar.addClass("h_80px", 2000);
        $(window).on("scroll", function() {

            if ($(window).scrollTop() > 50) {
                navbar.addClass("h_50px");
                navbar.removeClass("h_80px");
                $(".main_nav").css('box-shadow', '0px 1px 20px #9099ff');
            } else {
                navbar.addClass("px-1");
                navbar.addClass("py-3");
                navbar.removeClass("h_50px");
                navbar.addClass("h_80px", 2000);
                $(".main_nav").css('box-shadow', 'none');

            }
        });
    });

});
/* ------NAVBAR fix animated END---------------------------------------------------------------------------- */
/* ----dark light mode ON OFF SCRIPT---------------------------------------------- */

const darkBtn = document.querySelector('.moon-icon');
const bodyEl = document.querySelector('body');

const darkMode = () => {
    bodyEl.classList.toggle('dark')
}

darkBtn.addEventListener('click', () => {
    // Get the value of the "dark" item from the local storage on every click
    setDarkMode = localStorage.getItem('dark');

    if (setDarkMode !== "on") {
        darkMode();
        // Set the value of the itwm to "on" when dark mode is on
        setDarkMode = localStorage.setItem('dark', 'on');
    } else {
        darkMode();
        // Set the value of the item to  "null" when dark mode if off
        setDarkMode = localStorage.setItem('dark', null);
    }
});

// Get the value of the "dark" item from the local storage
let setDarkMode = localStorage.getItem('dark');

// Check dark mode is on or off on page reload
if (setDarkMode === 'on') {
    darkMode();
}
/* ----dark light mode ON OFF SCRIPT END---------------------------------------------- */
// ----------go to top -------------------------------------------------------------------------
//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// ----------go to top END-------------------------------------------------------------------------