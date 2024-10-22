# String Interpolation

Concatenation is cool and all, but it can get a little messy trying to insert
all the right spaces and punctuation. Often times, what we really need is to
**insert** values into the middle of a string. That's called **_string
interpolation_**. Run the starter code for an example.

How it works:

- Use backticks -- `\`` -- instead of quotation marks
- Use `${baseballTeam}` to insert value of `baseballTeam` into the string

Whatever is in the `${}` gets evaluated and inserted into the string. So you
could even do a little math in there:

```javascript
`Thirteen squared is ${13 ** 2}.`;
```

You try. Follow the directions in the code editor and try to pass the tests.
