# Returning Values

Most functions _return_ some value (or values). In fact, you've already written
several functions with return values:

- `giveMeFive` always returned the same value, `5`
- `subtract` returned the result of a calculation

In the starter code, I've defined a function, `capitalize`. It creates a few
variables, transforms, slices, and concatenates strings. (Don't worry if the
code doesn't make perfect sense. The name of the function should give you a clue
about what it does.)

Try running it. Is the output what you expected?

Notice what the function is missing: there's no `return` statement. And when a
function does not specify what value to return, it will (implicitly, by default)
return `undefined`.

We can choose to return any value we want. Let's return the value we stored as
`firstLetter`. Add this line to the end of the function body (but still within
the curly braces):

```javascript
return firstLetter;
```

Now run the code. Look! We got back exactly what we told the function to return,
the first letter of the input string.

Nothing stops us from returning `firstLetter`, but that's pretty obviously not
what the function is designed to return. We want to return the capitalized word.

So now update the code to return `capitalized` instead:

```javascript
return capitalized;
```

Run the code one more time. That's better, right? If you want, change the input
string. The function should still return the input string capitalized. You've
created a function that can do useful work on any string you give it. Pretty
cool.

## Tests

The test here is simple. If you followed along above and `capitalize` is
returning the capitalized input, the tests should pass.
