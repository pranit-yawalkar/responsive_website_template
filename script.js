const burger = document.querySelector(".burger");
const navbar = document.querySelector(".navbar");
const navList = document.querySelector(".nav-list");
const rightNav = document.querySelector(".right-nav");

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})