window.addEventListener("scroll", function() {
    let menu = document.querySelector('#nav-bar');
    menu.classList.toggle('rolagem', window.scrollY > 0);
});


function  menulateral() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "midia/menu-icon-removebg-preview.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "midia/x.png";
    }
}
  