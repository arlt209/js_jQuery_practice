$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    // capturing input data and assigning it to vars.
    var person1Input = $("input#person1").val();
    var person2Input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var explamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();

    // passing selectors the inputs they should display
    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(explamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    // prevent event defaults, as not submitting to a server.
    event.preventDefault();
  });
});