# Lifespan of Variables

In a previous lesson, you created a variable called `x` and assigned it a value of
`5`. But now you're working in a new REPL session and, in this session, the name
`x` has not been registered. See for yourself by typing `x` and pressing enter.

Whoops! The JavaScript engine did _not_ like that, did it? It looked in its
table of variables, couldn't find an entry for `x`, panicked, and **threw an
error**. That's what the JavaScript engine does when it can't understand your
instructions or do what you've asked it to do. It spit out _a lot_ of text. It's
trying to tell you as best it can what went wrong, and as you get more
practice, more of that error message will make sense. For now, that first line
is all you need: `ReferenceError: x is not defined`.

Let's fix that. First, click the "Clear" button to clean up your terminal. Now
let's recreate the variable `x`:

```javascript
let x = 5;
```

Now if you type `x` and press enter, the JavaScript engine will again look in
its table of variables, but this time it'll find `x`, look at the appropriate
memory address, and return the value it finds there.

Click "Clear" and try typing `x` and pressing enter again. No error! Clearing
the terminal cleaned up the old output, but it didn't reset the JavaScript
engine's memory. Unlike the `_` variable, which is updated with each command,
`x` is a stable. Try executing a few more commands:

```javascript
let theMeaningOfLife = 42;
// 42
let someNegativeNumber = -11;
// -11
```

If you were to ask for the value of `_` now, you'd get back `-11`. If you'd
tried it one command earlier, you'd have gotten back `42`. But `x` is still `5`,
`theMeaningOfLife` is still `42`, and `someNegativeNumber` is still `-11`.
But to be sure, you better check for yourself . . .

The JavaScript engine will remember the value you assigned to `x` until you:

- restart the REPL session, for example by refreshing the page
- assign it a new value, for example by typing `x = 3;` (_Note that this time,
  there's no `let`. That's intentional!_)
- tell the JavaScript engine to forget it: `delete x;`

Try for yourself. Give `x` a new value and confirm that you can get the updated
value back. Then try deleting `x` and see what happens when you try to get its
value.

When you're finished experimenting, click ✓.
