/**
 * Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays.
 * In this case, these elements should be unique!
 */

var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

console.log("intersection", intersection(firstArray, secondArray))

function intersection(firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
  // If it does exist, add that element to the new array.

  var hashmap = {};
  var intersectionArray = [];

  firstArray.forEach(function (element) {
    hashmap[element] = 1;
  });

  console.log(hashmap)

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  secondArray.forEach(function (element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}