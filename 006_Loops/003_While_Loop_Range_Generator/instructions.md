# While Loop Range Generator

Let's create together another useful function using a while loop: a range
generator. Here by "range" I just mean an array of consecutive integers, e.g.
`[3, 4, 5, 6, 7]`.

Create a function called `makeRange`. It should take two arguments called
`start` and `end`. In the function body:

1. Create a variable called `range` and set it to an empty array:
   `let range = []`.
2. Create a variable called `nextVal` and set it equal to `start`.
3. Create a while loop. It should run as long as `nextVal` is less than or equal
   to `end`: `while (nextVal <= end) { }`.
4. Inside the loop, `push` `nextVal` into the `range` array:
   `range.push(nextVal)`.
5. Also inside the loop, increment `nextVal` by 1: `nextVal = nextVal + 1`.
   (**IMPORTANT!** Failing to increment `nextVal` will create an infinite loop.)
6. After the loop, return the `range` array.

Before pushing the test button, try running the coe yourself. Can you
`console.log` a list that starts at `100` and ends at `107`?
