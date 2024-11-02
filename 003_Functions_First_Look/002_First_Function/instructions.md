# Write a First Function

A function is a block of code that gets its own name. To execute the code, you
call the function's name. Here's the function we defined in the previous challenge:

```javascript
function getFirstLetter(word) {
  return word[0];
}
```

JavaScript function definitions have a few parts:

- The `function` keyword. It tells the engine "here comes a function definition."
- The function's name (in our example, `getFirstLetter`).
- Parentheses `()`. These hold the function's parameters. If there are no
  parameters, the parentheses are empty.
- Parameters. These are variables that will hold input values.
- Curly braces `{}`. These hold the function's code.
- `return` keyword (within the curly braces). `return` determines what value is
  output when the function is called.

## Tests

Let's write a function, an incredibly simple one. Follow these directions. The
tests will pass if you've correctly defined the function.

- Type the keyword `function`
- Give the function a name: `giveMeFive` (it needs to match exactly)
- Add parentheses `()`. We won't put anything inside these parentheses because
  this function doesn't need any input.
- Add a pair of curly braces `{}`. Typically, the opening brace is on the same
  line as the function name and the closing brace is on its own line (see our
  example).
- Inside the curly braces, add a return statement: `return 5;`

That's it! You can try calling your function (and console logging the output)
like so:

```javascript
console.log(giveMeFive());
```

If you've done everything correctly, it should always log `5`.
