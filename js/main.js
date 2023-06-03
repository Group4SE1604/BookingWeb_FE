let menuBtn = document.querySelector('header .icon-menu');
let mobileMenu = document.querySelector('header .menu-mobile');
let menuContent = document.querySelector('header .menu-mobile .content-wrapper');

menuBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

mobileMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('active');
});

menuContent.addEventListener('click', function(e) {
    e.stopPropagation();
});