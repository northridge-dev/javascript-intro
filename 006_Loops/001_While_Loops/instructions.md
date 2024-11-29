# While Loops

A **while loop** repeats a block of code **_while_** its condition is true.

Look at the starter code. Here's what happens when you run it:

1. The variable `countdown` is set to 10.
2. "Commencing countdown..." is logged.
3. The while loop checks if `countdown` is greater than 0.
4. If `countdown` is NOT greater than 0, the loop ends and the program jumps to
   step 6.
5. If `countdown` is greater than 0, the loop logs the value of `countdown`,
   decrements it by 1, and **jumps back** to step 3.
6. "Liftoff!" is logged.
7. The program ends.

**DANGER**: It's really easy to create an **infinite loop**: code that will run
_forever_. You might inadvertently write a condition that will always be true.
Or you could fail to update `countdown` or _increment_ it instead so that its
value would get farther and farther from 0.

You could also keep the condition and while loop body as-is but give `countdown`
an absurdly high value. Though technically not infinite, the loop would still
take a really, really long time to finish.

In either case, you're kind of stuck. The code will just keep running until you
close or refresh the page.

I know you're curious. Go ahead. Try it. Get it out of your system.

## Tests

No tests this time.
