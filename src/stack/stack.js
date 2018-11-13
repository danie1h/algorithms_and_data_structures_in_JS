export function Stack() {
    this.list = []
  }

  Stack.prototype.add = function(data) {
    this.list.push(data)
  }

  Stack.prototype.remove = function() {
    this.list.pop()
  }

  Stack.prototype.peek = function() {
    return this.list[this.list.length - 1]
  }
