const { sumConsecutiveDuplicates } = require('../sum-consecutive-duplicates');

describe('sumConsecutiveDuplicates()', () => {
  it('returns an array', () => {
    expect(sumConsecutiveDuplicates()).toEqual([]);
  });
  it('returns a new array', () => {
    const input = [1, 2, 3];
    expect(sumConsecutiveDuplicates(input)).not.toBe(input);
  });
  it('returns copy of the array passed as the argument, if there are no duplicate values in the array', () => {
    const input = [1, 2, 3];
    expect(sumConsecutiveDuplicates(input)).toEqual([1, 2, 3]);
  });
  it('returns copy of the array passed as the argument, with a single duplicate value added together', () => {
    const input = [1, 1, 3, 4];
    expect(sumConsecutiveDuplicates(input)).toEqual([2, 3, 4]);
  });
  it('returns copy of the array passed as the argument, with a multiple duplicate values added together', () => {
    const input = [1, 1, 2, 2, 3, 3];
    expect(sumConsecutiveDuplicates(input)).toEqual([2, 4, 6]);
  });
  it("will work with duplicates of the same number that aren't consecutive", () => {
    const input = [1, 1, 3, 1, 1, 1, 1, 5, 1];
    expect(sumConsecutiveDuplicates(input)).toEqual([2, 3, 4, 5, 1]);
  });
  it('will recursively sum consecutive duplicates until there are none left', () => {
    const input = [1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1];
    expect(sumConsecutiveDuplicates(input)).toEqual([8, 2, 3]);
  });
});
