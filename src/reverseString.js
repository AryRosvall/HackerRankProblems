function reverseString(s) {
  try {
    console.log(s.split('').reverse().join(''))

  } catch (e) {
    console.log("s.split is not a function")
    console.log(s)
  }
}

function main() {
  const s = 1234
  reverseString(s);
}

main()