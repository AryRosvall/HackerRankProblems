

function countingValleys(steps, path) {


  const hikeArr = path.split("");

  let mountain = 0
  let valley = 0
  let sea = true
  let totalValleys = 0
  let totalMountains = 0
  let goToValley = false
  let goToMountain = false

  for (let i = 0; i < hikeArr.length; i++) {

    hikeArr[i] === 'U' ? mountain++ : valley++;

    //vas hacia un valle
    if (sea && hikeArr[i] === 'D') {
      goToValley = true;
    }

    //vas hacia un montaña
    if (sea && hikeArr[i] === 'U') {
      goToMountain = true;
    }

    if (mountain === valley) {
      sea = true;
    } else {
      sea = false;
    }

    if (goToValley && hikeArr[i] === 'U' && sea) {
      totalValleys++;
    }
    if (goToMountain && hikeArr[i] === 'D' && sea) {
      totalMountains++;
    }
  }
  return [totalValleys, totalMountains]
}

console.log("🚀 ~ file: valleys-mountains.js ~ line 47 ~ countingValleys()", countingValleys(8, "UDDDUDUUUUDDDDDUUUDUUUU"))
