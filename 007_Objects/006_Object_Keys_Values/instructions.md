# Listing Object Keys and Values

If you know what keys an object has, it's easy to get the corresponding values.
But you don't always know what keys an object has. Here's how you'd get a list:

```javascript
const scrabblePoints = { t: 1, j: 8, k: 5, q: 10 };
Object.keys(scrabblePoints);
// ['t', 'j', 'k', 'q']
```

You could use that list of keys to get a list of all the values. But JavaScript
has a more convenient method:

```javascript
Object.values(scrabblePoints);
// [1, 8, 5, 10]
```

You can even get a list of key-value pairs:

```javascript
Object.entries(scrabblePoints);
// [['t', 1], ['j', 8], ['k', 5], ['q', 10]]
```

## Tests

1. Write a function -- `countKeys` -- that takes an object as its only input and
   return the number of keys it contains. For example, if you passed to
   `countKeys` the `scrabblePoints` object defined above, it should return `4`.
2. Write another function -- `countCharacters` -- that takes an object as its
   only input and returns the total number of characters in all its **string**
   values. Hint: test if a value is a string like so:
   `if (typeof value === 'string')`.
