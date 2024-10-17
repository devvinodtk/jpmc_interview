
/**
 * 
 * Type coercion is a mechanism in programming languages like JavaScript where the interpreter automatically converts 
 * one data type into another to perform an operation. his is often done implicitly
 * 
 * In JavaScript, there are two types of coercion:
 * 
 * Implicit coercion: Happens automatically when the language tries to operate on values of different types.
 * 
 * Ex: 2 + '3' results in '23' (a string), because JavaScript converts the number 2 into a string to perform string concatenation.
 * Ex: '5' - 1 results in 4, because JavaScript converts the string '5' into a number to perform subtraction.
 * 
 * Explicit coercion: When the programmer manually converts a value from one type to another using functions or operators.
 * 
 * Number('123') converts the string '123' into the number 123.
 * 
 * String(123) converts the number 123 into the string '123'.
 * 
 * String + Number: 
 * When using the + operator, if one operand is a string, JavaScript converts the number to a string and concatenates them.
 * 
 * 
 * String - Number: 
 * The -, *, /, and % operators will try to convert both operands to numbers.
 */

console.log(2 + '2' - 1); // '22' - 1 ====> 22 - 1 = 22



console.log([] == ![])  // [] is truthy, hence ![] -> false ====> console.log([] == false) ====> for comparison with false [] is converted to primitive value '' 
                        // ====> '' == false  ====> '' == 0  ==== > 0 == 0 // true

console.log(3 == '3') // true

console.log(1 < 2 < 3) // 1 < 2 -> true ====> console.log(true < 3) ====> console.log(1 < 3) // true

var x = 0;
console.log(x++); // post increment 0 : === > first console log value of x to 0 and increment it to 1.
console.log(++x); // pre increment 2: === > now x = 1 increment value of x to 2, console log 2. 

