// Defines the blueprint for a single node in the linked list.
class createNode {
  // The constructor is called when a new node is created.
  constructor(value, next) {
    // 'value' holds the data for this node.
    this.value = value;
    // 'next' is a pointer to the next node in the list. It's null or undefined if this is the last node.
    this.next = next;
  }
}

// Defines the linked list itself.
// Note: A linked list *has* nodes, it isn't a special type of node, so 'extends createNode' is conceptually incorrect.
class linkedList extends createNode {
  // The constructor for the linked list.
  constructor(node) {
    // super() is required because this class extends another.
    super();
    // This 'node' property seems unused.
    this.node = node;
    // 'head' is a pointer to the very first node in the list. It's undefined if the list is empty.
    this.head;
  }

  // Checks if the list is empty.
  isEmpty() {
    // If there is no head, the function exits early.
    if (!this.head) {
      return;
    }
    // Checks if the head is undefined.
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
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Logs the entire head node object.
    console.log(this.head);
  }

  // Recursively finds and returns the last node (the tail) of the list.
  getTail(currentNode = this.head) {
    // If the list is empty, do nothing.
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
    // Sets the list's head to be the new node.
    this.head = node;
    return;
  }

  // Adds a new node to the end of the list.
  append(name) {
    // Creates a new node with the provided value.
    let node = new createNode(name);
    // If the list is empty, the new node becomes the head.
    if (this.head == undefined) {
      this.prepend(node);
    } else {
      // Start at the head.
      let currentNode = this.head;
      // Loop until the end of the list is found.
      while (currentNode.next != undefined) {
        currentNode = currentNode.next;
      }
      // Set the last node's 'next' pointer to the new node.
      currentNode.next = node;
      return;
    }
  }

  // Recursively finds the node at a given index.
  atIndex(index, currentNode = this.head, currentIndex = 0) {
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Base case: If the current index matches the target index, log and return the node's value.
    if (currentIndex == index) {
      console.log(currentNode.value);
      return currentNode.value;
    } else {
      // Recursive step: Increment the index, move to the next node, and call the function again.
      currentIndex++;
      currentNode = currentNode.next;
      this.atIndex(index, currentNode, currentIndex);
    }
  }

  // Recursively removes the last node from the list.
  pop(previousNode = undefined, currentNode = this.head) {
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Base case: If the current node is the last one, remove it by setting the previous node's 'next' to undefined.
    if (currentNode.next == undefined) {
      previousNode.next = undefined;
      return;
    } else {
      // Recursive step: Move both pointers forward and call the function again.
      previousNode = currentNode;
      currentNode = currentNode.next;
      return this.pop(previousNode, currentNode);
    }
  }

  // Recursively checks if the list contains a node with a specific value.
  contains(value, currentNode = this.head) {
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Base case: If the current node's value matches, log true and return.
    if (currentNode.value == value) {
      console.log(true);
      return true;
    } else {
      // Recursive step: Move to the next node and call the function again.
      currentNode = currentNode.next;
      return this.contains(value, currentNode);
    }
  }

  // Recursively finds the index of a node with a specific value.
  find(value, currentNode = this.head, currentIndex = 0) {
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Base case: If the current node's value matches, log the index and return it.
    if (currentNode.value == value) {
      console.log(currentIndex);
      return currentIndex;
    } else {
      // Recursive step: Increment the index, move to the next node, and call the function again.
      currentIndex++;
      currentNode = currentNode.next;
      return this.find(value, currentNode, currentIndex);
    }
  }

  // Recursively creates a string representation of the linked list.
  toString(currentNode = this.head, linkedString = '') {
    // If the list is empty, do nothing.
    if (!this.head) {
      return;
    }
    // Base case: If this is the last node, add its value to the string and log the result.
    if (currentNode.next == undefined) {
      linkedString += ` ${currentNode.value}`;
      console.log(linkedString);
      return linkedString;
    } else {
      // Recursive step: Add the current node's value and an arrow to the string, then continue.
      linkedString += ` ${currentNode.value} ->`;
      currentNode = currentNode.next;
      this.toString(currentNode, linkedString);
    }
  }

  // Inserts a new node with a given value at a specific index.
  insertAt(value, index) {
    // If the index is out of bounds, do nothing. (Assumes a size() method exists).
    if (index > this.size()) return;

    // If index is 0, use the existing prepend method.
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
    // If the list is empty or the index is out of bounds, do nothing. (Assumes a size() method exists).
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
