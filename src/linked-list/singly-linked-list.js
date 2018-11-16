function Node(data) {
  this.data = data
  this.next = null
}

function LinkedList() {
  this.head = null
  this.length = 0
}

LinkedList.prototype.add = function(data) {
  const addedNode = new Node(data)

  if (this.length === 0) {
    this.head = addedNode
  } else {
    let currentNode = this.head

    while (currentNode.next !== null) {
      currentNode = currentNode.next
    }

    currentNode.next = addedNode
  }
  this.length++
}

LinkedList.prototype.length = function() {
  return this.length
}

LinkedList.prototype.findByIndex = function(index) {
  if (typeof index !== 'number' || index < 0 || index >= this.length) {
    return 'Invalid input. Please provide a valid index to search.'
  } else {
    if (index === 0) {
      return this.head
    } else {
      let nodeOfIndex = this.head.next
      for (let i = 1; i < index; i++) {
        nodeOfIndex = nodeOfIndex.next
      }

      return nodeOfIndex
    }
  }
}

LinkedList.prototype.removeByIndex = function(index) {
  if (typeof index !== 'number' || index < 0 || index >= this.length) {
    return 'Invalid input. Please provide a valid index in order to remove an item.'
  } else {
    if (index === 0) {
      this.head = this.head.next
    } else {
      let nodeOfIndex = this.head.next
      let nodeBeforeIndex = this.head
      for (let i = 1; i < index; i++) {
        nodeOfIndex = nodeOfIndex.next
        nodeBeforeIndex = nodeBeforeIndex.next
      }

      nodeBeforeIndex.next = nodeOfIndex.next
    }
    this.length--
  }
}

export default LinkedList
