const UIHamburgerBar = document.querySelector(
    ".navbar .mobile-only .hamburger .bar"
);
const UIMobileNav = document.querySelector(".mobile-nav");
const UIMain = document.querySelector("main");
const UINavLinks = document.querySelectorAll(".nav-link");
const UIHeader = document.querySelector("header");

let showMenu = false;

UIHamburgerBar.addEventListener("click", toggleMenu);
window.addEventListener("scroll", addHeaderBg);

function toggleMenu() {
    if (!showMenu) {
        UIHamburgerBar.classList.add("open");
        UIMobileNav.classList.add("open");
        UIMain.classList.add("blur");
    } else {
        UIHamburgerBar.classList.remove("open");
        UIMobileNav.classList.remove("open");
        UIMain.classList.remove("blur");
    }
    showMenu = !showMenu;
}

// Closes Mobile Menu when link is clicked
for (let i = 0; i < UINavLinks.length; i++) {
    UINavLinks[i].addEventListener("click", function () {
        UIHamburgerBar.classList.remove("open");
        UIMobileNav.classList.remove("open");
        UIMain.classList.remove("blur");
        showMenu = false;
    });
}

function addHeaderBg() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        UIHeader.style.background = "#1e293b";
        UIHeader.classList.add("box-shadow");
    } else {
        UIHeader.style.background = "transparent";
        UIHeader.classList.remove("box-shadow");
    }
}
