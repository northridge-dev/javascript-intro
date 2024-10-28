# Searching Strings, Part 3

Let's look at a few special cases when using `indexOf`.

## Not Found

What if the substring isn't found? Let's find out. Add this code
to the editor and run it.

```javascript
let index_z = str.indexOf("z");
console.log("Index of 'z': ", index_z);
```

Try finding the index of another string not in `str`. Do you always
get the same result when the substring cannot be found?

## Duplicated Substrings

Add this code to the editor, but before you run it, guess what will happen.

```javascript
let ooString = "good books put even fools in good moods";
let index_of_oo = ooString.indexOf("oo");
console.log("Index of 'oo': ", index_of_oo);
```

No matter how many times you run the code, `index_of_oo` will always be the same,
even though `oo` appears _five_ times.

Add this code:

```javascript
let last_index_of_oo = ooString.lastIndexOf("oo");
console.log("Last index of 'oo': ", last_index_of_oo);
```

`lastIndexOf` works like `indexOf`, but instead of finding the **first** occurrence
it will find the index of the **last** occurrence.

What about all the `oo` occurrences in between the first and last? You don't _have_
to start searching from the beginning of the string. For example, if I want to find
the second instance, I can start searching from _after_ the first occurrence, like so:

```javascript
let index_of_second_oo = ooString.indexOf("oo", 3);
console.log("Index of second 'oo': ", index_of_second_oo);
```

The second argument (`3` in this example) tells `indexOf` what index to start searching
from. I can use the use the index of the second occurrence to get the third and the
third to get the fourth:

```javascript
let index_of_third_oo = ooString.indexOf("oo", index_of_second_oo + 1);
let index_of_fourth_oo = ooString.indexOf("oo", index_of_third_oo + 1);
console.log("Index of third 'oo': ", index_of_third_oo);
console.log("Index of fourth 'oo': ", index_of_fourth_oo);
```

## Tests

Now try to pass the tests described at the bottom of the starter code.
