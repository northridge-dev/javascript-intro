# Naming Values

Now you know that the REPL can remember the result of the last command. You
can ask for that value with a special name: `_`. You can even use that special
name in calculations and the REPL will substitute the value of the last command
wherever you used the special name.

But as soon as you run another command, the value of `_` changes.

- What if you want to hold on to a value for longer?
- What if you want to remember more than one value at a time?

We already learned that computers are good at computations. They're also
good at remembering things. But your computer stores information at cryptic,
impossible-to-remember addresses, something like `0x7fffbf7f5b60`. To make it
easier on us humans, we can also associate that address with an
easier-to-remember name. For example, try typing this example into the REPL.
Don't forget the `let` keyword at the beginning of the command.

```javascript
> let x = 5;
5
```

Okay, now type `x`, but before you hit enter, guess what you think will happen.

```javascript
x;
```

Did you guess right?

You just created a **variable**.

- You gave it a name, `x`.
- `let` is a keyword that tells the JavaScript engine that you'd like to create
  a new variable.
- The `=` symbol that follows the name is called the **assignment operator**.
  It tells the JavaScript engine to store the value that follows --
  `5` in our example -- at the place in memory that the variable points to.

When you again typed `x`, you asked the JavaScript engine to look in memory
and return to you the value associated with the name `x`. Neat.

Now you try. Create another variable. Give it any name you want and assign
to it any value you want (but don't forget the keyword `let`). Then try to
use the name to get back the value you assigned to it.

Did you get it? Great! Click ✓.
