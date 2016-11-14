$(document).ready(function() {
  $("#showForm").click(function(){
    $("#showForm").toggle();
    $("#blankForm").toggle();

  });

  $("#blankForm form").submit(function(event) {
    debugger;
    // capturing input data and assigning it to vars.
    var inputInfo = $("input#nameInput").val();
    // passing selectors the inputs they should display
    $(".displayedText").text(inputInfo);
    $("#showForm").toggle();
    $("#blankForm").toggle();



    // prevent event defaults, as not submitting to a server.
    event.preventDefault();
  });
});