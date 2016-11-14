
// Business (or back-end) logic:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  // add
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());

    result = number1 + number2;
    $("#addOutput").text(result);
  });

  // subtract
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#sub1").val());
    var number2 = parseInt($("#sub2").val());

    result = number1 - number2;
    $("#SubOutput").text(result);
  });

  // divide
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#divide1").val());
    var number2 = parseInt($("#divide2").val());

    result = number1 / number2;
    $("#divideOutput").text(result);
  });

  // module / remainder
  $("form#remainder").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#remainder1").val());
    var number2 = parseInt($("#remainder2").val());

    result = number1 % number2;
    $("#remainderOutput").text(result);
  });


});


