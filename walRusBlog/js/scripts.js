
$(document).ready(function() {

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });



  $("#clickShow").click(function() {
    $("#top").fadeToggle();
    $("#image-hidden").fadeToggle();
  });

  $("#clickHide").click(function() {
    $("#top").fadeToggle();
    $("#image-hidden").fadeToggle();
  });

});