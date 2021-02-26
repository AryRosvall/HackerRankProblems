let str = "( () ( () ) () )"
let str = "( ()"
//let str = ")))((("

console.log("balanceParenthesis",
  balanceParenthesis(str))

function balanceParenthesis(str) {

  let arr = str.split(' ').join('').split('');

  let check = [];

  arr.map(el => {
    if (el === '(') {
      check.push(el)
    }

    if (el === ')') {
      if (check[check.length - 1] === '(') {
        check.pop();
      }
    }
    console.log(check)
  })
  return (check.length === 0);
}

