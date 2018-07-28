var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(first, array){
  console.log(first)
  console.log(array)
}
addElementToBeginningOfArray(`"eminem", ${chocolateBars}`)

var newBar = ["eminem",...chocolateBars]
console.log(newBar)
console.log(chocolateBars)