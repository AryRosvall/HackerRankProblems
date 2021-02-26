function hourglassSum(arr) {

  if (arr.map(i => i.length).reduce((p, n) => p + n) !== 36) {
    return "Array must be 6*6 positions"
  }

  let sum = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      sum.push(arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2])
    }
  }

  return (sum.length > 0) ? Math.max(...sum) : 0;
}



let arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
];

console.log(hourglassSum(arr))
