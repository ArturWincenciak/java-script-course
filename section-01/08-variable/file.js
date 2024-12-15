console.log("Variables ...")

// ---
// let
// ---

let letGlobalTest = "Some global variable declared with let"
console.log(letGlobalTest)

{ 
    let letLocalTest = "Variable declared with let, usable only within this local scope"
    console.log(letLocalTest)

    console.log(letGlobalTest)
    letGlobalTest = "The global variable declared with let, changed in the local sub-scope"
    console.log(letGlobalTest)
}

// error: the variable is not defined outside the block scope
// console.log(letLocalTest)

let letLocalTest = "Completely new variable declared with let, but this time in the global scope"
console.log(letLocalTest)
console.log(letGlobalTest)

// ---
// const
// ---

const constTest = "The const value"
console.log(constTest)

// error: assignment to constant variable
// constTest = "Some new value"

{
    const constLocalTest = "Variable declared with const, usable only within this local scope"
    console.log(constLocalTest)
}

// error: the variable is not defined outside the block scope
// console.log(constLocalTest)

const constLocalTest = "Completely new variable declared with const, bu this time in the global scope"
console.log(constLocalTest)

// ---
// var
// ---

// The variable is lifted (hoisted) to the top of the scope,
// but it is not initialized. Its value at this point is 'undefined'.
console.log(varGlobalTest)

// Assigning a value to the variable *before* its declaration.
// Due to hoisting, this does not throw an error.
varGlobalTest = "Assignment before declaration"
console.log(varGlobalTest)

{
    // Declaring a 'var' variable with an assignment
    // IMPORTANT: Even though this is a block scope, the variable is still accessible.
    // IMPORTANT: This happens because 'var' does not respect block scope.
    var varGlobalTest = "The global variable declared by var"
    console.log(varGlobalTest)

    var varLocalTest = "Variable declared with var in a local scope, but still accessible outside"
    console.log(varLocalTest)
}

// The variable is still accessible outside the block scope
console.log(varGlobalTest);

// The variable is still accessible outside the block scope
console.log(varLocalTest)

function funcWithVar() {
    var varFuncTest = "That is a variable declared in the function"
    console.log(varFuncTest)
}

// error: the variable is not defined outside the function scope
// console.log(varFuncTest)

// Redeclaration allowed in the same scope
var theSame = "First the same"
var theSame = "Second the same"

/*
|----------------------------------------|-------------------------------|-------------------------------|--------------------------------|
| Feature                                | var                           | let                           | const                          |
|----------------------------------------|-------------------------------|-------------------------------|--------------------------------|
| Scope                                  | Function scope                | Block scope                   | Block scope                    |
| Reassignment                           | Allowed                       | Allowed                       | Not allowed                    |
| Redeclaration                          | Allowed in the same scope     | Not allowed                   | Not allowed                    |
| Hoisting                               | Hoisted with `undefined`      | Hoisted, but uninitialized    | Hoisted, but uninitialized     |
| Initialization Required                | Not required                  | Not required                  | Required during declaration    |
| Mutability                             | Mutable                       | Mutable                       | Immutable (value cannot change)|
| Block Visibility                       | Visible outside block         | Block-scoped only             | Block-scoped only              |
|----------------------------------------|-------------------------------|-------------------------------|--------------------------------|

Summary: 
- var - An older way of declaring variables; it has function scope and can lead to errors due to hoisting.  
- let - A modern alternative with block scope; used for variables whose values may change.  
- const - Used for constants; the value cannot be reassigned, but object structures (e.g., arrays) can have their contents modified.  

In practice:
- Use let if the variable's value is expected to change.
- Use const if the variable's value is constant.
- Avoid using var in modern code.
*/