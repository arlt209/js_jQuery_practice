var add = function(num1, num2){
  console.log(num1 + num2);
  return num1 + num2;
};

var subtract = function(num1, num2){
  console.log(num1 - num2);
  return num1 - num2;
};
var multiply = function(num1, num2){
  console.log(num1 * num2);
  return num1 * num2;
};
var divide = function(num1, num2){
  console.log(num1 / num2);
  return num1 / num2;
};
var remainder = function(num1, num2){
  console.log(num1 % num2);
  return num1 % num2
};

var number1 = parseInt(prompt("pick a number"));
var number2 = parseInt(prompt("enter another number"));

// manually set math function
var result = remainder(number1, number2);



