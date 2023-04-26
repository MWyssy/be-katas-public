// Please do not change the name of this function
const counterIntelligence = (str) => {
  if (!str || str.length === 0) return '';

  const strArr = str.split('');

  const lastLetter = str[str.length - 1];
  let numberShifted = lastLetter.charCodeAt(0) - 'X'.charCodeAt(0);
  
  let decodedMessage = strArr.map((letter) => {
    if (/[A-Z]/i.test(letter)) {
      let decodedLetter = String.fromCharCode((letter.charCodeAt(0) - numberShifted))
      if (decodedLetter.charCodeAt(0) > 90 && numberShifted < 0) {
        let leftToShift = decodedLetter.charCodeAt(0) - 91;
        decodedLetter = String.fromCharCode(65 + leftToShift)
      } else if (decodedLetter.charCodeAt(0) < 65 && numberShifted > 0) {
        let leftToShift = decodedLetter.charCodeAt(0) - 65
        decodedLetter = String.fromCharCode(90 + leftToShift)
      }
      return decodedLetter
    }
    return letter
  }).join('');

  return `"${decodedMessage}" - the string has been shifted by ${numberShifted}.`
};

module.exports = { counterIntelligence };
