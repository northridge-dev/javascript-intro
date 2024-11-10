# Negation

In JavaScript, the `!` operator is used to negate a value. We've already seen
an example of negation at work:

- `!==` is the **not equal** operator

We can also negate a Boolean value using the `!` operator. Negating a Boolean
just means taking its opposite:

- `!true` (**NOT** `true`) is `false`
- `!false` (**NOT** `false`) is `true`

Run the starter code to see Boolean negation in practice.

## Does NOT `include`

A few times now we've used the `include` method in a conditional. For example,
when testing if the first letter of a word is a vowel, we used this conditional:

```javascript
if ("aeiouAEIOU".includes(firstLetter)) { ... }
```

When we did, we were asking if `firstLetter` -- whatever its value -- could be
found in the string containing all the vowels.

What if instead we wanted to know when a character could **NOT** be found in a
string? We could use the `!` operator to negate the result of the `includes`,
like so:

```javascript
if (!"aeiouAEIOU".includes(firstLetter)) { ... }
```

## Tests

Let's write a different sort of validation function, a variable name validator.
We know that JavaScript variables cannot _start_ with a number. To pass the
tests, write a function called `isValidVariableName` that takes a string (the
variable name) and returns `true` if the variable name does **NOT** start with a
number and returns `false` otherwise.

HINT:

- Try to use the `!` operator to negate the result of the `includes` method in
  your solution.
