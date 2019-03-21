

$(function() {

  $(window).scroll(function() {

      var mass = Math.max(2, 5-0.01*$(this).scrollTop()) + 'vw';

    $('#expandable').css({'font-size': mass, 'line-height': mass});
  });
});
