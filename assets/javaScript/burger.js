'use strict';


const burgerMenu = document.querySelector(".burger");
let menuVisible = false;

burgerMenu.addEventListener("click", function () {
    burgerMenu.classList.toggle("clicked");


    const darkOverlay = document.querySelector(".dark-overlay");
    darkOverlay.style.display = "block";


    menuVisible = !menuVisible;

    const menuContent = document.querySelector(".menu-content");


    menuContent.style.right = menuVisible ? "0px" : "-85%";
    darkOverlay.style.display = menuVisible ? "block" : "none";
});
