# Looping Through Objects

Using a `for...in` loop, you can iterate through the properties of an object.
Run the starter code to see an example. You'd get the same result if you used a
`for...of` loop and used `Object.keys()` to get an array of the keys:

```javascript
for (let language of Object.keys(greeting)) {
  console.log(`Yes, I speak ${language}! ${greeting[language]}!`);
}
```

## Tests

Write a function called `keyValSwap`. It should take a single input, an object,
and return a new object where the keys are the values of the original object and
the values are the keys. For example, passing

```javascript
{ a: 'array', b: 'boolean', c: 'constant' };
```

to `keyValSwap` would return

```javascript
{ array: 'a', boolean: 'b', constant: 'c' };
```

Hints:

- Use a `for...in` loop to iterate through the input object.
- Create an empty object that you can add key-value pairs as you loop through
  the original object. This object is what you'll return after you finish
  building it up.
