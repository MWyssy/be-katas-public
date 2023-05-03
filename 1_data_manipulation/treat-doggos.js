const treatDoggos = (dogs) => {
  if (!dogs || dogs.length === 0) return [];
  const result = [...dogs];

  return result.map((dog) => {
    const copyDog = { ...dog };
    copyDog.hasRabies = false;
    return copyDog;
  });
};

module.exports = treatDoggos;
