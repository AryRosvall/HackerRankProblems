const quickSort = arr => {
  if (arr.length < 2) return arr;

  const pivot = arr[Math.floor(Math.random() * arr.length)];

  let left = [];
  let equal = [];
  let right = [];

  for (let element of arr) {
    if (element > pivot) right.push(element);
    else if (element < pivot) left.push(element);
    else equal.push(element);
  }

  return quickSort(left)
    .concat(equal)
    .concat(quickSort(right));
};

function minSum(num, k) {

  if (num.length === 0) {
    return 0;
  }

  if (num.find(n => n < 0) < 1) {
    return 0;
  }

  if (num.find(n => n < 0) > 10000) {
    return 0;
  }
  //let numOrd = quickSort(num)

  for (let i = 0; i < k; i++) {

    // numOrd = quickSort(numOrd)
    //let n = numOrd.pop()

    //let n = num.sort ((a, b) => a - b).pop();
    let n = Math.max(...num)
    let div = n / 2;
    num.unshift(Math.ceil(div));

  }

  return num.reduce((acc, n) => acc += n)

}

let k = 4;
//let arr = [2, 3, 1]
//let arr = [2, 3]
let arr = [10, 20, 7]
console.log("minSum(arr, k)", minSum(arr, k))
