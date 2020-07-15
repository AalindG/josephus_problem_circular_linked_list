const R = require('ramda')

class LinkedList {
  node = null;
  count = 0;
  head = null;

  append(value) {
    var node = {
      value: value,
      next: this.head
    };//circular node
    if (this.count === 0) {
      this.head = {};
      this.head.value = value;
      this.head.next = this.head;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.count++;
  }

  getSize = function () {
    console.log(this);
  };

  close = function () {
    var ptr = this.head;
    while (ptr.next != null) {
      ptr = ptr.next;
    }
    ptr.next = this.head;
  };

  createNode = function (value) {
    var node = {};
    node.value = value;
    node.next = null;
    return node;
  };

  find(val) {
    let thisNode = this.head;
    while (thisNode) {
      if (thisNode.next.value === this.head.value) {
        return null;
      }
      if (thisNode.value === val) {
        return thisNode;
      }
      thisNode = thisNode.next;
    }
    return thisNode;
  }

  removeFromHead() {
    if (this.length === 0) {
      return undefined;
    }

    const value = this.head.value;
    this.head = this.head.next;
    this.count--;

    return value;
  }

  remove(val) {
    if (this.count === 0) {
      return undefined;
    }

    if (this.head.value === val) {
      this.removeFromHead();
      return this;
    }

    let previousNode = this.head;
    let thisNode = previousNode.next;

    while (thisNode) {
      if (thisNode.next.value === this.head.value) {
        thisNode === null;
        break;
      }
      if (thisNode.value === val) {
        break;
      }

      previousNode = thisNode;
      thisNode = thisNode.next;
    }

    if (thisNode === null) {
      return undefined;
    }

    previousNode.next = thisNode.next;
    this.count--;
    return this;
  }

  kill1() {
    let thisNode = this.head;
    while (thisNode.next) {
      if (!thisNode.next) break;
      // console.log('thisNode.value: ', thisNode.value);
      // console.log('.value: ', thisNode.next.value);
      if (thisNode.value === thisNode.next.value) {
        return thisNode.value;
      }
      let _val = thisNode.next.value;
      let _next = thisNode.next.next;
      // console.log('next.value: ', thisNode.next.value);
      this.remove(_val);
      // console.log(thisNode);
      thisNode.next = _next;
      thisNode = thisNode.next;
    }
  }

}


function main() {
  const list1 = new LinkedList();

  R.map(el => {
    list1.append(el)
  })(R.range(1, 78))

  console.log(list1);
  console.log(list1.find(29));
  console.log(list1.kill1());

}

main()