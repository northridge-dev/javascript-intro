# If-Else Statements

In the previous challenge, we used a **conditional statement** to print a
warning message if the user failed to provide input. But there's another
problem. We want to insert the user's input into a sentence, but we need to
provide the appropriate article:

- **if** the input begins with a vowel, we want to use "an"
- if the input begins with anything **else**, we want to use "a"

Look over the starter code to see how you might solve the problem. Set `noun` to
a string that begins with a vowel and run the code. Then change the value of
`noun` to a string that beings with a consonant and run the code again. Can you
tell which code executes in each case?

The `if` part of the conditional should look familiar. The code in the `if`
block will execute only if `needsAn` is `true`. This time, we've added an `else`
block. It doesn't have its own condition to check. Instead, the `else` block
will execute if the `if` block doesn't execute.

## Tests

Imagine we're writing an Mad Libs program and we've just implemented the code to
handle picking the correct article, "a" or "an". Let's test it out. To pass the
tests:

- create a variable called `input` and assign to it a string
- create another variable called `hasAn`
  - set it to `true` if `input` should be prefixed with "an"
  - set it to `false` if `input` should be prefixed with "a"
