const createRef = (arr, key, value) => {
  if (!arr || arr.length === 0) return {};
  const result = {};

  if (!key && !value) {
    key = 'name';
    value = 'phoneNumber';
  }

  arr.forEach((person) => {
    result[person[key]] = person[value];
  });

  return result;
};

module.exports = createRef;
