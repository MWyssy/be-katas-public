const treatDoggos = require('../treat-doggos.js');

describe('treatDoggos', () => {
  it('returns an array', () => {
    expect(treatDoggos()).toEqual([]);
  });
  it('returns a new array', () => {
    const dogs = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Bobby', age: 6, hasRabies: true },
      { name: 'Roxy', age: 1, hasRabies: true }
    ];
    expect(treatDoggos(dogs)).not.toBe(dogs);
  });
  it('changes the hasRabies value of one dog to false', () => {
    const dogs = [{ name: 'Otis', age: 3, hasRabies: true }];
    expect(treatDoggos(dogs)).toEqual([
      { name: 'Otis', age: 3, hasRabies: false }
    ]);
  });
  it('will work with mutliple dogs', () => {
    const dogs = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Bobby', age: 6, hasRabies: true },
      { name: 'Roxy', age: 1, hasRabies: true }
    ];
    expect(treatDoggos(dogs)).toEqual([
      { name: 'Otis', age: 3, hasRabies: false },
      { name: 'Bobby', age: 6, hasRabies: false },
      { name: 'Roxy', age: 1, hasRabies: false }
    ]);
  });
  it('does not mutate the original array, or any of the original objects', () => {
    const dogs = [
      { name: 'Otis', age: 3, hasRabies: true },
      { name: 'Bobby', age: 6, hasRabies: true },
      { name: 'Roxy', age: 1, hasRabies: true }
    ];
    const copyDogs = [...dogs];
    const copyFirstDog = { ...dogs[0] };

    treatDoggos(dogs);

    expect(dogs).toEqual(copyDogs);
    expect(copyFirstDog).toEqual(copyDogs[0]);
  });
});
