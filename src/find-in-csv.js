/**
  Retrieve the maximum number given a CSV String and the name of the column you have to search for
 */

function solution(S, C) {
  const data =
    S.split('\n')
      .map(e => e.trim())
      .map(e => e.split(',').map(e => e.trim()));

  const pos = data[0, 0].indexOf(C)

  let elements = [];
  for (let i = 1; i < data.length; i++) {
    elements.push(data[i, i][pos])
  }

  elements.sort((a, b) => a - b)

  return parseInt(elements[elements.length - 1])
}

let S = 'id,name,age,act.,room,dep.\n1,Jack,68,T,13,8\n17,Betty,28,F,15,7'

let C = 'age'

console.log(solution(S, C))




