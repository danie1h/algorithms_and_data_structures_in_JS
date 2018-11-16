/**
 * Constructor represents an instance of a node
 *
 * @constructor
 * @param {*} data - Data stored on the node
 */
function Node(data) {
  this.data = data
  this.next = null
  this.prev = null
}

/**
 * Constructor represents an instance of a double linked list
 *
 * @constructor
 */
function LinkedList() {
  this.head = null
  this.tail = null
  this.length = 0
}

/**
 * Adds a new node in the list
 *
 * @function
 * @this {LinkedList}
 * @param {*} data - Data stored on the node
 */
LinkedList.prototype.add = function(data) {
  const newNode = new Node(data)

  if (this.length === 0) {
    this.head = newNode
    this.tail = newNode
  } else {
    let currentNode = this.head
    let previousNode = currentNode

    for (let i = 1; i < this.length; i++) {
      currentNode = currentNode.next
    }

    currentNode.next = newNode
    newNode.prev = currentNode
    this.tail = newNode
  }
  this.length++
}

/**
 * Finds a node in the list
 *
 * @function
 * @this {LinkedList}
 * @param {number} index - Index of the node to be returned
 * @return {object} - The node of the provided index
 */
LinkedList.prototype.findByIndex = function(index) {
  if (typeof index !== 'number' || index < 0 || index >= this.length) {
    return 'Invalid Index. Please provide an index between 0 and the length of the list - 1.'
  } else {
    if (index === 0) {
      return this.head
    } else if (index === this.length - 1) {
      return this.tail
    } else {
      let currentNode = this.head
      let counter = 1

      while (counter !== index) {
        currentNode = currentNode.next
        counter++
      }

      return currentNode.next
    }
  }
}

/**
 * Finds length of list
 *
 * @function
 * @this {LinkedList}
 * @return {string} - Length of list
 */
LinkedList.prototype.length = function() {
  return this.length
}

/**
 * Removes a node in the list
 *
 * @function
 * @this {LinkedList}
 * @param {number} index - Index of the node to be removed
 */
LinkedList.prototype.removeAtIndex = function(index) {
  if (typeof index !== 'number' || index < 0 || index >= this.length) {
    return 'Invalid Index. Please provide an index between 0 and the length of the list - 1.'
  } else {
    if (index === 0 && this.length === 1) {
      this.head = null
      this.tail = null
    } else if (index === 0) {
      this.head = this.head.next
      this.head.prev = null
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev
      this.tail.next = null
    } else {
      let currentNode = this.head
      let counter = 1

      while (counter !== index) {
        currentNode = currentNode.next
        counter++
      }

      let nodeBeforeDeletedNode = currentNode.prev
      let nodeAfterDeletedNode = currentNode.next

      nodeBeforeDeletedNode.next = currentNode.next
      nodeAfterDeletedNode.prev = nodeBeforeDeletedNode
    }
    this.length--
  }
}

export default LinkedList
