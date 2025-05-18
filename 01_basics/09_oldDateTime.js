
// Months starts from 0 in js--

let myDate = new Date() //date is object
// console.log(myDate); // 2025-05-18T09:18:27.524Z
// console.log(myDate.toString()); // Sun May 18 2025 14:48:27 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString()); //Sun May 18 2025

let myCreatedDate = new Date(2023, 0, 23)
let myCreatedDateNew = new Date(2023, 0, 23, 5, 3)
// console.log(
//     myCreatedDate.toDateString()
// );
// console.log(
//     myCreatedDate.toLocaleString()
// );

// let newDate = new Date("2023-01-14") // yy-mm-dd
let newDate = new Date("04-12-1999") //mm-dd-yy
// console.log(newDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // seconds


let myNewDate = new Date()
// console.log(myNewDate.getDate());
// console.log(myNewDate.getDay());
// console.log(myNewDate.getFullYear());
// console.log(myNewDate.getMonth() + 1); // Because JavaScript months are zero-based.
// console.log(myNewDate.getHours());
// console.log(myNewDate.getTime());




console.log(myNewDate.toLocaleString('default', {
    weekday:"long"
}));
