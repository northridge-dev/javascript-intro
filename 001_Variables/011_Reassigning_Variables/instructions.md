# Reassigning Variables

We need a declaration keyword when **creating** a variable. Not so when updating
or reassigning a variables value:

```javascript
let score = 0;
score = 6;
```

The first line declares the variable `score` and initializes it, setting its
value to `0`. The second line _updates_ or _reassigns_ the value of `score`.

To see variable reassignment in action, click the ▶ button.

What do you think would happen if you tried to **_re-declare_** `score`? Let's try.
Add the following code to the end of the script:

```javascript
let score = 100;
```

That error message shows that you can't re-declare a variable. You can only
reassign it. Remove the `let` and run the code again. This time, it should work.

Click the ✓ button to move on.
