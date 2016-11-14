
/* Boolean: true or false.

 Number: Numerical value.

 String: Content inside of quotes. Such as "This is a string!".

 Undefined: An object (such as a variable) without a defined value.

 Null: For now, know that this represents nothingness. We'll explore this more later.
*/

var myNumber = "44";

myNumber = parseInt(myNumber);
console.log(typeof myNumber);
console.log(myNumber);

myNumber = myNumber.toString();
console.log(myNumber);
console.log(typeof myNumber);

// == allows type coersion while === is explicit equals //


