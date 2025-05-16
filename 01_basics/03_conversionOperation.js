// *********************conversion*********************
// ----------------Number---------------------------

// let score = "33" => converted value 33 => typeof number
// let score = "33abc" => converted value NaN => typeof number
// let score = null => converted value 0 => typeof number
// let score = undefined => converted value NaN => typeof number
// let score = true => converted value 1 => false => converted value 0 => typeof number
// let score = "sameer" => converted value NaN => typeof number

// console.log(typeof score)

// let valueInNumber = Number(score)

// console.log(valueInNumber)

// console.log(typeof valueInNumber)

// --------boolean--------------------------

// let isLoggedIn = 1 => true
// let isLoggedIn = 0 => false
// let isLoggedIn = "" => false
// let isLoggedIn = "sameer" => true


// let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn)

// JavaScript uses the ToBoolean abstract operation defined in the ECMAScript specification. 
// It converts any value to its Boolean equivalent.

// Only 7 values are falsy in JavaScript:

// false
// 0
// -0
// 0n      // BigInt zero
// ""      // empty string
// null
// undefined
// NaN

// everything else is true

// -----------------------string-------------------------

// let Num = 33

// let strNum = String(Num)

// console.log(strNum)
// console.log(typeof strNum)

// It uses explicit type coercion.
// String() is a global function that takes any value and converts it to its string representation.

// Other Ways to Convert Number to String:
//     String(33)
//     33 + ""
//     33.toString()
//     `${33}`

// *********************operations*********************

// let value = 3

// let negValue = -value

// console.log(value)
// console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);
// -----------------------------------------------
// let str1 = "hello"
// let str2 = "sameer"
// let str3 = str1 + " " + str2
// let str4 = `${str1} ${str2}`

// console.log(str3);
// console.log(str4);

// -------------------------------------------------------
// console.log("1" + 2) // 12 if 1st element is string treats other as string and concatinate
// console.log(1 + "2"); // 12 if last then let others number to do operations then concatinate
// console.log("1" + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// ------------------------------------------------------------

// console.log(true); // true
// console.log(+true); => 1 // unary plus (+) operator, which converts its operand to a number. internally Number(true) => 1
// console.log(+""); => 0 // converting an empty string to a number. Number("") => 0
// console.log(true+); // error

// +value: converts to number
// -value: converts to number, then negates

// -------------------------------------------------------------------
// let num1, num2, num3 //not a good way

// num1 = num2 = num3 = 2+2


// --------------------------Learn about pre fix and post fix--------------------------------------------

// let counter = 100

// ++counter
// counter++
// console.log(counter);

// ------------------------------------------------

