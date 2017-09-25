// Algorithm:
// 1. Split the input string by dot and get the two arrays
// 2. Get the max length of the two arrays.
// 3. Pad the shorter array with 0
// 4. Iterate the two arrays at once:
//    - If element is equal, continue to the next iteration
//    - If element1 > element2, return 1
//    - If element1 < element2, return -1
// 5. Return 0 in the end

function compareVersions(version1, version2) {
  if (!version1.match(/^(\d+\.)*\d+$/) || !version2.match(/^(\d+\.)*\d+$/)) {
    return null;
  }
  var versionArr1 = version1.split('.');
  var versionArr2 = version2.split('.');
  var maxLength = Math.max(versionArr1.length, versionArr2.length);
  for (var i = 0; i < maxLength; i += 1) {
    var versionNumber1;
    var versionNumber2;
    if (versionArr1[i] === undefined) {
      versionArr1[i] = 0;
    }
    if (versionArr2[i] === undefined) {
      versionArr2[i] = 0;
    }
    versionNumber1 = parseInt(versionArr1[i], 10);
    versionNumber2 = parseInt(versionArr2[i], 10);
    if (versionNumber1 === versionArr2[i]) {
      continue;
    } else if (versionNumber1 > versionNumber2) {
      return 1;
    } else if (versionNumber1 < versionNumber2) {
      return -1;
    }
  }
  return 0;
}

console.log(compareVersions('0.1', '1') === -1);
console.log(compareVersions('1', '1.0') === 0);
console.log(compareVersions('1.0', '1.1') === -1);
console.log(compareVersions('1.1', '1.2') === -1);
console.log(compareVersions('1.2', '1.2.0.0') === 0);
console.log(compareVersions('1.2.0.0', '1.18.2') === -1);
console.log(compareVersions('1.18.2', '13.37') === -1);
console.log(compareVersions('1.a.2', '1.0.2') === null);
console.log(compareVersions('1..1', '1.0') === null);
console.log(compareVersions('.1', '0.2') === null);
console.log(compareVersions('', '0.2') === null);
