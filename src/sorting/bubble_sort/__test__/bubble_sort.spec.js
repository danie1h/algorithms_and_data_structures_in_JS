/* eslint-env mocha */
import { bubbleSort } from '../bubble_sort'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Bubble Sort', () => {
  it('Should return an array', () => {
    expect(bubbleSort([3, 1, 2])).to.be.array()
  })

  it('An unsorted array of [3, 1, 2] is sorted', () => {
    expect(bubbleSort([3, 1, 2])).to.be.sorted()
  })
})
