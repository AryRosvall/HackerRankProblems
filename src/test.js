
/* 
  FizzBuzz Challenge
  Details
  Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5.
*/
function fizzBuzz() {
  let result;

  for (let i = 1; i <= 100; i++) {
    result = i % 15 === 0 ? "fizzBuzz" : i % 3 === 0 ? "fizz" : i % 5 === 0 ? "buzz" : i;
    console.log(result);
  }
}
fizzBuzz()

/* 
Remove duplicates of an array and return an array of only unique elements
input [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]
output [1, 2, 3, 5, 9, 8]
*/

function removeDuplicates(arr) {
  let newArr = [];
  arr.map((el, i) => {
    if (i === 0) {
      newArr.push(el);
    } else if (!newArr.includes(el)) {
      newArr.push(el);
    }
  })
  console.log(newArr);

}

removeDuplicates([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]);


/* 
Given a string, reverse each word in the sentence
Details 
For example Welcome to this Javascript Guide! should be become emocleW ot siht tpircsavaJ !ediuG
*/

function reverseString(str) {
  const strArr = str.split(" ");

  let reverseString = ''
  strArr.map(word => {
    reverseString += `${word.split('').reverse().join('')} `;
  })
  console.log(reverseString.substring(reverseString.length - 1, 1));
}

reverseString("Welcome to this Javascript Guide!");

/*
Explain what a callback function is and provide a simple example.

R = A callback function is a function that is passed as an argument of another function and it's invoked inside the container function.
For example:
*/

//Function that will be passed as a callback
function hello(name) {
  console.log(`Hello ${name}`);
}

//Main function
function greeting(name, cb) {
  //This is a callback
  cb(name);
}

greeting("Ary", hello);