# Features

  * Node Creation: A simple Node class to create list items.
  * List Manipulation: A comprehensive LinkedList class with methods to:  
    
    * Add nodes to the beginning (prepend) and end (append) of the list.
    * Insert (insertAt) and remove (removeAt) nodes at a specific index.
    * Remove the last node (pop).

* List Traversal & Information:

    * Get the total number of nodes (size).
    * Get the first (getHead) and last (getTail) nodes.
    * Find a node at a given index (atIndex).

* Searching:

    * Check if the list contains a certain value (contains).
    * Find the index of a node with a certain value (find).

* Representation:

    * Generate a string representation of the list (toString).
 

# Usage
Below is an example of how to instantiate and use the LinkedList class.

```
// First, define the Node and LinkedList classes (as provided in the code)

// Create a new list instance
const list = new LinkedList();

// 1. Append nodes to the end
list.append('B'); // List: B
list.append('C'); // List: B -> C

// 2. Prepend a node to the start
list.prepend('A'); // List: A -> B -> C

// 3. Get the size, head, and tail
console.log('Size:', list.size()); // Size: 3
console.log('Head:', list.getHead().value); // Head: A
console.log('Tail:', list.getTail().value); // Tail: C

// 4. Insert a node at a specific index
list.insertAt('X', 1); // Insert 'X' at index 1
// List is now: A -> X -> B -> C

// 5. Print the list as a string
list.toString(); // ( A ) -> ( X ) -> ( B ) -> ( C ) -> null

// 6. Remove a node at a specific index
list.removeAt(2); // Remove the node at index 2 ('B')
// List is now: A -> X -> C

// 7. Remove the last node
list.pop();
// List is now: A -> X

// 8. Check if a value exists
console.log(list.contains('X')); // true
console.log(list.contains('Z')); // false

// 9. Find the index of a value
console.log(list.find('A')); // 0
```


# LinkedList Methods

* **append(value):** Adds a new node containing value to the end of the list.
* **prepend(value):** Adds a new node containing value to the start of the list.
* **size():** Returns the total number of nodes in the list.
* **getHead():** Returns the first node in the list.
* **getTail():** Returns the last node in the list.
* **atIndex(index):** Returns the node at the given index.
* **pop():** Removes the last element from the list.
* **contains(value):** Returns true if the passed-in value is in the list and otherwise returns false.
* **find(value):** Returns the index of the node containing value, or null if not found.
* **toString():** Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null.
* **insertAt(value, index):** Inserts a new node with the provided value at the given index.
* **removeAt(index):** Removes the node at the given index.
