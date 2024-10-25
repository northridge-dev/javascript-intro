# Searching Strings, Part 2

If I only want to know whether a string contains a substring, `includes` is
enough. But what if I want to know **where** within the string the substring
is found?

JavaScript strings have an `indexOf` method. It works like `includes`, but
instead of returning `true` when it finds the substring, it returns the
**index** of the first character in the substring.

Try it. Add this code to the editor and run it:

```javascript
let str = "Colonize Mars!";
let includes_n = str.includes("n");
let index_n = str.indexOf("n");
console.log("Includes n: ", includes_n);
console.log("Index of n: ", index_n);
console.log("Letter at index of n: ", str[index_n]);
```

You can look for any substring, not just single characters. But you'll get back
the index of the _first_ character in the substring. Add this code to see what I
mean:

```javascript
let index_Mars = str.indexOf("Mars");
console.log("Index of 'Mars': ", index_Mars);
console.log("Letter at index of 'Mars': ", str[index_Mars]);
```

Now that you understand how `indexOf` works, try passing the tests described in
the starter code comments.
