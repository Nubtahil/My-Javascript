let language = "english" // -- blockescope --only inside of function
language = "urdu" // we can update in let
console.log(language)

var name = "nubtahil" //  global scope -- can be use inside and outside of function
console.log(name)

const secondsInMin = 60 // blockscope
secondsInMin = 6 // we can't update in const
console.log(secondsInMin)

//block scope examples

if(true){
    const car_name = "bmw"
}
 console.log(car_name)

// prefered if u use
// const
// let
// var

// hoisting

console.log(school)
var school = "dps" // output will be undefined
