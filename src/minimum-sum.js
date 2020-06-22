
// Complete the minimumSum function below.
function minimumSum(l, r) {
  // Return the minimum sum among all arrays that satisfy the condition.
  const n = l.length;
  let last;
  let count = 0;
  let lmax = l[0];
  let rmin = r[0];

  for (let i = 1; i < n; i++) {
    if (!count) {
      if (l[i] > lmax) {
        lmax = l[i];
        if (lmax > rmin) {
          count = lmax - rmin;
          last = lmax;
        }
      } else if (r[i] < rmin) {
        rmin = r[i];
        if (lmax > rmin) {
          count = lmax - rmin;
          last = rmin;
        }
      }
    } else {
      if (last < l[i]) {
        count += l[i] - last;
        last = l[i];
      } else if (last > r[i]) {
        count += last - r[i];
        last = r[i];
      }
    }
  }
  return count;
}

function main() {



  const l = [1, 2, 6, 1, 2]

  const r = [3, 5, 8, 2, 3]

  const result = minimumSum(l, r);

  console.log(result + '\n');


}

main()