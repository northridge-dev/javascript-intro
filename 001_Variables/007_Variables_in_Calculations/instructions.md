# More Variables

So far we've created a lot of variables and set an initial value. But you can
also use variables in calculations:

```
firstTestScore = 85
secondTestScore = 90
firstTestScore + secondTestScore
// 175
```

You can also use variables to store the result of a calculation:

```
sumOfTestScores = firstTestScore + secondTestScore;
sumOfTestScores;
// 175

averageTestScore = sumOfTestScores / 2;
averageTestScore;
// 87.5
```

You can even use a variable to update its own value:

```
sumOfTestScores = sumOfTestScores + 100
sumOfTestScores
// 275
```

That works because the JavaScript engine first **evaluates** the right side of
the assignment: it looks up the value of `sumOfTestScores`, adds `100` to it,
and then assigns the result of the calculation back to `sumOfTestScores`.

(But notice that `averageTestScore` is still `87.5`. The JavaScript engine stored
only the _result_ of the calculation, not some formula that would update the
value of `averageTestScore` whenever `sumOfTestScores` changes.)

Try to think of another case where you might create a variable and use its
current value to reassign or update its value. Test it out. Once you've got it,
click the ✓ button.
