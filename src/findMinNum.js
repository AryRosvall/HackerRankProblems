function findMinNum() {
  params = process.argv[2]
  let arr = params.split(",").map(Number);
  arr.sort();
  var max = Math.max(...arr);
  var candidates = arr.filter(num => num * 2 > max)
  candidates.sort((a, b) => a - b)
  return candidates[0]
}

console.log(findMinNum([2, 3, 4, 5, 5, 1, 6, 7, 7, 8, 10, 11, 12, 15, 30]))
