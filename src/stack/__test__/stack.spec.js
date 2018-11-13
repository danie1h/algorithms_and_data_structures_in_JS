/* eslint-env mocha */
import { Stack } from '../stack.js'
const chai = require('chai')
const expect = require('chai').expect
const assertArrays = require('chai-arrays')
chai.use(assertArrays)

describe('Stack Validations', () => {
  it('A new instance of stack is an object with an empty list', () => {
    const stack = new Stack()
    expect(stack).to.be.an('object')
    expect(stack.list).to.be.an('array').that.is.empty
  })


  it('A new item will be created at the end of the stack', () => {
    const stack = new Stack()
    stack.add('item1')
    stack.add('item2')

    expect(stack.list).to.be.ofSize(2)
    expect(stack.list).to.be.equalTo(['item1', 'item2'])
  })

  it('The top item will be removed to the stack', () => {
    const stack = new Stack()
    stack.add('item1')
    stack.add('item2')
    stack.remove()

    expect(stack.list).to.be.ofSize(1)
    expect(stack.list).to.be.equalTo(['item1'])
  })

  it('The item at the top of the stack can been viewed', () => {
    const stack = new Stack()
    stack.add('item1')
    stack.add('item2')
    const itemAtTopOfStack = stack.peek()

    expect(itemAtTopOfStack).to.equal('item2')
  })
})
