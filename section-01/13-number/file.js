let textualNumber = '123'

var concat = textualNumber + 2
console.log(concat) // 1232 - It's a string concatenation
// It is because of the addition operator, which implicitly casts the number to a string

var number = parseInt(textualNumber)
var sum = number + 2
console.log(sum) // 125 - Now it's a number addition

var product = textualNumber * 2
console.log(product) // 246 - It's strange, isn't it?
// It is because of the multiplication operator, which implicitly casts the string to a number 4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444

// Try parse not a number
let notANumber = 'abc'
var parsed = parseInt(notANumber)
console.log(parsed) // NaN - Not a Number