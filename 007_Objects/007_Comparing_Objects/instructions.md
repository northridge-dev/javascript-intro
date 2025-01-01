# Comparing Objects

Look at `obj1` and `obj2`. They're the same, right? They have the same keys and
values. So why does `obj1 === obj2` return `false`?

What happens if you compare `obj1` to itself? Update the code and run it:

```javascript
console.log("objects match? ", obj1 === obj1);
```

Curious. Very curious.

When you compare two objects, the JavaScript engine compares _the address where
each is stored in memory_. While the content of `obj1` and `obj2` is identical,
they are two separate objects stored at two different memory addresses.

## Tests

So how can we decide if two objects have identical content? Let's write a
function that compares the content of two objects.

1. Create a function called `compareObjects`. It should take two arguments:
   `first` and `second`.
2. Inside the function body, let's first make sure they have the same number of
   keys. Use `Object.keys` to get the keys of each object and compare their
   lengths. If they don't match, return `false`.
3. Next, iterate over the keys of the first object. For each key, compare the
   value of the first object to the value of the second object. If they don't
   match, return `false`.
4. Finally, if we get past both the key length check and the value checks,
   return `true`. The content of the two objects is identical.

You can test your function by comparing `obj1` and `obj2`. It should return
`true`. Try modifying `obj2` so that it no longer matches `obj1` and run them
through `compareObjects` again. This time, it should return `false`.
