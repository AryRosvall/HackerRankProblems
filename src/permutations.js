
const permutation = (inputArr) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr, m.concat(next))
      }
    }
  }
  permute(inputArr)
  return result;
}
/**
* 1.{-74.06725643633541, 4.8293179395713} (punto de origen)
* 2.{-74.05756710463811, 4.82986054103117}
* 3.{-74.03924781023824, 4.82714752833579}
* 4.{-74.01069658088244, 4.81536530246677}
* 5.{-74.01718197256992, 4.79115489288404}
*/
console.log(permutation([
  '{-74.05756710463811, 4.82986054103117}',
  '{-74.03924781023824, 4.82714752833579}',
  '{-74.01069658088244, 4.81536530246677}',
  '{-74.01718197256992, 4.79115489288404}',
]));