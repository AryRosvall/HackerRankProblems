function arrayManipulation(n, queries) {
  console.log(n, queries)

  const arr = "0".repeat(n).split("").map(n => parseInt(n));

  for (let j = 0; j < queries.length; j++) {

    let start = queries[j][0];
    let end = queries[j][1];
    let value = queries[j][2];

    for (let i = 0; i < n; i++) {
      if (i + 1 >= start && i + 1 <= end) {
        arr[i] += value
      }
    }
  }

  console.log(Math.max(...arr))
}
function arrayManipulation(n, queries) {
  console.log(n, queries)
  let sum = 0

  const addAt = "0".repeat(n).split("").map(n => parseInt(n));


  queries.forEach(([start, end, value]) => {
    console.log("here", start, end, value)
    addAt[start] += value;
    addAt[end + 1] -= value;
    console.log(addAt)


  });


  for (add in addAt) {
    sum += add
    console.log("🚀 ~ file: arrayOperations.js ~ line 41 ~ arrayManipulation ~ sum", sum)

  }



  console.log(Math.max(...addAt))
}

/*  const arr = Array(n + 1);
 let maxValue = 0,
   currentNumber = 0;
 queries.forEach(([startRange, endRange, value]) => {
   arr[startRange] = arr[startRange] || { start: 0, end: 0 };
   arr[endRange] = arr[endRange] || { start: 0, end: 0 };
   arr[startRange].start += value;
   arr[endRange].end += value;
   console.log(arr)
 });
 arr.forEach((cell) => {
   if (cell) {
     currentNumber += cell.start;
     if (currentNumber > maxValue) {
       maxValue = currentNumber;
     }
     currentNumber -= cell.end;
   }
 });

 console.log(arr, maxValue) 

}*/
arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]])
