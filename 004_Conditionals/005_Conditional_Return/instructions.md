# Conditional Returns

Let's put together what we've learned about conditionals with what we previously
learned about functions.

All the functions we've written so far have just one `return` statement. But
sometimes it's useful to return a value **_conditionally_**. For example, the
starter code shows how we could turn our article-choosing conditional from
the previous challenge into a function with a conditional return.

Run the code. Now instead of `"eagle"`, pass a string that starts with a
consonant to make sure the correct `return` statement is executed.

## Unnecessary `else`?

Do we _really_ need the `else` statement? An experienced programmer would say
no. Think you could you rewrite the function so that it uses an `if`
statement but no `else`?

## Tests

Let's return to our password validator. To pass the tests, define a function
called `isValidPassword`. It should take one input (a string). If the input is 8
or more characters long, it the function should return `true`. If the input is
fewer than 8 characters long, it should return `false`.
