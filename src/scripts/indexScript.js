// NAV BAR OPEN ANIMATION
const openEle = document.getElementById("navBar");
openEle.addEventListener("click", openNav);

const closeEle = document.getElementById("closeBtn");
closeEle.addEventListener("click", closeNav);


function openNav(){
    document.getElementById("myNav").style.height ="100%";
};

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
};


// HIDE NAV BAR WHILE SCROLLING

// const nav = document.querySelector("#myNav");
// const navHeight = 70;

// let lastScrollY = 0;
// const delta = 10;

// const hideDelay = 5000;

// let hideTimeout;

// //hide navbar
// function hideNavbar () {
//     nav.classList.add("nav-up");
//     document.getElementById("navBar").hidden = true;
// }

// // show navbar
// function showNavbar() {
//     nav.classList.remove("nav-up");
//     document.getElementById("navBar").hidden = false;
// }

// function scrolled() {
//     let sy = window.scrollY;
//     // only trigger if greater than delta
//     if(Math.abs(lastScrollY -sy) > delta) {
//         // scroll down -> hide nav bar
//         if (sy > lastScrollY && sy > navHeight) {
//             hideNavbar();
//         }
//         // scroll up, show nav bar  
//         else if (sy < lastScrollY) {
//             showNavbar();
//         }

//         // update current scroll point
//         lastScrollY = sy;

//         // clear the previous timeout if exists
//         clearTimeout(hideTimeout);
//         // Set a new timeout to hide the navbar after the specified duration of inactivity
//         hideTimeout = setTimeout(hideNavbar, hideDelay);
//     }
// }

// let didScroll = false;
// window.addEventListener("scroll", function(e) {
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         scrolled();
//         didScroll = false;
//     }
// }, 250);

// STICKY NAVBAR
