$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".clickOn").click(function(){
    $("#pic-showing").toggle();
    $("#pic-hidden").toggle();
  });
});

