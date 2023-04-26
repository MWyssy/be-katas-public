const { findClosingParenthesis } = require('../find-closing-parenthesis')

describe('findClosingParenthesis()', () => {
  it('Returns a number', () => {
    expect(findClosingParenthesis('')).toBe(-1)
  })
  it('Returns a -1 when there are no parentheses present', () => {
    expect(findClosingParenthesis('Hello!')).toBe(-1)
  })
  it('Returns the index of the closing parenthesis when there is no second argument, or the argument is 1', () => {
    expect(findClosingParenthesis('(Hello!)', 1)).toBe(7)
  })
  it('Returns the index of the first closing parenthesis when there is no second argument, or the argument is 1, if there are mutliple parentheses', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else).', 1)).toBe(13)
  })
  it('Returns the index of the closing bracket of the nth parentheses based on the second argument given', () => {
    expect(findClosingParenthesis('Hello, (world). (Something Else).', 2)).toBe(31)
  })
  it('Works with more than two pairs of parentheses', () => {
    expect(findClosingParenthesis('(Hello) (world) (!).', 3)).toBe(18)
  })
})
