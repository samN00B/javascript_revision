// js is dynamically types 

const score = 100;

const scoreValue = 100.3;

const isLoggedIn = false;

const outsideTemp = null;

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id)
console.log(anotherId)

console.log(id === anotherId)

const bigNumber = 344566694736372928349459n;


const heros = ["Tony Stark", "Steve"]

const heroObj = [
    {
        name:"Iron Man",
        age: 52
    },
    {
        name:"Cap America",
        age: 45
    }

]

console.log(heroObj);
console.log(heros);

const powers = function () {
    console.log("Hello Heros");
    
}

powers();

function sameeer(){
    console.log("Hi");
    
}

sameeer();

console.log(
    typeof powers
);

// *******************Memory**********************************

// 1- stack(prmitive)
// 2- heap(non prmitive)

let name = "sameer"
let newName = name

newName = "Sonu"

console.log(name); //sameer
console.log(newName); // Sonu

let userOne = {
    name:"sameer"
}
let userTwo = userOne

console.log(userOne); //sameer
console.log(userTwo); //sameer

userTwo.name = "Pal"

console.log(userOne); //Pal
console.log(userTwo); //Pal
