const score = 400
// console.log(score);
// console.log(score.toString().length);
// console.log(typeof score);
// console.log(score.toFixed(2));

console.log("******Balance****");


const balance = new Number(100.9109)
// console.log(balance);
// console.log(balance.toString().length);
// console.log(typeof balance);
// console.log(balance.toFixed(2)); //round of digits after decimal

const otherNum = 123.8966
// console.log(otherNum.toPrecision(4)) // works on those digits whose lenghth is given and round others

const hundreds = 1000000.91
// console.log(hundreds.toLocaleString('en-IN')); //10,00,000- provide comma seprated value to read numbers



// ***********Maths****************
// library come up with js

// console.log(Math);
// console.log(Math.abs(-4)); // - to +
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.3)); // 4
// console.log(Math.ceil(5.2)); //6
// console.log(Math.floor(5.2)); //5
// console.log(Math.min(4,3,6,8)); // 3
// console.log(Math.max(4,3,6,8)); //8

// console.log(Math.random()); // value in between 0 and 1

// console.log((Math.random()* 10) + 1); // multiplying it with 10 shifting to left + 1 so values will always be > 1

// const min = 10
// const max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//generate 5 random num between 5 - 10

const min = 5
const max = 10

function randomNum(){
    for(let i=1; i <=5; i++){
        console.log(Math.floor(Math.random() * (max - min + 1) + min));
        
    }
}
randomNum()

// If you didn’t do +1, max would never be included.
// Math.random() never returns 1, only up to but not including 1.
