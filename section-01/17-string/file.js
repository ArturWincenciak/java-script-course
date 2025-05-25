// Concatenation (plus operator)
let greeting = "Hello"
let user = "John"
let message1 = greeting + ", " + user + "!"
console.log(message1) // Hello, John!

// Concatenation (method)
let message2 = greeting.concat(", ", user)
message2 = message2.concat("!")
console.log(message2) // Hello, John!

// Substring
let substring1 = message1.substring(7)
console.log("substring1: ", substring1) // John!

let substring2 = message1.substring(7, 11)
console.log("substring2: ", substring2) // John (without !)

// Substring - very strange
let substring3 = message1.substring(7, 4)
// result: 'o,' (from 4 to 7) - very strange,
// because the first argument is greater than the second
// and the substring method changes the order of the arguments
// implicitly and returns substring from 4 to 7
console.log("substring3: ", substring3) 

// Slice
let slice1 = message1.slice(7)
console.log("slice1: ", slice1) // John!

let slice2 = message1.slice(7, 11)
console.log("slice2: ", slice2) // John (without !)

// Slice - with the first argument is greater than the second
let slice3 = message1.slice(7, 4)
console.log("slice3: " + "'" + slice3 + "'") // empty string - that's correct and expected

// Substring with Negative Arguments
let substring4 = message1.substring(-4)
// result: Hello, John! - negative arguments are treated as 0
console.log("substring4: ", substring4) // Hello, John!

// Slice with Negative Arguments
let slice4 = message1.slice(-4)
// result: 'ohn!' - because for the negative arguments 
// the slicing begins from the end of the string
// and slice the last 4 characters,
// that is a pretty cool feature,
// but it is a bit strange because of
// the implicit behavior of the slice method
// I'd prefer to have another method for this
// with the explicit proper name like sliceFromEnd
console.log("slice4: ", slice4) // ohn!

// Find index with a slice method
let userFirstIndex = message1.indexOf(user)
let userLastIndex = userFirstIndex + user.length
let slice5 = message1.slice(userFirstIndex, userLastIndex)
console.log("slice5: ", slice5) // John

// Upper/Lower Case
let upperCase = message1.toUpperCase()
let lowerCase = message1.toLowerCase()
console.log("upperCase: ", upperCase) // HELLO, JOHN!
console.log("lowerCase: ", lowerCase) // hello, john!

// Starts With
let startsWithHello = message1.startsWith("Hello")
console.log("startsWithHello: ", startsWithHello) // true
let startsWithLlo = message1.startsWith("llo")
console.log("startsWithLlo: ", startsWithLlo) // false
let startsWithLlo2 = message1.startsWith("llo", 2)
// the second argument is the index from which the search starts,
// so the search starts from the second character
// and the result is true
console.log("startsWithLlo2: ", startsWithLlo2) // true

// Ends With
let endsWithExclamation = message1.endsWith("John!")
console.log("endsWithExclamation: ", endsWithExclamation) // true
let endsWithWithoutExclamation = message1.endsWith("John")
console.log("endsWithWithoutExclamation: ", endsWithWithoutExclamation) // false
let endsWithoutExclamation11 = message1.endsWith("John", 11)
// the second argument is the index from which the search starts,
// so the search starts from the 11th character
// and the result is true
console.log("endsWithoutExclamation11: ", endsWithoutExclamation11) // true

// Includes
let includesJohn = message1.includes("John")
console.log("includesJohn: ", includesJohn) // true

// Trim
let message3 = " this is A test ";
console.log("'" + message3.trim() + "'") // 'this is A test' - removes spaces from the beginning and the end
console.log("'" + message3.trimStart() + "'") // 'this is A test ' - removes spaces from the beginning
console.log("'" + message3.trimEnd() + "'") // 'this is A test' - removes spaces from the end

// Char At
let charAt7 = message1.charAt(7)
console.log("charAt7: ", charAt7) // J
console.log("[7]: ", message1[7]) // J

// Replace
let message4 = message1.replace("John", "JS")
console.log("message4: ", message4) // Hello, JS!

// Split
let message5 = "Hello, John! How are you?"
let words = message5.split(" ")
console.log("words: ", words) // ['Hello,', 'John!', 'How', 'are', 'you?']
let words2 = message5.split("ll")
console.log("words2: ", words2) // ['He', 'o, John! How are you?']

// Interpolation
let message6 = `${greeting}, ${user}!`
console.log("message6: ", message6) // Hello, John!