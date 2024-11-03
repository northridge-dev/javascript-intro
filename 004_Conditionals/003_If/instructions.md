# If Statements

Suppose you had a program the took user input. You plan to insert that input
into a sentence. But there's a problem: the user may have failed to add the
input. So we'd better check the input before we use it.

Look over the starter code to see how you might do it. Run the code. Now update
the string assigned to `input` so it is no longer an empty string and run the
code again. No warning message this time, right?

We just used an **if statement**. It's a **conditional statement** that:

- Begins with the `if` keyword
- Defines a condition or test (in parentheses). The condition should evaluate to
  `true` or `false`.
- Defines a block of code inside a pair of curly braces. That code will only run if
  the condition evaluates to `true`.

## Tests

Suppose you have a program that helps a user reset the password. You want it to
enforce a minimum length of 8 characters. To pass the tests:

- create a variable called `validPassword` and assign it a string that will
  pass the conditional check.
- create a variable called `invalidPassword` and assign it a string that will
  fail the conditional check.

_For now_, you didn't have to write the password checking code. But think about
how you could use an **if statement** to check the length of a string.
