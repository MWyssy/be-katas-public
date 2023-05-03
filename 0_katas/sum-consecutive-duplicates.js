// Please do not change the name of this function
const sumConsecutiveDuplicates = (arr) => {
  let count = 0
  return arr.filter((number, index, array) => {
    if (number === array[index - 1]) {
      count += (number * 2)
      return count
    }
  })
};

module.exports = { sumConsecutiveDuplicates };
