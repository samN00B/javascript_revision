
/*
New way of Date and Time 

run this command to install temporal
npm install @js-temporal/polyfill

Temporal is a modern date/time API introduced to fix the 
many issues with the existing Date object in JavaScript. 
It’s more accurate, immutable, and easier to work with for time zones, 
durations, and calendrical math.

*/

import { Temporal } from "@js-temporal/polyfill";

// if (typeof Temporal !== "undefined") {
//   console.log("✅ Temporal is supported!");
// } else {
//   console.log("❌ Temporal is NOT supported in this environment.");
// }

const now = Temporal.Now.plainDateTimeISO(); //Local time (no time zone info)
console.log(now); // [object Temporal.PlainDateTime]
console.log(now.toString()); //// "2025-05-16T15:35:48.123456789"

/*
Temporal types (like Temporal.PlainDateTime, Temporal.ZonedDateTime, etc.) are complex objects, not primitives.
JavaScript doesn’t know how you want to display them, so it gives a generic [object ...] unless you explicitly convert them.
*/

const dateOn = Temporal.Now.plainDateISO();
console.log(dateOn.toString());


const timeOn = Temporal.Now.plainTimeISO();
console.log(timeOn.toString());

const a = Temporal.Now.instant(); // UTC (absolute point in time)
console.log(a.toString());