const ageDog = (dog, num) => {
  if (!dog) return {};
  const result = { ...dog };
  result.age += num;
  return result;
};

module.exports = ageDog;
