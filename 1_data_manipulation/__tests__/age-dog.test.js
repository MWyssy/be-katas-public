const ageDog = require('../age-dog.js');

describe('ageDog', () => {
  it('returns an object', () => {
    expect(ageDog()).toEqual({});
  });
  it('returns a new object', () => {
    const input = { name: 'Otis', age: 1 };
    expect(ageDog(input)).not.toBe(input);
  });
  it("increments the dog's age by one when the second argument is a one", () => {
    const input = { name: 'Otis', age: 1 };
    const expectedOutput = { name: 'Otis', age: 2 };
    expect(ageDog(input, 1)).toEqual(expectedOutput);
  });
  it("increments the dog's age by the number passed as the second argument", () => {
    const input = { name: 'Otis', age: 1 };
    const expectedOutput = { name: 'Otis', age: 5 };
    expect(ageDog(input, 4)).toEqual(expectedOutput);
  });
  it('does not mutate the original object', () => {
    const input = { name: 'Otis', age: 1 };
    const copyInput = { ...input };
    ageDog(input, 4);
    expect(input).toEqual(copyInput);
  });
});
