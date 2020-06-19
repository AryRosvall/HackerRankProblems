'use strict';

function factorial(n) {
  return (n === 0) ? 1 : n * factorial(n - 1);
}

function main() {
  const n = 4;

  console.log(factorial(n));
}

main();