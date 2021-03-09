


$(document).ready(function () {
  




  $(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() >= 785) {
      $(".navbar").addClass("fixed-top");


    } else if ($(window).scrollTop() < 551) {
      $(".navbar").removeClass("fixed-top");
    }
  });
});



                
                