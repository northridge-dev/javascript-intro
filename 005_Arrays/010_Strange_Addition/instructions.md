# CHALLENGE: Strange Addition

Let's try something a little weird. Suppose you're given a list of numbers to
add up. Instead of adding them all at once, you'll remove the last number from
the list, add it to the first number, and return the list. The first number
becomes a running sum. If you keep repeating the process, eventually you'll end
up with just one number, the sum of the original list.

Write a function -- `strangeAddition` -- that carries out this process. I've
supplied some code to handle cases where there's two or fewer items in the list.
Your job is to write the logic that will remove the last number from the list,
add it to the first number, and return the updated list.
