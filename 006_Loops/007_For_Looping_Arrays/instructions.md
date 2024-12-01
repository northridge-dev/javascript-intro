# Iterating through Arrays with `for` Loops

In the last challenge, we used a `for` loop to build up an array. Often, you'll
want _iterate_ through an already-existing array. (_Iterate_ here just means to
work with each value, one at a time, in order.)

Let's rewrite our `add` function to see how to use a `for` loop to do so.

The trick is defining the loop's condition. We want to start at the zeroth
index, then the first index, then the second, and so on until we reach the last
index. To do so, here's what the condition should do:

- Initialize a loop variable: `let index = 0`.
- Define an ending condition: `index < list.length`.
- Update the loop variable: `index = index + 1`.

Now that we know how to write the condition, let's write the whole function:

1. Create a variable, `sum`, and set it to `0`.
2. Create a `for` loop. See above for how to structure its condition.
3. Inside the loop body, add `list[index]` to `sum` and store the result as
   `sum`.
4. Outside the loop, return `sum`.
