# Adding with a While Loop

Now that we know what a while loop is, let's use one to do something useful.
Remember that `strangeAddition` function we wrote to sum a list of numbers?
Let's rewrite it using a while loop. To pass the tests, do the following:

Create a function called `add`. It should take one argument called `nums`. In
the function body:

1. Create a variable called `sum` and set it to `0`.
2. Create a while loop. It should run as long as `nums` is not empty:
   `while (nums.length > 0) { }`.
3. Inside the while loop, `pop` the last element from `nums` and add it to
   `sum`: `sum = sum + nums.pop()`.
4. After the while loop, return `sum`.

Before pressing the test button, try it out. For example, do you get the right
result when you try this?

```javascript
console.log(add([1, 2, 3, 4, 5]));
```
