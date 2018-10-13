/* eslint-env mocha */
import { quickSort } from '../quick_sort'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Quick Sort', () => {
  let unsortedArray = [3, 1, 2, 15, 78, 4, 32]
  quickSort(unsortedArray, 0, unsortedArray.length - 1)

  it('Should return an array', () => {
    expect(unsortedArray).to.be.array()
  })

  it('An unsorted array of [3, 1, 2] is sorted', () => {
    expect(unsortedArray).to.be.equalTo([1, 2, 3, 4, 15, 32, 78])
  })
})
