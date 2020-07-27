//First solution using ES6
var removeDuplicates = function (nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i + 1, 1);
      i--;
    }
  }
  return nums;
};
console.log("removeDuplicates", removeDuplicates([-3, -1, 0, 0, 0, 3, 3]))

// Second and easier solution with ES6
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]
console.log("Array.from(new Set(array));", Array.from(new Set(array)))



// ES5 Implementation
var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

uniqueArray(array); // [1, 2, 3, 5, 9, 8]

function uniqueArray(array) {
  var hashmap = {};
  var unique = [];

  for (var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.
    if (!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 1;
      unique.push(array[i]);
    }
  }

  return unique;
}