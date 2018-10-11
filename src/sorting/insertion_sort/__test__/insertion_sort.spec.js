/* eslint-env mocha */
import { insertionSort } from '../insertion_sort'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Insertion Sort', () => {
  it('Should return an array', () => {
    expect(insertionSort([3, 1, 2])).to.be.array()
  })

  it('An unsorted array of [3, 1, 2] is sorted', () => {
    expect(insertionSort([3, 1, 2])).to.be.sorted()
  })
})
