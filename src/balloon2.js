function occurrences(chain, seek) {
  const arr = chain.split('');
  const arrSeek = seek.split('');
  const newArr = [];

  let occurrences = 0;
  arr.filter((item) => {
    if (arrSeek.includes(item)) {
      newArr.push(item)
    }
  })
  let count = newArr.length;
  let validate = []
  while (count > 0) {
    arrSeek.map(item => {
      if (newArr.includes(item)) {
        validate.push(item)
        if (validate.length === seek.length) {
          occurrences++;
          validate = [];
        }
      }
      //newArr.push(item)
    })
    count--;
  }
  return occurrences
}
console.log(occurrences("BAOOLLNNOLOLGBAX", "BALLOON"))