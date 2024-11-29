# Search within an Array

You've used `indexOf` to search for a substring within a string. Arrays also
have an `indexOf` method, and it works the same way:

```javascript
let ingredients = ["flour", "sugar", "eggs", "butter"];
ingredients.indexOf("eggs"); // 2
ingredients.indexOf("salt"); // -1
```

`indexOf` returns the **first** index where the search value is found. If you
want to find the **last** index where the search value is found, you can use
`lastIndexOf`:

```javascript
let cards = ["hearts", "diamonds", "clubs", "spades", "hearts"];
cards.indexOf("hearts"); // 0
cards.lastIndexOf("hearts"); // 4
```

## Tests

Write a function called `exactlyOnce` that takes an array and a value. It should
return `true` if the value appears in the array exactly once, but `false` if it
appears more than once or not at all.
