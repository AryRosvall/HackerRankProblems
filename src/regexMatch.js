function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */
  const re = /^(.).*\1$/

  /*
   * Do not remove the return statement
   */
  return re;
}


function main() {
  const re = regexVar();
  const s = 'aewxyzae';
  const s1 = 'aewxyza';

  console.log(re.test(s));
  console.log(re.test(s1));
}


main()