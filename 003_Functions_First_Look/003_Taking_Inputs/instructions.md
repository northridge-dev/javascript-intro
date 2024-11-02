# Taking Inputs

In the last challenges, you wrote a function that took no inputs. But many
functions do take inputs. When defining a function, expected inputs are called
**parameters**. When calling a function, the inputs are called **arguments**.
But in practice, you'll hear people use those terms interchangeably.

A **parameter** is just a variable. Its value is determined by the inputs passed
to the function when it's called. To see an example, look at the starter code in
the editor.

Order matters. When you run the code:

- the `first` parameter will be assigned the first input
- the `second` parameter will be assigned the second input
- the `third` parameter will be assigned the third input

Try changing the inputs on line 8, where `displayInputs` is called. You should
see the logged values change accordingly.

## Tests

Let's write a function that takes a couple of inputs. Follow these directions.
The tests will pass if you've correctly defined the function.

- Type the keyword `function`
- Give the function a name: `subtract` (it needs to match exactly)
- Add parentheses `()`.
- _Inside_ the parentheses, add two **parameters**: `firstNumber` and
  `secondNumber`. Be sure to separate the two parameters with a comma.
- Add a pair of curly braces `{}`.
- Inside the curly braces, add a return statement: `return firstNumber -
secondNumber;`

That's it! You just wrote a function that takes in two numbers, subtracts the
second from the first, and returns the result.

You can try calling your function (and console logging the output)
like so:

```javascript
console.log(subtract(7, 3));
```

If you've done everything correctly, it should log the difference.
