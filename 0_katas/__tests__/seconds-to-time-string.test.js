const { secondsToTimeString } = require('../seconds-to-time-string');

describe('secondsToTimeString()', () => {
  it('Returns a string', () => {
    expect(secondsToTimeString()).toBe('')
  });
  it('Returns "1 second" when passed the number 1', () => {
    expect(secondsToTimeString(1)).toBe('1 second')
  });
  it('Returns the plural "seconds", when passed a number larger than 1', () => {
    expect(secondsToTimeString(5)).toBe('5 seconds')
  });
  it('Can account for minutes', () => {
    expect(secondsToTimeString(60)).toBe('1 minute')
  });
  it('Can account for hours', () => {
    expect(secondsToTimeString(3610)).toBe('1 hour, and 10 seconds')
  });
  it('Can account for days', () => {
    expect(secondsToTimeString(361000)).toBe('4 days, 4 hours, 16 minutes, and 40 seconds')
  });
  it('Can account for weeks', () => {
    expect(secondsToTimeString(761000)).toBe('1 week, 1 day, 19 hours, 23 minutes, and 20 seconds')
  });
  it('Can account for months', () => {
    expect(secondsToTimeString(7610010)).toBe('2 months, 3 weeks, 6 days, 5 hours, 53 minutes, and 30 seconds')
  });
  it('Can account for years', () => {
    expect(secondsToTimeString(76100101)).toBe('2 years, 4 months, 4 weeks, 1 day, 2 hours, 55 minutes, and 1 second')
  });
});
