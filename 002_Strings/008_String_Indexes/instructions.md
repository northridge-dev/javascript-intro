# String Indexes

A string is an **ordered** sequence of characters. Each character has a position
or **index**. Take for example the word `javascript`:

```
characters:  j  a  v  a  s  c  r  i  p  t
indexes:     0  1  2  3  4  5  6  7  8  9
```

`javascript` has 10 characters. (I could verify: `"javascript".length`.) So why
is the last index 9 and not 10? Because indexes are **zero-based**: _the first
index is ZERO_.

Want to know what's at the 4th index of `javascript`?

```javascript
"javascript"[4]; // s
```

Want to know the 7th letter -- that is, the letter at the _6th_ index -- in `parachute`?

```javascript
"parachute"[6]; // u
```

No tests this time. But before you dash off to the next lesson, run the code to see
string indexing in action.
