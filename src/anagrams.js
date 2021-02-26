/* Given two strings, return true if they are anagrams of one another 
Details
For example: Mary is an anagram of Army */


function checkAnagram(string1, string2) {

  if (!string1 || !string2) {
    return false;
  }

  str1 = string1.toUpperCase().split('').sort().join('');
  str2 = string2.toUpperCase().split('').sort().join('');

  return (str1 === str2) ? true : false;

}

console.log("checkAnagram('Mary', 'Army')", checkAnagram('Silent', 'Listen'));

function anagrams(stringA, stringB) {
  /*First, we remove any non-alphabet character using regex and convert
  convert the strings to lowercase. */
  stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
  stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

  //Get the character map of both strings
  const charMapA = getCharMap(stringA)
  console.log("🚀 ~ file: anagrams.js ~ line 29 ~ anagrams ~ charMapA", charMapA)
  const charMapB = getCharMap(stringB)
  console.log("🚀 ~ file: anagrams.js ~ line 31 ~ anagrams ~ charMapB", charMapB)

  /* Next, we loop through each character in the charMapA, 
  and check if it exists in charMapB and has the same value as
  in charMapA. If it does not, return false */
  for (let char in charMapA) {
    if (charMapA[char] !== charMapB[char]) {
      return false
    }
  }

  return true
}

function getCharMap(string) {
  // We define an empty object that will hold the key - value pairs.
  let charMap = {}

  /*We loop through each character in the string. if the character 
  already exists in the map, increase the value, otherwise add it 
  to the map with a value of 1 */
  for (let char of string) {
    charMap[char] = charMap[char] + 1 || 1
  }
  return charMap
}

console.log("checkAnagram('Mary', 'Army')", anagrams('Silent', 'Listens'));