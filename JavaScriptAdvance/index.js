// let date = new Date;
// console.log(date);

// let date= new Date("2026-02-25");
// date.setMonth(2);
// console.log(date);

 import { Temporal } from "@js-temporal/polyfill";

const n = Temporal.Now.instant();
console.log(n);

const date = Temporal.PlainDate.from("2026-02-25");
console.log(date);
console.log(date.year);
console.log(date.month);
console.log(date.day);
let newdate = date.with({ day: 10 });
console.log(newdate);

let time = Temporal.PlainTime.from("14:30:00");

console.log(time.hour);
console.log(time.minute);
console.log(time.second);

let z = Temporal.ZonedDateTime.from("2026-02-25T14:30:00+00:00[Asia/Kolkata ]");


let newzone = z.withTimeZone("America/New_York");
console.log(newzone);

// duration
let duration =Temporal.Duration.from({ days: 5, hours: 3 });
console.log(duration);