# Comments

The JavaScript engine tries to execute every instruction you give it in the
order you set out. But it's often useful to leave a note for yourself or others
near the code it explains. So JavaScript gives us a way to write comments that
it will ignore.

```javascript
// This is a comment
// Any line that begins with a double forward slash is ignored
```

`//` can also be used to "comment out" code. For example, maybe you're writing a
more complex program, and something isn't working quite right. You can debug
your code by commenting out lines to see how the behavior changes.

```javascript
let scoreTotal = 78 + 92 + 88;
let numberOfScores = 3;
// The line below is real code, but because it is "commented out", it won't run
// let averageScore = scoreTotal / numberOfScores;
```

You can use `//` to add a comment to the end of a code line:

```javascript
let scoreTotal = 78 + 92 + 88; // Another way to comment
```

And finally, you can use `/*` and `*/` to create a block comment. Everything
between the opening `/*` and closing `*/` will be ignored. Most commonly,
comment blocks are used to add multi-line comments:

```javascript
/* This is a block comment */
let count = 22; /* Another way to block comment */

/* And here's a multi-line comment, which can span multiple lines
   without needing to add `//` to each line */
count = count + 1;
```

Test it out! Try running the code as-is and then run it again after
"uncommenting" the line with the `console.log`. Try adding a comment or two of
your own. When you're finished, click ✓ for the next challenge.
