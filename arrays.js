var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(array, element){
  var newArray = [element, ...array]
  console.log(newArray)
  
}
addElementToBeginningOfArray(chocolateBars, "element")


good