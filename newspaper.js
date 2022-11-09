const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const exitMenu = document.querySelector("#exit");

menuIcon.addEventListener('click', () => { 
    menu.classList.remove("turn-off");
    menuIcon.classList.add("turn-off");
})

exitMenu.addEventListener('click', () => { 
    menu.classList.add(turn-off);
    menuIcon.classList.remove("turn-off");
})