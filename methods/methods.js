// practicing methods and exponential notation //

9238.479.toExponential(1);
98370923874.32.toExponential(4);
324.64322.toExponential(0);


var num1 = 9238.479;
var num2 = 98370923874.32;
var num3 = 324.64322;

num1.toExponential(1);
num2.toExponential(4);
num3.toExponential();

console.log(num1.toExponential());
console.log(num2.toExponential(4));

// sets fixed decimal point and rounds up
console.log(num2.toFixed(4));
// sets the total amount of integers //
console.log(num3.toPrecision(5));




"foo".concat(" bar");


var name = "nick";
console.log(name);

name = name.toUpperCase();
console.log(name);

var lastName = "Arlt";

var combinedNames = name.concat(" " + lastName);
console.log(combinedNames);

combinedNames = "      ".concat(combinedNames);
console.log(combinedNames.trim);

lastName.toLowerCase();
console.log(lastName);

var letter = name.charAt(2);
console.log(letter);

var secondLetter = lastName.charAt(3);
console.log(secondLetter);


console.log(combinedNames.slice(4));
console.log(name.split());
console.log(name.subString(1, 3));
console.log(name.startsWith(lastName));
console.log("blue whale".indexOf("whale")); // logs 5 //