console.log("Date Time");

const date = new Date();

console.log(date);

const past = new Date(1990, 4, 3, 12, 0, 0, 1);
// Strange!
// The 4th month corresponds to May (5th month) because months are zero-indexed in JavaScript (January is 0).
// Strange!

console.log(past); // 1990-05-03T10:00:00.001Z (the hour is 10 due to UTC)

console.log(past > date); // false
console.log(past < date); // true

const stringDate = "1990/01/15 12:00:00.001";
const date2 = new Date(stringDate);
console.log(date2); // 1990-01-15T11:00:00.001Z (the hour is 11 due to UTC)
// Strange!
// Odd behavior
// Why is the hour -1 here instead of -2?
// Strange!

console.log(date2.getHours());
console.log(date2.getFullYear());
console.log(date2.getMonth()); // e.g., 1 means February (not January)
console.log(date2.getDay()); // e.g., 0 means Sunday, 1 means Monday, etc.
console.log(date2.getDate()); // day of the Month

date2.setFullYear(2000);
console.log(date2.getFullYear());
// etc.

console.log(date + date2); // Means nothing!
// The plus operator concatenates two strings

const timeBetween = date - date2;
console.log(timeBetween); // Means different between the two dates in milliseconds
console.log(timeBetween/1000) // How many seconds
console.log(timeBetween/1000/60) // How many minutes
console.log(timeBetween/1000/60/60) // How many hours
console.log(timeBetween/1000/60/60/24) // How many days

