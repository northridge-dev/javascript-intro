# A First Example

Before we try to define or create our own functions, let's see an example.

In the code editor, you'll find a function called `getFirstLetter`. It's very
simple: you give it a string, and it gives you back the first character in the
string.

Let's try using it. You can **call** (or **invoke**, **run**, **execute**) a
function like this:

```javascript
getFirstLetter("home run");
```

Of course, to see the result, you'll need to `console.log` it. (Fun fact:
`console.log` is a function too!) Add this code to the editor and run it:

```javascript
console.log(getFirstLetter("home run"));
```

Try calling the function with different strings. No matter what string you give
it, it should return the first character.

Instead of console logging the result, you can store it in a variable:

```javascript
let first = getFirstLetter("home run");
console.log(first);
```

## Tests

To pass the tests, create a variable called `firstLetter` and set it equal to
the result of calling `getFirstLetter` with the string `"javascript"`.
