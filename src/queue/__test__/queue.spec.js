/* eslint-env mocha */
import Queue from '../queue.js'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Queue Validations', () => {
  it('A new queue contains an empty list', () => {
    const queue = new Queue()
    expect(queue).to.be.an('object')
    expect(queue.contents()).to.be.an('array').that.is.empty
  })

  it('New items are added to the front of the queue', () => {
    const queue = new Queue()
    queue.add('item1')
    queue.add('item2')

    expect(queue.contents()).to.be.equalTo(['item2', 'item1'])
  })

  it('return the length of the queue', () => {
    const queue = new Queue()
    queue.add('item1')
    queue.add('item2')

    expect(queue.length()).to.equal(2)
  })

  it('returns the next item in the queue', () => {
    const queue = new Queue()
    queue.add('item1')
    queue.add('item2')

    expect(queue.peek()).to.equal('item2')
  })

  it('removes the last added item in queue', () => {
    const queue = new Queue()
    queue.add('item1')
    queue.add('item2')
    queue.dequeue()

    expect(queue.contents()).to.be.equalTo(['item1'])
  })
})
