/* eslint-env mocha */
import { selectionSort } from '../selection_sort'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Selection Sort', () => {
  it('Should return an array', () => {
    expect(selectionSort([3, 1, 2])).to.be.array()
  })

  it('An unsorted array of [3, 1, 2] is sorted', () => {
    expect(selectionSort([3, 1, 2])).to.be.sorted()
  })
})
