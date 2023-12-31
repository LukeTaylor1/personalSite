// nav drop down animation
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






// const nav = document.querySelector("#myNav");
// const navHeight = 70;

// let lastScrollY = 0;
// const delta = 10;

// const hideDelay = 5000;

// let hideTimeout;

// //hide navbar
// function hideNavbar () {
//     nav.classList.add("nav-up");
// }

// // show navbar
// function showNavbar() {
//     nav.classList.remove("nav-up")
// }



