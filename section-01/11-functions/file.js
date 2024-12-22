function justFunction(name) {
    let greeting = 'Hello '
    greeting += name
    greeting += ' from just a function'
    return greeting
}

const variableFunction = function(name) {
    let greeting = 'Hello '
    greeting += name
    greeting += ' from variable function'
    return greeting
}

const arrowFunction = (name) => {
    let greeting = 'Hello '
    greeting += name
    greeting += ' from arrow function'
    return greeting
}

let result = justFunction('Conway')
console.log(result)

let resultFromVarFunc = variableFunction('Knuth')
console.log(resultFromVarFunc)

let resultFromArrowFunc = arrowFunction('Riemann')
console.log(resultFromArrowFunc)