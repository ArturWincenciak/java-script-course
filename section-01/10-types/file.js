// 1. Primitive Types
// - undefined  : A variable declared but not assigned a value.
// - null       : Represents a deliberate absence of any value.
// - boolean    : Logical values, either true or false.
// - number     : Integer or floating-point numbers (e.g. 123 or 3.14 or -0.5).
// - bigint     : Integer numbers larger than 'Number.MAX_SAFE_INTEGER' (e.g. 12345n).
// - string     : A sequence of characters.
// - symbol     : A unique and immutable identifier.
//
// 2. Object Types
// - object     : A collection of key-value pairs, or more complex data structures.
// - Array      : A list-like collection (e.g. [1, 2, 3]).
// - Date       : Used for handling date and time.
// - RegExp     : A regular expression pattern.
// - Map        : A collection of key-value pairs with aby type as keys.
// - Set        : A collection of unique values.
// - WeakMap    : Weak version of Map (keys are weakly referenced)
// - WeakSet    : Weak version of Set (keys are weakly referenced)
// - Function   : A callable block of code.
//
// 3. Special Types
// - function   : A special type of object used to declare functions.

// Let's get started ...

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// undefined  : A variable declared but not assigned a value
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let a;
console.log(a) // undefined
console.log(typeof a) // undefined

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// null       : Represents a deliberate absence of any value
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let b = null
console.log(b) // null
console.log(typeof b) // "object" (this is a known quirk, null is technically an object)

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// boolean    : Logical values, either true or false
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let isTrue = true
let isFalse = false
console.log(isTrue) // true
console.log(isFalse) // false
console.log(typeof isTrue) // "boolean"
console.log(typeof isFalse) // "boolean"

// interesting quirk: logical `false` values
console.log(0 == false) // true (0 is loosely equal to false)
console.log('' == false) // true (empty string is loosely equal to false)
console.log(null == undefined) // true (null and undefined are loosely equal)

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// number     : Integer or floating-point numbers
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let integer = 42
let float = 3.1415
console.log(integer) // 42
console.log(float) // 3.1415
console.log(typeof integer) // number
console.log(typeof float) // number

// interesting quirk: NaN (not a number)
let notANumber = 0 / 0
console.log(notANumber) // NaN
console.log(typeof notANumber) // number (weird, NaN is of type number)
console.log(NaN === NaN) // false (weird, NaN is not equal NaN)
console.log(notANumber == NaN) // false (weird, NaN is not equal NaN)
console.log(isNaN(notANumber)) // true (use isNaN() to check if a value is NaN)

// interesting quirk: Infinity
let positiveInfinity = 1 / 0
let negativeInfinity = -1 / 0
console.log(positiveInfinity) // Infinity
console.log(negativeInfinity) // -Infinity
console.log(typeof positiveInfinity) // number
console.log(typeof negativeInfinity) // number
console.log(Infinity === Infinity) // true
console.log(-Infinity === -Infinity) // true
console.log(Infinity === -Infinity) // false

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// bigint     : Integer numbers larger than 'Number.MAX_SAFE_INTEGER'
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let bigIntValue = 123456789012345678901234567890n;
console.log(bigIntValue) // the value above
console.log(typeof bigIntValue) // bigint

let smallBigInt = 1n
console.log(smallBigInt) // 1n
console.log(typeof smallBigInt) // bigint

let maxSafeInteger = Number.MAX_SAFE_INTEGER
console.log(maxSafeInteger) // 9007199254740991
console.log(typeof maxSafeInteger) // number

let maxSafeIntPlusOneNumber = maxSafeInteger + 1
console.log(maxSafeIntPlusOneNumber) // 9007199254740992
console.log(typeof maxSafeIntPlusOneNumber) // number

let maxSafeIntPlusOneBigInt = BigInt(maxSafeInteger) + 1n
console.log(maxSafeIntPlusOneBigInt) // bigint
console.log(typeof maxSafeIntPlusOneBigInt) // 9007199254740992n

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// string     : A sequence of characters
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let greeting = "Hello, world!"
let numberAsString = "42"
console.log(greeting); // "Hello, world!"
console.log(numberAsString); // "42"
console.log(typeof greeting); // "string"
console.log(typeof numberAsString); // "string"

let user = "Alice"
let message = `Hello, ${user}`
console.log(message) // Hello, Alice

let thatIsAlsoAWayToDeclareString = 'Some string'
console.log(thatIsAlsoAWayToDeclareString) // Some string

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---
// symbol     : A unique and immutable identifier
// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- ---

let symbol1 = Symbol("that is some description of the symbol")
let symbol2 = Symbol("that is the same description")
let symbol3 = Symbol("that is the same description")
let symbol4 = Symbol()
let symbol5 = Symbol()

// symbols are unique, even with the same description
console.log(symbol1 === symbol2) // false
console.log(symbol2 === symbol3) // false
console.log(symbol4 === symbol5) // false