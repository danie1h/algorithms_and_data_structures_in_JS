/* eslint-env mocha */
import LinkedList from '../singly-linked-list.js'
const chai = require('chai')
const expect = require('chai').expect

describe('Singly Linked List', () => {
  it('A new list returns an object with an empty head and length of 0', () => {
    const list = new LinkedList()
    expect(list).to.be.an('object')
    expect(list).to.be.include({ head: null, length: 0 })
  })

  it('returns an item by an index value', () => {
    const list = new LinkedList()
    list.add('item1')
    list.add('item2')

    expect(list.findByIndex(0)).to.be.include({ data: 'item1' })
    expect(list.findByIndex(1)).to.be.include({ data: 'item2' })

    expect(list.findByIndex(-1)).to.equal(
      'Invalid input. Please provide a valid index to search.',
    )
    expect(list.findByIndex(3)).to.equal(
      'Invalid input. Please provide a valid index to search.',
    )
    expect(list.findByIndex('abc')).to.equal(
      'Invalid input. Please provide a valid index to search.',
    )
  })

  it('returns the length of the list', () => {
    const list = new LinkedList()
    list.add('item1')
    list.add('item2')
    list.add('item3')

    expect(list.length).to.equal(3)
  })

  it('An added item is appended to the end of the list', () => {
    const list = new LinkedList()
    list.add('item1')
    list.add('item2')
    list.add('item3')

    const lastListItem = list.findByIndex(list.length - 1)

    expect(lastListItem).to.be.include({ data: 'item3' })
  })

  it('remove an item by an index value', () => {
    const list = new LinkedList()
    list.add('item1')
    list.add('item2')
    list.add('item3')
    list.removeByIndex(1)

    expect(list.length).to.equal(2)
    expect(list.findByIndex(0)).to.be.include({ data: 'item1' })
    expect(list.findByIndex(1)).to.be.include({ data: 'item3' })

    list.removeByIndex(0)
    expect(list.length).to.equal(1)
    expect(list.findByIndex(0)).to.be.include({ data: 'item3' })
  })
})
