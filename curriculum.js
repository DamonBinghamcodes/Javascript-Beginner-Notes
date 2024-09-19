// 1.0 Intro
// -- What is JavaScript and how does it work?
// -- Install VSCode
// -- Install NodeJS

// 2.0 Node commands in terminal - (Ctrl + `) to open terminal
// -- Running a file
// -- Killing a file

// 3.0 Variables
// -- Hello world
// -- Console.log()

console.log("Hello World")

// -- Variables
const mySentence = "hello world"

let numberOfEggs = 4 // let declaration allows us to reassign a new value, const does not!

numberOfEggs = 6

console.log (numberOfEggs + 6, mySentence)

// -- Code comments

// this is a comment
// -- Assignment by reference

let newNumberOfEggs = numberOfEggs

// 4.0 Data Types (init / read / write)
// -- Strings

let myString = "hello my name is damon"

let enxtendedString = myString + '. and i like the colour blue.'

console.log(myString[4])

// -- Numbers

const favouriteNumber = 83
// -- Arrays []
const groceryList = [
    'eggs',
    'bananas',
    'bread'
]

groceryList[1] = 'kiwi fruit'
console.log(groceryList[1])

// -- Objects {}
const dictionary = {
    'ocean': 'A body of water between countries',
    sea: 'A different body of water',
    myFavouriteNumber: 83
}

const user = {
    name: 'Damon',
    password : '***',
}

console.log(user.name, user['password'])

user.name = 'Elyas'

user['password'] = '******'

console.log(user)

// -- Null
const unknownNumber = null 

// -- Undefined
const undefinedValue = undefined 
console.log(unknownNumber, undefinedValue)

// -- Booleans (true/false)

const isDamonCool = true
let isCabbageDelicious = false

console.log(isDamonCool, isCabbageDelicious)

// 5.0 Recap

// 6.0 Logic and Operators
// -- Operators (+ - / %)
const sum = 3 + 9

const remainder = 12 % 5

console.log('remainder:', remainder)

// -- Logical operators (|| &&)
// see below if else block example

// -- Type of

const randomNUmber = 833

console.log(typeof randomNUmber, typeof 'random string')

// 7.0 Conditional Statements
// -- If else
const x = 21
if (x > 10 || x < 20) {
    // whatever code is wrtitten in here is coniditonally executed
    console.log('the value was greater than 10, or less than 20')
} else {
    console.log('the value was not greater than 10 or it was greater than 20')
}

// 8.0 Loops
// -- While loop
// let i = 0
// let j = 0
// while (i < 20) {
// console.log('the value of i = ', i)
// i = i + 1
// }

// -- For loop
const animals = ['duck', 'dog', 'cat', 'piggy']
console.log(animals)

for (let j = 0; j < animals.length; j++) {
    const currentAnimal = animals[j]
    if (currentAnimal == 'dog') {
        continue
    }

    if (currentAnimal === 'cat') {
        break
    }
    const stringToPrint = 'The animal at index: ' + j + ' And the value at that index is: ' + currentAnimal
    console.log(stringToPrint)
}
//for (let j = 0; j < 20; j++) {
    // This is the repeatable code j + j + 1, j++
    //console.log(j)


// -- Continue & break


// 9.0 Functions
// -- Create a function
function printSquare(y, z) {
    // This function prints out the square of a number
    console.log(y * z)
}

printSquare(4, 6)
// -- Invoke a function
// -- Return

function addStrings(s1 = 'Hello', s2 = 'World') {
    const concatString = s1 + s2
    console.log(concatString)
    if (typeof s1 !== 'string' || typeof s2 !== 'string') {
        return

    }
    return concatString
}

const newString = addStrings('Damon', 'World')
addStrings('Hello', 'Damon')
console.log('newstring', newString)
// -- Default inputs

// -- Arrow functions

const arrowFunction = (arg) => {
    console.log ('ARG: ', arg)
 }

 arrowFunction('Hello')