# `let` Variables

In the previous challenge, we created a variable called `greeting`. But
it didn't look quite like what we've been practicing in the REPL.

```javascript
let greeting = "Hello, World!";
```

Let's break it down:

- `let` is a keyword that tells the JavaScript engine that we're creating a
  variable.
- `greeting` is the variable's name. We may choose any _valid_ name we like.
- `=` is the assignment operator. It assigns the value to its right to the
  variable on its left. As we've seen, that could be a simple value or the result
  of a calculation.
- `"Hello, World!"` is the value we're assigning to the variable.

But why did we use `let`? Why not just write:

```
greeting = "Hello, World!"
```

Let's find out. Click the ▶ button...

Whoops. JavaScript requires us to **_declare_** a variable before we can use it
or assign a value to it. `let` is one way (but, we'll see, not the only way)
to declare a variable. The REPL let us be a little sloppy. But in a script,
we **must** declare our variables with a variable declaration keyword like
`let`.

Let's fix the code by adding the `let` keyword:

```javascript
let greeting = "Hello, World!";
```

Now click the ▶ button again. Better, right?

The takeaway: when _creating_ a variable, you **must** declare it `let` or
another variable declaration keyword.

Got it? Click the ✓ button to move on.
