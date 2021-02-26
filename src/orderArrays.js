
let product = "ig41nsu22 ig31sitt56 ig21abd31 ig21sit56";
let rating = "4.5 4.7 4.0 4.7";

/* console.time('arr');
console.log(getRating(product, rating))
console.timeEnd('arr'); */

console.time('obj');
console.log(getRatingObj(product, rating))
console.timeEnd('obj');

/* function getRating(products, rating) {

  let resArr = [];
  let resultStr = "";

  const pa = products.split(" ");
  const pr = rating.split(" ");

  if (pa.length !== pr.length) {
    return "Strings must have same number of elements"
  }

  resArr = pa.map((_, i) => [pa[i], pr[i]]);

  resArr.sort((a, b) => b[1] - a[1]);

  resArr.map(obj => resultStr += ` ${obj[0]}`);

  return resultStr;
} */
function getRatingObj(products, rating) {

  let resArr = [];
  let resultStr = "";

  const pa = products.split(" ");
  const pr = rating.split(" ");

  if (pa.length !== pr.length) {
    return "Strings must have same number of elements";
  }

  resArr = pa.map((_, i) => ({ product: pa[i], rating: pr[i] }));
  resArr.sort((a, b) => b.rating - a.rating);
  resArr.map(obj => resultStr += ` ${obj.product}`);
  return resultStr;
}
