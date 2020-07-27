/**
 * Given an array of integers, find the largest product yielded from three of the integers
 */

//var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];
var unsortedArray = [10, 7, 29, 30, 50, -1, 7];

computeProduct(unsortedArray); // 21000
console.log("computeProduct(unsortedArray);", computeProduct(unsortedArray))

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;
  console.log("computeProduct -> sortedArray", sortedArray)

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
    product1 *= sortedArray[x];
  }
  console.log("computeProduct -> product1", product1)

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];
  console.log("computeProduct -> product2", product2)

  if (product1 > product2) return product1;

  return product2;
}