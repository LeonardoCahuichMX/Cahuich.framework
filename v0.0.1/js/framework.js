$(document).ready(function () {
/* ##################################################

    Nav

##################################################### */

    $(window).scroll(function(){
        if($(this).scrollTop() <= $(".contenido").offset().top){
            $('.nav-fixed-body .top_nav .nav').removeClass('nav_fixed');
        }
        if($(this).scrollTop() > $(".contenido").offset().top) {
            $('.nav-fixed-body .top_nav .nav').addClass('nav_fixed');
        }
    });
const body = document.body;
const nav = document.querySelector(".top_nav");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll == 0) {
    body.classList.remove(scrollUp);
    return;
  }
  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
  } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
  }
  lastScroll = currentScroll;
});

/* ##################################################

    Nav-2

##################################################### */

$(window).scroll(function(){
    if($(this).scrollTop() <= $(".contenido").offset().top){
        $('.nav-fixed-body .top_nav-2 .nav').removeClass('nav_fixed-2');
    }
    if($(this).scrollTop() > $(".contenido").offset().top) {
        $('.nav-fixed-body .top_nav-2 .nav').addClass('nav_fixed-2');
    }
});

});