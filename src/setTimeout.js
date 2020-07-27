
let count = 0;
for (var i = 0; i < 10; i++) {
  setTimeout(() => {
    console.log(++count)
  }, i * 1000);
}