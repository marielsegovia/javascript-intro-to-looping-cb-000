var array = [];
  //takes an array as argument, start counting from 0 and using a for loop, add a string to the array 25 times
  // if i value is 1, add string "I am 1 strange loop"
  //if i value is anything else "I am ${i} strange loops."
  //return array

function forLoop(array) {
  for (let i = 0; i < 25; i++ ){
    if(i > 1 || i == 0) {
      array.push("I am ${i} strange loops.")
    }
    else{
      array.push("I am 1 strange loop.")
    }
  }
  return array
}

//take number as argument
//countdown using console.log from passed in number to 0
//return string 'done'
function whileLoop(number){
  while(number > 0){
    console.log(--number)
  }
  return 'done'
}

//function should take an array as an argument
//maybeTrue() function (you can copy it from this README) as the condition
//and remove elements from the array until the array is empty or until maybeTrue() returns false
//(Your condition might look something like array.length > 0 && maybeTrue().
//Finally, return the array.

function maybeTrue() {
  return Math.random() >= 0.5
}

function doWhileLoop(array){
  do {
    array.pop()
    return array
  }
  while (array.length > 0 && maybeTrue());
}
