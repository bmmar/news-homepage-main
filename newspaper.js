const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");
const navLinks = document.querySelector(".nav-links");
const exitMenu = document.querySelector("#exit");

menuIcon.addEventListener('click', () => { 
    console.log("Icon pressed!");
    navLinks.style.display = "block";
    menu.style.display = "block";
})

exitMenu.addEventListener('click', () => { 
    navLinks.style.display = "none";
    menu.style.display = "none";
})