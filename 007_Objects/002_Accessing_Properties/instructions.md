# Accessing Properties

You can access the object's values by using they key. The editor shows how to
use both **dot notation** and **bracket notation** to access the values.

Either way, you get the value stored at the `name` key. Notice that when using
**dot notation** you don't need to use quotes, but when using **bracket
notation** you do.

Experiment a little:

- Change the `console.log` statements to access the `age` property instead.
- What happens if you try to access a property that doesn't exist?

## Tests

Create three variables:

1. `name` should store the value of `student.name` (use **dot notation**)
2. `age` should store the value of `student["age"]` (use **bracket notation**)
3. `missing` should store the result of trying to access a non-existent
   property, like `student["favoriteClass"]`
