# `else if` Statements

Take a look at the starter code. It includes a function called `guessNumber`
that accepts a guess and prints a message:

- `if` the guess is greater than 10, it prints "Too high!"
- `else if` the guess is less than 1, it prints "Too low!"
- `else if` the guess matches `secretNumber`, it prints "You got it!"
- `else`, it prints "Try again!"

Try running the code with different values for `guess` and `secretNumber`. What
happens?

The `if` and `else` statements should look familiar. But what are those `else if`
statements?

`else if` allows you to chain together a series of conditions. The code will
check each condition until it finds one that is `true` (or until it reaches the
`else` block). That's the code block that will be executed. All the remaining
`else if` and `else` blocks will be skipped.

## Tests

Define a function called `forecast`. It should take one input, `temperature`.
The function should:

- return the string `"hot"` if the temperature is greater than or equal to 90
- return the string `"warm"` if the temperature is greater than or equal to 70 (but less
  than 90)
- return the string `"cool"` if the temperature is greater than or equal to 40 (but less
  than 70)
- return the string `"cold"` if the temperature is less than 40
