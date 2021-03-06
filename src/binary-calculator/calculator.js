const btn0 = document.getElementById('btn0');
const btn1 = document.getElementById('btn1');
const btnClr = document.getElementById('btnClr');
const btnEql = document.getElementById('btnEql');
const btnSum = document.getElementById('btnSum');
const btnSub = document.getElementById('btnSub');
const btnMul = document.getElementById('btnMul');
const btnDiv = document.getElementById('btnDiv');
let res = document.getElementById('res');
const symbols = ["+", "-", "*", "/"];


function addValueToRes(value) {
  let currentValue = res.getAttribute('value');
  res.setAttribute("value", currentValue + value);
}

function addSymbolToRes(value) {
  let currentValue = res.getAttribute('value');
  let lastVal = currentValue.split("")[currentValue.length - 1]

  if (lastVal !== undefined) {
    if (!symbolExists(lastVal)) {
      res.setAttribute("value", currentValue + value);
    }
  }
}

function symbolExists(value) {

  if (symbols.find(symbol => symbol === value) === undefined) {
    return false
  }
  return true
}

function clearResult() {
  res.setAttribute("value", "");
}

function calculateResult() {
  let currentValue = res.getAttribute('value');
  let arr = currentValue.split("");
  let newArr = [];
  let num = "";

  arr.map(character => {

    if (!symbols.includes(character)) {
      num = num + character;
    } else {
      newArr.push(parseInt(num, 2))
      newArr.push(character)
      num = ""
    }
  })
  newArr.push(parseInt(num, 2))

  res.setAttribute("value", eval(newArr.join("")));
}

btn0.addEventListener('click', () => addValueToRes("0"));
btn1.addEventListener('click', () => addValueToRes("1"));
btnSum.addEventListener('click', () => addSymbolToRes("+"));
btnSub.addEventListener('click', () => addSymbolToRes("-"));
btnMul.addEventListener('click', () => addSymbolToRes("*"));
btnDiv.addEventListener('click', () => addSymbolToRes("/"));
btnClr.addEventListener('click', () => clearResult());
btnEql.addEventListener('click', () => calculateResult());
