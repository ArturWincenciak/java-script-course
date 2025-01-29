console.log("|-----------------------------------------------------------------|");
console.log("|-----------------------------------------------------------------|");
console.log("|--- [_] . [_] . [_] . [___] a r r a y [___] . [_] . [_] . [_] ---|");
console.log("|-----------------------------------------------------------------|");
console.log("|-----------------------------------------------------------------|");

let numbers = [1, 3, 23, 14, 55]
console.log(numbers)
console.log(numbers[0])
console.log(numbers[1])
console.log(numbers[10]) // undefined - out of range

numbers.push(200)
console.log(numbers) // contains 200 at the end
const pNum = numbers.pop()
console.log(pNum) // 200
console.log(numbers) // 200 removed from the end

numbers.unshift(100)
console.log(numbers) // contains 100 at the beginning
const uNum = numbers.shift()
console.log(uNum) // 100
console.log(numbers) // 100 removed from the beginning

numbers.splice(1, 2) // remove 2 elements starting from index 1
console.log(numbers)

numbers.splice(1, 0, 300, 400) // add 300 and 400 at index 1 (the 0 means no elements will be removed)
console.log(numbers)

let index = numbers.indexOf(300)
console.log(index)
numbers.splice(index, 1) // remove 1 element at index 1 (equal to 300)
console.log(numbers)

function isBig(x) {
    return x > 14
} // function to filter big numbers

const bigNumbers = numbers.filter(isBig)
console.log(bigNumbers)

// lambda function to filter small numbers
const smallNumbers = numbers.filter(n => n <= 14)
console.log(smallNumbers)

// includes
console.log(numbers.includes(23)) // false - 23 is not in the array
console.log(numbers.includes(14)) // true - 14 is in the array

// if all elements is positive
console.log(numbers.every(n => { // every means all elements must satisfy the condition
    console.log("Checking if " + n + " is positive")
    return n > 0
})) // true - all elements are positive

// if any element is negative
console.log(numbers.some(n => { // some means at least one element must satisfy the condition
    console.log("Checking if " + n + " is negative")
    return n < 0
})) // false - all elements are positive

numbers.unshift(-10) // add -10 at the beginning
// if any element is negative
console.log(numbers.some(n => { // some means at least one element must satisfy the condition
    console.log("Checking if " + n + " is negative")
    return n < 0
})) // true - at least one element is negative

// reverse
numbers.reverse() // mutates the original array
console.log(numbers)

// swap elements
function swap(arr, x, y) {
    let temp = arr[x]
    arr[x] = arr[y]
    arr[y] = temp
}

swap(numbers, 0, 1)
console.log(numbers)

// forEach
numbers.forEach((element, index, array) => {
    array[index] = element ** 2
    console.log(index, element, numbers, array)
});

// sum of all elements
let sum = 0; 
numbers.forEach(element => sum += element)
console.log(sum)
// average of all elements
let avg = sum / numbers.length
console.log(avg)

// map
const integers = [1, 2, 3, 4, 5]
const doubled = integers.map(i => i * 2)
console.log(integers)
console.log(doubled)

const people = [
    { name: "John", age: 20 },
    { name: "Jane", age: 30 },
    { name: "Jack", age: 40 },
    { name: "Jill", age: 50 },
    { name: "Joe", age: 60 },
    { name: "Jenny", age: 70 }
];
console.log(people)
const mapped = people.map(p => p.name + " is " + p.age + " years old")
console.log(mapped)

// filter and map
const oldPeople = people
    .filter(p => p.age > 30)
    .map(p => p.name)

console.log(oldPeople)

// celsius to fahrenheit
const celsius = [0, 15, 30, 45, 60]
console.log(celsius)
const fahrenheit = celsius.map(c => (c * (9/5)) + 32)
console.log(fahrenheit)

// join
const a = [1, 2, 3]
console.log(a)
var joinA = a.join(' - ')
console.log(joinA)

// concat
const b = [4, 5, 6]
console.log(b)
var concatAB = a.concat(b)
console.log(concatAB)

// flat map
const users = [
    { name: "John", phone: ["111-222-333", "444-555-666"] },
    { name: "Jane", phone: ["123-123-123", "456-456-456", "789-789-789"] },
    { name: "Jack", phone: ["999-999-999"] }
];
const mapPhones = users.map(u => u.phone)
console.log(mapPhones)

const flatMapPhones = users.flatMap(u => u.phone)
console.log(flatMapPhones)

// sort
const random = [23, 12, 5, 9, 45, 403, 1000]
console.log(random)

random.sort()
console.log(random) // sorted as string :)

random.sort((a, b) => a - b)
console.log(random) // sorted as number (ascending)

random.sort((a, b) => b - a)
console.log(random) // sorted as number (descending)

const names = ["John", "Jane", "Jack", "Jill", "Joe", "Jenny"]
console.log(names)

names.sort()
console.log(names) // sorted as string

names.sort((a, b) => a.length - b.length)
console.log(names) // sorted by length

people.sort((a, b) => b.age - a.age)
console.log(people.map(p => p.age)) // sorted by age (descending)

// destructuring
const coordinates = [10, 20, 30]
const [x, y, z] = coordinates
console.log(x, y, z)

const fruits = ["apple", "banana", "cherry", "date", "elderberry"]
const [f1, , f3, ...rest] = fruits // first and third elements and rest of the elements (skipping second and fourth)
console.log(f1, f3) // only apple and cherry
console.log(rest) // rest of the fruits

// default values
const values = [1, 2]
const [v1 = 100, v2 = 200, v3 = 300] = values
console.log(v1, v2, v3) // result is 1, 2, 300 because v3 is not in the array and has a default value

// without spread operator 
const someNumbers = [1, 2, 3]
const result = someNumbers // result is a reference to the original array
result[0] = 100
console.log(result) // [100, 2, 3]
console.log(someNumbers) // [100, 2, 3] - original array is also changed because result is a reference to the original array

// to avoid changing the original array use spread operator
const anotherNumbers = [10, 20, 30]
const anotherResult = [...anotherNumbers] // anotherResult is a copy of anotherNumbers
anotherResult[0] = 1000
console.log(anotherResult) // [1000, 20, 30]
console.log(anotherNumbers) // [10, 20, 30] - original array is not changed

// combining arrays by spread operator
const first = [1, 2, 3]
const second = [4, 5, 6]
const combined = [...first, ...second]
console.log(combined)