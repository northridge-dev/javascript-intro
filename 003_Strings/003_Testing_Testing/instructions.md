# Testing, Testing

So far, you've been asked to decide for yourself when to move on. But it can be
helpful to get feedback and make sure the code you write works as it should.
From now on, most challenges will have **tests**: code I wrote to check the code
you wrote.

In challenges that have tests, the ✓ button will run the tests rather than send
you straight to the next challenge. Give it a try.

Whoops. The tests were expecting a variable that you haven't defined yet. That's
why you see the message "Expected an assignment named favoriteNumber" where you
usually see the output of your code.

Let's fix that, but let's intentionally make a mistake. Add this line:

```javascript
let favoriteNumber = true;
```

Click the ✓ button to run the tests again. One passed, the other failed. The
message gives you a hint. In this case, the test checked that `favoriteNumber`
names a numerical value. Now that you know that, update your code and run the
tests once more.

As long as you assigned a number to the variable `favoriteNumber`, both tests
should have passed. You'll see a new button show up: ». Click it to move on to
the next challenge.
