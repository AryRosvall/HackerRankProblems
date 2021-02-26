// Input
m = [
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [22, 23, 24, 25],
]
// output 10,11,14,12,15,18,13,16,19,22,17,20,23,21,24,25

function traverseMatrix(m) {

  let output = ''

  for (let i = 0; i < Math.pow(m.length, 2); i++) {
    if (m[0][i]) {
      output += m[0][i] + ','
    }
    if (i >= 1) {
      j = i - 1
      if (m[1][j]) {
        output += m[1][j] + ','
      }
      if (j >= 1) {
        h = j - 1
        if (m[2][h]) {
          output += m[2][h] + ','
        }
        if (h >= 1) {
          k = h - 1
          if (m[3][k]) {
            output += m[3][k] + ','
          }
        }
      }
    }
  }
  return output.slice(0, output.length - 1)
}

console.log(traverseMatrix(m))

