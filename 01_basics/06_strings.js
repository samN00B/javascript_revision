const name = "sameer-pal-muzaffarpur" // typeof name // "string" // primitive string // recommended // takes less memory space

const repoCount = 4

// console.log(name + repoCount); // outdated

// console.log(`${name} ${repoCount}`); // best way to concat two string or more

const gameName = new String("cricket-wc") // typeof gameName // "object" // This creates a String object, not a primitive string.

console.log(gameName)

console.log(gameName[0])

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.at(-1)); // pass index as parameter // returns new string // negative index works

// const a = gameName.at(1)
// console.log(a)

console.log(gameName.charAt(1)) // pass index as parameter // returns new string // negative index not works

console.log(gameName.toUpperCase()) //doesnt change original string

console.log(gameName.indexOf('t')) // index of character

const newGame = gameName.substring(0,9) // slicing cutting out a portion from string // can pass negative index but doesnt follow and start from 0
console.log(newGame)

const anotherGame = gameName.slice(-8, 4) // slicing cutting out a portion from string // can pass negative index 
console.log(anotherGame)

const trimString = "    sameer     "
console.log(trimString);
console.log(trimString.trim()); //removes spaces from string start and end // returns new string // works for white space and line terminators /n
console.log(trimString.trimStart()); //removes spaces from string start // returns new string // works for white space and line terminators /n
console.log(trimString.trimEnd()); //removes spaces from string end // returns new string // works for white space and line terminators /n

const replaceString  = "https://sameer.com/sameer pal"
// const replaceString  = "https://sameer.com/sameer%20pal" // browser will convert it into like this // doesnt understand space

console.log(replaceString.replace(' ','-'));

console.log(replaceString.includes('sameer'))


// string.split(separator, limit);
// separator → the character(s) where you want to split (like " ", ",", "-", etc.)
// limit (optional) → number of splits to return
console.log(gameName.split('-'));
console.log(name.split('-')); // returns array 
console.log(name.split('-', 2)); // retrun only the string with 2

console.log(name.constructor); 
// A property that points to the function that created the instance.
// It's String — the built-in string constructor function.



