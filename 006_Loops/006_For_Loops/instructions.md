# `for` Loop Range Generator

In addition to `while` loops, JavaScript also has `for` loops. In most common
cases, `for` loops and `while` loops can be used interchangeably (though
sometimes one is more convenient than the other). For example, I rewrote our
range generator using a `for` loop. Run it and convince yourself that it
produces the same result.

## Elements of a `for` Loop

The condition in a `for` loop has three parts, each separated by a semicolon:

1. Initialize a loop variable (here: `nextVal`)
2. Define an ending condition (here: `nextVal <= endVal`)
3. Update the loop variable (here: `nextVal = nextVal + 1`)

When we wrote the `while` loop, we had to initialize a loop variable _before_
the `while` loop and update it _inside_ the `while` loop. The `for` loop just
moves those two steps into the `for` loop's condition.

## Tests

In a previous challenge, you updated `makeRange` to allow for a `stepSize`. For
example, `makeRange(1, 10, 2)` would return `[1, 3, 5, 7, 9]`.

To pass the tests, update the function signature and the `for` loop to allow for
different step sizes.
