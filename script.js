// Defines the blueprint for a single node in the linked list.
class createNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// Defines the linked list itself.
class linkedList {
  constructor(node) {
    super();
    this.head;
  }

  // Checks if the list is empty.
  isEmpty() {
    // If there is no head, the function exits early.
    if (!this.head) {
      return;
    }
    if (this.head == undefined) {
      console.log('the link is empty');
      return;
    } else {
      console.log('the list is not empty');
      return;
    }
  }

  // Gets the first node (the head) of the list.
  getHead() {
    if (!this.head) {
      return;
    }
    console.log(this.head);
  }

  // Recursively finds and returns the last node (the tail) of the list.
  getTail(currentNode = this.head) {
    if (!this.head) {
      return;
    }
    // Base case: If the current node's 'next' pointer is empty, it's the tail.
    if (currentNode.next == undefined) {
      console.log(currentNode.value);
      return currentNode;
    } else {
      // Recursive step: Move to the next node and call the function again.
      currentNode = currentNode.next;
      return this.getTail(currentNode);
    }
  }

  // Adds a new node to the beginning of the list.
  prepend(node) {
    this.head = node;
    return;
  }

  // Adds a new node to the end of the list.
  append(name) {
    let node = new createNode(name);
    if (this.head == undefined) {
      this.prepend(node);
    } else {
      let currentNode = this.head;
      while (currentNode.next != undefined) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
      return;
    }
  }

  // Recursively finds the node at a given index.
  atIndex(index, currentNode = this.head, currentIndex = 0) {
    if (!this.head) {
      return;
    }
    if (currentIndex == index) {
      console.log(currentNode.value);
      return currentNode.value;
    } else {
      currentIndex++;
      currentNode = currentNode.next;
      this.atIndex(index, currentNode, currentIndex);
    }
  }

  // Recursively removes the last node from the list.
  pop(previousNode = undefined, currentNode = this.head) {
    if (!this.head) {
      return;
    }
    if (currentNode.next == undefined) {
      previousNode.next = undefined;
      return;
    } else {
      previousNode = currentNode;
      currentNode = currentNode.next;
      return this.pop(previousNode, currentNode);
    }
  }

  // Recursively checks if the list contains a node with a specific value.
  contains(value, currentNode = this.head) {
    if (!this.head) {
      return;
    }
    if (currentNode.value == value) {
      console.log(true);
      return true;
    } else {
      currentNode = currentNode.next;
      return this.contains(value, currentNode);
    }
  }

  // Recursively finds the index of a node with a specific value.
  find(value, currentNode = this.head, currentIndex = 0) {
    if (!this.head) {
      return;
    }
    if (currentNode.value == value) {
      console.log(currentIndex);
      return currentIndex;
    } else {
      currentIndex++;
      currentNode = currentNode.next;
      return this.find(value, currentNode, currentIndex);
    }
  }

  // Recursively creates a string representation of the linked list.
  toString(currentNode = this.head, linkedString = '') {
    if (!this.head) {
      return;
    }
    if (currentNode.next == undefined) {
      linkedString += ` ${currentNode.value}`;
      console.log(linkedString);
      return linkedString;
    } else {
      linkedString += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
      this.toString(currentNode, linkedString);
    }
  }

  // Inserts a new node with a given value at a specific index.
  insertAt(value, index) {
    if (index > this.size()) return;
    
    if (index === 0) {
      this.prepend(new createNode(value, this.head));
      return;
    }

    // Create the new node to be inserted.
    const newNode = new createNode(value);
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    // Loop through the list until the target index is reached.
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Link the new node into the list.
    newNode.next = currentNode;
    previousNode.next = newNode;
  }

  // Removes the node at a given index.
  removeAt(index) {
    if (!this.head || index >= this.size()) return;

    // If removing the first node (the head).
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    // Loop through the list until the target index is reached.
    while (currentIndex < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      currentIndex++;
    }

    // Remove the node by making the previous node point to the next node, skipping the current one.
    previousNode.next = currentNode.next;
  }
}

// Creates a new, empty instance of the linkedList class.
const list = new linkedList();

list.append('dog');
