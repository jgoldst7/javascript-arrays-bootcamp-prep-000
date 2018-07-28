var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray("foo"){
  return '${foo},...chocolateBars]'
  
}

function destructivelyAddElementToBeginningOfArray("foo"){
  return 'chocolateBars.unshift("${foo}")'

}
console.log(chocolateBars)