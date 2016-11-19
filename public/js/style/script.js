$(document).ready(function() {
 
  // Initialization of the responsive navbar
  $('.button-collapse').sideNav();

  function scrollToChart(aid) {
    var tag = $("a[name='"+ aid +"']");
    $('html, body').animate({
      scrollTop: tag.offset().top
    }, 'slow');
  }

  $("#Charts").click(function() {
    scrollToChart('chartResults');
  });
});
