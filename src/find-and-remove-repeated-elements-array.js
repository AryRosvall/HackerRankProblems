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
