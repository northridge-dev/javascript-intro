# Last Element in an Array

Getting the first element in an array is easy:

```javascript
let list = ["a", "b", "c", "d", "e"];
let firstElement = list[0];
```

No matter how long the array is, the first element is always at index 0. Getting
the last element isn't as easy. But we can use what we just learned about
finding the length of an array to get the last element:

```javascript
let list = ["a", "b", "c", "d", "e"];
let lastElement = list[list.length - 1];
```

Instead of a static number, like 0, we calculate the last index by subtracting 1
from the length of the array.

## Tests

Define a function called `getLastElement` that takes an array as an argument and
returns the last element of the array.
