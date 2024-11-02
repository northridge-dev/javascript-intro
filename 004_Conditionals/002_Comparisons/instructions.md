# Comparisons

In JavaScript, you can ask true-false questions about a pair of values. For
example:

- `4 < 5` --> `true`
- `3 <= 1` --> `false`
- `10 >= 10` --> `true`

Less-than, greater-than, less-than-or-equal, and greater-than-or-equal look a
lot like what you might write when solving math problems. You can also check if
two values are equal or not-equal, but the operators look a little different:

- `1 === 1` --> `true`
- `1 === 2` --> `false`
- `1 !== 1` --> `false` (1 **is not** not-equal to 1)
- `1 !== 2` --> `true` (1 **is** not-equal to 2)

You can compare the value of variables, too:

```javascript
let two = 2;
let onePlusOne = 1 + 1;
two === onePlusOne;
// true

two > onePlusOne;
// false
```

## Tests

Assign values to `value1`, `value2`, `value3`, and `value4` so that the
comparisons set `shouldBeTrue` to `true` and `shouldBeFalse` to `false`.
