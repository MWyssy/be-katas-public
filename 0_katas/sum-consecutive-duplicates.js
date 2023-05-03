// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  if (!arr || arr.length === 0) return [];
  const result = [];
  const arrStr = arr.join('');
  const separatedArrStr = arrStr.match(/(\d)\1*/g);

  separatedArrStr.forEach((numberSet) => {
    const sumNums = numberSet
      .split('')
      .reduce((sum, number) => sum + Number(number), 0);
    result.push(sumNums);
  });

  const testResult = [...new Set(result)];

  if (testResult.length !== result.length) {
    return sumConsecutiveDuplicates(result);
  } else {
    return result;
  }
};

module.exports = { sumConsecutiveDuplicates };
