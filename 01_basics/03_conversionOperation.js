
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