function miniMaxSum(arr) {

  let min = []
  let max = []

  arr.sort((a, b) => a - b);
  max = [...arr];
  min = [...arr];
  max.shift()
  min.pop()

  const minNum = min.reduce((acc, num) => acc += num)
  const maxNum = max.reduce((acc, num) => acc += num)

  console.log(`${minNum} ${maxNum}`)
}

function main() {
  const arr = [1, 2, 3, 4, 5]

  miniMaxSum(arr);
}

main()