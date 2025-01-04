# Objects as Function Inputs

A few challenges ago, we saw that two objects, even if they have the same
key-value pairs, are not the same object. If you compare them with the `===`
operator, the result will be `false` because you're comparing the memory address
of each rather than the contents.

Similarly, when you pass an object as an argument to a function, you're passing
its memory address. And that means that if your function modifies the input
object, it will be modified for any other code that uses the same object.

Look at the starter code. I've created an object and a function that modifies
the object it receives. Run the code to see how the `secretIdentities` gets
modified.

## Tests

Sometimes you want your function to modify the object it receives. But often
modifying the inputs is a bad idea. Your job is to modify `lowercaseVals` so
that it returns a **copy** of the object with the keys converted to lowercase.
If you pass `secretIdentities` to your modified `lowercaseVals` function, it
should return an object with the secret identities converted to lowercase, but
the original object shouldn't be modified.
