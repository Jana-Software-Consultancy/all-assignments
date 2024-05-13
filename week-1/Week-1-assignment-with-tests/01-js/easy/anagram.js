function sort(str) {
  var array = str.split(""); // "India" => ["I", "n", "d", "i", "a"]
  array = array.sort(); //["I", "n", "d", "i", "a"] => ["a", "d", "i", "I", "n"]
  var sortedString = array.join(""); // ["a", "d", "i", "I", "n"] => "andiI"
  return sortedString;
}

function isAnagram(str1, str2) {
  var str1ToLowerCase = str1.toLowerCase();
  var str2ToLowerCase = str2.toLowerCase();
  if (sort(str1ToLowerCase) == sort(str2ToLowerCase)) {
    return true;
  } else {
    return false;
  }
}

module.exports = isAnagram;
