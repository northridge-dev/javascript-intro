# Add Elements to an Array

Sooner or later, you'll need to add elements to an existing array.

To add elements to the **end** of an array, use the `push` method:

```javascript
let pets = ["dog", "cat"];
pets.push("fish");
pets; // ["dog", "cat", "fish"]

pets.push("iguana", "parrot");
pets; // ["dog", "cat", "fish", "iguana", "parrot"]
```

To add elements to the **beginning** of an array, use the `unshift` method:

```javascript
pets.unshift("hamster");
pets; // ["hamster", "dog", "cat", "fish", "iguana", "parrot"]
```

## Tests

Write a function called `addElements`. It will take 3 arguments (in this order):

- `arr` - an array
- `first` - a value to add to the front of the array
- `last` - a value to add to the end of the array

`addElements` should return the enlarged array.
