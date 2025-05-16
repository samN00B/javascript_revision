// console.log(2 < 3);
// console.log(2 > 1);
// console.log(2 <= 2);
// console.log(2 >= 7);
// console.log(2 == 4/2);
// console.log(2 === 2);
// console.log(1 != 2);

// console.log("2" > 1);
// console.log("02" > 1);


// console.log(null > 0) // false
// console.log(null == 0) // false
// console.log(null >= 0) //true

// The reason is that an equality check == and comparisons < > >= <= works differently
// Comparison converts null to a Number, treating it as 0
// thats why 3 null >= 0 is true and null>0 is false
// Loose equality (==) follows different rules — it does not convert null to 0 when compared with a number


// console.log(undefined == 0) //false // The == operator does not coerce(implicitely convert) undefined to 0
// console.log(undefined < 0) //false
// console.log(undefined > 0) //false
// console.log(undefined >= 0) //false
// console.log(undefined <= 0) //false

// What happens in comparisons like <, >, >=, <=?
// In comparison operators, undefined gets converted to NaN.

// 🔧 Internally:
// undefined < 0 → NaN < 0 → false
// undefined > 0 → NaN > 0 → false
// undefined >= 0 → NaN >= 0 → false
// undefined <= 0 → NaN <= 0 → false
// In JavaScript, any comparison with NaN is always false.


// ------special case ------------

// console.log(undefined == null)

// undefined is only loosely equal to null
// JavaScript’s Abstract Equality Comparison algorithm (used by ==) has a special rule:
// If one operand is null and the other is undefined, return true.

// console.log(NaN==NaN); //false // In JavaScript, any comparison with NaN is always false.
// console.log(NaN===NaN); //false // In JavaScript, any comparison with NaN is always false.
// console.log(Number.isNaN(NaN)); //true // Because NaN is literally the value Not-a-Number, 
// and the Number.isNaN() method is designed to check exactly that — whether the value is strictly NaN.


// -------strict check-----
// check data type as well as value--

// console.log("2" === 2);