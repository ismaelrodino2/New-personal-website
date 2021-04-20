$(document).ready(function () {
  


  $(window).scroll(function () {
    console.log($(window).scrollTop());
  
    var navBar = document.querySelector(".navbar");
    var navBox = document.querySelector(".navbox");


    if ($(window).scrollTop() >= 785) {
      $('.navbar').addClass('fixed-top');
      navBar.style.backgroundColor = "#313131";
      navBar.style.display  = "inline-block";


    } else if ($(window).scrollTop() < 551) {
      $('.navbar').removeClass('fixed-top');
      navBar.style.backgroundColor = "transparent";

    }
  });
});
