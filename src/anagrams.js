/* Given two strings, return true if they are anagrams of one another 
Details
For example: Mary is an anagram of Army */


function checkAnagram(string1, string2) {

  if (string1 === '' || string1 === undefined) {
    return false;
  }

  if (string2 === '' || string2 === undefined) {
    return false;
  }
  str1 = string1.toUpperCase().split('').sort().join('');

  str2 = string2.toUpperCase().split('').sort().join('');


  if (str1 === str2) {
    return true
  }

  return false;
}

console.log("checkAnagram('Mary', 'Army')", checkAnagram('Mary', 'Army'));