window.addEventListener("scroll", function() {
    let menu = document.querySelector('#menuzin');
    menu.classList.toggle('rolagem', window.scrollY > 0);
  });
  