function solution(S, T) {

  const arrHours = extractHours(S, T);
  const results = arrHours.map(hour => findInterestingNumbers(hour.toString().split(''))).filter(num => num != '');

  console.log("solution -> results", results)
  return results.length;
}

function formatSolution(results) {

  const format = results.filter(num => num != '');
  format.map(num => chunk(num.split(''), 2));
  return format.map((num, index) => {
    let fix = chunk(num.split(''), 2);
    return fix.map(arr => arr.join('')).join(':');
  });
}

function extractHours(S, T) {

  const aS = S.split(':').join('');
  const aT = T.split(':').join('');

  const arrHours = []
  let number = parseInt(aS);

  while (number <= parseInt(aT)) {
    arrHours.push(number);
    number++;
  }
  return arrHours;
}

function chunk(array, size) {
  if (array.length <= size) {
    return [array]
  }
  return [array.slice(0, size), ...chunk(array.slice(size), size)]
}

function findInterestingNumbers(array) {
  let count = [];
  array.map(num => {
    // if (num !== '0') {
    if (count.indexOf(num) === -1) {
      count.push(num)
    }
    //}
  })

  if (count.length <= 2) return array.join('')
  return ''
}

/* const S = '15:15:00'
const T = '15:15:12' */

const S = '22:22:21'
const T = '22:22:23'



console.log("solution(S, T)", solution(S, T))
