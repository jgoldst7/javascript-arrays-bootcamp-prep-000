var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray("foo"){
  return '${foo},...chocolateBars]'
  
}
addElementToBeginningOfArray()

function destructivelyAddElementToBeginningOfArray("foo"){
  return 'chocolateBars.unshift("${foo}")'

}
destructivelyAddElementToBeginningOfArray()