let fb = '';
const n = 15;
let i = 1;

for (let i = 0; i <= n; i++) {

  fb += (i % 3 === 0) ? "Fizz" : '';

  fb += (i % 5 === 0) ? "Buzz" : '';

  fb += (i % 5 !== 0 && i % 3 !== 0) ? i : '';

  console.log(fb)
  fb = '';
}
