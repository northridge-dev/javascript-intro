# `for...of` Loops

Iterating through arrays with regular `for` loops is ... awkward. We have to
keep track of the index, check the length, increment the index, and use the
current index to get the value we actually want. Ugh.

Any time something feels _that_ painful, there's a good chance there's an easier
way. In this case, it's `for...of` loops.

I've rewritten `multiply` using a `for...of` loop. Isn't that much better?

- `number` refers to the current element -- no need to use an index to get it
  from of the list.
- the condition is much simpler; because we want to look at each element in the
  array, there's really no need to define an ending condition or update a loop
  variable.

## Tests

Your job is to rewrite `add` using a `for...of` loop. It will need to pass the
same tests that your other versions of `add` passed. Use `multiply` as a guide.
