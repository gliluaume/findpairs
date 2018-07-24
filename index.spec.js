'use strict'

const { countIdenticalPairs } = require('.')

describe('test', () => {
  it('can count 1', () => {
    const input = [ 3, 5, 6, 3, 3, 5 ]
    const actual = countIdenticalPairs(input)
    expect(actual).toBe(4)
  })
  it('can count 2', () => {
    const input = [ 3, 3, 3, 3, 3 ]
    const actual = countIdenticalPairs(input)
    expect(actual).toBe(10)
  })
  it('can count 3', () => {
    const input = [ 1, 2, 3, 4, 5 ]
    const actual = countIdenticalPairs(input)
    expect(actual).toBe(0)
  })
  it('can count 4', () => {
    const input = [ ]
    const actual = countIdenticalPairs(input)
    expect(actual).toBe(0)
  })
})
