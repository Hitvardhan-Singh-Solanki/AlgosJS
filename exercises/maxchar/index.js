// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
    strMap[char] = strMap[char] + 1 || 1;
  }

  for (let char in strMap) {
    if (strMap[char] > max) {
      max = strMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;
