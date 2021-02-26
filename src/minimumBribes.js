
function minimumBribes(queue) {

  var bribes = 0;
  var chaotic = false;

  for (let i = 0; i < queue.length; i++) {

    if (queue[i] - (i + 1) > 2) { chaotic = true }
    console.log(i)
    for (let j = Math.max(0, queue[i] - 2); j < i; j++) {
      if (queue[j] > queue[i]) { bribes++ }
      console.log(i, j, queue[i], queue[j], bribes)
    }
  }
  console.log(chaotic ? "Too chaotic" : bribes)
}


minimumBribes([1, 2, 5, 3, 7, 8, 6, 4])



/* 1 2 3 4 5 6 7 8
1 2 3 5 4 6 7 8
1 2 3 5 6 4 7 8
1 2 3 5 6 7 4 8
1 2 3 5 6 7 8 4
1 2 5 3 6 7 8 4
1 2 5 3 7 6 8 4
1 2 5 3 7 8 6 4
 */