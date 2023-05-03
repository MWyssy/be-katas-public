const { supermarketQueue } = require('../supermarket-queue');

describe('supermarketQueue()', () => {
  it('returns a number', () => {
    expect(supermarketQueue()).toBe(0);
  });
  it('returns the sum of all the numbers in the array, when the second argument is one.', () => {
    expect(supermarketQueue([2, 2, 2], 1)).toBe(6);
  });
  it('returns the highest value in the array is the second argument is equal to the number of customers', () => {
    expect(supermarketQueue([2, 10], 2)).toBe(10);
  });
  it('When there are fewer tills than customers, the customers will use a till in order of where they are in the array, and the result will be the length of time until all tills become free again.', () => {
    expect(supermarketQueue([2, 2, 2], 2)).toBe(4);
    expect(supermarketQueue([2, 3, 10], 2)).toBe(12);
    expect(supermarketQueue([2, 3, 10, 4, 2, 5, 1], 2)).toBe(14);
  });
});
