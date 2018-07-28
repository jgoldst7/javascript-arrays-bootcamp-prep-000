var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];



function addElementToBeginningOfArray(first, array){
  var newArray = ["foo", ...array]
  console.log(newArray)
  
}
addElementToBeginningOfArray("eminem", chocolateBars)


