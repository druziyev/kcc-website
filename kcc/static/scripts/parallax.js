$(document).ready(function() {

    $(window).scroll(function() {
      var scrollPosWin = $(window).scrollTop();
      var factorBackground = scrollPosWin * .4;
      var factorForeground = scrollPosWin * .2;
      $('.parallax-image-background').css({'top': factorBackground, 'bottom': -factorBackground});
      $('.parallax-image-foreground').css({'top': factorForeground, 'bottom': -factorForeground});
    });
  
  });
  