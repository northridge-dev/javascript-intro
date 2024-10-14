# Constant Variables

You're getting good at creating and using variables.

The most important thing to remember about variables is: ** variables allow you to
name values you want to store in memory.**

As the word suggests, variables _vary_. They can change their values.
You've already changed the value of some variables:

```javascript
let score = 0;
score = 6;

let sumOfTestScores = 75 + 83;
sumOfTestScores = sumOfTestScores + 99;
```

When you first create a variable, you use the `let` keyword, but not when you
recall or update its value. (As we saw, if you try to use `let` again with the
same name, you'll get an error.)

**But not all variables can change their value.**

There's another way in JavaScript to make assignments -- to give a name to a
value stored in memory -- but to prevent that value from changing. This kind of
unchanging assignment is called a **constant**.

You create constants with the `const` keyword:

```javascript
const height = 12;
```

If you try to reassign your constant, you'll get an error, something like:
`Uncaught TypeError: Assignment to a constant variable`. A "constant variable"?
That's a little confusing. In practice, developers refer to both variables
(created with `let`) and constants (created with `const`) as `variables`.

Eventually we'll see that it's a little more complicated than I've made it
sound. (There are certain types of values that can be changed in certain ways.)
We'll also eventually see some reasons why we might want to use constants
instead of variables. For now, it's enough to know that constants exist (in case
you come across one). We'll typically use the `let` keyword to create variables
(the kind that can vary).

Got it? Good. Click the ✓ button to review what we've learned so far.
