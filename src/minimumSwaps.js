function minimumSwaps(arr) {

  let swapSum = 0;

  for (iterator = 0; iterator < arr.length; iterator++) {
    while (arr[iterator] != iterator + 1) {
      const swapKey = arr[iterator] - 1;
      const temp = arr[iterator];
      arr[iterator] = arr[swapKey];
      arr[swapKey] = temp;
      swapSum++;
    }
  }

  return swapSum
}

/* minimumSwaps([1, 3, 5, 2, 4, 6, 7])
minimumSwaps([2, 3, 4, 1, 5]) */
console.log(minimumSwaps([4, 3, 1, 2]))
//minimumSwaps([2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19])