var rotate = function (arr, count) {
  count -= arr.length * Math.floor(count / arr.length);
  arr.push.apply(arr, arr.splice(0, count));
  return arr;
};

console.log("rotate ", rotate([1, 2, 3, 4, 5, 6, 7], 2))
