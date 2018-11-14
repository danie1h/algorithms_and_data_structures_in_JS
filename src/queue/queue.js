function Queue() {
  let _list = [];

  this.add = (data) => {
    _list.unshift(data);
  }

  this.dequeue = () => {
    _list.shift();
  }

  this.contents = () => {
    return _list;
  }

  this.peek = () => {
    return _list[0];
  }

  this.length = () => {
    return _list.length;
  }
}

export default Queue
