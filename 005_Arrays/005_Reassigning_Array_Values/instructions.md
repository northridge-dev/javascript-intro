# Reassigning Array Values

We can also use index notation to reassign values in a array. For example, say
you want to change the element at index 2:

```javascript
let list ["Dog", "Cat", "Bird", "Fish"];
list[2] = "Turtle";
list // ["Dog", "Cat", "Turtle", "Fish"]
```

## Tests

Write a function named `topSecret`. It should take two inputs (in this order):

- an array
- an index

It should return the same array, but the element at the input index should be
replaced with the string `"CLASSIFIED"`.
