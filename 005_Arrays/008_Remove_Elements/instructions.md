# Remove Elements from an Array

You can also remove elements from an array.

`pop` removes the **last** element. It returns the element that was removed.

```javascript
let pets = ["dog", "cat", "fish"];
let lastElement = pets.pop();
lastElement; // "fish"
pets; // ["dog", "cat"]
```

`shift` removes the **first** element. Like `pop`, it returns the element that
was removed.

```javascript
let firstElement = pets.shift();
lastElement; // "dog"
pets; // ["cat"]
```

## Tests

Write a function called `removeLast`. It will take a single argument, `arr`, an
array. It should remove the last element and **return the element it removed**.
