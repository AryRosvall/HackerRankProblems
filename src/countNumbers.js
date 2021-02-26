/* 1 + 2 + ... + 8 + 7 + 6 + ... + -1 */

const arr = [0, 5, -1];
let total = 0;
const finalArr = [];

arr.map((number, i) => {

  const last = number;
  const next = arr[i + 1];

  if (last <= next) {
    for (let j = last; j <= next; j++) {
      total = j + total;
    }
  } else {
    for (let j = last; j >= next; j--) {
      total = j + total;
    }
  }
})



const i = -5;
const j = -1
const k = -3
let total = 0;

for (let a = i; a <= j; a++) {
  total += a;
}
for (let b = j - 1; b >= k; b--) {
  total += b;
}


console.log("🚀 ~ file: countNumbers.js ~ line 19 ~ arr.map ~ total", total)



/*
arr.map((number, i) => {

  const last = number;
  const next = arr[i + 1];

  if (last <= next) {
    for (let j = last; j <= next; j++) {
      finalArr.push(j);
    }
  } else {
    for (let j = last; j >= next; j--) {
      finalArr.push(j);
    }
  }
  sum = finalArr.reduce((accumulator, currentValue) => accumulator + currentValue);
})
console.log("🚀 ~ file: countNumbers.js ~ line 34 ~ arr.map ~ finalArr", finalArr)
console.log("🚀 ~ total", total)
*/


/*

var result = arr.filter(arr[0] <= x && x <= arr[1], [5, 7]).length

console.log('Total number of values:', result)

*/