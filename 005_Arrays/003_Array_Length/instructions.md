# Array Length

Arrays have a `length` property that tells you how many elements it holds.
Because array indexes start at 0, the length will always be 1 greater than the
last index.

Here's an example:

```javascript
let list = [0, 1, 2, 3, 4];
list.length; // 5
```

An empty list has a length of 0:

```javascript
let emptyList = [];
emptyList.length; // 0
```

## Tests

Create two variables, `shorterList` and `longerList`. `shorterList` should have
a length that is 3 less than the length of `longerList`.
