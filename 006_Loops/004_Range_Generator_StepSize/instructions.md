# Add a Step Size to the Range Generator

Here's the range generator we wrote in the last challenge. Your job now is to
make it a little more flexible. Add a third argument called `stepSize` and
adjust the function's logic so that instead of always incrementing by 1, it
increments by the value of `stepSize`. For example:

```javascript
makeRange(2, 10, 2); // [2, 4, 6, 8, 10]
makeRange(4, 12, 3); // [4, 7, 10]
```
