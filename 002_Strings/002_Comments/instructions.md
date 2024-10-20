# Comments

The JavaScript engine tries to execute every instruction you give it in the
order you set out. But it's often useful to leave a note for yourself or others
near the code it explains. So JavaScript gives us a way to write comments that
it will ignore.

```javascript
// This is a comment
// Any line that begins with a double forward slash is ignored
```

You can use `//` to add a comment to the end of a code line:

```javascript
let scoreTotal = 78 + 92 + 88; // Another way to comment
```

You can instead use `/*` and `*/` to create a block comment. Everything
between the opening `/*` and closing `*/` will be ignored. Most commonly,
comment blocks are used to add multi-line comments:

```javascript
/* This is a block comment */
let count = 22; /* Another way to block comment */

/* And here's a multi-line comment, which can span multiple lines
 * without needing to add `//` to each line */
count = count + 1;
```

Test it out! Try running the code as-is and then run it again after
"uncommenting" the line with the `console.log`. Then, to pass the tests,
follow the instructions in the code comments.

Click ✓ to test your code.
