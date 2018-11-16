import LinkedList from '../doubly-linked-list.js'
const chai = require('chai')
const expect = require('chai').expect

describe('Doubly Linked List', () => {
  let list = null

  beforeEach(() => {
    list = new LinkedList()
    list.add('item1')
    list.add('item2')
  })

  it('returns an object with head, tail, length', () => {
    expect(list).to.be.an('object')
    expect(list).to.have.all.keys('head', 'tail', 'length')
  })

  it('returns an item by an index value', () => {
    expect(list.findByIndex(0)).to.be.include({ data: 'item1' })
    expect(list.findByIndex(1)).to.be.include({ data: 'item2' })
  })

  it('returns an error message if searching outside list', () => {
    expect(list.findByIndex(-1)).to.equal(
      'Invalid Index. Please provide an index between 0 and the length of the list - 1.',
    )
    expect(list.findByIndex(3)).to.equal(
      'Invalid Index. Please provide an index between 0 and the length of the list - 1.',
    )
    expect(list.findByIndex('abc')).to.equal(
      'Invalid Index. Please provide an index between 0 and the length of the list - 1.',
    )
  })

  it('returns length of the list', () => {
    list.add('item3')
    list.add('item4')

    expect(list.length).to.equal(4)
  })

  it('removes an item from the list', () => {
    list.add('item3')

    expect(list.findByIndex(0)).to.be.include({
      data: 'item1',
      prev: null,
    })

    list.removeAtIndex(0)

    expect(list.findByIndex(0)).to.be.include({
      data: 'item2',
      prev: null,
    })
  })
})
