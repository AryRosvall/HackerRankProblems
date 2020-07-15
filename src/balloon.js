function solution(S) {
  // write your code in JavaScript (Node.js 8.9.4)
  let order = S.split('').sort()
  const balloon = 'BALON'.split('').sort()
  const ballACount = [1, 1, 2, 2, 1]

  let count = []
  for (let i = 0; i < balloon.length; i++) {
    const num = findLetter(order, balloon[i])
    count.push(num)
  }

  const arrRes = []
  for (let i = 0; i < count.length; i++) {
    arrRes.push(count[i] % ballACount[i]);
  }

  console.log("solution -> count", count)
  console.log("solution -> order", arrRes)

};


function findLetter(S, l) {

  const num = S.filter(letter => l === letter)
  return num.length
}

findLetter('BAOOLLNNOLOLGBAX'.split(''), 'L')
try1 = "BAONXXOLL";
//let try1 = 'BAOOLLNNOLOLGBAX'
//let try1 = 'QAWABAWONL'
//let try1 = 'ONLABLABLOON'

console.log("solution(try1)", solution(try1))
