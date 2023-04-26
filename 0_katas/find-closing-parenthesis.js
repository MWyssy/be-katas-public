// Please do not change the name of this function
const findClosingParenthesis = (str, n) => {
  let index = -1
  
  function getIndex(string, search, index) {
    return string.split(search, index).join(search).length
  }

  if (/[()]/g.test(str)) {
    if (n <= 1) {
      index = str.indexOf(')');
    } else {
      index = getIndex(str, ')', n)
    }
  };

  return index
}

module.exports = { findClosingParenthesis }
